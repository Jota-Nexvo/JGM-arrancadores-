import { useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import Tarjeta from './components/Tarjeta.jsx'
import Boton from './components/Boton.jsx'
import Chip from './components/Chip.jsx'
import Segmentado from './components/Segmentado.jsx'
import { IconoLupa, IconoChevron, IconoEscudo } from './components/Iconos.jsx'
import { TAMANOS, tamanoGuardado, aplicarTamano } from './lib/tamanoLetra.js'
import './App.css'

// Pantalla de MUESTRA del Paso 3: exhibe los tokens y componentes base
// del sistema de diseño JGM. Se reemplaza por la app real en el Paso 5.
export default function App() {
  const [fs, setFs] = useState(tamanoGuardado())

  function cambiarTamano(valor) {
    setFs(valor)
    aplicarTamano(valor)
  }

  return (
    <div className="app-shell">
      <Encabezado />

      <main className="contenido">
        <p className="overline">Sistema de diseño — muestra (Paso 3)</p>

        <Tarjeta>
          <p className="overline seccion-titulo">Tamaño de letra</p>
          <Segmentado opciones={TAMANOS} activo={fs} alCambiar={cambiarTamano} />
          <p className="nota">Agranda o achica toda la app. Se guarda tu elección.</p>
        </Tarjeta>

        <Tarjeta>
          <p className="overline seccion-titulo">Tipografía</p>
          <h1 className="muestra-titulo">Título de pantalla</h1>
          <p>Texto de cuerpo: guía para conectar, configurar y arrancar el equipo.</p>
          <p className="texto-secundario">Texto secundario: aclaraciones y notas.</p>
          <p className="dato-mono">
            <span className="mono">P105</span> · Límite de corriente = <span className="mono">300 %In</span>
          </p>
        </Tarjeta>

        <Tarjeta>
          <p className="overline seccion-titulo">Botones</p>
          <div className="fila-envuelta">
            <Boton>
              <IconoLupa tamano={18} /> Buscar
            </Boton>
            <Boton variante="secundario">Secundario</Boton>
            <Boton variante="peligro">Peligro</Boton>
            <Boton disabled>Deshabilitado</Boton>
          </div>
        </Tarjeta>

        <Tarjeta>
          <p className="overline seccion-titulo">Chips</p>
          <div className="fila-envuelta">
            <Chip variante="codigo">E72</Chip>
            <Chip variante="codigo">P105</Chip>
            <Chip variante="advertencia">sin verificar</Chip>
            <Chip variante="ok">verificado</Chip>
            <Chip>WEG · SSW-05 Plus</Chip>
          </div>
        </Tarjeta>

        <Tarjeta>
          <p className="overline seccion-titulo">Fila de modelo (catálogo)</p>
          <button type="button" className="fila-modelo">
            <span className="fila-modelo-badge mono">WEG</span>
            <span className="fila-modelo-texto">
              <b>SSW-05 Plus</b>
              <small>3–85 A · 220–575 V · By-pass (derivación)</small>
            </span>
            <IconoChevron tamano={18} />
          </button>
        </Tarjeta>

        <Tarjeta className="tarjeta-aviso">
          <IconoEscudo tamano={20} />
          <p>
            <b>Aviso de seguridad:</b> valores sugeridos — verificar contra el manual del equipo y
            la carga real.
          </p>
        </Tarjeta>
      </main>
    </div>
  )
}
