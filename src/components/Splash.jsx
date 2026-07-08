import logo from '../assets/jgm-logo.png'
import './Splash.css'

// Splash corto al abrir: fondo azul de marca + logo en tarjeta blanca.
// Dura ~1.1s y se desvanece (lo maneja App).
export default function Splash({ saliendo }) {
  return (
    <div className={`splash${saliendo ? ' salir' : ''}`}>
      <div className="splash-tarjeta">
        <img src={logo} alt="Logo JGM Servicios" />
      </div>
      <p className="splash-nombre">JGM Arrancadores</p>
      <p className="splash-sub">Guía de campo · sin conexión</p>
    </div>
  )
}
