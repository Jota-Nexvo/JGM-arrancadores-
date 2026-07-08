# WEG SSW-05 Plus — Datos extraídos (arrancador suave)

> **Fuente:** `uploads/WEG-ssw05-users-guide-0899.5119-2.3x-manual-english.pdf` — **Manual del Usuario oficial WEG SSW-05 Plus**, doc **0899.5119 / versión 2.3X /9**, 92 pág., trilingüe EN-ES-PT (se usó la sección en inglés, la más completa). Norma IEC 60947-4-2 / UL508.
> **Estado:** Sin verificar por el usuario (pendiente de aprobación).

## ⚠ NATURALEZA DEL EQUIPO
Arrancador **compacto tipo "Plus"**, muy parecido en filosofía al SSW-07: se ajusta por **trim-pots + DIP switches** de fábrica (sin display), y opcionalmente por **teclado serie remoto HMI-SSW05-RS** (display 4 dígitos 7 segmentos, 2 LED, 5 teclas) que habilita los parámetros "P" y comunicación serie RS-232.
- **P220 = 0** → ajustes por trim-pots y DIP (padrón). Fallas por parpadeo de LED.
- **P220 = 1** → ajustes por HMI / serie. Fallas por código Exx en display.
→ En la app: mostrar cada ajuste por **ambas vías** (trim-pot/DIP y parámetro P) y cada falla con **código Exx + patrón de parpadeo LED**.

## DECODIFICACIÓN DEL MODELO (código SSW05...)
Ej. `SSW05 0010 T 2246 P P Z`:
- `0010` = corriente nominal (10 A)
- `T` = trifásico
- `2246` = tensión de potencia **220 a 460 V** (`4657` = 460 a 575 V)
- primera `P` = idioma manual (P=Portugués, E=Inglés, S=Español)
- segunda `P` = versión **Plus**
- `Z` = fin de código.

---

## GAMA / MODELOS (8 corrientes; potencia por tensión) — Tabla 6
Modelo (A) · HP/kW@220-240V · HP/kW@380-415V · HP/kW@440-480V · kW@525V · HP@575V · cable mm²(AWG) · Tamaño
- **SSW-05.3** — 3 A · 0,75HP/0,55kW · 1,5HP/1,1kW · 1,5HP/1,1kW · 1,5kW · 2HP · 0,75mm²(18) · Tam.1
- **SSW-05.10** — 10 A · 3HP/2,2kW · 5HP/3,7kW · 5HP/3,7kW · 5,5kW · 7,5HP · 1,5mm²(16) · Tam.1
- **SSW-05.16** — 16 A · 5HP/3,7kW · 7,5HP/5,5kW · 10HP/7,5kW · 11kW · 10HP · 4mm²(12) · Tam.1
- **SSW-05.23** — 23 A · 7,5HP/5,5kW · 10HP/7,5kW · 15HP/11kW · 15kW · 20HP · 6mm²(10) · Tam.1
- **SSW-05.30** — 30 A · 10HP/7,5kW · 15HP/11kW · 20HP/15kW · 18,5kW · 25HP · 10mm²(8) · Tam.1
- **SSW-05.45** — 45 A · 15HP/11kW · 25HP/18,5kW · 30HP/22kW · 30kW · 40HP · 16mm²(6) · Tam.2
- **SSW-05.60** — 60 A · 20HP/15kW · 30HP/22kW · 40HP/30kW · 45kW · 50HP · 25mm²(4) · Tam.2
- **SSW-05.85** — 85 A · 30HP/22kW · 50HP/37kW · 60HP/45kW · 55kW · 75HP · 35mm²(2) · Tam.2
(Potencias para motor WEG 4 polos estándar. 3A–30A = Tamaño 1; 45A–85A = Tamaño 2.)

### Fusibles y contactores recomendados (Tabla 9)
| Modelo | Contactor K1 | Fusible F1/F2/F3 | Fusible control F11/F12/F21 |
|---|---|---|---|
| 3 A | CWM09 | Tipo D 10 A | Tipo D 6 A |
| 10 A | CWM12 | Tipo D 16 A | Tipo D 6 A |
| 16 A | CWM18 | Tipo D 25 A | Tipo D 6 A |
| 23 A | CWM25 | Tipo D 35 A | Tipo D 6 A |
| 30 A | CWM32 | Tipo D 50 A | Tipo D 6 A |
| 45 A | CWM50 | Tipo D 63 A | Tipo D 6 A |
| 60 A | CWM65 | Tipo NH 100 A | Tipo D 6 A |
| 85 A | CWM95 | Tipo NH 125 A | Tipo D 6 A |
Capacidad de cortocircuito (SCCR): 5 kA (3–60 A) · 10 kA (85 A), 220–575 V.

