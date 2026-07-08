# Lovato ADXL0115600 — Datos extraídos

> **Fuente:** `uploads/ADXL0115600_20260706.pdf` (5 páginas, idioma original: polaco, traducido).
> **Tipo de documento:** DATASHEET / ficha técnica comercial. **NO es** el manual de usuario/programación.
> **Estado:** Sin verificar por el usuario. Falta manual de operación de la serie ADXL para completar diagramas, parámetros, códigos de falla y puesta en marcha.

## Decodificación del modelo
`ADXL 0115 600` → Serie **ADXL** · Corriente **115 A** · Tensión máx **600 V**.
La programación es común a toda la serie ADXL; entre modelos solo cambia corriente/potencia/tamaño.

## Datos del equipo
- Producto: Softstart (arrancador suave), serie ADXL, motor asíncrono trifásico.
- Tensión de red (nominal): 208…600 VAC — sistema 3F.
- Tensión auxiliar (Us): 100…240 VAC.
- Frecuencia nominal: 50/60 Hz.
- Corriente nominal de arranque (Ie): **115 A**.
- Fases controladas: 2.
- Bypass integrado: **Sí**.
- Refrigeración: natural o forzada (opcional).
- Tensión nominal de aislamiento (Ui): 600 V.

### Potencia nominal (conexión en línea)
IEC (T≤40°C): 230 V → 37 kW · 400 V → 55 kW · 500 V → 75 kW.
UL (T≤40°C): 220–240 V → 40 HP · 380–415 V → 60 HP · 440–480 V → 75 HP · 550–600 V → 100 HP.

## Interfaz de programación
- Display: LCD retroiluminado con íconos.
- Programación por NFC: Sí.
- Puerto óptico: Sí.
- Idiomas: 6.

## Arranque y parada
- Métodos de arranque: rampa de par con límite de corriente · rampa de tensión con límite de corriente · par constante con límite de corriente.
- Métodos de parada: rampa de par · rampa de tensión · marcha libre (coast).

## Funciones
Bypass integrado · display y teclado integrados · medidas visualizadas · control de par · límite de corriente ajustable · frenado dinámico · Kick Start · protección térmica electrónica del motor · entrada sensor PTC · protección falta de fase · protección secuencia de fase incorrecta · protección rotor bloqueado · protección sobretemperatura de tiristores · protección subcarga · alarmas programables · lista de eventos · contador de horas de trabajo del motor · contador de arranques · reloj y calendario · teclado remoto: NO.

## Protecciones
- Alimentación auxiliar: subtensión.
- Alimentación de red: pérdida de alimentación, falta de fase, secuencia de fases, frecuencia fuera de límites, tensión mínima y máxima.
- Motor: sobrecarga en arranque (clase 2, 10A, 10, 15, 20, 25, 30, 35, 40), sobrecarga en marcha (clase 2, 10A, 10, 15, 20, 25, 30), rotor bloqueado, asimetría de corrientes, corriente mínima.
- Arrancador: sobrecorriente, sobretemperatura, falla contactor bypass, cortocircuito en fase, falla sensor de temperatura, falla ventilador de refrigeración, servicio requerido.

## Entradas / Salidas
- Entradas digitales: 3. Tipo: 2 con contacto libre de potencial + 1 con contacto libre de potencial o PTC (configurable). Funciones programables: arranque motor, paro motor, paro por marcha libre, precalentamiento motor, bloqueo de comandos, suspensión de alarmas, reset estado térmico, bloqueo de teclado…
- Salidas digitales: 3. Tipo: 2×1 NO (SPST) + 1 C/O (SPDT).
  - Ratings 2×1NO: 3 A 250 VAC / 3 A 30 VDC.
  - Rating 1×C/O: NO 5 A 250 VAC / 5 A 30 VDC; NC 3 A 250 VAC / 3 A 30 VDC.
  - Funciones programables: contactor de línea, marcha (run), alarma global, límites, variables remotas, alarmas Axx, alarma de usuario Axx, OFF.
- Entradas/salidas analógicas: 0.
- Puerto óptico de programación: Sí.

## Condiciones ambientales
- Temperatura de trabajo: −20 °C … +60 °C (con derating de corriente >40 °C de 0,5 %/°C).
- Temperatura de almacenamiento: −30 °C … +80 °C.
- Altitud máx.: 1000 m sin derating (sobre 1000 m, derating de corriente 0,5 %/100 m).
- Humedad relativa: <80 %.
- Grado de polución: 2.
- Categoría de instalación: III.

## Envolvente / mecánica
- Montaje: a tornillo o en riel DIN 35 mm con accesorio opcional EXP8003.
- Grado de protección: IP00.
- Dimensiones (an × al × prof): 95 × 226 × 182 mm.
- Masa: 2,9 kg.

## Certificaciones y normas
- Cumplimiento: CSA C22.2 n°14, IEC/EN 60947-1, IEC/EN 60947-4-2, UL508.
- Certificados: cULus, EAC, RCM.
- Clasificación ETIM: ETIM 8.0 · EC000640 (arrancador suave de motor).

## FALTANTE para ficha completa (pedir manual de operación ADXL)
- [ ] Diagramas de conexión / bornes (potencia y control) con designación de terminales.
- [ ] Tabla de parámetros (número, rango, valor de fábrica, significado).
- [ ] Códigos de falla puntuales con causa y solución.
- [ ] Procedimiento de puesta en marcha paso a paso.
