import { IconoChevron, IconoEstrella } from './Iconos.jsx'
import './FilaModelo.css'

// Fila de modelo: badge de marca (mono) + nombre + detalle + chevron.
// Se usa en Inicio (favoritos/recientes) y en el Catálogo.
export default function FilaModelo({ badge, nombre, detalle, favorito = false, onClick }) {
  return (
    <button type="button" className="fila-modelo" onClick={onClick}>
      <span className="fila-modelo-badge mono">{badge}</span>
      <span className="fila-modelo-texto">
        <b>{nombre}</b>
        <small>{detalle}</small>
      </span>
      {favorito && <IconoEstrella tamano={16} className="fila-modelo-estrella" />}
      <IconoChevron tamano={18} />
    </button>
  )
}
