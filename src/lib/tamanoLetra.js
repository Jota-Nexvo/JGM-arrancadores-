// Tamaño de letra ajustable de toda la app: A− / A / A+ / A++
// Persiste en localStorage y se aplica como atributo en <html>.

const CLAVE = 'jgm.tamanoLetra'

export const TAMANOS = [
  { valor: 'sm', etiqueta: 'A−' },
  { valor: 'md', etiqueta: 'A' },
  { valor: 'lg', etiqueta: 'A+' },
  { valor: 'xl', etiqueta: 'A++' },
]

export function tamanoGuardado() {
  const t = localStorage.getItem(CLAVE)
  return TAMANOS.some((o) => o.valor === t) ? t : 'md'
}

export function aplicarTamano(valor) {
  document.documentElement.dataset.fs = valor
  localStorage.setItem(CLAVE, valor)
}
