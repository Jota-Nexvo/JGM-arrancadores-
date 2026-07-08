# Lovato ADXL — PERFIL DE SERIE (programación común a todos los modelos)

> **Fuente:** `uploads/I456E11_20.pdf` — "ADXL Soft Starter · Manual de instrucciones" · código **I456 E 11 20** · 23 páginas · español (oficial Lovato Electric).
> **Estado:** Sin verificar por el usuario (pendiente de aprobación).
> **Alcance:** Este manual cubre TODA la serie ADXL (ADXL0030600 … ADXL0320600). La programación, diagramas, parámetros y alarmas son COMUNES a toda la serie.

## ✅ CONFIRMACIÓN DE LA REGLA DEL USUARIO
El usuario preguntó si "todos los Lovato son iguales en programación". **CONFIRMADO para la serie ADXL:** un solo manual (I456) documenta los 11 calibres. Lo único que cambia entre modelos es **corriente/potencia/tamaño/fusibles/peso**. Menú, parámetros, alarmas, teclas, esquemas de conexión y terminales son **idénticos**.
→ **Arquitectura de datos para la app:** UN "perfil de serie ADXL" compartido (parámetros, alarmas, diagramas, puesta en marcha) + una tabla de "variantes por calibre" (corriente, potencias, fusibles, peso, dimensiones). El modelo ADXL0115600 es la variante de 115 A.

---

## GAMA COMPLETA — variantes por calibre (tabla "Elección del arrancador", UL508)
Columnas: Ie[A] · IEC kW@230/400/500V · FLA[A] · UL HP@208 / 220-240 / 380-415 / 440-480 / 550-600V · Fusible aR máx · Icc[kA] · Peso

- **ADXL0030600** · 30 A · 7,5/15/18,5 kW · FLA 28 · 10/10/15/20/25 HP · aR 80A(FWP-80B) · 5 kA · 1970 g
- **ADXL0045600** · 45 A · 11/22/30 kW · FLA 44 · 10/15/25/30/40 HP · aR 125A(FWP-125A) · 5 kA · 1970 g
- **ADXL0060600** · 60 A · 15/30/37 kW · FLA 60 · 20/20/30/40/50 HP · aR 160A(FWP-150A) · 5 kA · 1970 g
- **ADXL0075600** · 75 A · 22/37/45 kW · FLA 75 · 25/25/40/50/60 HP · aR 250A(FWP-175A) · 10 kA · 2704 g
- **ADXL0085600** · 85 A · 22/45/55 kW · FLA 83 · 25/30/50/60/75 HP · aR 315A(FWP-200A) · 10 kA · 2704 g
- **ADXL0115600** · 115 A · 37/55/75 kW · FLA 114 · 40/40/60/75/100 HP · aR 400A(FWP-250A) · 10 kA · 2704 g ← **modelo del usuario**
- **ADXL0135600** · 135 A · 37/75/90 kW · FLA 130 · 40/50/75/100/125 HP · aR 450A(FWP-300A) · 10 kA · 7350 g
- **ADXL0162600** · 162 A · 45/90/110 kW · FLA 156 · 50/60/75/125/150 HP · aR 500A(FWP-500A) · 10 kA · 7350 g
- **ADXL0195600** · 195 A · 55/110/132 kW · FLA 192 · 60/60/100/150/200 HP · aR 630A(FWP-600A) · 18 kA · 12730 g
- **ADXL0250600** · 250 A · 75/132/160 kW · FLA 248 · 75/100/150/200/250 HP · aR 700A(FWP-700A) · 18 kA · 12730 g
- **ADXL0320600** · 320 A · 90/160/200 kW · FLA 320 · 100/125/200/250/300 HP · aR 800A(FWP-800A) · 18 kA · 12730 g

Notas de calibre:
- Ventilador de refrigeración: OPCIONAL (EXP8004) en 0030→0115; los 0135→0320 traen 2 ventiladores de serie.
- Montaje en riel DIN: accesorio EXP8003 solo para 0030→0115.
- 4 calibres mecánicos, 11 calibres eléctricos (30–320 A).

---

