import { useState } from 'react'
import Tarjeta from '../../components/Tarjeta.jsx'
import Chip from '../../components/Chip.jsx'
import Boton from '../../components/Boton.jsx'
import { IconoEscudo, IconoAlerta, IconoLupa } from '../../components/Iconos.jsx'
import { FICHA_SSW05, BORNES_SSW05 } from '../../data/ficha-ssw05-ejemplo.js'
import { DiagramaPotencia, DiagramaComando } from './DiagramaFicha.jsx'
import './Ficha.css'

const SECCIONES = [
  { id: 'datos', etiqueta: 'Datos' },
  { id: 'parametros', etiqueta: 'Parámetros' },
  { id: 'diagrama', etiqueta: 'Diagrama' },
  { id: 'presets', etiqueta: 'Presets' },
  { id: 'protecciones', etiqueta: 'Protecciones' },
  { id: 'puesta', etiqueta: 'Puesta en marcha' },
  { id: 'fallas', etiqueta: 'Fallas' },
  { id: 'notas', etiqueta: 'Notas' },
]

const BORNES_POTENCIA = ['F1', 'RF', 'K1', 'R', 'S', 'T', 'U', 'V', 'W', 'M']

// Ficha de modelo (mockup Paso 8) — WEG SSW-05 Plus con datos reales del
// manual 0899.5119, estado «sin verificar». Navegación por barra de chips.
export default function Ficha({ alVolver, alBuscarFalla, alAbrirBuscador }) {
  const f = FICHA_SSW05
  const [seccion, setSeccion] = useState('datos')
  const [borne, setBorne] = useState(null)
  const [corrienteMotor, setCorrienteMotor] = useState('')
  const [notas, setNotas] = useState(() => localStorage.getItem('jgm.notas.weg-ssw05') || '')

  // Selector de calibre: menor variante donde I motor quede entre 30% y 100% de In
  const amperes = Number(corrienteMotor)
  const sugerida =
    corrienteMotor !== '' && amperes > 0
      ? f.variantes.find((v) => amperes <= v.a && amperes >= v.a * 0.3)
      : null

  function guardarNotas(texto) {
    setNotas(texto)
    localStorage.setItem('jgm.notas.weg-ssw05', texto)
  }

  const fuente = (
    <p className="fuente-seccion">
      Fuente: {f.fuente} · <span className="pendiente">revisión pendiente</span>
    </p>
  )

  const panelBorne = borne && (
    <Tarjeta className="borne-panel">
      <p className="borne-nombre mono">{BORNES_SSW05[borne].nombre}</p>
      <dl>
        <dt>Qué es</dt>
        <dd>{BORNES_SSW05[borne].que}</dd>
        <dt>Viene de</dt>
        <dd>{BORNES_SSW05[borne].vieneDe}</dd>
        <dt>Va a</dt>
        <dd>{BORNES_SSW05[borne].vaA}</dd>
        {BORNES_SSW05[borne].notas !== '—' && (
          <>
            <dt>Notas</dt>
            <dd>{BORNES_SSW05[borne].notas}</dd>
          </>
        )}
      </dl>
    </Tarjeta>
  )

  return (
    <section className="pantalla ficha">
      {/* ---- Hero ---- */}
      <button type="button" className="volver" onClick={alVolver}>
        ‹ Catálogo / {f.marca}
      </button>
      <p className="eyebrow">
        <span className="overline">
          {f.marca} · Serie {f.serie}
        </span>
        <Chip variante="advertencia">sin verificar</Chip>
      </p>
      <h1 className="ficha-titulo">{f.serie}</h1>
      <p className="texto-secundario">{f.subtitulo}</p>

      <div className="clave-grid">
        <div className="clave-card">
          <span className="overline">Corriente</span>
          <b>{f.clave.corriente}</b>
        </div>
        <div className="clave-card">
          <span className="overline">Tensión</span>
          <b>{f.clave.tension}</b>
        </div>
        <div className="clave-card">
          <span className="overline">By-pass (derivación)</span>
          <b>{f.clave.bypass}</b>
        </div>
        <div className="clave-card">
          <span className="overline">Arranque</span>
          <b>{f.clave.arranque}</b>
        </div>
      </div>

      {/* ---- Barra de secciones (chips, sticky) ---- */}
      <div className="secciones-barra">
        {SECCIONES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`chip-filtro${seccion === s.id ? ' activo' : ''}`}
            onClick={() => setSeccion(s.id)}
          >
            {s.etiqueta}
          </button>
        ))}
      </div>

      {/* ---- DATOS ---- */}
      {seccion === 'datos' && (
        <div className="seccion" key="datos">
          <Tarjeta>
            <p className="overline seccion-titulo">Selector de calibre</p>
            <label className="filtro-corriente">
              <input
                type="number"
                inputMode="decimal"
                min="0"
                placeholder="corriente del motor"
                value={corrienteMotor}
                onChange={(e) => setCorrienteMotor(e.target.value)}
              />
              <span className="mono">A</span>
            </label>
            {sugerida && (
              <p className="calibre-resultado">
                → <b className="mono">{sugerida.modelo}</b> · ajuste corriente motor ≈{' '}
                <b className="mono">{Math.round((amperes / sugerida.a) * 100)}%</b>
              </p>
            )}
            {corrienteMotor !== '' && amperes > 0 && !sugerida && (
              <p className="calibre-resultado fuera">
                Fuera de la gama del SSW-05 (el ajuste debe quedar entre 30% y 100% de In).
              </p>
            )}
            <p className="nota">
              Orientativo (rango de ajuste 30–100% de In, P105). Verificá potencia del motor,
              tensión y régimen: máx. 4 arranques/hora.
            </p>
          </Tarjeta>

          <Tarjeta>
            <p className="overline seccion-titulo">Gama de modelos (motor WEG 4 polos)</p>
            <div className="tabla-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>In</th>
                    <th>HP/kW 220-240 V</th>
                    <th>HP/kW 380-415 V</th>
                    <th>HP/kW 440-480 V</th>
                    <th>Contactor</th>
                    <th>Fusible</th>
                  </tr>
                </thead>
                <tbody>
                  {f.variantes.map((v) => (
                    <tr key={v.modelo} className={sugerida?.modelo === v.modelo ? 'resaltada' : ''}>
                      <td className="mono">{v.modelo}</td>
                      <td className="mono">{v.a} A</td>
                      <td>{v.p220}</td>
                      <td>{v.p380}</td>
                      <td>{v.p440}</td>
                      <td className="mono">{v.contactor}</td>
                      <td className="mono">{v.fusible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nota">Fusibles de control F11/F12: Tipo D 6 A (todos los calibres).</p>
          </Tarjeta>

          <Tarjeta>
            <p className="overline seccion-titulo">Tamaño y peso</p>
            <ul className="lista-simple">
              {f.tamanos.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Tarjeta>
          {fuente}
        </div>
      )}

      {/* ---- PARÁMETROS ---- */}
      {seccion === 'parametros' && (
        <div className="seccion" key="parametros">
          <p className="nota">{f.parametrosNota}</p>
          {f.parametros.map((p) => (
            <Tarjeta key={p.codigo} className="param-card">
              <div className="param-encabezado">
                <span className="param-badge mono">{p.codigo}</span>
                <b>{p.nombre}</b>
              </div>
              <p className="param-desc">{p.desc}</p>
              <div className="fila-envuelta">
                <Chip variante="codigo">rango {p.rango}</Chip>
                <Chip variante="codigo">fábrica {p.fabrica}</Chip>
                <Chip>trim-pot: {p.trimpot}</Chip>
              </div>
            </Tarjeta>
          ))}
          {fuente}
        </div>
      )}

      {/* ---- DIAGRAMA ---- */}
      {seccion === 'diagrama' && (
        <div className="seccion" key="diagrama">
          <Tarjeta className="tarjeta-aviso">
            <IconoAlerta tamano={20} />
            <p>
              <b>Seguridad:</b> trabajá con el equipo desenergizado y verificá ausencia de tensión
              antes de tocar el cableado.
            </p>
          </Tarjeta>

          <p className="overline seccion-titulo">Potencia · esquema de cableado</p>
          <Tarjeta>
            <DiagramaPotencia sel={borne} onSelect={setBorne} />
          </Tarjeta>
          {borne && BORNES_POTENCIA.includes(borne) && panelBorne}

          <p className="overline seccion-titulo">Comando (2 hilos)</p>
          <Tarjeta>
            <DiagramaComando sel={borne} onSelect={setBorne} />
          </Tarjeta>
          {borne && !BORNES_POTENCIA.includes(borne) && panelBorne}

          <p className="nota">
            Conexión SOLO en línea — inside-delta (dentro del triángulo): <b>no aplica</b>. RF
            (supervisor de fases): opcional según instalación — el SSW-05 ya detecta falta de fase
            (E03) y secuencia incorrecta (E67). Zoom y paneo llegan con la versión definitiva
            (Paso 15).
          </p>
          {fuente}
        </div>
      )}

      {/* ---- PRESETS ---- */}
      {seccion === 'presets' && (
        <div className="seccion" key="presets">
          {f.presets.map((p) => (
            <Tarjeta key={p.carga}>
              <div className="preset-encabezado">
                <b>{p.carga}</b>
                {p.fuente === 'manual del equipo' ? (
                  <Chip variante="ok">{p.fuente}</Chip>
                ) : (
                  <Chip>{p.fuente}</Chip>
                )}
              </div>
              <p className="param-desc">{p.texto}</p>
            </Tarjeta>
          ))}
          {fuente}
        </div>
      )}

      {/* ---- PROTECCIONES ---- */}
      {seccion === 'protecciones' && (
        <div className="seccion" key="protecciones">
          <Tarjeta>
            {f.protecciones.map((p) => (
              <div key={p.nombre} className="proteccion-fila">
                <IconoEscudo tamano={20} />
                <div>
                  <b>{p.nombre}</b>
                  <p className="param-desc">{p.detalle}</p>
                  <div className="fila-envuelta">
                    {p.param !== '—' && <Chip variante="codigo">{p.param}</Chip>}
                    <button type="button" className="chip-enlace" onClick={() => alBuscarFalla(p.falla)}>
                      falla {p.falla}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Tarjeta>
          <p className="nota">{f.proteccionesNota}</p>
          {fuente}
        </div>
      )}

      {/* ---- PUESTA EN MARCHA ---- */}
      {seccion === 'puesta' && (
        <div className="seccion" key="puesta">
          <Tarjeta>
            <ol className="pasos-lista">
              {f.puestaEnMarcha.map((p, i) => (
                <li key={i} className={p.seguridad ? 'seguridad' : ''}>
                  <span className="paso-num mono">{i + 1}</span>
                  <span>
                    {p.seguridad && <IconoAlerta tamano={15} />} {p.texto}
                  </span>
                </li>
              ))}
            </ol>
          </Tarjeta>
          <p className="nota">{f.puestaEnMarchaNota}</p>
          {fuente}
        </div>
      )}

      {/* ---- FALLAS ---- */}
      {seccion === 'fallas' && (
        <div className="seccion" key="fallas">
          <p className="nota">Tocá un código para verlo en el buscador de fallas.</p>
          <div className="fallas-grid">
            {f.fallas.map((c) => (
              <button key={c} type="button" className="chip-falla mono" onClick={() => alBuscarFalla(c)}>
                {c}
              </button>
            ))}
          </div>
          <Boton variante="secundario" onClick={alAbrirBuscador}>
            <IconoLupa tamano={18} /> Abrir buscador de fallas
          </Boton>
          {fuente}
        </div>
      )}

      {/* ---- NOTAS DEL TÉCNICO ---- */}
      {seccion === 'notas' && (
        <div className="seccion" key="notas">
          <Tarjeta>
            <p className="overline seccion-titulo">Notas del técnico</p>
            <textarea
              className="notas-area"
              rows={6}
              placeholder="Tus trucos y valores habituales para este equipo…"
              value={notas}
              onChange={(e) => guardarNotas(e.target.value)}
            />
            <p className="nota">
              Se guardan en este celular y entran al respaldo Export/Import (Paso 13).
            </p>
          </Tarjeta>
        </div>
      )}

      {/* ---- Pie ---- */}
      <p className="fuente-seccion pie-ficha">
        {f.fuente} · Ficha <span className="pendiente">«sin verificar»</span> hasta tu aprobación.
      </p>
    </section>
  )
}
