import './Segmentado.css'

// Control segmentado (ej.: tamaño de letra A− / A / A+ / A++).
// opciones: [{ valor, etiqueta }] · activo: valor actual · alCambiar(valor)
export default function Segmentado({ opciones, activo, alCambiar }) {
  return (
    <div className="segmentado" role="group">
      {opciones.map((o) => (
        <button
          key={o.valor}
          type="button"
          className={o.valor === activo ? 'activo' : ''}
          aria-pressed={o.valor === activo}
          onClick={() => alCambiar(o.valor)}
        >
          {o.etiqueta}
        </button>
      ))}
    </div>
  )
}
