# 🚦 CÓMO EMPEZAR — Pasar el proyecto a Claude Code (desde el celular)

> Guía para **arrancar de cero en Claude Code**, con un **repositorio NUEVO y separado** del proyecto que ya tenés, para que **no se mezclen**. Seguila en orden. Cada repositorio en GitHub es **independiente**: crear uno nuevo **no toca** tu proyecto anterior.

---

## ✅ Antes de empezar
- Ya tenés cuenta de GitHub y sabés entrar (perfecto).
- Ya usaste Claude Code con otro repo (perfecto).
- Tené a mano el archivo que descargaste: **`proyecto-claude-code.zip`**.

> 🔑 **La regla para no mezclar:** vas a crear un repositorio **nuevo** llamado `jgm-arrancadores` y, cuando abras Claude Code, vas a **elegir ese repo** (no el del proyecto anterior). Como son repos distintos, viven separados y no se pisan.

---

## PASO 1 — Crear el repositorio NUEVO en GitHub
1. Entrá a **github.com** desde el navegador del celu e iniciá sesión.
2. Tocá el **➕** (arriba a la derecha) → **New repository** (Nuevo repositorio).
3. **Repository name:** escribí **`jgm-arrancadores`** (así no se confunde con el otro proyecto).
4. **Visibilidad:** **Public** (público).
5. Marcá **Add a README file** (Agregar README).
6. Tocá **Create repository** (Crear repositorio).

✔️ Ya tenés un repo nuevo, vacío y separado.

---

## PASO 2 — Subir este paquete al repo nuevo
La forma más simple desde el celular es subir el **ZIP** y que Claude Code lo descomprima después.

1. Dentro de tu repo `jgm-arrancadores`, tocá **Add file** (Agregar archivo) → **Upload files** (Subir archivos).
2. Seleccioná el archivo **`proyecto-claude-code.zip`** que descargaste.
3. Esperá a que suba y tocá **Commit changes** (Confirmar cambios).

> 💡 Si tu celu ya descomprimió el zip y ves una carpeta con archivos sueltos, también sirve: subí todos los archivos que puedas. Pero con **el zip solo** alcanza — Claude Code lo abre en el Paso 4.

---

## PASO 3 — Abrir el repo NUEVO en Claude Code
1. Abrí **Claude Code**.
2. Cuando te pida elegir el proyecto/repositorio, **elegí `jgm-arrancadores`** (¡el nuevo, no el anterior!).
3. Confirmá que estás en el repo correcto antes de seguir (que el nombre diga `jgm-arrancadores`).

---

## PASO 4 — Primer mensaje a Claude Code (copiá y pegá esto)

> Hola. En este repo subí `proyecto-claude-code.zip`. Descomprimilo si hace falta, después leé `CLAUDE.md`, `PLAN-DE-TRABAJO.md` y los archivos de `contexto/`. Cuando termines de leer, presentate en 3 líneas con lo que entendiste del proyecto y **empezá por el Paso 0.1**. Importante: trabajá **de a un paso por vez**; al terminar cada paso mostrame el resultado, resumí lo que hiciste y **esperá que yo escriba "ok, siga"** antes de continuar. No inventes datos técnicos: usá solo los de `contexto/datos-extraidos/`.

---

## PASO 5 — Cómo vas a trabajar de acá en más
- Claude Code hace **un paso**, te muestra el resultado y **espera tu "ok, siga"**.
- Si algo no te gusta, pedí el cambio en ese mismo punto (no pasa al siguiente hasta que aprobás).
- Los **hitos** grandes son: app instalada vacía (Fase 1) → diseño aprobado (Fase 2) → primera ficha real SSW-05 (Fase 4) → resto de modelos (Fase 5) → cierre (Fase 7).
- Vas a poder **instalar la app** en el Poco y el Samsung recién al final de la **Fase 1** (ahí te da el link).

---

## 📌 TUS PENDIENTES (lo que tenés que conseguir vos)
Estos no frenan el arranque — el proyecto empieza igual. Los vas a necesitar más adelante:

1. **User's Guide de hardware del WEG SSW-08** — para que el SSW-08 tenga ficha propia (gama de corrientes, conexiones, datos técnicos). La **programación** del SSW-08 ya la tenemos. → Se usa en el **Paso 5.2**.
2. **Manuales de otras marcas** que quieras sumar (Siemens, ABB, Schneider, etc.) — cuando los tengas, se los pasás a Claude Code, los procesa y arma la ficha. → **Paso 5.4**.

> Cuando consigas un manual nuevo, decile a Claude Code: *"Te paso el manual del [marca/modelo]. Procesalo, guardá la extracción en `contexto/datos-extraidos/` y después armamos su ficha, paso a paso."*

---

## ❓ Si algo sale mal
- **Elegiste el repo equivocado en Claude Code:** cerrá y volvé a abrir eligiendo `jgm-arrancadores`. Tu proyecto anterior está a salvo (es otro repo).
- **No sabés si subió bien el zip:** en github.com, entrá al repo y fijate que aparezca `proyecto-claude-code.zip` en la lista de archivos.
- **Claude Code no encuentra los archivos:** pedile *"listá los archivos del repo y descomprimí el zip si ves uno"*.
- **Se rompió algo al construir:** Git guarda el historial; pedile a Claude Code que te explique el error en criollo y que vuelva a la última versión que funcionaba.
