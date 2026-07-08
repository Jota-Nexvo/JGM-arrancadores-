# PLAN DE TRABAJO — App **JGM Arrancadores**

> **Para Claude Code:** este es el plan que vas a ejecutar, **de a un paso por vez**, respetando el **PUNTO DE CONTROL** al final de cada paso (mostrar resultado → resumir → esperar "ok, siga"). Ver la regla de oro y las reglas de seguridad en `CLAUDE.md`.
>
> **Para el usuario (JGM):** este documento es tu mapa. En cada paso vas a ver el resultado en el celular, y solo cuando vos digas **"ok, siga"** se pasa al siguiente. Podés pedir cambios en cualquier punto.

---

## 📌 Cómo funciona cada paso (leer una vez)

Cada paso tiene:
- **🎯 Objetivo** — qué se logra.
- **🔨 Qué hace Claude** — las tareas concretas.
- **✅ Cómo lo probás vos** — qué mirar/tocar en el celu para aprobarlo.
- **🛑 Punto de control** — Claude para y espera tu "ok, siga".

Leyenda de fases:
- **FASE 0** — Preparar el entorno (cuenta, repo, que arranque).
- **FASE 1** — Cimientos (proyecto + PWA + diseño + primer deploy).
- **FASE 2** — Mockup navegable (diseño aprobado antes de meter datos reales).
- **FASE 3** — Motor de datos (catálogo editable + respaldo).
- **FASE 4** — Ficha piloto REAL: WEG SSW-05 (el molde de oro).
- **FASE 5** — Replicar modelo por modelo (SSW-07, SSW-08, Lovato ADXL, y lo que sumes).
- **FASE 6** — Funciones estrella pulidas (buscador de fallas + calculadora).
- **FASE 7** — Cierre, prueba offline y en ambos teléfonos.

---

# FASE 0 — Preparar el entorno (desde el celular)

> Objetivo de la fase: que el proyecto exista en la nube conectado a GitHub, y que puedas ver previews en el celu. **No se programa la app todavía.**

## Paso 0.1 — Cuenta de GitHub
- 🎯 Tener una cuenta de GitHub lista.
- 🔨 Claude: guiá al usuario (con pasos numerados y simples) para **crear o iniciar sesión** en GitHub desde el navegador del celular. Explicá en criollo qué es GitHub (donde va a vivir el código y desde donde se publica la app).
- ✅ Vos: confirmás que entraste a tu cuenta de GitHub.
- 🛑 Punto de control.

## Paso 0.2 — Crear el repositorio
- 🎯 Tener el repo **`jgm-arrancadores`** (público) creado.
- 🔨 Claude: guiá para crear un repositorio nuevo llamado `jgm-arrancadores`, **público**, con un README inicial. Explicá cada campo.
- ✅ Vos: ves el repo creado en tu GitHub.
- 🛑 Punto de control.

## Paso 0.3 — Conectar Claude Code al repo y subir el contexto
- 🎯 Que Claude Code trabaje sobre ese repo y que estos documentos de contexto estén dentro.
- 🔨 Claude: asegurate de estar trabajando en el repo `jgm-arrancadores`. Colocá en el repo esta carpeta de contexto (`CLAUDE.md`, `PLAN-DE-TRABAJO.md`, `contexto/`, `assets/jgm-logo.png`) para tenerla siempre disponible. Hacé el primer commit ("chore: contexto del proyecto").
- ✅ Vos: confirmás que en el repo aparecen estos archivos.
- 🛑 Punto de control.

## Paso 0.4 — Verificar el entorno
- 🎯 Confirmar que el entorno de la nube puede correr Node/Vite y mostrar previews.
- 🔨 Claude: verificá versión de Node disponible; explicá al usuario, en 2 líneas, cómo va a ver los previews desde el celular durante el proyecto.
- ✅ Vos: entendés cómo vas a ir viendo la app.
- 🛑 Punto de control.

---

# FASE 1 — Cimientos del proyecto

## Paso 1.1 — Crear el proyecto React + Vite
- 🎯 Esqueleto de app funcionando.
- 🔨 Claude: creá el proyecto con **Vite + React**. Estructura de carpetas según `CLAUDE.md` §7. Dejá una pantalla "Hola JGM Arrancadores" mínima para verificar que levanta. Configurá el `base` de Vite para que funcione en GitHub Pages (subruta del repo).
- ✅ Vos: ves la pantalla inicial en el preview.
- 🛑 Punto de control.