### Par de apriete y dimensiones
- Potencia (R,S,T,U,V,W): 3,0 Nm (Tam.1) · 5,5 Nm (Tam.2). Electrónica: 0,5 Nm.
- Fijación: riel DIN 35 mm o tornillos M4 (par de tornillo ≤1 Nm; usar soporte superior).
- Tam.1: 59×130×145 mm · 0,74 kg. Tam.2: 79×185×172 mm · 1,67 kg. IP00 (chasis).

---

## CONEXIONES

### Potencia
- **Entrada red:** R/1L1 · S/3L2 · T/5L3. **Salida motor:** U/2T1 · V/4T2 · W/6T3. Tierra: solo carcasa del motor.
- ⚠ **Al energizar por primera vez: conectar primero la alimentación de control (A1/A2) y después la de potencia.**
- Bypass interno integrado.

### Control (frontal)
- **A1, A2** — Alimentación de la electrónica: 90–250 Vca 50/60 Hz (±6 Hz), 200 mA. (Si la línea excede 250 V, usar transformador T1; para 400 V usar neutro + una fase.)
- **DI1** — Entrada digital 1: **Habilita/Deshabilita el motor** (marcha/paro). Programable a "Falla Externa" (P264=2). 90–250 Vca, 6 mA.
- **DI2** — Entrada digital 2: **Reset** de fallas (cierre momentáneo 0,5 s).
- **13** — Salida relé "Operación" (contacto NA 13–14/23): cierra al recibir el comando de habilitar; abre al final de la rampa de desaceleración o al deshabilitar.
- **14/23** — Común de relés.
- **24** — Salida relé "Tensión Plena" (NA 14/23–24): cierra cuando aplica 100% de tensión al motor. Programable por P277 (1=Tensión plena, 2=Error, 3=Serial). Relés 1 A 250 Vca.
- **Conector serie RS-232C** — para HMI-SSW05-RS o módulo MIW-02 (a RS-485, hasta 1000 m).

### Esquemas de accionamiento incluidos (figuras 11.2–11.4)
1. **11.2** — Marcha/paro simplificado en línea 230 V/400 V.
2. **11.3** — Marcha/paro con contactor K1 y pulsadores (botón NA con retención + NC de paro). T1 solo si la línea sale del rango 90–250 V del control.
3. **11.4** — Marcha/paro con pulsadores usando el relé "Operación" del propio SSW-05.
- Conexión del motor: figuras CORRECTO/INCORRECTO (no conectar en configuraciones prohibidas). Solo motores de inducción trifásicos.

---

## AJUSTES / PARÁMETROS

### Ajustes por trim-pot (P220=0, punto rojo = valor de fábrica)
1. **Tensión de pedestal (Pedestal Voltage)** — 30…80% Un. Ajustar al valor donde el motor empieza a girar al dar la marcha. (P101)
2. **Tiempo de rampa de aceleración** — 1…20 s. Ajustar para que el motor llegue a velocidad nominal. (P102)
3. **Tiempo de rampa de desaceleración** — Off…20 s. Solo para bombas, reduce el golpe de ariete. (P104)
4. **Corriente del motor (Motor Current)** — 30…100% de In del SSW. Define TODAS las protecciones (sobrecorriente, sobrecarga, rotor bloqueado, falta de fase). Ajuste = I_motor / I_SSW05. Ej: motor 25 A en SSW de 30 A → 83%. (P105)
- **DIP switches**: habilitar/deshabilitar protecciones, reset manual/automático (auto), clase térmica.

### Tabla de parámetros (con HMI, P220=1) — solo lectura
- **P000** Acceso a parámetros (poner **5** para poder modificar; otro valor = solo lectura).
- **P002** Corriente motor (% In) · **P003** Corriente motor (A) · **P023** Versión de software.
- **P030/P031/P032** Corriente fase R/S/T (A, ±10%).
- **P050** Estado de la protección térmica del motor (0…250; 250 = disparo E05).