## CARACTERÍSTICAS GENERALES (comunes)
- Pantalla LCD retroiluminada con iconos · 3 LED (POWER verde, RUN verde, ALARM rojo) · 4 teclas.
- Texto en 6 idiomas: ENG-ITA-FRA-SPA-POR-DEU.
- Arranque controlado en **2 fases** con relés de **bypass integrados**.
- Rampa de **tensión o par**, con límite de corriente.
- Protección térmica electrónica multiclase, separada arranque/marcha.
- 3 entradas digitales programables (IN3 configurable como PTC) · 3 salidas de relé (1 conmutada + 2 NA).
- Alimentación auxiliar separada · terminales de potencia dobles.
- Sensor de temperatura de tiristores (NTC) con prealarma/alarma.
- NFC frontal (app NFC Configurator) · puerto óptico IR frontal (CX01 USB / CX02 WiFi → app SAM1, software Xpress) · RS485 Modbus opcional (EXC1042).
- Unidad de visualización remota EXCRDU1 (controla hasta 32 arrancadores, RS485, IP65, hasta 600 m).

## TECLAS Y LEDs (frontal)
- Teclas ▲▼: desplazarse; pulsadas juntas = entrar/salir de menús.
- START: confirma / aumenta valor / arranca motor (si está habilitado por teclado).
- STOP: sale / reduce valor / para motor.
- LED POWER (verde) = alim. auxiliar OK · LED RUN (verde) = parpadea en rampa, fijo a plena tensión · LED ALARM (rojo) = alarma activa.

## ESTADOS DE FUNCIONAMIENTO (pantalla)
SIN LÍNEA (L1-L2-L3 sin potencia) · PREPARADO · RET.XX (retardo arranque) · ARR.MEC. · RAMP.ACEL. · LÍM.CORR. · LÍM.PAR · MARCHA (plena tensión por SCR) · BYPASS (plena tensión por bypass) · RAMP.DESAC. · PROT.INH. · RUEDA LIB. · PRECAL. · ALARMA.

---

## CONFIGURACIÓN GUIADA AUTOSET (asistente de puesta en marcha)
Aparece automáticamente al conectar por primera vez. Pide 4 datos:
1. **Idioma** (predet. ENG) — ENG/ITA/FRA/ESP/POR/DEU.
2. **Corriente nominal del motor** (predet. 100% del calibre) — rango 50%…100% del Ie del calibre. Ej. ADXL0030600: 15,0…30,0 A.
3. **Tipo de aplicación** (predet. Genérico) — Genérico (GP) / Bomba centrífuga / Bomba contra incendios / Cinta transportadora / Ventilador / Mezclador.
4. **Nivel de dificultad de arranque** (predet. Normal):
   - Bajo (baja inercia / sin carga): límite 3,5·Ie
   - Normal: 4,5·Ie
   - Alto (alta inercia / con carga): 5,5·Ie
Reejecutable con comando C11. → **Estos son los "presets por tipo de carga" oficiales del fabricante.**

---

## MÉTODOS DE ARRANQUE / PARADA
- **Rampa de par** (P05.01=ON): control PID en lazo cerrado; el par crece según la rampa; el tiempo real depende de la carga (misma pendiente).
- **Rampa de tensión** (P05.01=OFF): lazo abierto; la tensión sube de mínimo a 100% en el tiempo fijo P01.04, independiente de la carga; más reproducible pero aceleración menos gradual.
- **Límite de corriente** (P01.02): si la corriente de la fase más alta (L2, directa) alcanza el límite, se reduce la tensión (tiene prioridad sobre las rampas). Máx nunca supera 550% del Ie del arrancador.
- Paso inicial (P01.03) y final (P01.06): saltos instantáneos al arrancar/terminar para vencer/soltar el par mínimo.
- **Parada:** rampa de par · rampa de tensión · rueda libre (coast).

---

## TABLA DE PARÁMETROS (menús P01–P14) — comunes a la serie

### P01 – GENERAL (motor principal)
| Cód | Parámetro | UdM | Defecto | Rango |
|---|---|---|---|---|
| P01.01 | Corriente nominal del motor In | A | 100%Ie del calibre | 50…100% Ie |
| P01.02 | Límite de corriente de arranque ILt | %In | 300 | 150…700 |
| P01.03 | Paso inicial de aceleración | % | 10 | 10…90 |
| P01.04 | Rampa de aceleración | s | 10 | 1…120 |
| P01.05 | Rampa de desaceleración | s | OFF | OFF / 1…120 |
| P01.06 | Paso de fin de desaceleración | % | 20 | 0…100 |
| P01.07 | Reactivación (kick/boost 200 ms) | % | OFF | OFF / 30…100 |
| P01.08 | Cosfi nominal del motor | — | 0,80 | 0,50…1,00 |

