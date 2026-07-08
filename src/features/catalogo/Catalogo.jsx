import Tarjeta from '../../components/Tarjeta.jsx'

// Placeholder del Catálogo — se construye en el Paso 7:
// exploración por marca (WEG, Lovato) + filtros por tensión / corriente / carga.
export default function Catalogo() {
  return (
    <section className="pantalla">
      <p className="overline">Explorar por marca</p>
      <h1 className="titulo-pantalla">Catálogo</h1>
      <Tarjeta>
        <p>
          Acá vas a explorar los arrancadores por <b>marca</b>, con filtros de tensión,
          corriente/HP y tipo de carga.
        </p>
        <p className="nota">Se construye en el Paso 7.</p>
      </Tarjeta>
    </section>
  )
}
