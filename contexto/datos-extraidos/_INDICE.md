# Índice de datos extraídos de manuales

> Datos técnicos procesados de los manuales oficiales que subió el usuario. **Fuente de verdad para construir las fichas.** Regla de seguridad: usar solo esto; no inventar; todo nace sin verificar.

## Archivos

### `weg-ssw05.md` — WEG SSW-05 Plus ✅ (MODELO PILOTO)
- **Fuente:** Manual de usuario WEG, doc 0899.5119 / 2.3X, 92 pág., trilingüe.
- **Trae:** gama 3–85 A (potencias HP+kW por tensión), fusibles/contactores, conexiones potencia+control, ajustes por trim-pot y parámetros P, protecciones (clase 10, P106 hex), **códigos de falla completos (E03…E75) con patrón de LED**, puesta en marcha, advertencias de seguridad.
- **Interfaz:** trim-pots + DIP (HMI opcional). Fallas por parpadeo de LED / código Exx.
- **Conexión:** solo en línea. Inside-delta: **no aplica**.

### `weg-ssw07.md` — WEG SSW-07 ✅
- **Fuente:** Manual de usuario WEG 0899.5832 / rev 16 (+ quick starts).
- **Trae:** gama 17–412 A, conexiones, esquemas 2/3 hilos + inversión + freno CC, ajustes esenciales, protecciones, **fallas E03…E77 con LED**, datos técnicos, fusibles aR.
- **Interfaz:** trim-pots + DIP (HMI opcional).
- **Conexión:** solo en línea. Inside-delta: **no aplica**.
- **Nota:** para la lista COMPLETA de parámetros P, usar el perfil compartido (abajo).

### `weg-ssw07-ssw08-programacion.md` — WEG SSW-07 / SSW-08 ✅ (PERFIL COMPARTIDO)
- **Fuente:** Manual de programación WEG 0899.5665 / rev 08, SW V1.5X, 42 pág.
- **Trae:** **tabla completa de parámetros P000–P641**, todos los **códigos de falla Exx** con parámetros relacionados, HMI (teclas/LEDs), comandos.
- **Aplica a:** SSW-07 **y** SSW-08 (comparten programación). El SSW-08 hereda todo esto.
- **Diferencias SSW-08:** agrega DOL, rampa de corriente, freno CC, Jog, FWD/REV, CAN/DeviceNet.

### `lovato-adxl.md` — Lovato ADXL ✅ (PERFIL DE SERIE)
- **Fuente:** Manual de instrucciones ADXL, doc I456 E 11 20, 23 pág., español.
- **Trae:** gama completa 30–320 A (11 calibres), **parámetros P01–P14**, **AUTOSET** (presets por carga del fabricante), **fallas A01–A25 + UA** con causa, diagramas 2/3 hilos + PTC, **disposición de terminales de control**, protecciones, instalación, par de apriete.
- **Interfaz:** display LCD + menú de parámetros + NFC. (Distinta a los WEG por trim-pot.)
- **Aplica a:** toda la serie ADXL. La variante 0115600 = 115 A.
- **Conexión:** en línea, 2 fases controladas, bypass integrado. Inside-delta: no documentado (no aplica).

### `lovato-adxl0115600-datasheet.md` — Lovato ADXL0115600 ✅ (DATASHEET de la variante)
- **Fuente:** datasheet ADXL0115600, 5 pág.
- **Trae:** datos comerciales/eléctricos de la variante de 115 A (37/55/75 kW, hasta 100 HP@600V), E/S, condiciones ambientales, dimensiones (95×226×182 mm, 2,9 kg), normas.

---

## Regla "perfil de serie + variantes" (recordatorio)
- **Lovato ADXL** y **WEG SSW-07/08** confirmaron que la programación es común dentro de la serie.
- Al cargar un modelo: si su serie ya existe, agregar **solo la variante** (corriente/potencia/tamaño). Todo lo demás lo hereda del perfil.

## Pendientes de material
- 🟡 **WEG SSW-08:** falta su **User's Guide de hardware** (gama/conexiones/datos técnicos). La programación ya está.
- ⏳ Otras marcas/series a medida que el usuario suba manuales.
