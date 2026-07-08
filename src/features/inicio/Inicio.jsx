import Tarjeta from '../../components/Tarjeta.jsx'

// Placeholder del Inicio — el "Panel de trabajo" real se construye en el Paso 6:
// buscador de falla protagonista + grilla 2×2 + favoritos y recientes.
export default function Inicio() {
  return (
    <section className="pantalla">
      <p className="overline">Panel de trabajo</p>
      <h1 className="titulo-pantalla">Inicio</h1>
      <Tarjeta>
        <p>
          Acá va el <b>buscador de código de falla</b> bien grande, los accesos rápidos y tus
          modelos favoritos y recientes.
        </p>
        <p className="nota">Se construye en el Paso 6.</p>
      </Tarjeta>
    </section>
  )
}