### Tabla de parámetros (lectura y escritura)
| Parám | Función | Rango | Fábrica | Unidad |
|---|---|---|---|---|
| P101 | Tensión inicial (pedestal) | 30…80 | 30 | %Un |
| P102 | Tiempo rampa de aceleración | 1…20 | 10 | s |
| P104 | Tiempo rampa de desaceleración | 0…20 | 0=off | s |
| P105¹ | Ajuste corriente del motor | 30…100 | 100 | % |
| P106¹ | Configuración de protecciones | 0…3F Hex | 1F Hex | — |
| P204¹ | Cargar ajuste de fábrica (5=carga) | 0/5 | 0 | — |
| P206 | Tiempo de auto-reset | 1…1200 | 900 | s |
| P215¹ | Función copia de teclado (0 off/1 copia/2 pega) | 0-2 | 0 | — |
| P220¹ | Selección HMI vs Trimpot/DIP (0=Trim/DIP, 1=HMI) | 0/1 | 0 | — |
| P264¹ | Función entrada digital DI1 (0 no usada/1 hab-deshab/2 falla externa) | 0-2 | 1 | — |
| P277¹ | Salida relé programable 14/23-24 (1 tensión plena/2 error/3 serial) | 1-3 | 1 | — |
| P295¹² | Corriente nominal del SSW (0=3A…7=85A) | 0-7 | según tipo | — |
| P308 | Dirección de red (serial) | 1…30 | 1 | — |
| P313 | Acción ante error de comunicación serie | 1-4 | 1 | — |
| P314 | Tiempo de verificación de comunicación serie | 0…5 | 0=off | s |
| P610 | Subcorriente inmediata (umbral) | 30…100 | 30 | % |
| P611 | Tiempo de subcorriente inmediata | 1…99 | 0=desact | s |
¹ Solo con motor parado. ² No cambia con "cargar ajuste de fábrica".

### P106 — Configuración de protecciones (hexadecimal, bits)
Bit0 Sobrecorriente · Bit1 Falta de fase · Bit2 Secuencia de fase incorrecta · Bit3 Rotor bloqueado · Bit4 Sobrecarga motor · Bit5 Reset automático. (1=habilitado). Ej. P106=13Hex = sobrecorriente+falta de fase+sobrecarga habilitados. Fábrica 1F Hex.

---

## PROTECCIÓN DE SOBRECARGA
- Imagen térmica electrónica (True RMS), **Clase 10** (IEC 947-4-2).
- La imagen térmica del motor se guarda al cortar A1/A2 y se recupera al reponer. El reset por DI2/botón devuelve la imagen al valor guardado del último apagado.
- La imagen térmica de los tiristores NO se guarda (arranca en cero); se enfría en marcha por el bypass.
- Reset de sobrecarga: manual (DI2/botón) o automático (DIP "auto" o P206).

## RESET DE FALLAS
- Botón RESET frontal · cierre momentáneo (0,5 s) de DI2 · apagar/encender A1-A2 (power-on) · tecla del HMI · auto-reset (DIP "auto" o P106/P220).
- Auto-reset: a los **15 min** en: sobrecorriente, falta de fase, rotor bloqueado, sobrecorriente relé bypass, sobrecorriente antes de bypass, frecuencia fuera de tolerancia, contacto bypass abierto, subtensión de control, falla externa. Tiempo modificable en P206.
- **Sin auto-reset** para secuencia de fase incorrecta.
- Sobrecarga de motor y de tiristores: algoritmo específico de auto-reset.
- ⚠ **NO resetear con el motor en régimen (tensión plena): abre los relés de bypass bajo carga y reduce su vida útil.**

---

## 🔎 CÓDIGOS DE FALLA (función estrella) — Exx + patrón de LED
Formato: **Código — Descripción — LED (patrón) — Causas — Reset**

