# Diseño aprobado — JGM Arrancadores (fase de diseño)

> Referencia visual + de interacción para construir la app en Claude Code.
> **Fidelidad: ALTA (hi-fi).** Colores, tipografía, espaciados y comportamiento son finales para lo ya diseñado. Recreá esto lo más fiel posible.

---

## 1. Qué son estos archivos

Son **referencias de diseño hechas en HTML** (un prototipo que muestra cómo se ve y cómo se comporta la app), **no** código para copiar y pegar en producción.

La tarea es **recrear estas pantallas** en el stack real del proyecto — según `../PLAN-DE-TRABAJO.md`: **React + Vite + PWA offline**, datos en IndexedDB. Usá los componentes y patrones que definas ahí; tomá de acá los valores exactos (tokens, tamaños, copy) y el comportamiento.

Archivos en esta carpeta:
- **`App-referencia-standalone.html`** — abrí este en cualquier navegador (celu o compu). Es la app navegable: Inicio (variante B), Fallas funcionando, **Ficha de modelo completa** (WEG SSW-05.30, con las 7 secciones y diagrama de bornes tocable), Ajustes, y placeholders de Catálogo/Calculadora. **Funciona sin conexión.**
- **`JGM Arrancadores App.dc.html`** + **`support.js`** — el código fuente del prototipo, por si querés leer el markup y los estilos exactos. (Se ejecuta en un entorno de diseño; para verlo, usá el standalone.)
- **`assets/jgm-logo.png`** — logo de JGM (mismo que `../assets/jgm-logo.png`).
- **`capturas/`** — 01 Inicio B · 02 Fallas (resultado E72) · 03 Ficha (Datos) · 04 Ficha (Diagrama, borne seleccionado) · 05 Ajustes.

---

## 2. Decisiones de diseño bloqueadas

De las rondas de preguntas con el usuario. **No re-preguntar; ya están decididas:**

- **Formato:** app a **pantalla completa** (mobile-first), se usa como app real. Ancho de contenido máx. **520px** centrado (en celu ocupa todo).
- **Navegación:** barra inferior de **5 pestañas** — `Inicio · Catálogo · Fallas · Calculadora · Ajustes` (acciones al alcance del pulgar).
- **Inicio = Variante B ("Panel de trabajo")**: buscador de falla compacto arriba + grilla 2×2 de accesos (Catálogo, Calculadora, Buscar falla, Editor) + lista "Consultados recientemente".
- **Tema:** **solo modo claro** (el usuario descartó el modo oscuro). No implementar toggle de tema.
- **Densidad compacta** + **control de tamaño de letra A / A+ / A++** en Ajustes (agranda toda la app para leer al sol o con guantes).
- **Íconos:** estilo **line** (trazo simple, `stroke-width` 1.7–1.9). **Sin emojis** en la UI.
- **Movimiento:** **mínimo**. Transiciones sutiles (aparición ~0.18s). Nada llamativo.
- **Splash** corto al abrir: fondo azul de marca + logo en tarjeta blanca + "JGM Arrancadores / Guía de campo · sin conexión". ~1.1s y se va.
- **Buscador de fallas:** entrás el **código que muestra la pantalla (HMI) del arrancador** → la app te dice **qué significa, causas probables, solución paso a paso y qué parámetro revisar.** Tolerante a mayúsculas y a la letra inicial (`72` = `E72`).
- **Sin semáforo de color** por gravedad (decisión del usuario). El chip **«sin verificar»** sí usa ámbar.
- **Sello de verificación:** chip discreto **al lado del título** del modelo/serie/falla. Todo nace `sin verificar` hasta que el usuario lo aprueba (ver regla en `../CLAUDE.md`).
- **Catálogo:** solo marcas reales por ahora → **WEG + Lovato**. **Filtros que filtran de verdad** (tensión, corriente/HP, tipo de carga). Tarjetas en fila (marca + modelo; foto = placeholder).
- **Calculadora:** **dos modos** — (a) motor → parámetros sugeridos; (b) motor → qué arrancador/calibre te sirve. Entrada por **chips** (poco tecleo).
- **Fotos:** por ahora **placeholders** (el usuario sube las suyas después). Dejar huecos claros.
- **Diagrama de conexión interactivo:** patrón visual + tocar un borne abre panel con "qué es / de dónde viene / a dónde va". Se prototipa con el **SSW-05** de ejemplo. (Ver Fase 4 del plan.)