## Paso 1.2 — Convertir en PWA instalable + offline
- 🎯 Que se pueda **instalar** en el celu y que abra **sin internet**.
- 🔨 Claude: agregá el soporte PWA (manifest con nombre **"JGM Arrancadores"**, ícono provisional, colores del tema, `display: standalone`, orientación vertical) y el service worker para cachear la app y funcionar offline. Configurá el ícono a partir del logo (`assets/jgm-logo.png`) — versión provisional, se pule después.
- ✅ Vos: (tras el deploy del Paso 1.4) vas a poder "Agregar a pantalla de inicio".
- 🛑 Punto de control.

## Paso 1.3 — Sistema de diseño JGM
- 🎯 Identidad visual propia de JGM aplicada.
- 🔨 Claude: implementá los **tokens de diseño** de `contexto/02-sistema-de-diseno.md` (colores del logo, tipografía, tamaños, espaciados, **solo modo claro**). Creá 2-3 componentes base (botón, tarjeta, encabezado) y una pantalla de muestra que los muestre. Tomá los valores exactos de `diseno-referencia/README-DISENO.md`.
- ✅ Vos: ves los colores de JGM, se ve bien en vertical.
- 🛑 Punto de control.

## Paso 1.4 — Primer deploy a GitHub Pages + instalar en el celu
- 🎯 La app publicada y **ya instalable** en tus dos teléfonos.
- 🔨 Claude: configurá el deploy automático a **GitHub Pages** (GitHub Actions al hacer push a `main`). Publicá. Entregá al usuario el **link HTTPS** y guialo para instalarla en el **Poco X7 Pro** y en el **Galaxy A25 5G** ("Agregar a pantalla de inicio").
- ✅ Vos: abrís el link, la instalás en ambos celus, y la abrís desde el ícono.
- 🛑 Punto de control. **(Hito: ya tenés la cáscara instalada en la mano.)**

---

# FASE 2 — Mockup navegable (sin datos reales)

> Objetivo de la fase: **aprobar el diseño y la navegación** con datos de ejemplo (*placeholder*), ANTES de cargar información real. Así, cuando entren los datos de verdad, entran en un molde ya aprobado y no hay retrabajo.

## Paso 2.1 — Mapa de navegación
- 🎯 Definir las pantallas y cómo se navega entre ellas.
- 🔨 Claude: armá la navegación principal (pensada para el pulgar) con acceso a: **Inicio**, **Catálogo**, **Buscador de fallas**, **Calculadora**, **Ajustes**. Mostrá un diagrama simple o pantallas vacías enlazadas.
- ✅ Vos: navegás entre secciones vacías, se siente cómodo con una mano.
- 🛑 Punto de control.

## Paso 2.2 — Inicio con el **buscador de fallas destacado** ⭐
- 🎯 La pantalla principal, con la función estrella al frente.
- 🔨 Claude: diseñá el Inicio con un **buscador de código de falla grande y protagonista** ("Ingresá el código de falla…"), accesos rápidos a Catálogo y Calculadora, y el logo/identidad JGM. Datos de ejemplo.
- ✅ Vos: se ve claro que lo primero es buscar una falla; entra bien en pantalla.
- 🛑 Punto de control.

## Paso 2.3 — Catálogo (explorar por marca + filtros)
- 🎯 Mockup de cómo se explora el catálogo.
- 🔨 Claude: pantalla de catálogo con **exploración por marca** y **filtros** (tensión 220/380/400 V, corriente/HP, tipo de carga). Tarjetas de modelo de ejemplo. Solo se muestran marcas con contenido.
- ✅ Vos: probás filtrar y explorar; se entiende y es rápido.
- 🛑 Punto de control.

## Paso 2.4 — Ficha de modelo (todas las secciones) ⭐
- 🎯 El mockup más importante: la estructura de la ficha que se va a repetir en todos los modelos.
- 🔨 Claude: ficha de modelo (acordeón/pestañas, cómoda en móvil) con TODAS las secciones, con datos de ejemplo:
  - Encabezado (marca, modelo, foto/placeholder, chips: rango corriente/HP, tensión, By-pass sí/no)
  - **Diagrama interactivo** (placeholder por ahora — la versión real se decide en la Fase 4)
  - **Parámetros** (curva de arranque, parada, tensión, rampa, límite de corriente…)
  - **Presets por carga** (bomba/ventilador/compresor/cinta/molino) con etiqueta de **fuente** (fabricante / guía general)
  - **Protecciones**
  - **Conexión en línea vs inside-delta (dentro del triángulo)** — con estado "aplica / no aplica"
  - **By-pass (derivación) y comando (2 y 3 hilos)**
  - **Códigos de falla** (lista, enlazada al buscador)
  - **Checklist de puesta en marcha**
  - Pie con **fuente citada** (manual + revisión) y sello de **verificado/sin verificar**