### P02 – UTILIDADES
Idioma (ENG) · Unidad temp °C/°F · Retardo retroilum. baja 60 s · Retardo vuelta a medida predet. 60 s · Medida principal (CORRIENTE / %CORRIENTE / PAR / TENSIÓN) · Control marcha/paro por teclado (OFF) · Ver corriente de fase (OFF).

### P03 – CONTRASEÑA
P03.01 Activación OFF · P03.02 Usuario 1000 · P03.03 Avanzado 2000 · P03.04 Control remoto OFF. (Usuario=ver; Avanzado=modificar. Timeout 2 min.)

### P04 – PROTECCIONES
| Cód | Parámetro | UdM | Defecto | Rango |
|---|---|---|---|---|
| P04.01 | Activación prot. térmica motor | — | ON | OFF/ON |
| P04.02 | Clase térmica en ARRANQUE | — | 10 | 2/10A/10/15/20/25/30/35/40 |
| P04.03 | Clase térmica en MARCHA | — | 10 | 2/10A/10/15/20/25/30 |
| P04.04 | Restablecim. prot. térmica motor | % | 120 | 0…140 |
| P04.05 | Tipo de entrada IN3 | — | DIGITAL | DIGITAL/PTC |
| P04.06 | Nº intentos rearme automático | — | OFF | OFF/1…6 |
| P04.07 | Intervalo rearme automático | min | 1 | 1…30 |
| P04.08 | Umbral de par mínimo (carga baja) | %Tn | OFF | OFF/20…100 |
| P04.09 | Retardo interv. par mínimo | s | 10 | 1…20 |
| P04.10 | Tiempo máximo de arranque | s | OFF | OFF/10…1000 |
| P04.11 | Control secuencia de fase | — | OFF | OFF / L1-L2-L3 / L3-L2-L1 |
| P04.12 | Umbral tensión mínima | V | OFF | OFF/170…760 |
| P04.13 | Retardo tensión mínima | s | 5 | 0…600 |
| P04.14 | Umbral tensión máxima | V | OFF | 170…760/OFF |
| P04.15 | Retardo tensión máxima | s | 5 | 0…600 |
| P04.16 | Corriente asimétrica | % | OFF | OFF/1…25 |
| P04.17 | Retardo corriente asimétrica | s | 5 | 0…600 |
| P04.18 | Intervalo de mantenimiento | h | OFF | OFF/1…50000 |
| P04.19 | Modo rearme de alarmas | — | STOP | STOP/START/STA-STO |
| P04.20 | Retardo arranque tras corte aux. | s | 10 | 0…900 (fw≥2) |

Clase 10 = uso normal; 15/20/+ = uso intensivo. Prot. térmica motor por cálculo interno o PTC (IN3, norma DIN 44081) → alarma A14.

### P05 – VARIOS
P05.01 Control de par (OFF=tensión / ON=par) · P05.02 Coef. linealización par 100% (50…150) · P05.03 Limitación par máx OFF (10…200%Tn) · P05.04 Retardo de arranque 0 s (0…20) · P05.05 Función RS485 (SLAVE / REM EXP).

### P06 – ENTRADAS PROGRAMABLES (INP1…3)
Por entrada: Función · Nº canal · Tipo contacto (NA/NC) · Retardo cierre 0,05 s · Retardo apertura 0,05 s.
Predet.: **INP1=START, INP2=STOP(NC), INP3=OFF**.

### P07 – SALIDAS PROGRAMABLES (OUT1…3)
Por salida: Función · Nº canal · Estado reposo (NOR/REV) · Retardo ON · Retardo OFF.
Predet.: **OUT1=AL.GLB (11-14-12), OUT2=CONT.LÍN (21-24), OUT3=MARCHA (21-34)**.

### P08 – COMUNICACIÓN (RS485 Modbus opcional)
Dirección nodo 01 (1…255) · Velocidad 9600 bps (1200…115200) · Formato 8BIT-N · Bits parada 1 · Protocolo MOD-RTU / MOD-ASCII / MOD-TCP.

### P09 – MOTORES MÚLTIPLES (MOT1…3)
Igual que P01, hasta 3 configuraciones de motor, seleccionables por entradas con función SEL.MOT (criterio binario).

### P10 – LÍMITES (LIM1…4)
Umbrales sobre medidas (V, A, kW…): función MAX/MIN/MIN+MAX, umbral superior/inferior con multiplicador, retardos, memoria.

### P13 – ALARMAS DE USUARIO (UA1…4)
Origen (INPx/OUTx/LIMx/REMx) · Nº canal · Descripción (texto 16 car.).

### P14 – ALARMAS
Propiedades por alarma (ver sección Propiedades).