### ⚠ Andamiaje de prototipo — NO forma parte de la app
En el código fuente `.dc.html` vas a ver cosas que son **solo del prototipo** y hay que **ignorar / no portar**:
- La **barra oscura superior "Elegí el Inicio" con el switch A/B/C** — era para elegir variante. Ya se eligió **B**. (En el standalone ya está oculta.)
- La prop `showReviewBar` y las variantes A y C del Inicio.
- El flag `sessionStorage 'jgm_splash_seen'` (control del splash del prototipo).

---

## 3. Tokens de diseño (exactos)

Definidos como CSS custom properties. En producción, mapealos a tu sistema de tokens/tema.

### Tema claro (default)
| Token | Uso | HEX |
|---|---|---|
| `--bg` | Fondo de la app | `#F4F7FC` |
| `--surface` | Tarjetas / campos | `#FFFFFF` |
| `--surface-2` | Superficie secundaria / chips | `#EDF1FA` |
| `--surface-3` | Superficie terciaria | `#E3EAF6` |
| `--border` | Bordes suaves | `#D8DFEF` |
| `--border-2` | Bordes de campos / énfasis | `#BFC9E0` |
| `--ink` | Texto principal | `#2A3566` |
| `--ink-2` | Texto secundario | `#5C6690` |
| `--ink-3` | Texto terciario / íconos apagados | `#8E96B6` |
| `--brand` | Azul de marca (acción primaria) | `#344687` |
| `--brand-2` | Azul acción / estado activo | `#2767A5` |
| `--accent` | Acento / azure | `#327DB8` |
| `--on-brand` | Texto/ícono sobre azul | `#FFFFFF` |
| `--ok` / `--ok-bg` | Éxito | `#1E8A5B` / `#E5F3EC` |
| `--warn` / `--warn-bg` | Advertencia / «sin verificar» | `#93611A` / `#F8EFD9` |
| `--danger` / `--danger-bg` | Falla / peligro | `#C23B3B` / `#FBE7E7` |
| `--code` / `--code-bg` | Códigos y datos mono | `#274690` / `#EDF1FA` |
| `--shadow` | Sombra tarjeta | `0 1px 2px rgba(30,42,80,.07)` |
| `--shadow-2` | Sombra elevada | `0 6px 20px rgba(30,42,80,.12)` |

> Evitar negros y blancos puros: todo deriva de la familia azul. **Solo modo claro** — no hay paleta oscura.

### Tipografía
- **IBM Plex Sans** (Google Fonts, pesos 400/500/600/700) — texto e interfaz.
- **IBM Plex Mono** (400/500/600) — **códigos y datos técnicos**: fallas (`E72`), parámetros (`P105`), bornes (`A1`, `R/S/T`), corrientes.
- Escala usada: título de pantalla **23–25px/600**; cuerpo **14.5–16px/400**; overline **11px/600** en MAYÚSCULAS con `letter-spacing:.09–.11em`; etiquetas de tab **10.5px/600**; input de código **18–21px/600 mono**.
- Cuerpo **nunca < 14px**; datos importantes ≥ 14px.

### Tamaño de letra ajustable (A / A+ / A++)
- Multiplicador: **1.0 / 1.14 / 1.28** (atributo `data-fs="md|lg|xl"` en la raíz).
- En el prototipo se aplicó con `zoom` sobre el área de contenido (atajo de prototipo). **En React**, implementar como escala real: p. ej. `font-size` raíz en `rem` + multiplicador, o un factor sobre la escala tipográfica. Debe agrandar texto y controles juntos, persistente.

### Radios, sombras, espaciado y táctil
- **Radios:** tarjetas 13–16px · botones 10–12px · chips 6–9px · chips-ícono 10–13px · tarjeta del splash 26px.
- **Espaciado:** múltiplos de 4. Padding de pantalla **16px** lateral, 18–20px arriba.
- **Objetivos táctiles:** botón primario **44–46px** de alto · campos de búsqueda **54–62px** · barra de pestañas ~**62px** (respetar `env(safe-area-inset-bottom)`).
- **Íconos:** SVG line 20–24px, `stroke-width` 1.7–1.9, `stroke-linecap/linejoin: round`.

---

## 4. Pantallas

### Shell (contenedor)
- Columna flex a `100dvh`, máx **520px** centrada, `overflow:hidden`.
- **Header** (sticky, arriba del scroll): gota de marca (SVG) + "JGM **Arrancadores**" + indicador "● Offline" (punto verde `--ok`).
- **Área de contenido** scrolleable en el medio.
- **Barra de pestañas** (nav) abajo, fija. Activa = `--brand-2`; inactiva = `--ink-3`.

