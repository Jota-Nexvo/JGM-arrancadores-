# WEG SSW-07 — Datos extraídos (arrancador suave)

> **Fuentes (3 archivos, todos aislados para este modelo):**
> 1. `uploads/WEG-SSW07-user-manual-0899.5832-en-es-pt.pdf` — **Manual del Usuario oficial WEG**, doc **0899.5832 / rev 16**, 06/2024, 168 pág., trilingüe EN-ES-PT. → Fuente PRINCIPAL (se usó la parte en español).
> 2. `uploads/QuickstartSSW07-HMI_10-2019-R1.pdf` — Quick Start HMI (WEG), 11 pág., inglés. → Pasos de puesta en marcha + parámetros clave + trim-pots/DIP.
> 3. `uploads/SSW07_comm_Quick Start Guide 1 ed.pdf` — Serial Comm Quick Start (AutomationDirect, tercero), 14 pág. → Parámetros Modbus + variables. **Marca de tercero, no WEG.**
> **Estado:** Sin verificar por el usuario (pendiente de aprobación).

## ⚠ NATURALEZA DEL EQUIPO (importante para la app)
El SSW-07 es un arrancador **compacto** que se puede programar de **3 formas**, según el parámetro P219 / DIP:
- **Trim-pots + DIP switches** (P219=0, PADRÓN de fábrica) — sin display; ajustes por potenciómetros y llaves; fallas por parpadeo de LEDs.
- **Teclado/HMI opcional** (P219=1) — display de 3 dígitos, parámetros P; fallas por código Exx.
- **Control de bombas por trim-pots** (P219=2).
→ En la app conviene mostrar **ambas vías** (trim-pot/DIP y parámetro P) en cada ajuste, y las fallas con **código Exx + patrón de parpadeo LED**. La lista COMPLETA de parámetros P está en el **Manual de Programación SSW-07** (referenciado, NO incluido aún). Este Manual de Usuario trae los parámetros esenciales de puesta en marcha.

## DECODIFICACIÓN DEL MODELO (código EXSSW07...)
Ej. `EXSSW070130T5SZ`: EXSSW07 = serie · `0130` = 130 A · `T5` = entrada trifásica 220–575 V · `S` = estándar · `Z` = cierre de código (siempre al final).
`EXSSW070017T5SZ` = SSW-07 estándar de 17 A, trifásico 220–575 V, manual EN/ES/PT.

---

## GAMA / MODELOS (mismo equipo, 13 corrientes; potencia por tensión)
Corriente SSW-07 → potencia máx (cv/kW) para motor WEG IP55 IV polos (Tabla 8.2). Rango de tensión motor 220–575 V.
- **17 A** — 6cv@220V · 10cv@380V · 15cv@575V
- **24 A** — 7,5 · 15 · 20cv
- **30 A** — 10 · 20 · 30cv
- **45 A** — 15 · 30 · 40cv
- **61 A** — 20 · 40 · 60cv
- **85 A** — 30 · 60 · 75cv
- **130 A** — 50 · 75 · 125cv
- **171 A** — 60 · 125 · 175cv
- **200 A** — 75 · 125 · 200cv
- **255 A** — 100 · 175 · 250cv
- **312 A** — 125 · 200 · 300cv
- **365 A** — 150 · 250 · 400cv
- **412 A** — 150 · 300 · 450cv
(Tabla 8.1 UL508 da valores algo menores; potencias basadas en 3×In del SSW-07 durante 30 s, 10 arr/h.)

Mecánicas: 4 tamaños (la rev. 4 agregó "Mecánica 4"). Modelos 45–200 A pueden requerir **kit de ventilación** opcional para ciclos de arranque intensivos. Modelos 255–412 A traen refrigeración reforzada y alimentación de control especial.

---

## CONEXIÓN DE POTENCIA (3 hilos estándar)
- **Entrada red trifásica:** R/1L1 · S/3L2 · T/5L3.
- **Salida al motor:** U/2T1 · V/4T2 · W/6T3.
- **Tierra:** PE en el chasis.
- Solo motores trifásicos AC. Bypass interno integrado (cierra a tensión plena).
- Si el sentido de giro es incorrecto: apagar y permutar dos cables de salida del motor.
- Cables de motor > 100 m: usar SSW08 o SSW900 (no el SSW-07).

