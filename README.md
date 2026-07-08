# 📱 JGM Arrancadores

App **PWA offline** para celular: guía técnica de campo para la **programación, instalación y configuración de arrancadores suaves** (soft starters). Proyecto de **JGM Servicios**.

Este repositorio contiene el contexto completo del proyecto (reglas, plan de trabajo, datos extraídos de los manuales oficiales y el diseño de referencia aprobado) y, a medida que avance el plan, el código de la app (React + Vite + PWA, publicada en GitHub Pages).

---

## 🚦 Estado

- ✅ Paquete de proyecto cargado en el repo (contexto + datos + diseño).
- ⏳ En construcción, paso a paso según `PLAN-DE-TRABAJO.md` (con confirmación del usuario en cada punto de control).

---

## 📂 Qué hay en este repo

```
./
├── README.md                     ← este archivo
├── CLAUDE.md                     ← CONTEXTO MAESTRO (Claude Code lo lee siempre). Reglas, decisiones, seguridad.
├── PLAN-DE-TRABAJO.md            ← EL PLAN paso a paso (Fases 0 a 7, con puntos de control)
├── contexto/
│   ├── 01-vision-y-alcance.md    ← qué es y qué NO es la app
│   ├── 02-sistema-de-diseno.md   ← identidad JGM: colores, tipografía, temas, componentes
│   ├── 03-modelo-de-datos.md     ← estructura de datos "perfil de serie + variantes"
│   ├── 04-glosario-tecnico.md    ← términos técnicos + traducción (regla de idioma)
│   └── datos-extraidos/          ← DATOS REALES ya procesados de los manuales
│       ├── _INDICE.md
│       ├── weg-ssw05.md                     (✅ completo — modelo PILOTO)
│       ├── weg-ssw07.md                     (✅ completo)
│       ├── weg-ssw07-ssw08-programacion.md  (✅ perfil compartido SSW-07/08)
│       ├── lovato-adxl.md                   (✅ perfil de serie ADXL)
│       └── lovato-adxl0115600-datasheet.md  (✅ datasheet variante 115 A)
├── assets/
│   └── jgm-logo.png              ← logo de JGM Servicios (para ícono y branding)
└── diseno-referencia/            ← 🎨 DISEÑO APROBADO (mirar esto para la UI)
    ├── README-DISENO.md          ← especificación: tokens, pantallas, interacciones
    ├── App-referencia-standalone.html  ← la app navegable (abrir en el navegador, offline)
    ├── JGM Arrancadores App.dc.html + support.js  ← código fuente del prototipo
    ├── assets/                   ← logo para la referencia
    └── capturas/                 ← screenshots del diseño
```

---

## 🎨 Diseño aprobado

La dirección de diseño ya está **elegida y aprobada** por el usuario. Está en **`diseno-referencia/`**:

- Abrí **`App-referencia-standalone.html`** en cualquier navegador (celu o compu) para ver y tocar la app: Inicio (**Variante B**), buscador de fallas funcionando (probá `E72`), Ficha de modelo completa (SSW-05.30) y Ajustes con tamaño de letra. Funciona **offline**.
- Leé **`README-DISENO.md`** para los valores exactos: paleta (solo modo claro), tipografía, radios, espaciados, objetivos táctiles, y la especificación de cada pantalla.
- La tarea de UI es **recrear ese diseño** en React/Vite — no copiar el HTML del prototipo tal cual.

> Ojo: la barra oscura "Elegí el Inicio A/B/C" que aparece en el **código fuente** del prototipo es andamiaje de la fase de diseño; **no** va en la app (en el standalone ya está oculta).

---

## 🧭 Resumen ultra-corto del proyecto

- **App:** JGM Arrancadores — PWA instalable, **offline**, para celular (Poco X7 Pro y Galaxy A25 5G).
- **Para qué:** guía técnica para **conectar, configurar y arrancar** arrancadores suaves. Catálogo por marca/modelo con diagramas interactivos, parámetros, protecciones, fallas y puesta en marcha.
- **Estrella:** 🔎 buscador de código de falla + 🧮 calculadora de parámetros.
- **No es** un registro de trabajos (no guarda clientes/fotos/PDF).
- **Stack:** React + Vite + PWA. **Hosting:** GitHub Pages. **Datos:** locales (IndexedDB), catálogo editable + respaldo por Export/Import.

---

## 🛑 Las 2 reglas que Claude Code no puede olvidar

1. **De a un paso por vez.** Al terminar cada paso: mostrar resultado → resumir → **esperar "ok, siga"**. Nunca encadenar pasos.
2. **Seguridad eléctrica.** Nunca inventar bornes, parámetros ni códigos de falla. Usar solo los datos de `contexto/datos-extraidos/`. Todo nace **sin verificar** hasta que el usuario aprueba. Cada dato cita su fuente.

(El detalle completo está en `CLAUDE.md`.)

---

## 📋 Estado del material técnico

| Marca / Modelo | Estado |
|---|---|
| WEG SSW-05 Plus | ✅ Completo — **modelo piloto** |
| WEG SSW-07 | ✅ Completo |
| WEG SSW-07/08 (programación) | ✅ Completo (perfil compartido) |
| Lovato ADXL (var. 0115600) | ✅ Completo |
| WEG SSW-08 (ficha propia) | 🟡 Falta User's Guide de hardware (el usuario lo consigue) |
| Otras marcas (Siemens, ABB, Schneider…) | ⏳ A sumar cuando haya manuales |

> El usuario irá sumando manuales. Al llegar uno nuevo: procesarlo → guardar extracción en `contexto/datos-extraidos/` → construir la ficha con el molde → aprobar.
