import { useState } from 'react'
import Tarjeta from '../../components/Tarjeta.jsx'
import Chip from '../../components/Chip.jsx'
import FilaModelo from '../../components/FilaModelo.jsx'
import { MARCAS, SERIES, CARGAS, TENSIONES_FILTRO } from '../../data/catalogo-ejemplo.js'
import './Catalogo.css'

// Catálogo (mockup Paso 7): exploración por marca + filtros que filtran
// de verdad (tensión / corriente del motor / tipo de carga), sobre datos
// de ejemplo a nivel de serie. Tocar el SSW-05 abre la Ficha (Paso 8);
// las demás series abren ficha cuando se carguen sus datos (Fase 5).
export default function Catalogo({ alAbrirFicha }) {
  const [tension, setTension] = useState(null)
  const [corriente, setCorriente] = useState('')
  const [carga, setCarga] = useState(null)

  const hayFiltros = tension !== null || corriente !== '' || carga !== null

  const seriesFiltradas = SERIES.filter((s) => {
    if (tension !== null && !(s.tension.min <= tension && tension <= s.tension.max)) return false
    const amperes = Number(corriente)
    if (corriente !== '' && amperes > 0 && !(s.corriente.min <= amperes && amperes <= s.corriente.max))
      return false
    if (carga !== null && !s.cargas.includes(carga)) return false
    return true
  })

  function limpiar() {
    setTension(null)
    setCorriente('')
    setCarga(null)
  }

  return (
    <section className="pantalla">
      <p className="overline">Explorar por marca</p>
      <h1 className="titulo-pantalla">Catálogo</h1>

      <Tarjeta>
        <p className="overline seccion-titulo">Tensión de red</p>
        <div className="fila-envuelta">
          {TENSIONES_FILTRO.map((v) => (
            <button
              key={v}
              type="button"
              className={`chip-filtro${tension === v ? ' activo' : ''}`}
              onClick={() => setTension(tension === v ? null : v)}
            >
              {v} V
            </button>
          ))}
        </div>

        <p className="overline seccion-titulo con-margen">Corriente del motor</p>
        <label className="filtro-corriente">
          <input
            type="number"
            inputMode="numeric"
            min="1"
            placeholder="ej. 60"
            value={corriente}
            onChange={(e) => setCorriente(e.target.value)}
          />
          <span className="mono">A</span>
        </label>

        <p className="overline seccion-titulo con-margen">Tipo de carga</p>
        <div className="fila-envuelta">
          {CARGAS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip-filtro${carga === c.id ? ' activo' : ''}`}
              onClick={() => setCarga(carga === c.id ? null : c.id)}
            >
              {c.etiqueta}
            </button>
          ))}
        </div>

        {hayFiltros && (
          <button type="button" className="limpiar-filtros" onClick={limpiar}>
            Limpiar filtros ({seriesFiltradas.length} resultado{seriesFiltradas.length !== 1 && 's'})
          </button>
        )}
      </Tarjeta>

      {MARCAS.map((marca) => {
        const deLaMarca = seriesFiltradas.filter((s) => s.marcaId === marca.id)
        if (deLaMarca.length === 0) return null
        return (
          <div key={marca.id}>
            <p className="overline marca-titulo">
              {marca.nombre} · {deLaMarca.length} serie{deLaMarca.length !== 1 && 's'}
            </p>
            <Tarjeta className="tarjeta-lista">
              {deLaMarca.map((s) => (
                <FilaModelo
                  key={s.id}
                  badge={s.badge}
                  nombre={s.nombre}
                  detalle={`${s.corrienteTexto} · ${s.tensionTexto} · ${s.interfaz}`}
                  onClick={s.id === 'weg-ssw05' ? alAbrirFicha : undefined}
                  chips={
                    <>
                      {s.bypass && <Chip>By-pass (derivación)</Chip>}
                      <Chip variante="advertencia">sin verificar</Chip>
                    </>
                  }
                />
              ))}
            </Tarjeta>
          </div>
        )
      })}

      {seriesFiltradas.length === 0 && (
        <Tarjeta>
          <p>Ningún equipo coincide con esos filtros.</p>
          <button type="button" className="limpiar-filtros" onClick={limpiar}>
            Limpiar filtros
          </button>
        </Tarjeta>
      )}

      <p className="nota">
        Datos a nivel de serie, de ejemplo (sin verificar). Las variantes por modelo y la ficha
        completa llegan en los pasos 8 y 11.
      </p>
    </section>
  )
}