## CONEXIÓN DE CONTROL (Tabla 3.9) — terminales
- **A1 / A2** — Alimentación de la electrónica (control). 110–240 Vca (−15%/+10%) en 17–200 A; 110–130 o 208–240 Vca en 255–412 A. Par 0,5 Nm. (A2 = tierra solo en 255–412 A.)
- **DI1** — Padrón: **Acciona/Desacciona el motor** (marcha/paro).
- **DI2** — Padrón: **Reset de errores** (reprogramable a control 3 hilos).
- **DI3** — Padrón: **Reset de errores**.
  - Entradas: 3 aisladas, 110–240 Vca, ~2 mA; nivel alto mín 93 Vca, bajo máx 10 Vca, máx 264 Vca. Programables.
- **13** — Salida a relé 1 (RL1) — padrón "Operación". Reprogramable a "Sin falla" (No Fault).
- **14/23** — Punto común de los relés.
- **24** — Salida a relé 2 (RL2) — "Tensión plena" (fin de rampa).
  - Relés: 2× contacto NA, 250 Vca, 1 A, programables.
- Cable de control: 0,5 mm² (20 AWG) a 1,5 mm² (14 AWG). Cables DIx > 30 m o ambiente ruidoso: blindado, con blindaje y A2 a tierra.

## ESQUEMAS DE ACCIONAMIENTO PROPUESTOS (cap. 3.3)
1. **3.3.1 — Comando 2 hilos + contactor de aislamiento (K1).** Llave marcha/paro NA con retención en DI1. ⚠ Si hay corte de energía y la llave queda cerrada, al volver la energía el motor arranca de inmediato.
2. **3.3.2 — Comando 3 hilos + disyuntor (Q1).** Pulsadores: Acciona (NA) y Desacciona (NC). DI2 debe reprogramarse a "3 hilos"; RL1 debe ponerse en función "Sin falla" para comandar la bobina de mínima tensión del disyuntor.
3. **3.3.3 — Comando 2 hilos + sentido de rotación** (con contactores para invertir fases).
4. **3.3.4 — Comando 2 hilos + frenado por inyección de CC (DC-Braking).**
Notas de seguridad comunes: usar siempre fusibles o disyuntor en la entrada; fusibles ultrarrápidos (aR) NO obligatorios pero recomendados para proteger los SCR; para mantenimiento, seccionar/retirar fusibles de entrada; la emergencia puede hacerse cortando la alimentación de la electrónica; el motor se protege ante SCR en corto mediante el contactor K1 o disyuntor Q1 de aislamiento.

## REPROGRAMAR DI2 y RL1 SIN HMI (trim-pot/DIP)
Mantener **RESET** presionado 5 s (entra en modo programación; mantener presionado):
- **DI2:** 2 LEDs (sobrecorriente + falta de fase) = DI2 en Reset de fallas (padrón). Mover DIP "over-current" y volver → 3 LEDs (+ secuencia de fase) = DI2 en control 3 hilos. Mover DIP "kick start" y volver → vuelve a Reset.
- **RL1:** LED Overload apagado = "Operación"; encendido = "Sin falla". Cambia con el DIP "Overload".
Soltar RESET para concluir.

---

## AJUSTES / PARÁMETROS DE PUESTA EN MARCHA (cap. 4-5 + Quick Start)

### Tipo de control (P202 / DIP Voltage Ramp-Current Limit)
- **P202=0 — Rampa de tensión** (más común y fácil; padrón).
- **P202=1 — Límite de corriente** (para cargas de par alto/constante o redes/generadores de capacidad limitada).
- **P202=2 — Control de bombas** (arranque y parada suaves para bombas centrífugas; minimiza golpe de ariete).

### Parámetros clave (con HMI, P219=1)
- **P000** — Acceso a parámetros (poner **5** = clave para permitir edición).
- **P219** — Vía de parametrización: 0 = trim-pots/DIP · 1 = teclado/HMI · 2 = control de bombas por trim-pots.
- **P101** — Tensión inicial (%) — ej. 35%. El motor debe empezar a girar suave al arrancar.
- **P102** — Tiempo de rampa de aceleración (s) — padrón 20 s.
- **P103** — Tensión inicial de desaceleración (control de bombas).
- **P104** — (control de bombas) parada.
- **P105** — Tiempo de rampa de desaceleración (padrón OFF = paro por inercia). En bombas, subirlo hasta que el motor pare suave sin sobrecorriente al final.
- **P110** — Límite de corriente (% de In del SSW-07) — cuando P202=1.
- **P400** — Tensión nominal del motor (V) — ej. 380.
- **P401** — Corriente nominal del motor (% de In del SSW-07) — ej. 77,7% (101 A en un SSW de 130 A).
- **P406** — Factor de servicio del motor — ej. 1,15.
- **P610 / P611** — Niveles de corriente y tiempo para proteger la bomba de marcha en vacío.
- **P620** — Secuencia de fase (para corregir sentido de giro).
- **P640** — Clase de protección térmica del motor (ej. 6 = Clase 30).
- **P220** — Local/Remoto: 0=siempre local · 1=siempre remoto · 2=teclado(local padrón) · 3=teclado(remoto padrón) · 4=DI1–DI3 · 5/6=serie · 7/8=fieldbus.
- **P229 / P230** — Selección de comando en local / remoto: 0=teclado · 1=entrada digital DIx · 2=serie · 3=fieldbus.
- **P263 / P264 / P265** — Función de DI1/DI2/DI3.

