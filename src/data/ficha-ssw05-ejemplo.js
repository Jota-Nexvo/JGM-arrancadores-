// Datos de la ficha WEG SSW-05 Plus para el MOCKUP del Paso 8.
// Fuente ÚNICA: contexto/datos-extraidos/weg-ssw05.md
// (Manual del Usuario WEG SSW-05 Plus, doc 0899.5119 / 2.3X).
// Estado: SIN VERIFICAR por el usuario. En el Paso 14 estos datos
// pasan al esquema definitivo (IndexedDB, serie + variantes).

export const FICHA_SSW05 = {
  id: 'weg-ssw05',
  marca: 'WEG',
  serie: 'SSW-05 Plus',
  subtitulo: 'Arrancador suave (soft-starter)',
  verificado: false,
  fuente: 'Manual del Usuario WEG SSW-05 Plus · doc 0899.5119 / 2.3X',

  clave: {
    corriente: '3–85 A · 8 calibres',
    tension: '220–460 V ó 460–575 V',
    bypass: 'Sí, interno',
    arranque: 'Rampa de tensión',
  },

  // Tabla 6 (potencias motor WEG 4 polos) + Tabla 9 (fusibles/contactores)
  variantes: [
    { modelo: 'SSW-05.3', a: 3, p220: '0,75 / 0,55', p380: '1,5 / 1,1', p440: '1,5 / 1,1', tam: 1, contactor: 'CWM09', fusible: 'D 10 A' },
    { modelo: 'SSW-05.10', a: 10, p220: '3 / 2,2', p380: '5 / 3,7', p440: '5 / 3,7', tam: 1, contactor: 'CWM12', fusible: 'D 16 A' },
    { modelo: 'SSW-05.16', a: 16, p220: '5 / 3,7', p380: '7,5 / 5,5', p440: '10 / 7,5', tam: 1, contactor: 'CWM18', fusible: 'D 25 A' },
    { modelo: 'SSW-05.23', a: 23, p220: '7,5 / 5,5', p380: '10 / 7,5', p440: '15 / 11', tam: 1, contactor: 'CWM25', fusible: 'D 35 A' },
    { modelo: 'SSW-05.30', a: 30, p220: '10 / 7,5', p380: '15 / 11', p440: '20 / 15', tam: 1, contactor: 'CWM32', fusible: 'D 50 A' },
    { modelo: 'SSW-05.45', a: 45, p220: '15 / 11', p380: '25 / 18,5', p440: '30 / 22', tam: 2, contactor: 'CWM50', fusible: 'D 63 A' },
    { modelo: 'SSW-05.60', a: 60, p220: '20 / 15', p380: '30 / 22', p440: '40 / 30', tam: 2, contactor: 'CWM65', fusible: 'NH 100 A' },
    { modelo: 'SSW-05.85', a: 85, p220: '30 / 22', p380: '50 / 37', p440: '60 / 45', tam: 2, contactor: 'CWM95', fusible: 'NH 125 A' },
  ],
  tamanos: [
    'Tamaño 1 (3–30 A): 59×130×145 mm · 0,74 kg',
    'Tamaño 2 (45–85 A): 79×185×172 mm · 1,67 kg',
    'Cortocircuito (SCCR): 5 kA (3–60 A) · 10 kA (85 A)',
  ],

  // Ajustes por trim-pot (P220=0) + equivalente P (con HMI)
  parametros: [
    {
      codigo: 'P101',
      trimpot: 'Pedestal Voltage',
      nombre: 'Tensión inicial (pedestal / initial voltage)',
      rango: '30–80 %Un',
      fabrica: '30',
      desc: 'Ajustar al valor donde el motor empieza a girar apenas se da la marcha.',
    },
    {
      codigo: 'P102',
      trimpot: 'Acceleration Ramp',
      nombre: 'Rampa de aceleración (ramp)',
      rango: '1–20 s',
      fabrica: '10',
      desc: 'Ajustar para que el motor llegue a velocidad nominal al final de la rampa.',
    },
    {
      codigo: 'P104',
      trimpot: 'Deceleration Ramp',
      nombre: 'Rampa de desaceleración',
      rango: 'Off–20 s',
      fabrica: 'Off',
      desc: 'Solo para bombas: reduce el golpe de ariete en la parada.',
    },
    {
      codigo: 'P105',
      trimpot: 'Motor Current',
      nombre: 'Corriente del motor',
      rango: '30–100 %In',
      fabrica: '100',
      desc: 'Define TODAS las protecciones. Ajuste = corriente del motor ÷ corriente del SSW-05. Ej.: motor de 25 A en un SSW de 30 A → 83%.',
    },
    {
      codigo: 'P106',
      trimpot: 'DIP switches',
      nombre: 'Configuración de protecciones (hex, por bits)',
      rango: '0–3F hex',
      fabrica: '1F hex',
      desc: 'Bit0 sobrecorriente · bit1 falta de fase · bit2 secuencia de fase · bit3 rotor bloqueado · bit4 sobrecarga motor · bit5 auto-reset.',
    },
  ],
  parametrosNota:
    'El SSW-05 se ajusta por trim-pots y DIP (P220=0, de fábrica). Con el teclado opcional HMI-SSW05-RS (P220=1) se accede a la tabla completa de parámetros P.',

  presets: [
    {
      carga: 'Bomba',
      fuente: 'manual del equipo',
      texto:
        'Usar la rampa de desaceleración (P104) para evitar el golpe de ariete. Si golpea al acelerar: reducir rampa de aceleración y tensión de pedestal. Si golpea al parar: reducir rampa de desaceleración.',
    },
    {
      carga: 'Ventilador / cinta / compresor / molino',
      fuente: 'guía general',
      texto:
        'El SSW-05 no trae presets por tipo de carga (a diferencia del Lovato ADXL). Arrancar desde los valores de fábrica (pedestal 30%, rampa 10 s) y ajustar según el comportamiento del motor con carga real.',
    },
  ],

  protecciones: [
    { nombre: 'Sobrecarga del motor (Ixt)', detalle: 'Imagen térmica electrónica clase 10 (True RMS)', param: 'P106 bit4 · P105', falla: 'E05' },
    { nombre: 'Falta de fase / subcorriente', detalle: 'Red o motor, actúa en 1 s en régimen', param: 'P106 bit1', falla: 'E03' },
    { nombre: 'Secuencia de fase incorrecta', detalle: 'Sin auto-reset', param: 'P106 bit2', falla: 'E67' },
    { nombre: 'Rotor bloqueado (Stall)', detalle: 'Rampa menor al tiempo real de aceleración o eje trabado', param: 'P106 bit3', falla: 'E63' },
    { nombre: 'Sobrecorriente', detalle: 'En régimen: corriente > 3× ajuste durante > 1 s', param: 'P106 bit0', falla: 'E66' },
    { nombre: 'Sobrecarga de tiristores', detalle: 'Curvas t×T en las rampas; se enfría en marcha por el by-pass', param: '—', falla: 'E64' },
  ],
  proteccionesNota:
    'La corriente del motor ajustada (trim Motor Current / P105) define el punto de actuación de todas las protecciones.',

  puestaEnMarcha: [
    { texto: 'Energizar la alimentación de CONTROL (A1/A2) antes que la POTENCIA (R/S/T).', seguridad: true },
    { texto: 'Ajustar la corriente del motor (trim Motor Current / P105) = I motor ÷ I del SSW-05.', seguridad: false },
    { texto: 'Ajustar la tensión de pedestal (30–80%) hasta que el motor arranque suave al dar la marcha.', seguridad: false },
    { texto: 'Ajustar la rampa de aceleración (1–20 s) para llegar a velocidad nominal.', seguridad: false },
    { texto: 'En bombas: ajustar la rampa de desaceleración (P104) contra el golpe de ariete.', seguridad: false },
    { texto: 'Verificar sentido de giro y secuencia de fases (E67 no tiene auto-reset).', seguridad: false },
    { texto: 'Verificar protecciones habilitadas (DIP / P106).', seguridad: false },
    { texto: 'NUNCA resetear con el motor en régimen: abre los relés de by-pass bajo carga.', seguridad: true },
  ],
  puestaEnMarchaNota: 'Régimen máximo: 4 arranques por hora (1 cada 15 min), ciclo 3×In durante 10 s.',

  // Códigos para los chips (el detalle completo va al buscador en el Paso 9)
  fallas: ['E03', 'E05', 'E06', 'E10', 'E22', 'E24', 'E25', 'E26', 'E27', 'E29', 'E31', 'E63', 'E64', 'E65', 'E66', 'E67', 'E70', 'E71', 'E72', 'E73', 'E75'],

  conexion: {
    enLinea: true,
    insideDelta: false, // NO aplica en el SSW-05
    comando: 'DI1 (2 hilos con retención) o pulsadores con contactor K1 / relé Operación (esquemas 11.3 y 11.4)',
  },
}