### Inicio — Variante B ("Panel de trabajo") ✅
1. Overline "BUSCAR CÓDIGO DE FALLA".
2. **Campo de búsqueda** (alto 54px) con lupa + `input` mono (placeholder `ej. E72`) + botón **Buscar** (`--brand`). Enter también busca.
3. **Grilla 2×2** de accesos (tarjetas `--surface`, ícono en chip `--surface-2`, título 15.5px + subtítulo 12.5px):
   - Catálogo · "Por marca" → tab Catálogo
   - Calculadora · "Parámetros" → tab Calculadora
   - Buscar falla · "Por código" → tab Fallas
   - Editor · "Cargar modelo" → (Editor, pendiente)
4. Overline "CONSULTADOS RECIENTEMENTE" + filas de modelo (badge mono `WEG`/`LOV` + nombre + subtítulo + chevron). *En el prototipo son ejemplos; en producción alimentar de los últimos modelos abiertos (IndexedDB).*

### Fallas — buscador de código ✅ (funcionando en el prototipo)
- Overline "BUSCADOR DE FALLAS" + H1 "Código de falla" + campo de búsqueda (58px).
- **Normalización tolerante** del código:
  ```js
  norm(s){ return (s||'').toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/^E/,''); }
  ```
  > Nota: quitar la `E` inicial es específico de WEG (`Exx`). Para el índice global (otras marcas / Lovato con letras+dígitos), generalizar por marca — ver `../contexto/03-modelo-de-datos.md` → "Búsqueda de fallas (índice)".
- **Estados:** vacío (texto guía + chips de ejemplo `E72 E05 E63 E70`) · sin resultados (mensaje) · **resultado** (tarjeta).
- **Tarjeta de resultado** (ver capturas 02 y 04) — orden fijo:
  1. Código grande (mono, en chip `--code-bg`) + **título** de la falla.
  2. Chips: `WEG SSW-05 Plus` (marca+serie) + **«sin verificar»** (ámbar, con ícono ⚠).
  3. **QUÉ SIGNIFICA** — párrafo.
  4. **CAUSAS PROBABLES** — lista con viñetas.
  5. **SOLUCIÓN PASO A PASO** — lista **numerada** (badge cuadrado `--brand` con número mono).
  6. Dos cajas: **DÓNDE REVISAR** (parámetro mono, p. ej. `P102 · P105`) + **LED** (patrón).
  7. **Reset:** texto.
  8. **Fuente citada** al pie (manual + documento + "revisión pendiente").
- **Datos:** 7 fallas reales del SSW-05 cargadas de ejemplo (`E72, E05, E63, E66, E70, E67, E03`), extraídas de `../contexto/datos-extraidos/weg-ssw05.md`. En producción, construir el índice desde los datos de todas las series.

### Ajustes ✅
- **TAMAÑO DE LETRA:** segmentado A / A+ / A++ (primera sección).
- **RESPALDO:** "Exportar catálogo" e "Importar respaldo" (en el prototipo son botones sin acción; implementar Export/Import a archivo — ver `../contexto/03`).
- Pie "Acerca de": JGM Servicios · Arrancadores · v0.1 · funciona sin conexión.
- **Sin sección de tema** (modo claro único).

### Catálogo — PENDIENTE (placeholder en el prototipo)
Especificación para construir: lista de **tarjetas en fila** (WEG + Lovato) con marca + modelo + specs clave (corriente/HP, tensión, By-pass) + chip verificación + foto placeholder. **Filtros reales**: tensión (220/380/400 V), corriente/HP, tipo de carga. Tocar tarjeta → **Ficha del modelo**.
> En el prototipo la pestaña Catálogo ya tiene **una tarjeta de ejemplo (SSW-05.30)** que abre la Ficha, para poder recorrer el flujo Catálogo → Ficha.

### Calculadora — PENDIENTE (placeholder)
Dos modos con entrada por **chips**: (a) HP/kW + tensión + tipo de carga → sugiere corriente, fusible, contactor y parámetros base (rampa, pedestal, límite); (b) datos del motor → qué modelo/calibre de arrancador sirve. Mostrar siempre la **fuente** del preset (fabricante vs guía general).

### Ficha de modelo ✅ (diseñada y navegable con el WEG SSW-05.30)
Se llega desde el reciente "WEG SSW-05 Plus" del Inicio o desde la tarjeta del Catálogo. Datos **reales** del manual del SSW-05 (marcados "revisión pendiente").

**Encabezado (hero):**
- Fila de vuelta "‹ Catálogo / WEG".
- Eyebrow "WEG · Serie SSW-05 Plus" + chip **«sin verificar»** (ámbar) al lado.
- Título grande = nombre del modelo (`SSW-05.30`, 30px) + subtítulo "Arrancador suave (soft-starter)".
- Chip "Cód." con el código comercial (mono).
- **4 tarjetas de datos clave** (grilla 2×2): Corriente · Tensión · By-pass · Arranque.

