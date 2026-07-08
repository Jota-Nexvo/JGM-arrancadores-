import { IconoChevron, IconoEstrella } from './Iconos.jsx'
import './FilaModelo.css'

// Fila de modelo: badge de marca (mono) + nombre + detalle + chevron.
// `chips` (opcional) agrega una fila de chips debajo del detalle (catálogo).
// Se usa en Inicio (favoritos/recientes) y en el Catálogo.
export default function FilaModelo({ badge, nombre, detalle, chips, favorito = false, onClick }) {
  return (
    <button type="button" className="fila-modelo" onClick={onClick}>
      <span className="fila-modelo-badge mono">{badge}</span>
      <span className="fila-modelo-texto">
        <b>{nombre}</b>
        <small>{detalle}</small>
        {chips && <span className="fila-modelo-chips">{chips}</span>}
      </span>
      {favorito && <IconoEstrella tamano={16} className="fila-modelo-estrella" />}
      <IconoChevron tamano={18} />
    </button>
  )
}