### Kick Start
Pulso de par extra al arranque, para cargas que necesitan mayor par inicial de arranque (ajustable por trim-pot/DIP o parámetro).

### Trim-pots y DIP switches (unidades sin HMI, P219=0)
Vienen calibrados de fábrica (puntos rojos = posición padrón). Ajustes mínimos:
- **Trim-pot Motor Current** — padrón 100%. Ajustar según FLA: %Trimpot = In_motor / In_SSW07. Ej. 140 A / 170 A = 82,3%.
- **DIP Thermal Class** — padrón 30 (si el motor no especifica otra).
- **DIP Voltage Ramp / Current Limit** — selecciona tipo de control.
- **Trim-pot Current Limit** — % de In del SSW-07 (cuando se usa límite de corriente). Ej. limitar a 2,5×In_motor: (2,5×52 A)/60 A = 217% del In del SSW.
- ⚠ El límite de corriente debe permitir acelerar el motor; si al final de la rampa no se alcanza tensión plena → falla **E62** y se deshabilita.
- Otros trim-pots: Initial Voltage, Acceleration Time, Deceleration Time, Kick Start.

### Protección térmica del motor / clase térmica (cap. 4.8, 5.2)
- Imagen térmica electrónica; se guarda al cortar la electrónica (A1/A2) y se recupera al reponer.
- Clase térmica configurable (2…40 aprox.); Clase 10 = uso normal; superiores para arranques exigentes.
- **Factor de servicio:** para no disparar de más, reajustar la corriente nominal del motor: Ajuste = I_motor × F.S. / I_SSW07 (ej. 25 A × 1,15 / 30 A = 96%), o programar P406.
- RESET de sobrecarga: manual (tecla RESET o DI2/DI3) o automático (según DIP), tras el tiempo de enfriamiento.

---

## 🔎 CÓDIGOS DE FALLA (Tabla 6.1) — función estrella
Formato: **Código (LED · patrón de parpadeo) — Descripción — Causas probables — Reset**

- **E03 — Falta de fase o subcorriente** (LED Phase Loss, parpadeando).
  Al arrancar: sin tensión en R/S/T o motor desconectado. En marcha: corriente por debajo del valor y tiempo programados; con valores de fábrica actúa tras 1 s de falta de fase (entrada o salida), o si la corriente < 20% del ajuste del Trimpot Motor Current.
  Causas: bomba girando en vacío · falta de fase de la red · cortocircuito/fallo en tiristor o By-Pass · motor no conectado · conexión de motor errada · mal contacto · problema con el contactor de entrada · fusibles de entrada abiertos · Trimpot Motor Current mal ajustado · motor consume por debajo del límite. Reset: Power-on / botón Reset / Autoreset / DIx.
- **E04 — Sobretemperatura en la potencia** (LED Fault ×1, LED Ready encendido).
  Disipador por encima del límite, o sensor de temperatura no conectado, o excedidos los tiempos de las curvas t×T de los SCR. Causas: carga muy alta · muchos arranques sucesivos · sensor interno no conectado · falta el kit de ventilación (45–200 A). Reset: esperar enfriar; Power-on/Reset/Auto/DIx.
- **E05 — Sobrecarga electrónica del motor** (LED Overload, parpadeando).
  Excedidos los tiempos de la clase térmica. Causas: Trimpot Motor Current muy bajo · régimen de arranque excesivo · clase térmica por debajo de lo permitido · poco tiempo entre parada y rearranque · carga muy alta. Reset: esperar enfriar; Power-on/Reset/Auto/DIx.
- **E19 — Cortocircuito en la potencia del SSW** (LED Fault ×7, LED Ready apagado).
  Corriente en alguna fase > 30% de In con el motor parado (sin comando de Gira). Causas: cortocircuito en un tiristor o relé de by-pass interno · cortocircuito externo en paralelo · defecto en lecturas analógicas de corriente. Reset: Power-on/Reset/DIx.
