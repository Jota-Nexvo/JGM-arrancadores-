import { useState } from 'react'
import Boton from './Boton.jsx'
import { IconoLupa } from './Iconos.jsx'
import './CampoBusqueda.css'

// Campo de búsqueda de código de falla: lupa + input mono + botón Buscar.
// Enter también busca. Reutilizado en Inicio y en la pantalla Fallas.
export default function CampoBusqueda({ placeholder = 'ej. E72', alBuscar, valorInicial = '' }) {
  const [valor, setValor] = useState(valorInicial)

  function enviar(e) {
    e.preventDefault()
    const v = valor.trim()
    if (v) alBuscar(v)
  }

  return (
    <form className="campo-busqueda" onSubmit={enviar}>
      <IconoLupa tamano={20} />
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder={placeholder}
        aria-label="Código de falla"
        autoCapitalize="characters"
        autoCorrect="off"
        spellCheck={false}
        enterKeyHint="search"
      />
      <Boton type="submit">Buscar</Boton>
    </form>
  )
}
