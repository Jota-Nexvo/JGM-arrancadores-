import './Boton.css'

// Botón base. Variantes: primario (azul de marca), secundario, peligro.
// Objetivo táctil ≥ 44px de alto.
export default function Boton({ variante = 'primario', children, ...props }) {
  return (
    <button className={`boton boton-${variante}`} {...props}>
      {children}
    </button>
  )
}
