# CLAUDE.md — Contexto maestro del proyecto **JGM Arrancadores**

> Este archivo lo lee Claude Code automáticamente al abrir el proyecto. Es la fuente de verdad del proyecto. **Leelo entero antes de tocar una sola línea de código.**

---

## 0. Qué tenés que hacer apenas abrís el proyecto

> ⚡ **¿La obra ya está empezada?** Leé **`ESTADO-DEL-PROYECTO.md`**: tiene el avance real, las decisiones tomadas en obra y cuál es el próximo paso. Si ese archivo existe, continuá desde el paso que indica (no te presentes de cero ni arranques por el Paso 0.1 del punto 6).

1. Leé **este archivo** completo.
2. Leé **`PLAN-DE-TRABAJO.md`** completo (es el plan paso a paso que vas a ejecutar).
3. Leé los 4 documentos de `contexto/` (visión, diseño, datos, glosario).
4. Mirá qué hay en `contexto/datos-extraidos/` (son los datos de los manuales ya procesados).
5. Leé **`diseno-referencia/README-DISENO.md`** y abrí **`diseno-referencia/App-referencia-standalone.html`**: es el **diseño ya aprobado por el usuario** (look, tokens, navegación e interacciones). Tu trabajo de UI es **recrear eso** en React.
6. **NO empieces a construir todavía.** Presentate, decí en 3 líneas qué entendiste del proyecto, y arrancá por el **Paso 0.1** del plan, respetando SIEMPRE los puntos de control (ver regla de oro abajo).

---

## 1. Regla de oro: trabajo por pasos con confirmación

El usuario quiere avanzar **de a un paso chico por vez**. Al terminar CADA paso:

> 🛑 **PUNTO DE CONTROL** — Antes de pasar al siguiente paso, hacé estas 3 cosas y después **PARÁ**:
> 1. **Mostrá el resultado**: un screenshot / preview de lo que quedó (o el archivo, si no es visual).
> 2. **Resumí en pocas líneas** qué hiciste y qué cambió.
> 3. **Preguntá**: *"¿Reviso/ajusto algo o seguimos con el paso siguiente?"* y **esperá** a que el usuario escriba **"ok, siga"** (o equivalente).
>
> ❌ **Nunca** encadenes varios pasos sin confirmación. ❌ **Nunca** des por aprobado algo que el usuario no confirmó explícitamente.

El usuario trabaja **desde el celular**. Los resúmenes tienen que ser cortos y claros, y los previews tienen que verse bien en pantalla chica.

---

## 2. Regla de oro de SEGURIDAD (esto es instalación eléctrica real)

Esta app guía la instalación y puesta en marcha de arrancadores suaves reales, sobre motores reales. Un dato equivocado puede ser **peligroso**. Por eso:

- 🔒 **NUNCA inventes** designaciones de bornes, valores de parámetros, rangos, códigos de falla ni pasos de conexión. Usá **únicamente** los datos de `contexto/datos-extraidos/`, que salieron de los manuales oficiales.
- 🔒 Si un dato no está en los datos extraídos, **NO lo completes de memoria**. Dejalo marcado como `⚠ FALTA DATO — pedir al usuario` y avisale.
- 🔒 Toda ficha nace con estado **`verificado: false`** hasta que el usuario la aprueba explícitamente.
- 🔒 Cada dato técnico debe **citar su fuente** (manual + revisión) visible en la app.
- 🔒 La **calculadora** de parámetros SIEMPRE muestra el aviso: **"Valores sugeridos — verificar contra el manual del equipo y la carga real"**, y muestra **de qué parámetro** sale cada valor.
- 🔒 Incluí las **advertencias de seguridad** de cada manual (ej. en el SSW-05: energizar el control antes que la potencia; nunca resetear con el motor en régimen).

---

## 3. Resumen del proyecto (para tener siempre presente)

