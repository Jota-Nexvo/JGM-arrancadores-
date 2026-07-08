// Fallas del WEG SSW-05 Plus para el buscador (mockup Paso 9).
// Fuente ÚNICA: contexto/datos-extraidos/weg-ssw05.md
// (Manual del Usuario WEG SSW-05 Plus, doc 0899.5119 / 2.3X).
// Estado: SIN VERIFICAR. Donde el manual no detalla un campo, se omite
// (regla de seguridad: no inventar). Los pasos de solución se limitan a
// verificar las causas documentadas y el reset del manual.

const RESET_ESTANDAR = 'Power-on (apagar/encender A1-A2) · botón RESET · auto-reset · DI2'

export const FALLAS_SSW05 = [
  {
    codigo: 'E03',
    titulo: 'Falta de fase / subcorriente',
    led: 'LED Phase Loss',
    significa:
      'Al arrancar: no hay tensión en R/S/T o el motor está desconectado. En marcha (100%): actúa 1 s tras detectar falta de fase (red o motor), si la corriente cae bajo el umbral (20% del ajuste si el trim está entre 50–100%; 30% si está entre 30–50%) o si el desbalance entre fases supera el 30%.',
    causas: [
      'Falla de fase de la red',
      'Cortocircuito o falla de tiristor',
      'Motor no conectado o conexión errada',
      'Problema del contactor de entrada',
      'Fusibles abiertos',
      'Trim Motor Current mal ajustado',
      'Corriente del motor menor a la necesaria',
    ],
    solucion: [
      'Verificar presencia de las 3 fases en R/S/T (fusibles F1-F3 y contactor de entrada).',
      'Verificar la conexión del motor en U/V/W.',
      'Revisar tiristores (cortocircuito / falla).',
      'Verificar el ajuste del trim Motor Current / P105.',
      'Resetear la falla.',
    ],
    donde: 'P105',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E05',
    titulo: 'Sobrecarga de salida (función Ixt)',
    led: 'LED Overload',
    significa: 'Se excedieron los tiempos de la clase térmica 10 (imagen térmica del motor).',
    causas: [
      'Trim Motor Current / P105 ajustado muy bajo',
      'Carga excesiva en el eje',
      'Demasiados arranques sucesivos',
    ],
    solucion: [
      'Verificar el ajuste P105 = corriente del motor ÷ corriente del SSW-05.',
      'Verificar la carga en el eje del motor.',
      'Respetar el régimen: máx. 4 arranques/hora.',
      'Dejar enfriar y resetear (P050 muestra el estado térmico; 250 = disparo).',
    ],
    donde: 'P105 · P050',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E06',
    titulo: 'Falla externa (por DI1)',
    led: 'LED Internal Fault ×7 parpadeos',
    significa: 'DI1 está abierta y programada como Falla Externa (P264=2).',
    causas: ['Cableado de DI1 abierto o sin conectar'],
    solucion: [
      'Revisar el cableado y el contacto conectado a DI1.',
      'Verificar la programación de P264.',
      'Resetear la falla.',
    ],
    donde: 'P264',
    reset: 'Power-on · botón RESET · DI2',
  },
  {
    codigo: 'E10',
    titulo: 'Error en la función de copia (HMI)',
    significa:
      'Se intentó copiar parámetros (P215) hacia un SSW-05 con versión de software diferente.',
    causas: ['Versiones de software distintas entre equipos'],
    solucion: ['Verificar la versión de software (P023) de ambos equipos.', 'Resetear.'],
    donde: 'P215 · P023',
    reset: 'Power-on',
  },
  {
    codigo: 'E22',
    titulo: 'Comunicación serie: paridad longitudinal',
    significa: 'Error de paridad longitudinal en la comunicación serie (HMI / RS-232).',
    causas: ['Cable del HMI / serie con mal contacto o interferencia (EMI)'],
    solucion: [
      'Revisar el cable del teclado/serie (separar ≥10 cm del cableado de potencia).',
      'Reintentar la comunicación.',
    ],
    donde: 'P308–P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E24',
    titulo: 'Comunicación serie: error de parametrización',
    significa: 'Error de parametrización vía comunicación serie.',
    solucion: ['Verificar los valores enviados y reintentar.'],
    donde: 'P308–P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E25',
    titulo: 'Comunicación serie: variable o parámetro inexistente',
    significa: 'Se pidió una variable o parámetro que no existe.',
    solucion: ['Verificar el número de parámetro solicitado.'],
    donde: 'P308–P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E26',
    titulo: 'Comunicación serie: valor fuera de límites',
    significa: 'El valor recibido está fuera de los límites del parámetro.',
    solucion: ['Verificar el rango del parámetro y reenviar un valor válido.'],
    donde: 'P308–P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E27',
    titulo: 'Comunicación serie: escritura no permitida',
    significa:
      'Intento de escribir en una variable de solo lectura, o control lógico deshabilitado.',
    solucion: ['Verificar que el parámetro admita escritura (y P000=5 para modificar).'],
    donde: 'P000 · P308–P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E29',
    titulo: 'Comunicación serie: comunicación cíclica interrumpida',
    significa: 'Se interrumpió la comunicación cíclica serie (según P313/P314).',
    solucion: ['Revisar el cable y el maestro de la red serie.', 'Verificar P313 y P314.'],
    donde: 'P313 · P314',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E31',
    titulo: 'Falla de conexión del teclado (HMI)',
    significa:
      'El HMI perdió comunicación con el SSW-05. Desaparece sola al restablecerse la comunicación.',
    causas: ['Cable del teclado mal conectado', 'Ruido eléctrico (EMI)'],
    solucion: [
      'Revisar el cable del HMI (CAB-RS, separado ≥10 cm de la potencia).',
      'Con HMI conectado, resetear SIEMPRE con la tecla del HMI (usar DI2 o el botón frontal provoca E31).',
    ],
    donde: 'P220',
    reset: 'Se restablece sola al volver la comunicación',
  },
  {
    codigo: 'E63',
    titulo: 'Rotor bloqueado (Stall)',
    led: 'LED Stall',
    significa: 'El motor no alcanzó la velocidad al final de la rampa o el eje está trabado.',
    causas: [
      'Rampa programada menor que el tiempo real de aceleración',
      'Eje trabado',
      'Carga excesiva',
      'Demasiados arranques sucesivos',
    ],
    solucion: [
      'Alargar la rampa de aceleración (trim / P102).',
      'Verificar que el eje gire libre y la carga sea la esperada.',
      'Respetar el régimen de arranques (4/hora).',
      'Resetear la falla.',
    ],
    donde: 'P102 · P106 bit3',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E64',
    titulo: 'Sobrecarga de tiristores',
    led: 'LED Internal Fault ×6 parpadeos',
    significa:
      'La corriente durante las rampas superó las curvas t×T admitidas por los tiristores del SSW-05.',
    causas: [
      'Rampa muy corta',
      'Corriente del motor mayor a la del SSW-05',
      'Eje trabado',
    ],
    solucion: [
      'Alargar la rampa de aceleración (P102).',
      'Verificar que el calibre del SSW-05 sea suficiente para el motor.',
      'Verificar que el eje gire libre.',
    ],
    donde: 'P102 · P105',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E65',
    titulo: 'Subcorriente inmediata',
    led: 'LED Internal Fault ×8 parpadeos',
    significa:
      'En régimen (100%), la corriente quedó por debajo de P610 (% del trim Motor Current) durante más de P611 segundos.',
    causas: ['P610 ajustado muy alto', 'Motor girando en vacío', 'Bomba trabajando en vacío'],
    solucion: [
      'Verificar los ajustes P610 (umbral) y P611 (tiempo).',
      'Verificar la carga (ej.: bomba cebada, sin cavitación).',
    ],
    donde: 'P610 · P611',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E66',
    titulo: 'Sobrecorriente',
    led: 'LED Overcurrent',
    significa:
      'En régimen (100%), la corriente superó 3× el ajuste del trim Motor Current durante más de 1 s.',
    causas: ['Cortocircuito entre fases', 'Sobrecarga momentánea', 'Eje trabado'],
    solucion: [
      'Revisar aislación y descartar cortocircuito entre fases.',
      'Verificar la carga y que el eje gire libre.',
      'Verificar el ajuste del trim Motor Current / P105.',
    ],
    donde: 'P105 · P106 bit0',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E67',
    titulo: 'Secuencia de fase incorrecta',
    led: 'LED Phase Seq',
    significa: 'La secuencia de fases de la red está invertida en la entrada R/S/T.',
    causas: ['Fases de entrada conectadas en secuencia invertida'],
    solucion: [
      'Desenergizar y verificar ausencia de tensión.',
      'Intercambiar dos fases de la entrada.',
      'Resetear (esta falla NO tiene auto-reset).',
    ],
    donde: 'P106 bit2',
    reset: 'Power-on · botón RESET · DI2 (sin auto-reset)',
  },
  {
    codigo: 'E70',
    titulo: 'Subtensión en la alimentación de control',
    led: 'LED Internal Fault ×2 parpadeos',
    significa: 'La tensión en A1/A2 cayó por debajo del 80% de la nominal (rango 90–250 Vca).',
    causas: ['Alimentación de control baja', 'Mal contacto', 'Fusible de control abierto'],
    solucion: [
      'Medir la tensión en A1/A2 (debe estar en 90–250 Vca).',
      'Revisar los fusibles de control F11/F12 (Tipo D 6 A).',
      'Ajustar los contactos del circuito de control.',
    ],
    donde: '—',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E71',
    titulo: 'Contacto del relé de by-pass interno abierto',
    led: 'LED Internal Fault ×3 parpadeos',
    significa: 'En régimen (100%), el contacto del relé de by-pass interno quedó abierto.',
    solucion: [
      'Resetear la falla (NUNCA con el motor en régimen).',
      'Si se repite, revisar el equipo.',
    ],
    donde: '—',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E72',
    titulo: 'Sobrecorriente antes del by-pass',
    led: 'LED Internal Fault ×4 parpadeos',
    significa:
      'En la transición fin de rampa → cierre del by-pass, la corriente estaba en o por encima del nivel: 37,5 A (calibres 3–30 A) · 200 A (calibres 45–85 A).',
    causas: [
      'Rampa muy corta',
      'Motor con corriente nominal mayor a la del SSW-05',
      'Eje trabado',
    ],
    solucion: [
      'Alargar la rampa de aceleración (trim / P102).',
      'Verificar que el calibre del SSW-05 alcance para el motor.',
      'Verificar que el eje gire libre.',
      'Resetear la falla.',
    ],
    donde: 'P102 · P105',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E73',
    titulo: 'Sobrecorriente del relé de by-pass',
    led: 'LED Internal Fault ×5 parpadeos',
    significa:
      'En régimen (100%), la corriente superó el nivel durante más de 1 s: 60 A (calibres 3–30 A) · 200 A (calibres 45–85 A).',
    solucion: [
      'Verificar la carga del motor y el calibre del SSW-05.',
      'Resetear la falla (nunca en régimen).',
    ],
    donde: 'P105',
    reset: RESET_ESTANDAR,
  },
  {
    codigo: 'E75',
    titulo: 'Frecuencia de red fuera de tolerancia',
    led: 'LED Internal Fault ×1 parpadeo',
    significa: 'La frecuencia de la red está fuera de ±10% de 50/60 Hz.',
    solucion: ['Verificar la frecuencia y estabilidad de la red de alimentación.'],
    donde: '—',
    reset: RESET_ESTANDAR,
  },
]

export const FUENTE_FALLAS_SSW05 = 'Manual del Usuario WEG SSW-05 Plus · doc 0899.5119 / 2.3X'

// Normalización tolerante: mayúsculas/minúsculas, con o sin la letra E,
// con guiones o espacios (ej. "72", "e-72", "E72" → "72").
export function normalizarCodigo(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^E/, '')
}

// undefined = sin búsqueda · null = no encontrado · objeto = falla
export function buscarFallaSSW05(texto) {
  const n = normalizarCodigo(texto)
  if (!n) return undefined
  return FALLAS_SSW05.find((f) => normalizarCodigo(f.codigo) === n) || null
}