- **E62 — Exceso de tiempo de limitación de corriente en el arranque** (LED Fault ×2, LED Ready encendido).
  El arranque con límite de corriente tardó más que la rampa de aceleración ajustada. Causas: rampa muy corta · límite de corriente muy bajo · rotor bloqueado. Reset: Power-on/Reset/Auto/DIx.
- **E63 — Rotor bloqueado** (LED Stall, parpadeando).
  Antes de tensión plena, corriente > 2× In del motor. Causas: rampa menor que el tiempo real de aceleración · eje trabado · transformador saturado. Reset: Power-on/Reset/Auto/DIx.
- **E66 — Sobrecorriente** (LED Overcurrent, parpadeando).
  Solo en régimen (100% tensión): corriente > 2× ajuste del Trimpot Motor Current durante > 1 s. Causas: exceso de carga momentánea · eje trabado/rotor bloqueado. Reset: Power-on/Reset/Auto/DIx.
- **E67 — Secuencia de fase incorrecta** (LED Phase Seq, parpadeando).
  La secuencia de sincronismo no sigue R-S-T. Causas: secuencia de red invertida · modificada en otro punto · conexión de motor errada. Reset: Power-on/Reset/DIx. **Sin autoreset.**
- **E70 — Subtensión en la alimentación de la electrónica** (LED Fault ×2, LED Ready apagado).
  Tensión de control < 93 Vca. Causas: alimentación baja · mal contacto · fusibles de control abiertos. Reset: Power-on/Reset/Auto/DIx.
- **E71 — Contacto del relé de By-Pass interno abierto** (LED Fault ×3, LED Ready apagado).
  Fallo de los contactos del by-pass en régimen. Causas: mal contacto en cables de accionamiento del by-pass · contactos dañados por sobrecarga · tensión de control incorrecta (modelos 255–412 A). Reset: Power-on/Reset/Auto/DIx.
- **E72 — Sobrecorriente antes del By-Pass** (LED Fault ×4, LED Ready apagado).
  Antes del cierre del by-pass, corriente superior a: 37,5 A (≤30 A) · 200 A (45–85 A) · 260 A (130 A) · 400 A (171–200 A) · 824 A (255–412 A). Causas: rampa muy corta · motor con In mayor a la del arrancador · eje trabado. Reset: Power-on/Reset/Auto/DIx.
- **E75 — Frecuencia fuera de tolerancia** (LED Fault ×1, LED Ready apagado).
  Frecuencia fuera de 45–66 Hz. Causas: red fuera de límites · generador que no soporta la carga/arranque. Reset: Power-on/Reset/Auto/DIx.
- **E77 — Contacto del By-Pass cerrado o SCR en cortocircuito** (LED Fault ×6, LED Ready apagado).
  Al apagar el motor no hay diferencia de tensión entrada-salida. Causas: mal contacto en cables del by-pass · contactos del by-pass pegados · tiristor en corto · cortocircuito externo entrada-salida · motor desconectado. Reset: Power-on/Reset/DIx.

**RESET de fallas:** tecla O/RESET del frontal · botón RESET (unidades sin HMI) · reset automático (habilitable por DIP) · entrada digital DI2/DI3 · corte y reposición de energía (power-on). E67 no tiene autoreset. E04/E05 requieren esperar enfriamiento.

---

## PARÁMETROS DE COMUNICACIÓN (Modbus RTU — módulo KRS-485/KRS-232 opcional)
> Fuente: guía de AutomationDirect (tercero). Verificar contra el Manual de Comunicación Serial SSW-07/SSW-08 de WEG.
- **P200** — Contraseña 0=inactiva / 1=activa.
- **P308** — Dirección del arrancador (1–247), padrón 1.
- **P312** — Protocolo y velocidad: 1=Modbus 9600 8N2 (padrón) … 9=Modbus 38400 8E1 (opciones 9600/19200/38400 con N2/O1/E1).
- **P313** — Acción ante error de comunicación (E28): 0=inactivo · 1=deshabilita · 2=deshabilita general · 3=cambia a local.
- **P314** — Tiempo de verificación de comunicación (0=inactivo, 1–999).
- Función lectura Modbus = FC3; escritura = FC6/16. Dirección Modicon = 40001 + nº parámetro (ej. P222 → 40223).
- Variables: **VB01** (estado: motor parado/girando, habilitado, acelerando, límite de corriente, tensión plena, bypass, local/remoto, error…) y **VB03** (comando: girar por rampa, habilitar, jog, sentido, local/remoto, reset).
- Módulo KRS-485: terminación 120 Ω por DIP S1 (recomendada con cable > 3 m). Software WEG: **SuperDrive G2** (PC), **SAM1**/apps.