---

## 🔎 TABLA DE ALARMAS / CÓDIGOS DE FALLA (función estrella) — común a la serie
Formato: **CÓDIGO — Descripción — Causa** (parámetros/comando relacionados)

- **A01 — Fallo de tensión de línea** — Ausencia de las 3 fases en arranque o marcha. (MOT)
- **A02 — Pérdida de fase** — Ausencia de una fase en arranque o marcha. (MOT)
- **A03 — Error de secuencia de fases** — Secuencia distinta de la configurada. (MOT · P04.11)
- **A04 — Frecuencia fuera de límites** — Fuera de ±5% en torno a 50/60 Hz. (MOT)
- **A05 — Fallo de tensión auxiliar** — Tensión aux. baja o microcorte mayor al tolerado. (MOT-ARR)
- **A06 — Corriente asimétrica** — En bypass, asimetría > configurada durante el tiempo fijado. (MOT · P04.16/P04.17)
- **A07 — Prot. sobreintensidad** — Corriente >750%·Ie durante 200 ms en arranque. (MOT-ARR)
- **A08 — Rotor bloqueado** — Corriente >500%·In durante 200 ms en bypass. (MOT-ARR)
- **A09 — Carga demasiado baja** — Par < configurado en bypass (marcha en seco / correa rota). (MOT · P04.08/P04.09)
- **A10 — Arranque demasiado largo** — Tiempo arranque→bypass > configurado. (MOT · P04.10)
- **A11 — Avería de relé de bypass** — Fallo de cierre/apertura del relé de bypass. (ARR)
- **A12 — Prealarma térmica del motor** — Intervención inminente con motor en bypass. (MOT)
- **A13 — Prealarma térmica del arrancador** — Intervención inminente del arrancador. (ARR)
- **A14 — Prot. térmica del motor** — Térmica interna o entrada PTC. (MOT · P04.01-05 · comando C02)
- **A15 — Prot. térmica del arrancador** — Temp. disipadores > máximo. Rearme automático al enfriar. (ARR)
- **A16 — Fase L1-T1 en cortocircuito** — SCR en corto o contactos de bypass pegados. (ARR)
- **A17 — Cortocircuito en fase L3-T3** — SCR en corto o contactos de bypass pegados. (ARR)
- **A18 — Avería de sensor de temp.** — Sensor NTC del disipador interrumpido/averiado. (ARR)
- **A19 — Tensión de línea baja** — L1-L3 < configurada durante el tiempo fijado. (MOT · P04.12/P04.13)
- **A20 — Tensión de línea alta** — L1-L3 > configurada durante el tiempo fijado. (MOT · P04.14/P04.15)
- **A21 — Corriente motor baja** — Corriente <10%·In en las 3 fases.
- **A22 — Solicitud de mantenimiento** — Superado el intervalo de mantenimiento. (P04.18 · comando C01)
- **A23 — Fallo de ventiladores** — Ventiladores no detectados. (ARR)
- **A24 — Ventiladores bloqueados** — Corriente de ventiladores muy alta (bloqueo). (ARR)
- **A25 — Error de sistema** — Error interno; contactar servicio técnico Lovato.
- **UA1…UA4 — Alarma de usuario** — Se genera por la variable/entrada asociada (menú P13).

**Propiedades de alarma** (configurables por P14): habilitada · retenida · alarma general (activa salida) · parada de motor · desaceleración · rearme automático (P04.06/07) · inhibición · sin LCD.
**Rearme:** según P04.19 (STOP/START/ambos). No rearma si persiste la causa. LED ALARM parpadea.
Nota: A06, A09 y otras pueden estar desactivadas por defecto en 0030→0115 y activas en 0135→0320.

---

## FUNCIONES DE ENTRADA PROGRAMABLES (P06)
0 OFF · 1 START (obligatoria; 2 hilos continuo o 3 hilos por impulso) · 2 STOP (debe estar cerrada para permitir marcha; si no hay STOP, START hace marcha/paro) · 3 R.LIBRE (para sin rampa) · 4 PRECAL (precalentamiento devanado, sin giro) · 5 BLO.COM (bloqueo comandos serie) · 6 INH.AL (inhibir alarmas) · 7 RESET ST (forzar estado térmico 100% — ⚠ altera protección, riesgo de recalentamiento) · 8 BL.TECL (bloqueo teclado) · 9 SEL.MOT (selección motor múltiple) · 10 CONFIG (entrada configurable, origen de alarmas usuario) · 11 COMANDO (ejecuta comando Cx).