// Bornes del diagrama interactivo (qué es / de dónde viene / a dónde va)
export const BORNES_SSW05 = {
  R: { nombre: 'R/1L1 — Entrada de red, fase 1', grupo: 'potencia', que: 'Entrada de potencia de la red trifásica.', vieneDe: 'Fusible F1 (y contactor K1 si se usa, esquema 11.3).', vaA: 'Tiristores y by-pass interno del SSW-05.', notas: '220–460 V ó 460–575 V (+10%/−15%). Par de apriete 3 Nm (Tam.1) / 5,5 Nm (Tam.2).' },
  S: { nombre: 'S/3L2 — Entrada de red, fase 2', grupo: 'potencia', que: 'Entrada de potencia de la red trifásica.', vieneDe: 'Fusible F2 (y K1 si se usa).', vaA: 'Tiristores y by-pass interno.', notas: 'Ídem R/1L1.' },
  T: { nombre: 'T/5L3 — Entrada de red, fase 3', grupo: 'potencia', que: 'Entrada de potencia de la red trifásica.', vieneDe: 'Fusible F3 (y K1 si se usa).', vaA: 'Tiristores y by-pass interno.', notas: 'Ídem R/1L1.' },
  U: { nombre: 'U/2T1 — Salida al motor, fase 1', grupo: 'potencia', que: 'Salida de potencia hacia el motor.', vieneDe: 'Interno (tiristores / by-pass).', vaA: 'Borne U del motor trifásico.', notas: 'Tierra: solo en la carcasa del motor. Conexión SOLO en línea (inside-delta no aplica).' },
  V: { nombre: 'V/4T2 — Salida al motor, fase 2', grupo: 'potencia', que: 'Salida de potencia hacia el motor.', vieneDe: 'Interno.', vaA: 'Borne V del motor.', notas: 'Ídem U/2T1.' },
  W: { nombre: 'W/6T3 — Salida al motor, fase 3', grupo: 'potencia', que: 'Salida de potencia hacia el motor.', vieneDe: 'Interno.', vaA: 'Borne W del motor.', notas: 'Ídem U/2T1.' },
  RF: { nombre: 'RF — Relé de falta de fase (supervisor)', grupo: 'aguas-arriba', que: 'Supervisor de fases externo: corta el comando si falta una fase o se invierte la secuencia.', vieneDe: 'Toma las 3 fases aguas arriba del arrancador.', vaA: 'Su contacto se intercala en el circuito de comando (ej. bobina de K1 o DI1).', notas: '⚠ OPCIONAL según instalación (criterio del instalador). El SSW-05 ya detecta falta de fase (E03) y secuencia incorrecta (E67) por sí mismo.' },
  K1: { nombre: 'K1 — Contactor de línea', grupo: 'aguas-arriba', que: 'Contactor de entrada (esquema 11.3 del manual, marcha/paro con pulsadores).', vieneDe: 'Fusibles F1/F2/F3.', vaA: 'Entradas R/S/T del SSW-05.', notas: 'Tamaño según calibre (CWM09…CWM95, Tabla 9). En el esquema 11.4 se comanda con el relé Operación del propio SSW-05.' },
  M: { nombre: 'M — Motor trifásico de inducción', grupo: 'potencia', que: 'Motor de inducción trifásico (única carga admitida).', vieneDe: 'Salidas U/V/W del SSW-05.', vaA: '—', notas: 'Conectar tierra en la carcasa del motor. Verificar sentido de giro en la puesta en marcha.' },
  A1: { nombre: 'A1 — Alimentación de control (+)', grupo: 'control', que: 'Alimentación de la electrónica del SSW-05.', vieneDe: 'Fase de la red vía fusible de control F11 (Tipo D 6 A).', vaA: 'Fuente interna del arrancador.', notas: '90–250 Vca 50/60 Hz, 200 mA. ⚠ Energizar ANTES que la potencia. Si la línea supera 250 V: usar transformador T1 (en 400 V: neutro + fase).' },
  A2: { nombre: 'A2 — Alimentación de control (retorno)', grupo: 'control', que: 'Retorno de la alimentación de la electrónica.', vieneDe: 'Neutro o segunda fase vía fusible F12.', vaA: 'Fuente interna.', notas: 'Ídem A1.' },
  DI1: { nombre: 'DI1 — Entrada digital 1 (marcha/paro)', grupo: 'control', que: 'Habilita/deshabilita el motor (comando 2 hilos).', vieneDe: 'Contacto de marcha con retención (S1), desde la fase de control.', vaA: 'Lógica de control del SSW-05.', notas: '90–250 Vca, 6 mA. Programable como Falla Externa (P264=2).' },
  DI2: { nombre: 'DI2 — Entrada digital 2 (reset)', grupo: 'control', que: 'Reset de fallas por cierre momentáneo (0,5 s).', vieneDe: 'Pulsador NA (S2), desde la fase de control.', vaA: 'Lógica de control.', notas: '⚠ No resetear con el motor en régimen.' },
  B13: { nombre: '13 — Relé "Operación" (NA)', grupo: 'control', que: 'Contacto 13–14/23: cierra al recibir el comando de habilitar; abre al fin de la desaceleración o al deshabilitar.', vieneDe: 'Interno (relé de salida 1).', vaA: 'Ej.: bobina del contactor K1 (esquema 11.4).', notas: 'Relés: 1 A, 250 Vca.' },
  B14: { nombre: '14/23 — Común de relés', grupo: 'control', que: 'Punto común de los dos relés de salida.', vieneDe: '—', vaA: 'Circuitos comandados por 13 y 24.', notas: '—' },
  B24: { nombre: '24 — Relé "Tensión plena" (NA)', grupo: 'control', que: 'Contacto 14/23–24: cierra cuando el motor recibe el 100% de la tensión (fin de arranque).', vieneDe: 'Interno (relé de salida 2).', vaA: 'Señalización o enclavamientos.', notas: 'Programable por P277 (1=tensión plena · 2=error · 3=serial).' },
  F1: { nombre: 'F1/F2/F3 — Fusibles de potencia', grupo: 'aguas-arriba', que: 'Protección de la línea de potencia.', vieneDe: 'Seccionador / red trifásica.', vaA: 'R/S/T (o contactor K1).', notas: 'Tipo D o NH según calibre (D 10 A para 3 A … NH 125 A para 85 A, Tabla 9).' },
  F11: { nombre: 'F11/F12 — Fusibles de control', grupo: 'control', que: 'Protección del circuito de control.', vieneDe: 'Fase / neutro de la red.', vaA: 'A1 y A2.', notas: 'Tipo D 6 A (todos los calibres).' },
}