- **Nombre de la app:** **JGM Arrancadores** (empresa: JGM Servicios; proyecto 100% independiente de cualquier otro).
- **Qué es:** una **PWA instalable, offline-first, mobile-first**. Una **herramienta-guía** para la **programación, instalación y configuración de arrancadores suaves** (arrancadores electrónicos / *soft starters*).
- **Qué NO es:** NO es un registro de trabajos. **No** guarda clientes, instalaciones, notas, fotos ni genera informes PDF. Es una **guía técnica de consulta**.
- **Dónde se usa:** en celulares Android — **Poco X7 Pro** y **Samsung Galaxy A25 5G**. Diseño **vertical** (una mano, pulgar). Debe funcionar **sin señal**.
- **Cómo se trabaja:** el usuario usa Claude Code **desde el celular** (entorno en la nube + GitHub). No instala nada localmente.

### Funciones principales
1. **Catálogo de arrancadores** navegable (por marca; filtros por tensión 220/380/400 V, corriente/HP, tipo de carga). Cada modelo abre una **ficha completa** (ver `contexto/03-modelo-de-datos.md`).
2. **🔎 Buscador de código de falla** — **función estrella, va destacada en la pantalla principal.** Escribís el código (ej. `E72`, `A08`) → te dice qué es, causas y cómo resolverlo.
3. **🧮 Calculadora de parámetros** — ingresás datos del motor (HP / corriente / tensión) + tipo de carga → sugiere rampa, tensión/par inicial, límite de corriente y tiempos (con aviso de seguridad).
4. **Catálogo editable** — viene cargado, pero el usuario puede **agregar/editar** modelos (por formularios en la app **y** por archivos de datos).
5. **Respaldo** — Export/Import del catálogo a un archivo (para respaldar en Drive o pasar a otro celu). Ojo: es solo del catálogo, no hay datos de clientes.

---

## 4. Decisiones técnicas cerradas (no volver a preguntar)

| Tema | Decisión |
|---|---|
| Tipo de app | PWA instalable (sin tienda de apps) |
| Funcionamiento | **Offline-first**: todo el catálogo dentro del celu; si hay señal, sincroniza/respalda |
| Stack | **React + Vite + PWA** |
| Almacenamiento | Local en el dispositivo (IndexedDB para el catálogo/ediciones). Sin backend/servidor |
| Hosting | **GitHub Pages** (repo **público**), deploy automático |
| Control de versiones | **Git + GitHub** (necesario para Pages y para respaldo del código) |
| Entorno | 100% desde el celular → nube + GitHub. Paso 0 guiado para crear cuenta y repo |
| Idioma UI | **Español**, manteniendo los términos técnicos del manual con su **traducción entre paréntesis** — ej. *"By-pass (derivación)"*, *"Kick Start (impulso de arranque)"*, *"inside-delta (dentro del triángulo)"* |
| Tema visual | **Solo modo claro** (el usuario descartó el modo oscuro) |
| Diseño / UI | **Aprobado.** Inicio = *Variante B (Panel de trabajo)*, nav inferior de 5 pestañas, densidad compacta + letra A/A+/A++, íconos line, movimiento mínimo. Tokens y specs exactos en `diseno-referencia/README-DISENO.md` |
| Unidades de potencia | Mostrar **HP y kW juntos** |
| Bloqueo PIN | **No** (no hay datos sensibles) |
| Fuente de datos | Manuales oficiales que sube el usuario → Claude estructura → **usuario aprueba** |
| Orientación | Vertical; diagramas con zoom/paneo |
| Ritmo | **Sin apuro, calidad ante todo.** Modelo por modelo, impecable |

---

## 5. Arquitectura de datos clave: "perfil de serie + variantes"

**Hallazgo importante durante el análisis de manuales:** dentro de una misma **serie**, la programación suele ser **idéntica** entre modelos; lo único que cambia es corriente/potencia/tamaño. Ya está confirmado en 2 casos:
- **Lovato ADXL** — un solo manual cubre 11 calibres (30 A → 320 A). Mismos parámetros, fallas y diagramas.
- **WEG SSW-07 / SSW-08** — comparten manual de programación (mismos parámetros y fallas).

