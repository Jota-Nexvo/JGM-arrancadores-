# WEG SSW-07 / SSW-08 — PERFIL DE PROGRAMACIÓN COMPARTIDO

> **Fuente:** `uploads/weg-ssw07-programming-manual-0899.5665-1.5x-manual-english.pdf` — **Manual de Programación WEG serie SSW-07 / SSW-08**, doc **0899.5665 / rev 08**, SW **V1.5X**, 08/2015, 42 pág., inglés.
> **Estado:** Sin verificar por el usuario (pendiente de aprobación).
> **Alcance:** WEG publica UN SOLO manual de programación para **SSW-07 y SSW-08** (56 menciones al SSW-08). Parámetros, HMI, comandos y códigos de falla son COMUNES a ambos. Debe usarse junto con el User's Guide de cada modelo (que trae conexiones y datos técnicos propios).

## ✅ CONFIRMACIÓN (2ª vez que aplica la regla del usuario)
Igual que Lovato ADXL, la serie WEG SSW-07/SSW-08 comparte programación. → En la app: **UN "perfil de programación SSW-07/08" compartido** (esta tabla de parámetros + fallas Exx + HMI) que ambos modelos referencian; cada modelo aporta sus datos propios de gama/conexión (User's Guide) — el del SSW-07 ya está en `SSW07-datos-extraidos.md`.

## DIFERENCIA CLAVE SSW-07 vs SSW-08 (nota para la app)
Ambos son compactos con trim-pots + DIP y HMI opcional. El **SSW-08** es una evolución con **más funciones por parámetro** (este manual las cubre todas). Diferencias funcionales que aparecen en los parámetros y NO estaban en el User's Guide del SSW-07:
- **P202 Tipo de control** agrega: 4=Rampa de corriente, **5=Directo en línea (DOL)**, además de 0=Rampa de tensión, 1=Límite de corriente, 2=Control de bombas.
- **Freno CC** (P501/P502), **Jog** (P510/P511), **Kick Start por parámetro** (P520/P521/P522).
- **FWD/REV** (inversión de giro) por entrada digital y relé.
- **Comunicación Fieldbus**: CAN / DeviceNet (P331–P348) además de Modbus RS-232/485 (P308–P314).
- Protecciones más finas por parámetro (desbalance de corriente, sobrecorriente/subcorriente inmediata configurables, intervalo entre arranques).
- El User's Guide del SSW-07 (0899.5832) define el hardware/gama 17–412 A y los esquemas de conexión. Confirmar con el usuario si el SSW-08 usará la misma gama o si conseguirá el User's Guide propio del SSW-08.

---

## USO DEL TECLADO (HMI) — común
- HMI local o remoto: display LED 7 segmentos 4 dígitos, **4 LED de estado**, **8 teclas**.
- LED Local (verde) / Remoto (rojo). LED de sentido de giro (horario/antihorario, FWD/REV).
- Teclas: START (habilita) · STOP (deshabilita / resetea fallas) · seleccionar (nº↔valor) · ▲ incrementa · ▼ decrementa · Local/Remoto · FWD/REV (invierte giro) · JOG (mantener pulsada; requiere DIx de habilitación general cerrada y motor parado).
- **P000 = 5** para poder modificar parámetros (si no, solo lectura).
- **P219** define el origen de programación de protecciones y rampas: 0=Trim-pots+DIP · 1=Teclado (todo por parámetro) · 2=Control de bombas por trim-pots. Si P219=0, los parámetros de rampa/protección son solo lectura.
- Software PC: **SuperDrive G2** (la 1ª gen "SuperDrive" NO es compatible).

## ESTADOS (P006 / display)
rdy=preparado · ruP=rampa de subida · PASS=bypass · rdo=rampa de bajada · br=frenado · rEv=FWD/REV · JoG=jog · dly=espera P630 · G.di=deshabilitación general · Exx=error.

---

## TABLA COMPLETA DE PARÁMETROS (P000–P641)

### Lectura (P001–P096)
- P000 Acceso a parámetros (0…9999; poner 5 para modificar).
- P001 Corriente motor (%In del SSW) · P002 Corriente motor (%In del motor) · P003 Corriente motor (A).
- P005 Frecuencia de red (Hz) · P006 Estado del SSW (ver arriba) · P007 Tensión impuesta a la carga (%Un) · P011 Potencia aparente de salida (kVA).
- P012 Estado DI1–DI3 · P013 Estado relés RL1/RL2.
- **P014/P015/P016/P017** Última / 2ª / 3ª / 4ª falla ocurrida (E00–E77) → historial de fallas.
- P020 Falla actual · P023 Versión de software.
- P030/P031/P032 Corriente fase R/S/T (A) · P050 Estado protección térmica motor (0…250) · P081 Temperatura del disipador (°C).
- P090–P096 Estados/contadores CAN · P091/P092 estado DeviceNet.

### Regulación P100–P199 (rampas y límite de corriente)
| Parám | Función | Rango | Fábrica | Un |
|---|---|---|---|---|
| P101³ | Tensión inicial (pedestal) | 30…90 | 50 | %Un |
| P102³ | Tiempo rampa de aceleración | 1…999 | 20 | s |
| P103 | Escalón de tensión en desaceleración | 100=inact / 99…60 | 100 | %Un |
| P104³ | Tiempo rampa de desaceleración | 0=inact / 1…240 | 0 | s |
| P105 | Tensión final de desaceleración | 30…55 | 30 | %Un |
| P110³ | Límite de corriente (%In SSW) | 30…500 | 300 | % |
| P111 | Corriente inicial para rampa de corriente | 30…500 | 150 | % |
| P112 | Tiempo de rampa de corriente (% de P102) | 1…99 | 20 | % |

### Configuración P200–P299
- **P200** Contraseña 0=inact/1=activa (fábrica 1).
- **P202 Tipo de control:** 0=Rampa de tensión · 1=Límite de corriente · 2=Control de bombas · 4=Rampa de corriente · **5=Directo en línea (DOL)**. (Fábrica 0.)
- **P203** Control de ventilador: 0=siempre OFF · 1=siempre ON · 2=por software (fábrica 2).
- P204 Cargar valores de fábrica (5=carga) · P205 Selección de parámetro de lectura (fábrica P001) · P206 Tiempo de auto-reset (3…1200 s, fábrica 900) · **P207 Auto-reset** 0=inact/1=activo · P215 Función copia (0/1 SSW→teclado/2 teclado→SSW) · P219 Parametrización (Trim/Teclado/Bombas).
- **P220** Local/Remoto (0 siempre local … 8 fieldbus remoto; fábrica 3=teclado remoto) · **P229** comando local (0 teclado…3 fieldbus) · **P230** comando remoto (fábrica 1=DIx).
- **Entradas digitales** (funciones): 
  - **P263 DI1:** 0=sin func · 1=Start/Stop (2 hilos) o Start (3 hilos) · 2=Local/Remoto · 3=Falla externa (NC) · 4=FWD/REV · 5=Freno OFF · 6=Reset · 8=Jog. (Fábrica 1.)
  - **P264 DI2:** 1=Stop (3 hilos) · 2=Local/Remoto · 3=Falla externa · 4=FWD/REV · 5=Freno OFF · 6=Reset · 7=Arranque de emergencia · 8=Jog. (Fábrica 6=Reset.)
  - **P265 DI3:** 1=Habilitación general · 2=Local/Remoto · 3=Falla externa · 4=FWD/REV · 5=Freno OFF · 6=Reset · 7=Arranque emergencia · 8=Jog. (Fábrica 6=Reset.)
- **Relés de salida:**
  - **P277 RL1 / P278 RL2:** 0=sin func · 1=En marcha · 2=Tensión plena · 4=FWD/REV-K1/K2 · 5=Freno CC · 6=Sin falla · 7=Falla · 9=Serial · 13=Shunt Trip. (Fábrica RL1=1 En marcha, RL2=2 Tensión plena.)
- **P295 Corriente nominal del SSW:** 0=1,7A · 1=17A · 2=24A · 3=30A · 4=45A · 5=61A · 6=85A · 7=130A · 8=171A · 9=200A · 10=255A · 11=312A · 12=365A · 13=412A.

### Comunicación P300–P399
- Serie: **P308** dirección (1…247) · **P312** protocolo/velocidad Modbus (9600/19200/38400 bps, sin/impar/par paridad; fábrica 1=Modbus 9600 sin paridad) · **P313** acción ante error E28 (0 inact/1 deshab/2 deshab gral/3 pasa a local) · **P314** tiempo de verificación.
- Fieldbus CAN/DeviceNet: P331 dirección CAN · P332 baud CAN · P333 reset bus off · P335 instancias E/S DeviceNet · P336–P347 palabras de lectura/escritura DeviceNet · P348 acción ante error de fieldbus.

### Motor P400–P499
- **P400** Tensión nominal del motor (1…999 V, fábrica 380).
- **P401** Ajuste de corriente del motor (30…100% del In del SSW, fábrica 100).
- **P406** Factor de servicio (1,00…1,50, fábrica 1,00).

### Funciones especiales P500–P599
- **Freno CC:** P501 tiempo (0…299 s, 0=inact) · P502 nivel de tensión (30…70%).
- **Jog:** P510 (0/1) · P511 nivel (30…70%).
- **Kick Start:** P520 (0/1) · P521 tiempo del pulso (0,2…2,0 s) · P522 nivel de tensión del pulso (70…90%Un).

### Protecciones P600–P699
- **P610** Falta de fase / subcorriente inmediata (1…80% In motor, fábrica 80) · **P611** tiempo (0=inact/1…99 s, fábrica 1).
- **P612** Sobrecorriente inmediata (1…200% In motor, fábrica 100) · **P613** tiempo (0=inact/1…99, fábrica 1).
- **P614** Desbalance de corriente entre fases (0…30% In motor, fábrica 15) · **P615** tiempo (0=inact/1…99, fábrica 0).
- **P616** Subcorriente antes del cierre del bypass (0/1, fábrica 0).
- **P617** Rotor bloqueado (0/1, fábrica 1).
- **P620** Secuencia de fase RST (0/1, fábrica 1) · **P621** Habilitación de E77 (0/1, fábrica 1).
- **P622** Detección de cortocircuito del SSW (0/1, fábrica 0).
- **P630** Intervalo de tiempo tras la parada (2…999 s, fábrica 2).
- **P640** Clase térmica del motor: 0=inact · 1=cl.5 · 2=cl.10 · 3=cl.15 · 4=cl.20 · 5=cl.25 · 6=cl.30 (fábrica 6=clase 30).
- **P641** Auto-reset de memoria térmica (0=inact/1…600 s).
Notas: (1) cambiable solo con motor deshabilitado · (2) no cambia con carga de fábrica · (3) cambiable solo en modo teclado (P219=1); si P219=0 son solo lectura.

---

## 🔎 CÓDIGOS DE FALLA COMPLETOS (Exx) — SSW-07/08 — función estrella
(Amplía y precisa la lista del User's Guide del SSW-07. Formato: Código — Descripción — LED — parámetros relacionados)
- **E03** — Falta de fase o subcorriente (LED Phase Loss). Rel: P610/P611/P401.
- **E04** — Sobretemperatura en la potencia (LED Fault ×1, Ready ON). Esperar enfriar antes de resetear.
- **E05** — Sobrecarga del motor (LED Overload). Esperar enfriar el motor. Rel: P401/P406/P640/P641.
- **E06** — Falla externa por DI (LED Fault ×7). Rel: P263/P264/P265=3.
- **E10** — Falla en la función de copia (con HMI). Versiones de software distintas.
- **E19** — Cortocircuito del SSW (LED Fault ×7, Ready OFF). Rel: P622.
- **E24** — Falla de programación. Indica código, no arranca, conmuta relés Sin falla/Falla.
- **E28** — Timeout en la recepción de telegrama (comunicación serie). Configurable en P313/P314.
- **E31** — Falla de conexión del teclado (HMI). El SSW sigue operando según P313/P314; no acepta comandos de teclado.
- **E62** — Timeout de límite de corriente en el arranque (LED Fault ×2, Ready ON). Rampa muy corta / límite muy bajo / rotor bloqueado.
- **E63** — Rotor bloqueado / Stall (LED Stall). Rel: P617.
- **E66** — Sobrecorriente (LED Overcurrent). Rel: P612/P613.
- **E67** — Secuencia de fase invertida (LED Phase Seq). Red invertida / conexión de motor incorrecta. **Sin auto-reset.** Rel: P620.
- **E70** — Subtensión en la alimentación de control (LED Fault ×2, Ready OFF). <93 Vca / mal contacto / fusible de control abierto. (No se guarda en el historial al cortar la línea con motor parado.)
- **E71** — Contacto del relé de bypass interno abierto (LED Fault ×3, Ready OFF). Mal contacto / contactos dañados por sobrecarga / (255–412 A: tensión de control incorrecta).
- **E72** — Sobrecorriente antes del bypass (LED Fault ×4, Ready OFF). Umbral: 37,5 A (≤30 A) · 200 A (45–85 A) · 260 A (130 A) · 400 A (171–200 A). Rampa muy corta / motor con In mayor / rotor bloqueado.
- **E74** — Desbalance de corriente (LED Fault ×5, Ready ON). P614/P615 fuera de límites / pérdida de tensión de fase / falta de fase / transformadores subdimensionados / fusibles abiertos / mal contacto. Rel: P614/P615.
- **E75** — Frecuencia de red fuera de rango (LED Fault ×1, Ready OFF). Fuera de 45–66 Hz / generador que no soporta la carga o el arranque.
- **E76** — Subcorriente antes del cierre del bypass (LED Fault ×4, Ready ON). Al final de la rampa, corriente < 0,1× In del SSW (P295×0,1). P295 mal programado / motor con In por debajo del mínimo / falla de tensión o de tiristor. Rel: P616 (P616=0 para pruebas).
- **E77** — Contacto de bypass cerrado o SCR en cortocircuito (LED Fault ×6, Ready OFF). No abre el circuito del bypass / mal contacto en cables / contactos dañados / cortocircuito externo o en paralelo. Rel: P621.

**Formas de reset:** power-on · reset manual · tecla RESET/STOP · auto-reset (P206/P207) · DIx (reset) · serial. E67 y E77 sin auto-reset. E04/E05 requieren enfriamiento.
**Historial:** P014–P017 guardan las últimas 4 fallas (E70 no se guarda si se corta la línea con motor parado).

---

## MAPA A SECCIONES DE LA APP (aporte de este manual)
- **Parámetros** ← esta tabla COMPLETA P000–P641 (reemplaza el "pendiente" del SSW-07). Curva de arranque: rampa de tensión (P101/P102) · rampa de corriente (P110/P111/P112) · control de bombas · DOL. Parada: P103/P104/P105. Freno CC: P501/P502.
- **Presets por carga** ← P202 tipo de control (bombas, DOL, rampa corriente/tensión) + P219=2 control de bombas por trim-pot.
- **Protecciones** ← P600–P699 completo (falta de fase, sobre/subcorriente, desbalance, rotor bloqueado, secuencia, cortocircuito, intervalo entre arranques, clase térmica, memoria térmica).
- **Códigos de falla** ← E03–E77 con LED y parámetros relacionados (buscador por código). Historial P014–P017.
- **HMI/interfaz** ← teclado 4 LED + 8 teclas, Local/Remoto, FWD/REV, Jog, P000=5, P219.

## PARA EL SSW-08 (modelo nuevo)
- Este manual ES el manual de programación del SSW-08 → su ficha hereda TODA la tabla de parámetros y fallas de arriba.
- **FALTA:** User's Guide propio del SSW-08 (gama de corrientes/potencias, esquemas de conexión, datos técnicos, par de apriete, fusibles). Pedir al usuario si el SSW-08 tendrá ficha propia.
- Guardar referencia cruzada: `manuales/WEG/SSW08/` usará este perfil compartido.

## PENDIENTES / A VERIFICAR
- [ ] Aprobación del usuario.
- [ ] ¿El SSW-08 se incorpora como modelo propio? Si sí, conseguir su User's Guide (hardware/conexiones).
- [ ] Confirmar gama de corrientes del SSW-08 (¿misma 17–412 A que SSW-07?).