- ✅ Vos: recorrés la ficha completa; confirmás que el orden y las secciones son las que querés.
- 🛑 Punto de control. **(Este es el mockup clave — revisalo con calma.)**

## Paso 2.5 — Calculadora (mockup)
- 🎯 Mockup de la calculadora de parámetros.
- 🔨 Claude: formulario (motor: HP/kW, corriente, tensión + tipo de carga) → panel de resultados de ejemplo con el **aviso de seguridad** bien visible y el origen de cada valor.
- ✅ Vos: ves cómo se cargaría y qué devolvería.
- 🛑 Punto de control.

## Paso 2.6 — Buscador de fallas (mockup)
- 🎯 Mockup del flujo de búsqueda de falla.
- 🔨 Claude: pantalla de resultado de una falla de ejemplo (código → descripción, causas, solución, LED/parpadeo si aplica, parámetros relacionados). Preparado para buscar por código en todas las marcas.
- ✅ Vos: ves cómo se muestra una falla.
- 🛑 Punto de control.

## Paso 2.7 — Revisión integral del mockup → **APROBACIÓN DEL DISEÑO** ⭐
- 🎯 Cerrar el diseño antes de datos reales.
- 🔨 Claude: recorré con el usuario todo el mockup (modo claro), en formato vertical. Anotá y aplicá los ajustes que pida.
- ✅ Vos: das el **OK final al diseño**.
- 🛑 Punto de control. **(Hito: diseño aprobado. A partir de acá, datos reales.)**

---

# FASE 3 — Motor de datos (catálogo editable + respaldo)

## Paso 3.1 — Esquema de datos "perfil de serie + variantes"
- 🎯 Definir la estructura de datos según `contexto/03-modelo-de-datos.md`.
- 🔨 Claude: implementá el esquema (marca → serie/perfil → variantes de modelo) y el almacenamiento local (IndexedDB), con carga de un JSON semilla al primer arranque. Documentá el esquema con un ejemplo mínimo.
- ✅ Vos: Claude te explica en criollo cómo quedan organizados los datos.
- 🛑 Punto de control.

## Paso 3.2 — Editor en la app (formularios)
- 🎯 Poder **agregar/editar** modelos desde la app, sin tocar código.
- 🔨 Claude: pantallas de edición (crear/editar serie y modelo, con todos los campos de la ficha). Validaciones básicas. Marca de **verificado/sin verificar** y campo de **fuente**.
- ✅ Vos: creás un modelo de prueba y lo editás desde el celu.
- 🛑 Punto de control.

## Paso 3.3 — Export / Import de respaldo
- 🎯 Respaldar el catálogo a un archivo y poder restaurarlo.
- 🔨 Claude: botón para **exportar** el catálogo (y sus ediciones) a un archivo, y para **importarlo**. Pensado para guardar en Drive o pasar a otro celu.
- ✅ Vos: exportás, ves el archivo; importás y confirmás que vuelve todo.
- 🛑 Punto de control.

---

# FASE 4 — Ficha piloto REAL: **WEG SSW-05** (el molde de oro)

> Objetivo: dejar **UNA ficha impecable y completa** con datos reales, que sirva de molde para todas las demás. Fuente: `contexto/datos-extraidos/weg-ssw05.md`. **Regla de seguridad activa (ver CLAUDE.md §2).**

## Paso 4.1 — Cargar datos del SSW-05
- 🎯 El SSW-05 con todos sus datos reales en el catálogo.
- 🔨 Claude: cargá la marca WEG y la serie/variantes del SSW-05 (gama 3–85 A, potencias HP+kW por tensión, fusibles/contactores, dimensiones) desde los datos extraídos. Estado inicial: **sin verificar**.
- ✅ Vos: ves el SSW-05 en el catálogo con sus datos.
- 🛑 Punto de control.