**Barra de secciones** (chips deslizables, sticky; activo = `--brand`): `Datos · Parámetros · Diagrama · Presets · Protecciones · Puesta en marcha · Fallas`. Cada sección cierra con su **fuente citada** + "revisión pendiente".

1. **Datos** — tabla de potencia del motor (Tensión / HP / kW por rango) + tabla de instalación (fusible, contactor, Icc, cable, torque) + tamaño y peso.
2. **Parámetros** — tarjeta por parámetro (P101, P102, P104, P105): badge del código `P`, nombre + traducción del término del manual, descripción, y chips de **rango**, **valor por defecto** y **nombre del trim-pot físico** (el SSW-05 se ajusta con potenciómetros, no por menú).
3. **Diagrama** — aviso de seguridad ("trabajá desenergizado") + esquema del equipo (red → R/S/T → equipo → U/V/W → motor) con **bornes tocables**. Al tocar un borne se abre un panel con **rol, qué es y notas**. Bornes cargados: R/S/T, U/V/W, A1, A2, DI1, DI2, y relés 13 / 14-23 / 24. *Es el patrón visual + interacción; el diagrama vectorial exacto de cada modelo se define en la etapa de datos (Fase 4).* 
4. **Presets** — puntos de partida por tipo de carga (Bomba, Ventilador/cinta), cada uno con etiqueta de **origen del dato** ("del manual del equipo" vs "guía general").
5. **Protecciones** — lista (sobrecarga Ixt, falta de fase, secuencia de fase, rotor bloqueado, sobrecorriente) con ícono escudo + parámetro asociado.
6. **Puesta en marcha** — pasos numerados; los **críticos de seguridad van en ámbar** (ej. "energizar control A1/A2 antes que la potencia").
7. **Fallas** — chips de los códigos del modelo (E03…E72) que saltan al buscador con el resultado + botón "Abrir buscador de fallas".

> **Pregunta abierta para el usuario:** decidir si la navegación de secciones queda como **barra de chips** (actual) o **acordeón**. Hasta que se confirme, usar la barra de chips.

---

## 5. Interacciones y estado

- **Navegación:** una sola vista con estado `screen` (`inicio | catalogo | fallas | calc | ajustes`); la barra inferior cambia `screen`. En React, usar router o estado equivalente.
- **Estado del prototipo:** `screen` (`inicio | catalogo | ficha | fallas | calc | ajustes`), `fs` (`md|lg|xl`), `code` (texto), `result` (`objeto falla | null no encontrado | undefined sin buscar`), `fichaSec` (sección activa de la ficha), `borne` (borne seleccionado en el diagrama), `splash`.
- **Persistir en producción:** `fs` (localStorage o settings). Catálogo/ediciones en **IndexedDB** (ver plan).
- **Buscar:** botón o Enter → normaliza `code` → busca en el índice → set `result` y va a Fallas.
- **Chips de ejemplo:** setean el código y buscan.
- **Transiciones:** aparición sutil `translateY(6px)→0, opacity 0→1` en ~0.18s. Sin más.

---

## 6. Assets
- **`assets/jgm-logo.png`** (1080×1080, fondo blanco opaco). Usar para: ícono PWA, splash (dentro de tarjeta blanca redondeada). En el header se usa una **gota vectorial** (SVG) en `--brand-2`, no el raster (por el fondo blanco). Ícono/gota también en el thumbnail.
- Íconos: SVG line inline (lupa, grilla, sliders, triángulo alerta, casa, engranaje, chevron, escudo, descarga/subida). Podés reemplazarlos por tu set line (ej. Lucide) manteniendo el trazo simple.

---

## 7. Cómo abrir la referencia
1. Abrí **`App-referencia-standalone.html`** en el navegador del celu o la compu (doble clic o arrastrar a una pestaña). Funciona offline.
2. Probá el buscador de fallas: escribí `E72`, `E05`, `E63`, `E66`, `E70`, `E67` o `E03` (o `72`, `e-72`… es tolerante).
3. Abrí la **Ficha** (rueda "WEG SSW-05 Plus" en el Inicio, o pestaña Catálogo) y recordé las secciones; en **Diagrama**, tocá los bornes.
4. En Ajustes probá el tamaño de letra.

---

## 8. Recordatorios del proyecto (de `../CLAUDE.md`)
- **De a un paso por vez**, esperando "ok, siga".
- **Seguridad eléctrica:** nunca inventar bornes, parámetros ni fallas. Solo datos de `../contexto/datos-extraidos/`. Todo nace **sin verificar** y **cita su fuente**.
- **Regla de idioma:** término técnico del manual + su traducción (ver `../contexto/04-glosario-tecnico.md`).
