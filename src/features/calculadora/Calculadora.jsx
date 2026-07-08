import Tarjeta from '../../components/Tarjeta.jsx'

// Placeholder de la Calculadora — se construye en el Paso 9, con los DOS modos:
// (a) motor → parámetros sugeridos · (b) motor → qué arrancador/calibre sirve.
export default function Calculadora() {
  return (
    <section className="pantalla">
      <p className="overline">Parámetros y calibre</p>
      <h1 className="titulo-pantalla">Calculadora</h1>
      <Tarjeta>
        <p>
          Acá cargás los datos del motor y el tipo de carga → te sugiere <b>parámetros</b> de
          arranque y también <b>qué arrancador/calibre</b> te sirve.
        </p>
        <p className="nota">Se construye en el Paso 9.</p>
      </Tarjeta>
    </section>
  )
}
