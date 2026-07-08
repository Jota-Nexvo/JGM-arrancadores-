import { useEffect, useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import BarraPestanas from './components/BarraPestanas.jsx'
import Splash from './components/Splash.jsx'
import Inicio from './features/inicio/Inicio.jsx'
import Catalogo from './features/catalogo/Catalogo.jsx'
import Fallas from './features/buscador-fallas/Fallas.jsx'
import Calculadora from './features/calculadora/Calculadora.jsx'
import Ajustes from './features/ajustes/Ajustes.jsx'
import './App.css'

const PANTALLAS = {
  inicio: Inicio,
  catalogo: Catalogo,
  fallas: Fallas,
  calc: Calculadora,
  ajustes: Ajustes,
}

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
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

  const Pantalla = PANTALLAS[pantalla]

  return (
    <div className="app-shell">
      {splashVisible && <Splash saliendo={splashSale} />}
      <Encabezado />
      <main className="contenido" key={pantalla}>
        <Pantalla />
      </main>
      <BarraPestanas activa={pantalla} alCambiar={setPantalla} />
    </div>
  )
}