## Paso 4.2 — Diagrama interactivo: **probar las DOS vías** y comparar ⭐
- 🎯 Decidir con qué enfoque de diagrama seguimos (lo pediste explícitamente).
- 🔨 Claude: construí el diagrama de conexión del SSW-05 en **las dos variantes**, para el mismo equipo:
  - **(A) Vectorial interactivo:** esquema redibujado limpio; cada borne (A1, A2, DI1, DI2, 13, 14/23, 24, R/S/T, U/V/W) es **tocable** → panel con **qué es, de dónde viene, a dónde va**. Lista de bornes sincronizada con el dibujo.
  - **(B) Foto del manual + zonas táctiles:** imagen del esquema del manual con puntos tocables encima que abren el mismo panel.
  - Alcance del cableado (según lo definido): bornes del arrancador, aguas arriba (interruptor/fusibles, contactor de línea), relé térmico, contactor de By-pass, motor (U/V/W, estrella/triángulo), circuito de control (marcha/paro 2 y 3 hilos, paro de emergencia) y relés de salida (fin de arranque, falla).
- ✅ Vos: probás las dos, con zoom/paneo, y **elegís** la que quede como estándar (podés elegir una para todo, o "vectorial salvo esquemas muy complejos").
- 🛑 Punto de control. **(Decisión: enfoque de diagrama definitivo.)**

## Paso 4.3 — Completar todas las secciones del SSW-05
- 🎯 Ficha SSW-05 al 100% con datos reales.
- 🔨 Claude: completá con los datos extraídos: **Parámetros** (trim-pots + parámetros P, curva de arranque/parada, P106 protecciones), **Presets por carga** (con fuente), **Protecciones** (clase térmica 10, etc.), **Conexión** (en línea; inside-delta = **no aplica**), **By-pass y comando 2/3 hilos**, **Checklist de puesta en marcha** (incluí las **advertencias de seguridad**: energizar control antes que potencia; no resetear en régimen). Pie con fuente (manual 0899.5119) y sello.
- ✅ Vos: recorrés cada sección y verificás contra tu experiencia/manual.
- 🛑 Punto de control.

## Paso 4.4 — Fallas del SSW-05 en el buscador
- 🎯 Que el buscador encuentre las fallas reales del SSW-05.
- 🔨 Claude: cargá los códigos (E03, E05, E06, E10, E2x, E31, E63–E67, E70–E73, E75) con descripción, **LED/patrón de parpadeo**, causas y reset. Probá buscar un par de códigos.
- ✅ Vos: buscás "E72" y ves la explicación correcta.
- 🛑 Punto de control.

## Paso 4.5 — Revisión y **APROBACIÓN DEL MOLDE** ⭐
- 🎯 Dejar el SSW-05 como ficha de referencia.
- 🔨 Claude: repaso final de la ficha completa; aplicá ajustes; marcá la ficha como **verificada** cuando el usuario lo confirme.
- ✅ Vos: aprobás el SSW-05 como **molde de oro**.
- 🛑 Punto de control. **(Hito: molde aprobado. Las demás fichas copian esta estructura.)**

---

# FASE 5 — Replicar modelo por modelo

> Cada modelo repite el mismo sub-flujo del piloto: **cargar datos → diagrama → secciones → fallas → aprobar**. Se hace **de a un modelo por vez**, sin apuro. Fuente de cada uno en `contexto/datos-extraidos/`.

## Paso 5.1 — WEG SSW-07
- 🔨 Claude: cargá el SSW-07 (gama 17–412 A) usando su ficha + el **perfil de programación compartido SSW-07/08** (parámetros P000–P641, fallas E03–E77). Diagrama con el enfoque elegido en 4.2. Todas las secciones. Fallas al buscador.
- ✅ Vos: revisás y aprobás.
- 🛑 Punto de control (uno por sub-parte si preferís: datos / diagrama / fallas).

## Paso 5.2 — WEG SSW-08 (ficha propia)
- ⚠️ **Requiere insumo tuyo:** el **User's Guide de hardware del SSW-08** (gama de corrientes, conexiones, datos técnicos). La **programación** ya la tenemos (comparte manual con el SSW-07).
- 🔨 Claude: **antes de empezar**, pediendo al usuario el User's Guide del SSW-08. Cuando lo suba: procesalo, guardá la extracción en `contexto/datos-extraidos/weg-ssw08.md`, y construí la ficha (heredando la programación compartida).
- ✅ Vos: subís el manual, revisás y aprobás.
- 🛑 Punto de control.