- **E03 — Falta de fase / subcorriente** · LED Phase Loss. Al arrancar: sin tensión en R/S/T o motor desconectado. En marcha (100%): actúa 1 s tras detectar falta de fase (entrada o salida), o si la corriente < x% del trim Motor Current (x=20% si trim/P105 entre 50-100%; x=30% si entre 30-50%), o desbalance entre fases > 30%. Causas: falla de fase de red · cortocircuito/falla de tiristor · motor no conectado · conexión errada · problema del contactor de entrada · fusibles abiertos · trim Motor Current mal ajustado · corriente del motor menor a la necesaria. Reset: power-on/botón/auto/DI2.
- **E05 — Sobrecarga de salida (función Ixt)** · LED Overload. Excedidos los tiempos de la clase térmica. Causas: trim Motor Current / P105 muy bajo · carga excesiva en el eje · demasiados arranques sucesivos. Reset: power-on/botón/auto/DI2.
- **E06 — Falla externa** · LED Internal Fault ×7. DI1 abierto (programado como falla externa P264=2). Causa: cableado de DI1 abierto/no conectado. Reset: power-on/botón/DI2.
- **E10 — Error en la función de copia** · Solo con HMI. Intento de copiar parámetros a un SSW con versión de software diferente. Reset: power-on.
- **E2x — Error de comunicación serie** (con HMI/serie):
  - **E22** paridad longitudinal · **E24** parametrización · **E25** variable/parámetro inexistente · **E26** valor esperado fuera de límites · **E27** intento de escritura en variable de solo lectura o control lógico deshabilitado · **E29** comunicación cíclica interrumpida.
- **E31 — Falla de conexión del teclado (HMI)** · Cable del teclado mal conectado o ruido eléctrico (EMI). Desaparece solo al restablecer la comunicación. ⚠ Con HMI, resetear siempre con la tecla del HMI (no con DI2/botón frontal, que causan E31).
- **E63 — Rotor bloqueado** · LED Stall. Tiempo de rampa programado menor que el tiempo real de aceleración · eje trabado · carga excesiva · demasiados arranques. Reset: power-on/botón/auto/DI2.
- **E64 — Sobrecarga de tiristores** · LED Internal Fault ×6. Monitorea la corriente en las rampas vs. la nominal del SSW (curvas t×T). Causas: rampa muy corta · corriente del motor mayor a la del SSW · eje trabado. Reset: power-on/botón/auto/DI2.
- **E65 — Subcorriente inmediata** · LED Internal Fault ×8. En régimen (100%), corriente < P610% del trim Motor Current durante > P611. Causas: P610 muy alto · motor en vacío · bomba en vacío. Reset: power-on/botón/auto/DI2.
- **E66 — Sobrecorriente** · LED Overcurrent. En régimen (100%), corriente > 3× trim Motor Current durante > 1 s. Causas: cortocircuito entre fases · sobrecarga momentánea · eje trabado. Reset: power-on/botón/auto/DI2.
- **E67 — Secuencia de fase incorrecta** · LED Phase Seq. Secuencia de red invertida en la entrada. Reset: power-on/botón/DI2. **Sin auto-reset.**
- **E70 — Subtensión en la alimentación de control** · LED Internal Fault ×2. Tensión en A1/A2 < 80% de la nominal. Causas: alimentación baja · mal contacto · fusible de control abierto. Reset: power-on/botón/auto/DI2.
- **E71 — Contacto del relé de bypass interno abierto** · LED Internal Fault ×3. Solo en régimen (100%). Reset: power-on/botón/auto/DI2.
- **E72 — Sobrecorriente antes del bypass** · LED Internal Fault ×4. En la transición fin de rampa→cierre del bypass, corriente ≥ nivel nominal. Nivel: 37,5 A (3–30 A) · 200 A (45–85 A). Causas: rampa muy corta · motor con In mayor a la del SSW · eje trabado. Reset: power-on/botón/auto/DI2.
- **E73 — Sobrecorriente del relé de bypass del SSW** · LED Internal Fault ×5. Solo en régimen (100%), corriente > nivel por > 1 s. Nivel: 60 A (3–30 A) · 200 A (45–85 A). Reset: power-on/botón/auto/DI2.
- **E75 — Frecuencia fuera de tolerancia** · LED Internal Fault ×1. Frecuencia de red fuera de ±10% de 50/60 Hz. Reset: power-on/botón/auto/DI2.

**Indicadores LED de estado:** Ready (fijo=energizado esperando comando o a tensión plena; parpadea=en rampa) · Run (encendido solo en operación a tensión plena).

---

