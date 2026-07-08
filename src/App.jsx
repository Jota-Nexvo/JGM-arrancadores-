import logo from './assets/jgm-logo.png'

// Pantalla mínima del Paso 1: verifica que el proyecto levanta.
// El sistema de diseño real llega en el Paso 3.
export default function App() {
  return (
    <main className="paso1">
      <div className="paso1-card">
        <img src={logo} alt="Logo JGM Servicios" className="paso1-logo" />
        <h1>JGM Arrancadores</h1>
        <p>Guía de campo · sin conexión</p>
        <p className="paso1-estado">✔ Proyecto base React + Vite funcionando (Paso 1)</p>
      </div>
    </main>
  )
}