## Paso 5.3 — Lovato ADXL (variante ADXL0115600)
- 🔨 Claude: cargá el **perfil de serie ADXL** (parámetros P01–P14, AUTOSET, fallas A01–A25 + UA, diagramas 2/3 hilos + PTC, terminales de control) y la **variante 0115600** (115 A, 37/55/75 kW, hasta 100 HP). Nota: este equipo tiene **menú/display** (distinto a los WEG por trim-pot) — la ficha debe adaptarse. Presets por carga = **AUTOSET del fabricante** (bomba, bomba incendios, cinta, ventilador, mezclador, genérico).
- ✅ Vos: revisás y aprobás.
- 🛑 Punto de control.

## Paso 5.4 — Nuevos modelos que vayas sumando
- 🔨 Cada vez que el usuario suba un manual nuevo: procesar → extraer a `contexto/datos-extraidos/` → construir ficha con el molde → aprobar. Si es una variante de una serie ya cargada, **solo** agregar la variante (hereda el perfil).
- 🛑 Punto de control por modelo.

---

# FASE 6 — Funciones estrella pulidas

## Paso 6.1 — Buscador de fallas global ⭐
- 🎯 Que desde el Inicio se busque cualquier código de **todas las marcas** cargadas.
- 🔨 Claude: buscador tolerante (mayúsculas/minúsculas, con o sin la letra, ej. "72" o "E72" o "A08"), que muestre a qué marca/serie pertenece cada resultado, y enlace a la ficha. Manejo de "no encontrado" con sugerencias.
- ✅ Vos: probás varios códigos de distintas marcas.
- 🛑 Punto de control.

## Paso 6.2 — Calculadora completa
- 🎯 Calculadora de parámetros funcional y segura.
- 🔨 Claude: ingresás motor (HP/kW, corriente nominal, tensión, conexión) + tipo de carga → sugerencias de rampa, tensión/par inicial, límite de corriente y tiempos. **Aviso de seguridad visible** + **origen de cada valor** (de qué parámetro sale, y si es "según fabricante" o "guía general"). Si hay un modelo seleccionado, ajusta al rango de ese equipo.
- ✅ Vos: cargás un motor real y ves sugerencias coherentes, con los avisos.
- 🛑 Punto de control.

## Paso 6.3 — Navegación y filtros finales
- 🔨 Claude: pulí filtros (tensión, corriente/HP, tipo de carga), estados vacíos, rendimiento, y consistencia visual en todas las pantallas.
- ✅ Vos: la app se siente redonda y rápida.
- 🛑 Punto de control.

---

# FASE 7 — Cierre

## Paso 7.1 — Prueba offline de verdad
- 🔨 Claude: guiá una prueba en **modo avión**: cerrar y abrir la app instalada, navegar catálogo, abrir fichas, buscar fallas, usar la calculadora — todo **sin señal**.
- ✅ Vos: confirmás que todo anda sin internet.
- 🛑 Punto de control.

## Paso 7.2 — Prueba en ambos teléfonos
- 🔨 Claude: checklist de verificación en **Poco X7 Pro** y **Galaxy A25 5G**: instalación, íconos, tamaños táctiles, legibilidad a plena luz, zoom de diagramas.
- ✅ Vos: probás en los dos y anotás cualquier detalle.
- 🛑 Punto de control.

## Paso 7.3 — Pulido del ícono/identidad + mini guía de uso
- 🔨 Claude: ícono final desde el logo JGM (todas las medidas que pide Android), splash, y una pantalla/README corto de "cómo agregar un modelo nuevo".
- ✅ Vos: la app queda prolija y sabés cómo mantenerla.
- 🛑 Punto de control. **(Hito: v1 terminada.)**

---

## 🔭 Ideas para más adelante (NO hacer sin pedirlo)
Estas quedaron fuera del alcance actual, anotadas por si algún día las querés:
- Informe/ficha PDF por instalación (lo descartaste: la app no es un registro de trabajos).
- Guardar instalaciones por cliente / notas / fotos (descartado por el mismo motivo).
- Sincronización automática en la nube (hoy: respaldo manual por Export/Import).
- Más marcas/series (Siemens, ABB, Schneider, etc.) a medida que consigas los manuales.

---

## ✅ Resumen de hitos (para que sepas dónde estás)
1. **Fin de Fase 1** — App instalada (vacía) en tus dos celus.
2. **Fin de Fase 2** — Diseño aprobado (mockup completo).
3. **Fin de Fase 4** — Primera ficha real impecable (SSW-05) = molde.
4. **Fin de Fase 5** — Todos los modelos actuales cargados (WEG SSW-05/07/08, Lovato ADXL).
5. **Fin de Fase 7** — v1 terminada, probada offline y en ambos teléfonos.