➡️ **Por eso el modelo de datos es:** un **`perfil de serie`** compartido (parámetros, fallas, diagramas, presets, puesta en marcha) + una tabla de **`variantes por modelo`** (corriente, potencias, fusibles, dimensiones, peso). Cada modelo **hereda** el perfil de su serie. Esto evita duplicar datos y errores. Ver detalle en `contexto/03-modelo-de-datos.md`.

---

## 6. Estado del material ya procesado (en `contexto/datos-extraidos/`)

| Marca / Modelo | Estado | Archivo |
|---|---|---|
| **Lovato ADXL** (variante ADXL0115600) | ✅ Completo (datasheet + manual de operación I456) | `lovato-adxl.md` |
| **WEG SSW-05 Plus** | ✅ Completo (manual de usuario 0899.5119) | `weg-ssw05.md` |
| **WEG SSW-07** | ✅ Completo (manual usuario 0899.5832 + programación) | `weg-ssw07.md` |
| **WEG SSW-07/08 programación** (perfil compartido) | ✅ Completo (manual 0899.5665) | `weg-ssw07-ssw08-programacion.md` |
| **WEG SSW-08** (ficha propia) | 🟡 Programación lista; **falta User's Guide de hardware** (gama/conexiones). El usuario lo va a conseguir | — |

**Modelo piloto (el "molde de oro"): WEG SSW-05.** Es el más simple (trim-pots) e ideal para validar rápido la estructura de la ficha.

> El usuario va a ir **sumando más marcas/modelos** (con sus manuales) a lo largo del proyecto. Cuando lo haga, procesá el manual, guardá la extracción en `contexto/datos-extraidos/` y recién después construí la ficha — siempre con la regla de seguridad del punto 2.

---

## 7. Convenciones de código

- **Idioma del código:** nombres de variables/funciones en inglés o español, consistente; **todo el texto visible al usuario en español** (con términos técnicos + traducción).
- **Estructura de carpetas** sugerida (ajustable en el Paso 1):
  ```
  src/
    components/      → componentes reutilizables (BorneInteractivo, FichaSeccion, etc.)
    features/        → catalogo/, buscador-fallas/, calculadora/, editor/, ajustes/
    data/            → catálogo semilla (JSON) + esquema
    lib/             → db (IndexedDB), pwa, helpers
    styles/          → tokens del sistema de diseño JGM
    assets/          → logo, íconos
  ```
- **Datos del catálogo:** viven como JSON semilla en `src/data/` y se cargan a IndexedDB en el primer arranque; las ediciones del usuario quedan en IndexedDB.
- **Accesibilidad de campo:** objetivos táctiles ≥ 48px, alto contraste, texto legible a plena luz. Nada de tipografías finas para datos importantes.
- **Sin dependencias pesadas innecesarias.** Preferí librerías chicas y estables.

---

## 8. Cómo mostrar los términos técnicos (idioma)

Regla fija de redacción de la UI: **término técnico tal cual del manual + traducción entre paréntesis la primera vez que aparece en una pantalla**. Ejemplos:
- By-pass (derivación)
- Kick Start (impulso de arranque)
- inside-delta (conexión dentro del triángulo)
- pedestal / initial voltage (tensión inicial)
- coast / rueda libre (parada por inercia)
- Stall (rotor bloqueado)
- ramp (rampa)

Ver el glosario completo en `contexto/04-glosario-tecnico.md`.

---

## 9. Qué hacer si algo no está claro

- Si te falta un dato técnico → **preguntá al usuario**, no lo inventes.
- Si una decisión de diseño/UX no está en estos documentos → proponé 1-2 opciones simples y dejá que el usuario elija (en un punto de control).
- Si algo se rompe → Git es tu red de seguridad; explicá el problema en criollo y proponé cómo volver atrás.
