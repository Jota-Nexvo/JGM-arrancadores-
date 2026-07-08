import CampoBusqueda from '../../components/CampoBusqueda.jsx'
import FilaModelo from '../../components/FilaModelo.jsx'
import Tarjeta from '../../components/Tarjeta.jsx'
import {
  IconoGrilla,
  IconoSliders,
  IconoLupa,
  IconoLapiz,
} from '../../components/Iconos.jsx'
import './Inicio.css'

// Inicio — Variante B "Panel de trabajo" (diseño aprobado):
// buscador de falla protagonista + grilla 2×2 + favoritos y recientes.
// Los modelos listados son EJEMPLOS visuales; se alimentan de IndexedDB
// cuando llegue el motor de datos (Paso 11).
export default function Inicio({ alNavegar, alBuscar }) {
  const accesos = [
    { id: 'catalogo', titulo: 'Catálogo', sub: 'Por marca', Icono: IconoGrilla },
    { id: 'calc', titulo: 'Calculadora', sub: 'Parámetros', Icono: IconoSliders },
    { id: 'fallas', titulo: 'Buscar falla', sub: 'Por código', Icono: IconoLupa },
    { id: 'editor', titulo: 'Editor', sub: 'Cargar modelo · Paso 12', Icono: IconoLapiz },
  ]

  return (
    <section className="pantalla">
      <p className="overline">Buscar código de falla</p>
      <CampoBusqueda alBuscar={alBuscar} />

      <div className="accesos">
        {accesos.map(({ id, titulo, sub, Icono }) => (
          <button
            key={id}
            type="button"
            className="acceso"
            onClick={() => id !== 'editor' && alNavegar(id)}
            aria-disabled={id === 'editor'}
          >
            <span className="acceso-icono">
              <Icono tamano={20} />
            </span>
            <b>{titulo}</b>
            <small>{sub}</small>
          </button>
        ))}
      </div>

      <p className="overline">Favoritos</p>
      <Tarjeta className="tarjeta-lista">
        <FilaModelo badge="WEG" nombre="SSW-05 Plus" detalle="3–85 A · 220–575 V" favorito />
      </Tarjeta>

      <p className="overline">Consultados recientemente</p>
      <Tarjeta className="tarjeta-lista">
        <FilaModelo badge="WEG" nombre="SSW-07" detalle="17–412 A" />
        <FilaModelo badge="LOV" nombre="ADXL 115 A" detalle="37/55/75 kW · hasta 100 HP" />
      </Tarjeta>
      <p className="nota">Modelos de ejemplo — se llenan con tus datos reales desde el Paso 11.</p>
    </section>
  )
}
