# ESTADO DEL PROYECTO — JGM Arrancadores

> **Para Claude (nueva sesión):** este archivo es el traspaso de contexto. Leelo junto con `CLAUDE.md` (reglas maestras) y tenés TODO lo necesario para continuar sin re-leer el resto, salvo que el paso lo requiera. Última actualización: **2026-07-08, fin del Paso 9**.

---

## 1. Qué es esto (en 3 líneas)

PWA **offline-first, mobile-first** (React + Vite) para JGM Servicios: guía de campo para **instalar, configurar y arrancar arrancadores suaves**. Catálogo por marca, buscador de códigos de falla (⭐ función estrella), calculadora de parámetros, catálogo editable y respaldo export/import. **No** es registro de trabajos (sin clientes/fotos/PDF).

- **Repo:** `Jota-Nexvo/JGM-arrancadores-` · **Branch de trabajo:** `claude/repo-analysis-work-plan-vt0jpo`
- **Deploy:** GitHub Pages vía `.github/workflows/deploy.yml` (push a `main`) — **EN PAUSA, ver §5**
- Usuario trabaja **desde el celular** (Poco X7 Pro / Galaxy A25 5G). Resúmenes cortos, capturas móviles.

## 2. Las 2 reglas de oro (NO negociables — detalle en CLAUDE.md)

1. **Un paso por vez.** Al terminar cada paso: mostrar captura → resumen corto → preguntar *"¿Reviso/ajusto algo o seguimos?"* → **esperar confirmación explícita**. Nunca encadenar pasos.
2. **Seguridad eléctrica.** NUNCA inventar bornes, parámetros, rangos ni códigos de falla. Solo usar `contexto/datos-extraidos/`. Todo nace `sin verificar` y cita su fuente (manual + documento). Si falta un dato: `⚠ FALTA DATO — pedir al usuario`.

Regla de idioma UI: término técnico del manual + traducción entre paréntesis — ej. "By-pass (derivación)". Español siempre. Sin emojis en la UI (íconos SVG line).

## 3. Estado de avance (pasos del plan de esta obra)

