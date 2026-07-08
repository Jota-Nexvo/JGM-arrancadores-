import { GotaMarca } from './Iconos.jsx'
import './Encabezado.css'

// Encabezado fijo de la app: gota de marca + nombre + indicador Offline.
export default function Encabezado() {
  return (
    <header className="encabezado">
      <GotaMarca />
      <span className="encabezado-titulo">
        JGM <b>Arrancadores</b>
      </span>
      <span className="encabezado-offline">
        <i /> Offline
      </span>
    </header>
  )
}
