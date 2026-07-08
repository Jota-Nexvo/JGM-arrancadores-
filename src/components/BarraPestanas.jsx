import {
  IconoCasa,
  IconoGrilla,
  IconoAlerta,
  IconoSliders,
  IconoEngranaje,
} from './Iconos.jsx'
import './BarraPestanas.css'

const PESTANAS = [
  { id: 'inicio', etiqueta: 'Inicio', Icono: IconoCasa },
  { id: 'catalogo', etiqueta: 'Catálogo', Icono: IconoGrilla },
  { id: 'fallas', etiqueta: 'Fallas', Icono: IconoAlerta },
  { id: 'calc', etiqueta: 'Calc.', Icono: IconoSliders },
  { id: 'ajustes', etiqueta: 'Ajustes', Icono: IconoEngranaje },
]

// Barra de navegación inferior de 5 pestañas (al alcance del pulgar).
export default function BarraPestanas({ activa, alCambiar }) {
  return (
    <nav className="barra-pestanas">
      {PESTANAS.map(({ id, etiqueta, Icono }) => (
        <button
          key={id}
          type="button"
          className={id === activa ? 'activa' : ''}
          aria-current={id === activa ? 'page' : undefined}
          onClick={() => alCambiar(id)}
        >
          <Icono tamano={22} />
          <span>{etiqueta}</span>
        </button>
      ))}
    </nav>
  )
}
