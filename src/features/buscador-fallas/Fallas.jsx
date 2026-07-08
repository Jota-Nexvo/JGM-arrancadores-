import { useState } from 'react'
import Tarjeta from '../../components/Tarjeta.jsx'
import Chip from '../../components/Chip.jsx'
import CampoBusqueda from '../../components/CampoBusqueda.jsx'
import {
  buscarFallaSSW05,
  FUENTE_FALLAS_SSW05,
} from '../../data/fallas-ssw05-ejemplo.js'
import './Fallas.css'

const EJEMPLOS = ['E72', 'E05', 'E63', 'E70']

// Buscador de fallas (mockup Paso 9): funciona de verdad con las 21 fallas
// del SSW-05. El índice global multi-marca llega en el Paso 21.
export default function Fallas({ codigoInicial }) {
  const [ultimo, setUltimo] = useState(codigoInicial || '')
  const [resultado, setResultado] = useState(() =>
    codigoInicial ? buscarFallaSSW05(codigoInicial) : undefined,
  )

  function buscar(texto) {
    setUltimo(texto)
    setResultado(buscarFallaSSW05(texto))
  }

  return (
    <section className="pantalla">
      <p className="overline">Buscador de fallas</p>
      <h1 className="titulo-pantalla">Código de falla</h1>

      <CampoBusqueda valorInicial={codigoInicial || ''} alBuscar={buscar} />

      {/* Estado vacío */}
      {resultado === undefined && (
        <Tarjeta>
          <p>
            Escribí el código que muestra el arrancador (con o sin la letra:{' '}
            <span className="mono">72</span> = <span className="mono">E72</span>).
          </p>
          <div className="fila-envuelta ejemplos-fila">
            {EJEMPLOS.map((c) => (
              <button key={c} type="button" className="chip-falla mono" onClick={() => buscar(c)}>
                {c}
              </button>
            ))}
          </div>
          <p className="nota">
            Por ahora busca en el WEG SSW-05 Plus (21 códigos). El índice de todas las marcas llega
            en el Paso 21.
          </p>
        </Tarjeta>
      )}

      {/* Sin resultado */}
      {resultado === null && (
        <Tarjeta>
          <p>
            No se encontró <Chip variante="codigo">{ultimo.toUpperCase()}</Chip> en el SSW-05.
          </p>
          <p className="nota">
            Probá con o sin la letra inicial (ej. 72 / E72), o con otro código:
          </p>
          <div className="fila-envuelta ejemplos-fila">
            {EJEMPLOS.map((c) => (
              <button key={c} type="button" className="chip-falla mono" onClick={() => buscar(c)}>
                {c}
              </button>
            ))}
          </div>
        </Tarjeta>
      )}

      {/* Resultado */}
      {resultado && (
        <Tarjeta className="falla-resultado">
          <div className="falla-encabezado">
            <span className="falla-codigo mono">{resultado.codigo}</span>
            <b>{resultado.titulo}</b>
          </div>
          <div className="fila-envuelta">
            <Chip>WEG · SSW-05 Plus</Chip>
            <Chip variante="advertencia">sin verificar</Chip>
          </div>

          <p className="overline bloque-titulo">Qué significa</p>
          <p className="falla-texto">{resultado.significa}</p>

          {resultado.causas && (
            <>
              <p className="overline bloque-titulo">Causas probables</p>
              <ul className="falla-causas">
                {resultado.causas.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          )}

          <p className="overline bloque-titulo">Solución paso a paso</p>
          <ol className="pasos-lista">
            {resultado.solucion.map((s, i) => (
              <li key={i}>
                <span className="paso-num mono">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>

          <div className="falla-cajas">
            <div className="falla-caja">
              <p className="overline">Dónde revisar</p>
              <p className="mono falla-caja-valor">{resultado.donde}</p>
            </div>
            <div className="falla-caja">
              <p className="overline">LED</p>
              <p className="falla-caja-valor">{resultado.led || '— (con HMI: código en display)'}</p>
            </div>
          </div>

          <p className="overline bloque-titulo">Reset</p>
          <p className="falla-texto">{resultado.reset}</p>

          <p className="fuente-seccion">
            Fuente: {FUENTE_FALLAS_SSW05} · <span className="pendiente">revisión pendiente</span>
          </p>
        </Tarjeta>
      )}
    </section>
  )
}