## FUNCIONES DE SALIDA PROGRAMABLES (P07)
0 OFF · 1 CONT.LÍN (contactor de línea; activo desde arranque hasta fin de desaceleración) · 2 MARCHA (fin de rampa, plena tensión — habilita la carga) · 3 AL.GLB (alarma general) · 4 LIM (estado LIMx) · 5 REM (estado REMx) · 6 AL Axx (alarma concreta) · 7 UAxx (alarma de usuario concreta).

## MENÚ DE COMANDOS (Cxx)
C01 Restablecer mantenimiento (usuario av.) · C02 Restablecer estado térmico · C03 Restablecer contador arranques · C04 Restablecer contador horario motor · C05 Restablecer energía · C06 Restablecer umbrales límite · C11 Repetir AUTOSET (usuario) · C12 Config. predeterminada de fábrica (usuario) · C13 Guardar copia config · C14 Restablecer copia config · C15 Prueba baja potencia (ignora alarmas de corriente en banco) · C16 Borrar lista de eventos.

---

## ESQUEMAS DE CONEXIÓN (potencia + control)
Estructura general de potencia: **QS2/seccionador → FU1 fusibles ultrarrápidos → L1(1)/L2(3)/L3(5) del ADXL → T1(2)/T2(4)/T3(6) → motor**. QF1/MCCB opcional. Contactor de línea KM1 comandado por OUT2 (CONT.LÍN).

Diagramas incluidos en el manual:
1. **Arranque con 2 hilos** (comando continuo): IN1=START, IN2=STOP; OUT1=AL.GEN, OUT2=CONT.LIN. Contacto de mando mantenido.
2. **Arranque con 3 hilos / inversión de rotación**: pulsadores SB2 (marcha) / SB4 (paro), contactores KM1/KM2 enclavados para invertir sentido; OUT3=MARCHA. Usa 2 contactores para invertir fases.
3. **Conexión PTC del motor**: sonda PTC a IN3 con P04.05=PTC (terminales C-IN3).
- Ventilador opcional EXP8004: alimentado por el propio arrancador (FAN+/FAN−), NO aplicar tensión externa (solo 0030→0115).
- RS485 EXC1042 opcional (A/B).
- Comando por impulso (3 hilos) vs. continuo (2 hilos): ver función de entrada START/STOP.

## DISPOSICIÓN DE TERMINALES DE CONTROL (regleta frontal)
Orden físico: **A1 · A2 · 11 · 14 · 12 · 21 · 24 · 34** (arriba) y **− · + · C · IN1 · IN2 · IN3 · FAN** (abajo).
- **A1, A2** = alimentación auxiliar 100–240 V.
- **11-14-12** = OUT1, relé conmutado (14=NA, 12=NC, 11=común). Predet. ALARMA GENERAL.
- **21-24** = OUT2, relé NA. Predet. CONTACTOR DE LÍNEA.
- **21-34** = OUT3, relé NA (comparte común 21). Predet. MARCHA.
- **C** = común de entradas digitales.
- **IN1** = START (predet.) · **IN2** = STOP (predet., NC) · **IN3** = libre / PTC (según P04.05).
- **FAN +/−** = 5 V para ventilador EXP8004 (solo 0030→0115; NO conectar tensión externa).
- **− / +** = terminales del ventilador / señal (ver manual).
Potencia: **1/L1, 3/L2, 5/L3** (entrada red) · **2/T1, 4/T2, 6/T3** (salida al motor). Terminales de potencia dobles.

---

## INSTALACIÓN Y RECOMENDACIONES
- Distancias mínimas de ventilación: **100 mm arriba/abajo, 50 mm a los lados**; ambiente < 45 °C alrededor.
- Cortar la corriente antes de intervenir. Prever siempre seccionador/telerruptor de línea aguas arriba.
- Protección de SCR contra cortocircuito **solo con fusibles ultrarrápidos** (tabla aR). Con bypass cerrado (marcha) los SCR quedan protegidos.
- No accionar transformadores con el arrancador. No instalar en ambientes explosivos/inflamables ni cerca de fuentes de calor. No usar cajas aislantes (mala disipación).
- **Corrección de factor de potencia:** capacitores SIEMPRE aguas arriba del arrancador, con contactor y fusibles; conectar al final del arranque y desconectar antes de la parada (usar salida MARCHA para el contactor).