| Paso | Qué se hizo | Estado |
|---|---|---|
| 0 | ZIP extraído a la raíz del repo (contexto + diseño), ZIPs borrados, README nuevo | ✅ |
| 1 | React 19 + Vite 8, `base:'/JGM-arrancadores-/'`, estructura CLAUDE.md §7 | ✅ |
| 2 | PWA: vite-plugin-pwa, manifest ES vertical standalone, íconos desde logo, SW precache. Prueba offline real PASÓ | ✅ |
| 3 | Sistema de diseño: tokens exactos de `diseno-referencia/README-DISENO.md` en `src/styles/tokens.css`, IBM Plex auto-alojada (@fontsource latin), componentes base | ✅ |
| 4 | Workflow deploy a Pages listo y `main` actualizado — pero **publicación EN PAUSA** (ver §5) | ⏸️ |
| 5 | Shell: 5 pestañas (Inicio·Catálogo·Fallas·Calc.·Ajustes), splash ~1.1s, Ajustes funcional | ✅ |
| 6 | Inicio "Panel de trabajo": buscador falla protagonista (→ salta a Fallas con el código), grilla 2×2, Favoritos + Recientes (ejemplos) | ✅ |
| 7 | Catálogo: marcas WEG/Lovato, filtros REALES (tensión 220/380/400, corriente A, tipo de carga), datos serie de ejemplo | ✅ |
| 8 | Ficha SSW-05 mockup: hero + chips sticky (8 secciones incl. Notas), selector de calibre, notas del técnico (localStorage), diagrama LÓGICO potencia+comando con bornes tocables y RF opcional, tabla de variantes, puesta en marcha con pasos de seguridad en ámbar, chips de fallas → buscador | ✅ |
| 9 | Buscador de fallas FUNCIONAL: 21 fallas SSW-05 (`src/data/fallas-ssw05-ejemplo.js`), normalización tolerante (72=E72=e-72), estados vacío/sin resultado/resultado completo (significa, causas, solución numerada, dónde revisar, LED, reset, fuente). Calculadora con 2 modos: motor→parámetros (P101/P102/P104/P105 con origen de cada valor) y motor→arrancador (calibre SSW-05 + contactor/fusible Tabla 9 + series que cubren), aviso de seguridad siempre visible | ✅ |
| **10** | **SIGUIENTE:** Revisión integral del mockup = **aprobación del diseño** (recorrer todo con el usuario y aplicar ajustes) | ⬜ |
| 11-13 | Motor de datos: esquema serie+variantes con `tipoEquipo`, IndexedDB, editor, export/import | ⬜ |
| 14-17 | Ficha REAL WEG SSW-05 (molde de oro): datos, diagrama 2 vías (usuario elige), secciones, fallas | ⬜ |
| 18-20 | SSW-07 → ADXL → SSW-08 (⚠ falta User's Guide hardware SSW-08, lo consigue el usuario) | ⬜ |
| 21-23 | Buscador global tolerante, calculadora completa, pulido | ⬜ |
| 24-25 | Prueba offline/2 celus, ícono final, mini guía | ⬜ |

## 4. Decisiones tomadas EN ESTA OBRA (además de las de CLAUDE.md §4)

- **Tamaño de letra: 4 niveles A−/A/A+/A++** (×0.86/1/1.14/1.28) — el A− lo pidió el usuario. Implementado vía `data-fs` en `<html>` + rem, persistido en localStorage (`src/lib/tamanoLetra.js`).
- **Ficha de modelo: barra de CHIPS deslizables** (no acordeón) — confirmado por el usuario.
- **Inicio: Favoritos fijados + Recientes automáticos** (ambos).
- **Calculadora: construir los DOS modos juntos** — (a) motor→parámetros, (b) motor→qué arrancador/calibre.
- **Mejoras aprobadas:** selector de calibre (corriente/HP → resalta variante) · notas del técnico por modelo (entra al respaldo) · pantalla siempre encendida (wake lock: toggle en Ajustes + auto en diagrama/puesta en marcha). **Checklist tildable: DESCARTADA.**
- **Diagramas = esquema de cableado LÓGICO** (pedido explícito): dibujar como esquema eléctrico real — aguas arriba (seccionador/fusibles) → contactor de línea → arrancador → relé térmico → by-pass → motor + circuito de comando 2/3 hilos aparte. Bornes tocables (qué es / de dónde viene / a dónde va).
- **Relé de falta de fase (supervisor de fases)** en el esquema aguas arriba, por equipo. Regla: si el equipo YA trae protección de falta de fase integrada según manual (SSW-05, SSW-07, ADXL la traen), el diagrama lo indica y el relé externo se marca **«opcional según instalación»** (fuente = criterio del usuario, NO del manual).
- **Variadores de frecuencia (futuro):** UNA sola app combinada (no app aparte). Terminar arrancadores v1 primero. Al armar el esquema de datos (Paso 11) incluir campo **`tipoEquipo`** ('arrancador' | 'variador'). Posible renombre futuro de la app.
- **Más marcas/manuales:** el usuario subirá PDFs (sugerida carpeta `contexto/manuales-fuente/`). Flujo: procesar → extraer a `contexto/datos-extraidos/` → usuario aprueba extracción → construir ficha.

## 5. Publicación (Pages) — EN PAUSA a pedido del usuario

- El workflow `deploy.yml` funciona (build verde). Falló solo `actions/configure-pages` porque **GitHub Pages NO está habilitado** en el repo.
- Cuando el usuario pida publicar: (1) él habilita **Settings → Pages → Source: "GitHub Actions"** (`github.com/Jota-Nexvo/JGM-arrancadores-/settings/pages`); (2) llevar lo aprobado a `main` (`git push origin <branch>:main`); (3) relanzar el workflow; (4) URL esperada: `https://jota-nexvo.github.io/JGM-arrancadores-/` → guiarlo a "Agregar a pantalla de inicio" en ambos celus.
- **NO publicar sin pedido explícito del usuario.**

## 6. Próximo paso inmediato: PASO 8 — Ficha de modelo (mockup ⭐)

Con datos del SSW-05 (de `contexto/datos-extraidos/weg-ssw05.md`, marcados sin verificar): hero (eyebrow WEG · Serie + chip «sin verificar» + título grande + chip código comercial + 4 tarjetas clave: Corriente/Tensión/By-pass/Arranque) + **barra chips sticky**: `Datos · Parámetros · Diagrama · Presets · Protecciones · Puesta en marcha · Fallas` + **selector de calibre** + **notas del técnico** + fuente citada al pie de cada sección. Diagrama: primera versión del **esquema lógico de cableado** (con relé falta de fase según §4). Spec detallada de cada sección: `diseno-referencia/README-DISENO.md` §4 "Ficha de modelo". Se llega desde Catálogo (tocar fila) y desde Inicio.

## 7. Setup técnico (lo justo para retomar)

- **Stack:** React 19 · Vite 8 · vite-plugin-pwa 1.3 · @fontsource/ibm-plex-{sans,mono} (importar SOLO `latin-{peso}.css` en `main.jsx`). Sin router (estado `pantalla` en `App.jsx`), sin más dependencias.
- **Estructura:** `src/components/` (Encabezado, BarraPestanas, Splash, Boton, Tarjeta, Chip, Segmentado, CampoBusqueda, FilaModelo, Iconos.jsx) · `src/features/{inicio,catalogo,buscador-fallas,calculadora,editor,ajustes}/` · `src/data/catalogo-ejemplo.js` · `src/lib/tamanoLetra.js` · `src/styles/{tokens,global}.css`.
- **Comandos:** `npm install` → `npm run build` → `npm run preview -- --port 4173`. URL local: `http://localhost:4173/JGM-arrancadores-/`.
- **Capturas móviles (para los puntos de control):** playwright-core con `executablePath:'/opt/pw-browsers/chromium'`, viewport 412×915, deviceScaleFactor 2, isMobile — el Chromium CLI directo NO respeta el ancho (mín ~500px), usar siempre Playwright.
- **Convenciones:** componentes y variables en español, CSS por componente, todo en `rem` (por la escala A−/A++), táctil ≥44px, commits estilo `feat: … (Paso N)` + push al branch de trabajo en cada paso.

## 8. Fuentes de verdad en el repo (leer cuando el paso lo pida)

- `CLAUDE.md` — reglas maestras (leer SIEMPRE primero)
- `PLAN-DE-TRABAJO.md` — plan original por fases (la numeración de "pasos" de arriba es la versión acordada en obra)
- `contexto/03-modelo-de-datos.md` — esquema serie+variantes (base del Paso 11)
- `contexto/datos-extraidos/` — datos técnicos reales: `weg-ssw05.md` (piloto), `weg-ssw07.md`, `weg-ssw07-ssw08-programacion.md`, `lovato-adxl.md`, `lovato-adxl0115600-datasheet.md`, `_INDICE.md`
- `diseno-referencia/README-DISENO.md` — tokens y specs exactos de cada pantalla · `App-referencia-standalone.html` — prototipo navegable

## 9. Prompt sugerido para retomar en una sesión nueva

> Leé `CLAUDE.md` y `ESTADO-DEL-PROYECTO.md` del repo. Continuá desde donde dice "SIGUIENTE" (Paso 8: Ficha de modelo mockup). Respetá las 2 reglas de oro: un paso por vez esperando mi confirmación, y nunca inventar datos técnicos (solo `contexto/datos-extraidos/`). Trabajá en el branch `claude/repo-analysis-work-plan-vt0jpo` y NO publiques a Pages sin que yo lo pida.
