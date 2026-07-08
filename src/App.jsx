import { useEffect, useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import BarraPestanas from './components/BarraPestanas.jsx'
import Splash from './components/Splash.jsx'
import Inicio from './features/inicio/Inicio.jsx'
import Catalogo from './features/catalogo/Catalogo.jsx'
import Ficha from './features/catalogo/Ficha.jsx'
import Fallas from './features/buscador-fallas/Fallas.jsx'
import Calculadora from './features/calculadora/Calculadora.jsx'
import Ajustes from './features/ajustes/Ajustes.jsx'
import './App.css'

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [codigoBuscado, setCodigoBuscado] = useState('')
  const [splashVisible, setSplashVisible] = useState(true)
  const [splashSale, setSplashSale] = useState(false)

  // Splash ~1.1s + desvanecido de 0.3s
  useEffect(() => {
    const t1 = setTimeout(() => setSplashSale(true), 1100)
    const t2 = setTimeout(() => setSplashVisible(false), 1450)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  // Buscar desde el Inicio o la Ficha: guarda el código y salta a Fallas
  function buscarCodigo(codigo) {
    setCodigoBuscado(codigo)
    setPantalla('fallas')
  }

  // La Ficha vive "dentro" de la pestaña Catálogo
  const pestanaActiva = pantalla === 'ficha' ? 'catalogo' : pantalla

  return (
    <div className="app-shell">
      {splashVisible && <Splash saliendo={splashSale} />}
      <Encabezado />
      <main className="contenido" key={pantalla}>
        {pantalla === 'inicio' && (
          <Inicio
            alNavegar={setPantalla}
            alBuscar={buscarCodigo}
            alAbrirFicha={() => setPantalla('ficha')}
          />
        )}
        {pantalla === 'catalogo' && <Catalogo alAbrirFicha={() => setPantalla('ficha')} />}
        {pantalla === 'ficha' && (
          <Ficha
            alVolver={() => setPantalla('catalogo')}
            alBuscarFalla={buscarCodigo}
            alAbrirBuscador={() => setPantalla('fallas')}
          />
        )}
        {pantalla === 'fallas' && <Fallas codigoInicial={codigoBuscado} />}
        {pantalla === 'calc' && <Calculadora />}
        {pantalla === 'ajustes' && <Ajustes />}
      </main>
      <BarraPestanas activa={pestanaActiva} alCambiar={setPantalla} />
    </div>
  )
}