## PAR DE APRIETE Y SECCIÓN DE CABLE
- **Control (relés) A1-A2 y 11…34:** 0,2–4 mm² (26–10 AWG) · par 0,8 Nm (7 lb·in) · Cu 75 °C.
- **Ventilador y entradas digitales:** 0,2–2,5 mm² (24–12 AWG) · par 0,44 Nm (4 lb·in).
- **Potencia 30–115 A:** terminal doble 2×2,5–35 mm² (2×18–2 AWG); llave Allen 4 mm; par 4–5 Nm (0030–0060), 5,5–6,5 Nm (0075–0115).
- **Potencia 135–320 A:** barras 25×5 mm (agujero Ø11); cable máx 50/70/95/120/185 mm² según calibre (kits EXA01–04); casquillo ch17; par 435 Nm.
- Coordinación Tipo 2 (IEC/EN 60947-4-2) con fusibles clase RK5 (tabla por calibre) / aR (FWP Bussmann).

## CARACTERÍSTICAS TÉCNICAS (comunes)
- **Alim. auxiliar A1-A2:** Us 100–240 V (límites 90–264 V) · 45–66 Hz · consumo ~5,5–7,2 W · inmunidad microcortes 40 ms@110V, 160 ms@220V.
- **Potencia L1-L2-L3:** 208–600 V ±10% · 50/60 Hz (límites 47,5–52,5 / 56,4–63,6 Hz).
- **Entradas digitales C-IN1/IN2:** tipo negativo, 5 V=, 10 mA, retardo 50 ms.
- **Entrada PTC C-IN3:** 2 hilos DIN 44081; R total ≤1,5 kΩ@25°C; actúa ≈2,9 kΩ; rearma ≈1,6 kΩ.
- **Salida 11-12-14:** 1 contacto conmutado; 250 V; NA 5 A / NC 3 A; UL D300.
- **Salidas 21-24 / 21-34:** 2×NA; 250 V; 3 A.
- **Aislamiento:** Ui 600 V · Uimp 9,5 kV.
- **Ambiente:** trabajo −20…+40 °C (máx 60 °C con derating 0,5%/°C sobre 40°) · almacenaje −30…+80 °C · HR <80% · altitud 1000 m (derating 0,5%/100 m sobre 1000 m) · polución 2 · sobretensión cat. 3 · medida cat. III · choque 15 g · vibración 0,7 g.
- **Carcasa:** policarbonato RAL 7035 · IP00 · montaje a tornillo o riel DIN (EXP8003, solo 0030→0115).
- **Normas:** IEC/EN 60947-4-2:2011 · 60947-1:2014 · UL508 · CSA C22.2 n°14. Homologaciones cULus + EAC (todos), RCM (0030→0115).

---

## MAPA A SECCIONES DE LA APP (cómo se muestra cada cosa)
- **Datos del equipo** ← gama por calibre (Ie, potencias IEC/UL, peso, fusibles).
- **Diagramas interactivos** ← esquemas 2 hilos / 3 hilos-inversión / PTC + disposición de terminales (regleta de control y potencia). Terminales tocables con su descripción.
- **Parámetros** ← tablas P01–P14 (número, rango, defecto, significado). Curva de arranque = P01.02/03/04/06/07; parada = P01.05/06; tensión vs par = P05.01.
- **Presets por carga** ← AUTOSET (fabricante): bomba/bomba incendios/cinta/ventilador/mezclador/genérico + dificultad 3,5/4,5/5,5·Ie.
- **Protecciones** ← tabla P04 + PTC + clases térmicas.
- **Conexión en línea vs inside-delta** ← este ADXL es de conexión EN LÍNEA (2 fases controladas, bypass integrado). ⚠ El manual I456 NO documenta inside-delta para ADXL → marcar "no aplica / verificar" en esta sección para Lovato ADXL.
- **Bypass y comando (2/3 hilos)** ← bypass integrado; comando 2 hilos (continuo) y 3 hilos (impulso/inversión).
- **Códigos de falla** ← tabla A01–A25 + UA (función de búsqueda directa por código).
- **Checklist de puesta en marcha** ← AUTOSET (4 pasos) + recomendaciones de instalación + par de apriete + fusibles.

## PENDIENTES / A VERIFICAR
- [ ] Aprobación del usuario de todo este contenido.
- [ ] Inside-delta: no aplica a ADXL (confirmar con usuario que no se necesita para esta serie).
- [ ] Imágenes de los esquemas de conexión y disposición de terminales: el PDF trae los dibujos; para diagramas "foto marcada" habría que extraer las imágenes del PDF (pendiente si se decide esa vía para Lovato).