---

## DATOS TÉCNICOS (cap. 8)
- **Potencia (R/S/T):** 220–575 Vca (−15%/+10%), o 187–632 Vca · 50/60 Hz (±10%) o 45–66 Hz.
- **Control (A1/A2):** 110–240 Vca (17–200 A) · 110–130 o 208–240 Vca (255–412 A) · 50/60 Hz.
- **Consumo control:** 15 VA (17–200 A) · 60 VA continuo + 800 VA al cerrar el bypass (255–412 A).
- **Arranques/hora (sin ventilación):** 10 (17–30 A, 1 cada 6 min) · 3 (45–200 A, 1 cada 20 min) · 10 (255–412 A). Con kit de ventilación: 10 (45–200 A).
- **Ciclo de arranque:** 3× In del SSW-07 durante 30 s.
- **SCR:** tensión reversa de pico máx 1600 V. Sobretensión cat. III (UL508/EN61010).
- **Entradas:** 3 digitales aisladas (nivel alto mín 93 Vca, bajo máx 10 Vca, máx 264 Vca, 1,47 mA @220 Vca), programables.
- **Salidas:** 2 relés NA, 240 Vca, 1 A, programables.
- **Métodos de control:** rampa de tensión · límite de corriente (· control de bombas).
- **Protecciones:** sobrecorriente · falta de fase · secuencia de fase invertida · sobretemperatura del disipador · sobrecarga del motor · defecto externo · contactor de by-pass abierto · contactor de by-pass cerrado · sobrecorriente antes del by-pass · rotor bloqueado · frecuencia fuera de tolerancia · subtensión en la electrónica.
- **Fusibles / cortocircuito:** fusibles ultrarrápidos aR (Bussmann 6.6URD…, tabla 3.6/3.7) para protección de SCR y capacidad de cortocircuito (Standard Fault / High Fault). Coordinación Tipo 1 admite fusibles/disyuntores comunes.
- **Opcional:** Kit IP20 (cap. 7).

---

## MAPA A SECCIONES DE LA APP
- **Datos del equipo** ← gama 17–412 A con potencia por tensión (220/380/440/575 V) · bypass interno · métodos de control.
- **Diagramas interactivos** ← potencia R/S/T→U/V/W + control (A1 A2 DI1 DI2 DI3 13 14/23 24) + 4 setups (2 hilos/contactor, 3 hilos/disyuntor, inversión, freno CC). Cada borne tocable con su función.
- **Parámetros** ← esenciales de puesta en marcha (P101/102/110/202/219/220/400/401/406/640…) + equivalencia trim-pot/DIP. ⚠ Lista completa = Manual de Programación (pendiente).
- **Presets por carga** ← Control de bombas (P202=2) documentado; rampa de tensión (genérico); límite de corriente (par alto). Otras cargas: guía general.
- **Protecciones** ← lista del cap. 8.4 + clase térmica + factor de servicio.
- **Conexión en línea vs inside-delta** ← SSW-07 = **solo conexión en línea (3 hilos)**. NO tiene inside-delta → marcar "No aplica".
- **Bypass y comando (2/3 hilos)** ← bypass INTERNO integrado; comando 2 hilos (retención) y 3 hilos (pulsadores, requiere reprogramar DI2).
- **Códigos de falla** ← E03/E04/E05/E19/E62/E63/E66/E67/E70/E71/E72/E75/E77 con causa, LED y reset (buscador por código).
- **Checklist de puesta en marcha** ← Quick Start (rampa de tensión) + ajuste de Motor Current + clase térmica + verificación de sentido de giro + notas de seguridad.

## PENDIENTES / A VERIFICAR
- [ ] Aprobación del usuario.
- [ ] **Manual de Programación SSW-07** (lista COMPLETA de parámetros P y descripción de todos los Exx) — no incluido; este Manual de Usuario cubre lo esencial.
- [ ] Inside-delta: no aplica al SSW-07.
- [ ] Imágenes de esquemas (figuras 3.10–3.13) y ubicación de trim-pots/DIP: están en el PDF; extraer si se decide la vía "foto marcada".
- [ ] Guía de comunicación es de AutomationDirect (tercero); para datos Modbus oficiales usar el Manual de Comunicación Serial WEG.
