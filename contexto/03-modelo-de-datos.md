# 03 — Modelo de datos

> Núcleo de la app. Diseñado a partir de un hallazgo real del análisis de manuales: **dentro de una serie, la programación es común; solo cambian corriente/potencia/tamaño**. Por eso separamos **perfil de serie** (compartido) de **variantes de modelo** (lo propio de cada calibre).

## Concepto: Marca → Serie (perfil) → Modelo (variante)

```
Marca (WEG, Lovato, …)
 └── Serie / Perfil compartido (SSW-05, SSW-07/08, ADXL, …)
      • programación, parámetros, fallas, diagramas, presets, protecciones,
        puesta en marcha, tipo de interfaz  ← se define UNA vez
      └── Modelo / Variante (SSW-05.30, ADXL0115600, …)
           • corriente nominal, potencias (HP/kW por tensión),
             fusibles, contactor, dimensiones, peso, código comercial
           • HEREDA todo el perfil de su serie
```

**Regla:** al agregar un modelo de una serie que ya existe, se carga **solo su variante**. No se duplican parámetros ni fallas.

## Esquema (JSON) — referencia

```jsonc
// MARCA
{
  "id": "weg",
  "nombre": "WEG",
  "logo": "assets/marcas/weg.svg"
}

// SERIE / PERFIL COMPARTIDO
{
  "id": "weg-ssw05",
  "marcaId": "weg",
  "nombre": "SSW-05 Plus",
  "tipoInterfaz": "trimpot",          // "menu" | "trimpot" | "ambos"
  "conexion": {
    "enLinea": true,
    "insideDelta": false,             // "no aplica" en SSW-05/07; true donde exista
    "bypassIntegrado": true
  },
  "fuenteDatos": {
    "manual": "WEG SSW-05 Plus User's Manual",
    "documento": "0899.5119 / 2.3X",
    "verificado": false               // pasa a true cuando el usuario aprueba
  },
  "interfaz": {                        // teclas, LEDs, cómo se navega (si aplica)
    "leds": [ "Ready", "Run", "Overload", "…"],
    "descripcion": "…"
  },
  "parametros": [
    {
      "codigo": "P101",
      "nombre": "Tensión inicial (pedestal)",
      "terminoTecnico": "pedestal / initial voltage",
      "traduccion": "tensión inicial",
      "rango": "30–80",
      "defecto": "30",
      "unidad": "%Un",
      "seccion": "arranque",          // arranque | parada | proteccion | comunicacion | motor | especial
      "descripcion": "Ajustar al valor donde el motor empieza a girar al dar la marcha.",
      "equivalenteTrimpot": "Pedestal Voltage"
    }
    // …
  ],
  "presets": [
    {
      "carga": "bomba",               // bomba | ventilador | compresor | cinta | molino | generico
      "valores": { "P104": "…", "…": "…" },
      "fuente": "fabricante",         // "fabricante" | "general"
      "nota": "Usar rampa de desaceleración para evitar golpe de ariete."
    }
  ],
  "protecciones": [
    { "nombre": "Sobrecarga (Ixt)", "clase": "10", "detalle": "…", "parametro": "P106" }
  ],
  "fallas": [
    {
      "codigo": "E72",
      "descripcion": "Sobrecorriente antes del By-pass (derivación)",
      "led": "Internal Fault ×4 parpadeos",
      "causas": [ "Rampa muy corta", "Motor con In mayor a la del SSW", "Eje trabado" ],
      "reset": [ "power-on", "botón RESET", "auto-reset", "DI2" ],
      "parametrosRelacionados": [ "P105" ]
    }
  ],
  "diagramas": [
    {
      "id": "control-2-hilos",
      "tipo": "vectorial",            // "vectorial" | "foto"
      "titulo": "Comando 2 hilos con contactor",
      "imagen": null,                  // ruta si tipo="foto"
      "bornes": [
        {
          "id": "A1",
          "nombre": "A1 — Alimentación de control",
          "grupo": "control",
          "que": "Entrada de alimentación de la electrónica.",
          "vieneDe": "Fase de la red vía fusible de control.",
          "vaA": "Interno (fuente del arrancador).",
          "notas": "90–250 Vca."
        }
        // … cada borne tocable
      ]
    }
  ],
  "puestaEnMarcha": [
    { "orden": 1, "texto": "Energizar el control (A1/A2) ANTES que la potencia.", "seguridad": true },
    { "orden": 2, "texto": "Ajustar tensión de pedestal, rampa y corriente del motor.", "seguridad": false }
  ],
  "advertencias": [
    "Nunca resetear con el motor en régimen (abre los relés de By-pass bajo carga).",
    "Al energizar por primera vez: control antes que potencia."
  ]
}

// MODELO / VARIANTE
{
  "id": "weg-ssw05-30",
  "serieId": "weg-ssw05",
  "codigoComercial": "SSW05...0030T2246PPZ",
  "corrienteNominal": { "valor": 30, "unidad": "A" },
  "potencias": [
    { "tension": 220, "hp": 10, "kw": 7.5 },
    { "tension": 380, "hp": 15, "kw": 11 },
    { "tension": 440, "hp": 20, "kw": 15 }
  ],
  "fusibles": { "tipo": "D", "valor": "50 A" },
  "contactor": "CWM32",
  "dimensiones": { "an": 59, "al": 130, "prof": 145, "unidad": "mm" },
  "peso": { "valor": 0.74, "unidad": "kg" },
  "cortocircuito": "5 kA",
  "notas": "Tamaño 1"
}
```

## Campos transversales (obligatorios)
- **`fuenteDatos.verificado`** — arranca en `false`; solo el usuario lo pasa a `true`.
- **`fuenteDatos.manual` + `documento`** — se muestran al pie de la ficha.
- **Términos técnicos** — cada parámetro/sección lleva el término del manual + su **traducción** (para la regla de idioma).

## Almacenamiento
- **Semilla:** JSON en `src/data/` (marcas, series, modelos ya cargados).
- **Runtime:** al primer arranque se cargan a **IndexedDB**. Las **ediciones** del usuario viven en IndexedDB.
- **Respaldo:** Export/Import serializa el catálogo completo (semilla + ediciones) a un archivo.
- Sin backend. Todo en el dispositivo.

## Búsqueda de fallas (índice)
- Construir un índice de fallas de **todas las series** para el buscador global.
- Búsqueda tolerante: sin importar mayúsculas, con o sin la letra inicial (ej. `72`, `E72`, `e-72`).
- Cada resultado indica **marca + serie** y enlaza a la ficha.

## Presets por carga (fuente obligatoria)
- Cada preset indica si viene del **manual del equipo** (`"fabricante"`) o de una **guía general de ingeniería** (`"general"`). La UI lo muestra siempre.
- Ej. Lovato ADXL trae AUTOSET oficial (bomba, bomba incendios, cinta, ventilador, mezclador, genérico) → `fuente: "fabricante"`.
