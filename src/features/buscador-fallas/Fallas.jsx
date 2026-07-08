import Tarjeta from '../../components/Tarjeta.jsx'
import Chip from '../../components/Chip.jsx'

// Placeholder del Buscador de fallas — se construye en el Paso 9.
// Ya recibe el código buscado desde el Inicio para probar el flujo.
export default function Fallas({ codigoInicial }) {
  return (
    <section className="pantalla">
      <p className="overline">Buscador de fallas</p>
      <h1 className="titulo-pantalla">Código de falla</h1>

      {codigoInicial && (
        <Tarjeta>
          <p>
            Buscaste <Chip variante="codigo">{codigoInicial.toUpperCase()}</Chip> — el buscador
            real se conecta acá en el <b>Paso 9</b>.
          </p>
        </Tarjeta>
      )}

      <Tarjeta>
        <p>
          Acá ingresás el código que muestra el arrancador (ej. <span className="mono">E72</span>)
          y te dice <b>qué significa, causas probables y cómo resolverlo</b>.
        </p>
        <p className="nota">Se construye en el Paso 9.</p>
      </Tarjeta>
    </section>
  )
}
