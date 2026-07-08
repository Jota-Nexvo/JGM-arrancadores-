// Datos de EJEMPLO para el mockup del catálogo (Paso 7), a nivel de SERIE.
// Valores tomados de contexto/datos-extraidos/ (estado: sin verificar).
// El catálogo real, con variantes por modelo e IndexedDB, llega en el Paso 11.

export const MARCAS = [
  { id: 'weg', nombre: 'WEG' },
  { id: 'lovato', nombre: 'Lovato' },
]

export const SERIES = [
  {
    id: 'weg-ssw05',
    marcaId: 'weg',
    badge: 'WEG',
    nombre: 'SSW-05 Plus',
    corriente: { min: 3, max: 85 },
    corrienteTexto: '3–85 A',
    tension: { min: 220, max: 575 },
    tensionTexto: '220–575 V',
    bypass: true,
    interfaz: 'Trim-pots',
    // Presets de carga: guía general (el manual no trae presets por carga)
    cargas: ['bomba', 'ventilador', 'compresor', 'cinta', 'molino'],
    fuente: 'Manual WEG 0899.5119',
  },
  {
    id: 'weg-ssw07',
    marcaId: 'weg',
    badge: 'WEG',
    nombre: 'SSW-07',
    corriente: { min: 17, max: 412 },
    corrienteTexto: '17–412 A',
    tension: { min: 220, max: 575 },
    tensionTexto: '220–575 V',
    bypass: true,
    interfaz: 'Trim-pots + DIP',
    cargas: ['bomba', 'ventilador', 'compresor', 'cinta', 'molino'],
    fuente: 'Manual WEG 0899.5832',
  },
  {
    id: 'lovato-adxl',
    marcaId: 'lovato',
    badge: 'LOV',
    nombre: 'ADXL',
    corriente: { min: 30, max: 320 },
    corrienteTexto: '30–320 A',
    tension: { min: 208, max: 600 },
    tensionTexto: '208–600 V',
    bypass: true,
    interfaz: 'Display LCD + menú',
    // AUTOSET oficial del fabricante (manual I456)
    cargas: ['bomba', 'ventilador', 'cinta', 'mezclador'],
    fuente: 'Manual Lovato I456 E 11 20',
  },
]

export const CARGAS = [
  { id: 'bomba', etiqueta: 'Bomba' },
  { id: 'ventilador', etiqueta: 'Ventilador' },
  { id: 'compresor', etiqueta: 'Compresor' },
  { id: 'cinta', etiqueta: 'Cinta' },
  { id: 'molino', etiqueta: 'Molino' },
  { id: 'mezclador', etiqueta: 'Mezclador' },
]

export const TENSIONES_FILTRO = [220, 380, 400]
