import Tarjeta from '../../components/Tarjeta.jsx'

// Placeholder del Buscador de fallas — se construye en el Paso 9:
// código de la pantalla del arrancador → qué es, causas y solución paso a paso.
export default function Fallas() {
  return (
    <section className="pantalla">
      <p className="overline">Buscador de fallas</p>
      <h1 className="titulo-pantalla">Código de falla</h1>
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