## SOLUCIÓN DE PROBLEMAS FRECUENTES (cap. 18)
- **El motor no arranca:** revisar cableado de potencia y control · verificar alimentación R/S/T y control A1/A2 · verificar ajustes correctos para la aplicación · verificar que el SSW no esté en condición de falla (ver protecciones).
- **La velocidad del motor oscila:** conexiones flojas → apagar, desenergizar y ajustar todas las conexiones; revisar conexiones internas.
- **Velocidad muy alta o baja:** verificar datos de placa del motor y selección del motor según la aplicación.
- **Golpes al desacelerar la bomba:** reducir el tiempo de rampa de desaceleración.
- **Golpes al acelerar la bomba:** reducir el tiempo de rampa de aceleración y reducir la tensión de pedestal.

## ACCESORIOS (cap. 19)
- **HMI-SSW05-RS** — teclado serie remoto (display 4 díg, 2 LED, 5 teclas), montable en puerta de tablero, con función de copia de parámetros (P215). Item 417100996.
- **CAB-RS-1/2/3** — cables 1/2/3 m para el teclado remoto (separar ≥10 cm del cableado de potencia).
- **MIW-02** — conversor RS-232 a RS-485 (red multipunto hasta 1000 m). Item 417100543.

## DATOS TÉCNICOS (resumen)
- Control A1/A2: 90–250 Vca 50/60 Hz (±6 Hz), 200 mA.
- Potencia R/S/T: 220–460 V o 460–575 V (+10%/−15%) 50/60 Hz (±5 Hz).
- Ajustes: pedestal 30–80% Un · aceleración 1–20 s · desaceleración off–20 s · corriente motor 30–100% In.
- Régimen de arranque: máx **4 arranques/hora** (1 cada 15 min) · ciclo 3× In durante 10 s.
- Entradas digitales: 90–250 Vca 6 mA. Salidas relé: 1 A 250 Vca.
- Comunicación: serie RS-232C.
- Ambiente: 0–55 °C · HR 5–90% sin condensación · altitud 0–1000 m (hasta 4000 m con derating 10%/1000 m) · polución 2 · IP00.
- EMC Clase A (uso industrial). Normas UL508 / IEC 60947-4-2.

---

## MAPA A SECCIONES DE LA APP
- **Datos del equipo** ← gama 3–85 A, potencias por tensión, fusibles/contactores, cortocircuito, dimensiones.
- **Diagramas interactivos** ← potencia R/S/T→U/V/W + control (A1 A2 DI1 DI2 13 14/23 24 + serie) + 3 esquemas (contactor+pulsadores, pulsadores con relé Operación, simplificado). Bornes tocables con función.
- **Parámetros** ← ajustes por trim-pot (pedestal, aceleración, desaceleración, corriente motor) + tabla P (P101/102/104/105/106/220/264/277/295...) + P106 hexadecimal de protecciones. Curva de arranque = P101+P102 (Fig 22.1); parada = P104.
- **Presets por carga** ← Bombas: usar rampa de desaceleración (P104) para evitar golpe de ariete. Otras cargas: guía general (el SSW-05 no trae asistente por tipo de carga como el Lovato).
- **Protecciones** ← lista de protecciones + clase térmica 10 + P106 (habilitación por bits).
- **Conexión en línea vs inside-delta** ← SSW-05 = **solo conexión en línea**. NO inside-delta → "No aplica".
- **Bypass y comando (2/3 hilos)** ← bypass interno; comando por DI1 (2 hilos con retención) y con pulsadores/contactor (esquemas 11.3/11.4).
- **Códigos de falla** ← E03/E05/E06/E10/E2x/E31/E63/E64/E65/E66/E67/E70/E71/E72/E73/E75 con causa, LED y reset (buscador por código).
- **Checklist de puesta en marcha** ← energizar control antes que potencia · ajustar pedestal, aceleración, corriente motor · verificar sentido de giro · verificar clase térmica/protecciones.

## PENDIENTES / A VERIFICAR
- [ ] Aprobación del usuario.
- [ ] Inside-delta: no aplica al SSW-05.
- [ ] Imágenes de esquemas (fig 11.2–11.4) y ubicación de trim-pots/DIP: en el PDF; extraer si se decide la vía "foto marcada".
- [ ] Curvas de sobrecarga (fig 15.1/15.2) e imagen térmica: en el PDF como gráficos.
