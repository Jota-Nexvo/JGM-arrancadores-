import { useState } from 'react'
import Tarjeta from '../../components/Tarjeta.jsx'
import Boton from '../../components/Boton.jsx'
import Segmentado from '../../components/Segmentado.jsx'
import { TAMANOS, tamanoGuardado, aplicarTamano } from '../../lib/tamanoLetra.js'

// Ajustes: tamaño de letra (funcional) + respaldo (llega en el Paso 13).
export default function Ajustes() {
  const [fs, setFs] = useState(tamanoGuardado())

  function cambiarTamano(valor) {
    setFs(valor)
    aplicarTamano(valor)
  }

  return (
    <section className="pantalla">
      <p className="overline">Preferencias</p>
      <h1 className="titulo-pantalla">Ajustes</h1>

      <Tarjeta>
        <p className="overline seccion-titulo">Tamaño de letra</p>
        <Segmentado opciones={TAMANOS} activo={fs} alCambiar={cambiarTamano} />
        <p className="nota">Agranda o achica toda la app. Se guarda tu elección.</p>
      </Tarjeta>

      <Tarjeta>
        <p className="overline seccion-titulo">Respaldo</p>
        <div className="fila-envuelta">
          <Boton variante="secundario" disabled>
            Exportar catálogo
          </Boton>
          <Boton variante="secundario" disabled>
            Importar respaldo
          </Boton>
        </div>
        <p className="nota">Disponible en el Paso 13 (guardá el archivo en Drive o pasalo a otro celu).</p>
      </Tarjeta>

      <p className="acerca">JGM Servicios · Arrancadores · v0.1 · funciona sin conexión</p>
    </section>
  )
}
