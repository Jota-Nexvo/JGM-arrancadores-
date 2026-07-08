import { useState } from 'react'
import Tarjeta from '../../components/Tarjeta.jsx'
import Chip from '../../components/Chip.jsx'
import Segmentado from '../../components/Segmentado.jsx'
import FilaModelo from '../../components/FilaModelo.jsx'
import { IconoAlerta } from '../../components/Iconos.jsx'
import { FICHA_SSW05 } from '../../data/ficha-ssw05-ejemplo.js'
import { SERIES } from '../../data/catalogo-ejemplo.js'
import './Calculadora.css'

const MODOS = [
  { valor: 'parametros', etiqueta: 'Motor → parámetros' },
  { valor: 'arrancador', etiqueta: 'Motor → arrancador' },
]

const TENSIONES = [220, 380, 400]

const CARGAS = [
  { id: 'bomba', etiqueta: 'Bomba' },
  { id: 'ventilador', etiqueta: 'Ventilador' },
  { id: 'compresor', etiqueta: 'Compresor' },
  { id: 'cinta', etiqueta: 'Cinta' },
]

// Calculadora (mockup Paso 9) con los DOS modos, entrada por chips.
// Sugerencias de ejemplo basadas en el SSW-05 (valores de fábrica del
// manual + guía general). La versión completa llega en el Paso 22.
export default function Calculadora() {
  const [modo, setModo] = useState('parametros')
  const [corriente, setCorriente] = useState('')
  const [tension, setTension] = useState(380)
  const [carga, setCarga] = useState('bomba')

  const amperes = Number(corriente)
  const hayMotor = corriente !== '' && amperes > 0

  // Calibre SSW-05 sugerido (regla del manual: ajuste 30–100% de In, P105)
  const variante = hayMotor
    ? FICHA_SSW05.variantes.find((v) => amperes <= v.a && amperes >= v.a * 0.3)
    : null

  // Series que cubren esa corriente (a nivel de gama)
  const seriesQueSirven = hayMotor
    ? SERIES.filter((s) => amperes >= s.corriente.min * 0.3 && amperes <= s.corriente.max)
    : []

  return (
    <section className="pantalla">
      <p className="overline">Parámetros y calibre</p>
      <h1 className="titulo-pantalla">Calculadora</h1>

      <Segmentado opciones={MODOS} activo={modo} alCambiar={setModo} />

      {/* ---- Datos del motor (entrada por chips) ---- */}
      <Tarjeta>
        <p className="overline seccion-titulo">Corriente nominal del motor</p>
        <label className="filtro-corriente">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="de la placa"
            value={corriente}
            onChange={(e) => setCorriente(e.target.value)}
          />
          <span className="mono">A</span>
        </label>

        <p className="overline seccion-titulo con-margen">Tensión</p>
        <div className="fila-envuelta">
          {TENSIONES.map((v) => (
            <button
              key={v}
              type="button"
              className={`chip-filtro${tension === v ? ' activo' : ''}`}
              onClick={() => setTension(v)}
            >
              {v} V
            </button>
          ))}
        </div>

        <p className="overline seccion-titulo con-margen">Tipo de carga</p>
        <div className="fila-envuelta">
          {CARGAS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip-filtro${carga === c.id ? ' activo' : ''}`}
              onClick={() => setCarga(c.id)}
            >
              {c.etiqueta}
            </button>
          ))}
        </div>
      </Tarjeta>

      {/* ---- Aviso de seguridad (siempre visible) ---- */}
      <Tarjeta className="tarjeta-aviso">
        <IconoAlerta tamano={20} />
        <p>
          <b>Valores sugeridos</b> — verificar contra el manual del equipo y la carga real.
        </p>
      </Tarjeta>

      {!hayMotor && (
        <p className="nota">Ingresá la corriente de placa del motor para ver sugerencias.</p>
      )}

      {/* ---- MODO A: motor → parámetros ---- */}
      {modo === 'parametros' && hayMotor && (
        <div className="seccion">
          <Tarjeta className="sugerencia">
            <div className="sugerencia-fila">
              <b>Tensión de pedestal</b>
              <span className="mono valor">30 %Un</span>
            </div>
            <p className="param-desc">Subir hasta que el motor gire apenas se da la marcha (rango 30–80%).</p>
            <Chip variante="codigo">P101</Chip> <Chip variante="ok">fábrica (manual)</Chip>
          </Tarjeta>

          <Tarjeta className="sugerencia">
            <div className="sugerencia-fila">
              <b>Rampa de aceleración</b>
              <span className="mono valor">10 s</span>
            </div>
            <p className="param-desc">Ajustar para llegar a velocidad nominal al final de la rampa (1–20 s).</p>
            <Chip variante="codigo">P102</Chip> <Chip variante="ok">fábrica (manual)</Chip>
          </Tarjeta>

          {variante && (
            <Tarjeta className="sugerencia">
              <div className="sugerencia-fila">
                <b>Corriente del motor (protecciones)</b>
                <span className="mono valor">{Math.round((amperes / variante.a) * 100)}%</span>
              </div>
              <p className="param-desc">
                {amperes} A ÷ {variante.a} A del {variante.modelo}. Define todas las protecciones.
              </p>
              <Chip variante="codigo">P105</Chip> <Chip variante="ok">cálculo según manual</Chip>
            </Tarjeta>
          )}

          <Tarjeta className="sugerencia">
            <div className="sugerencia-fila">
              <b>Rampa de desaceleración</b>
              <span className="mono valor">{carga === 'bomba' ? 'usar' : 'Off'}</span>
            </div>
            <p className="param-desc">
              {carga === 'bomba'
                ? 'En bombas: usarla para evitar el golpe de ariete (Off–20 s).'
                : 'Para esta carga normalmente queda en Off (valor de fábrica).'}
            </p>
            <Chip variante="codigo">P104</Chip>{' '}
            {carga === 'bomba' ? (
              <Chip variante="ok">recomendación del manual</Chip>
            ) : (
              <Chip>guía general</Chip>
            )}
          </Tarjeta>

          <p className="nota">
            Sugerencias de ejemplo sobre el SSW-05 ({tension} V). La calculadora completa, con
            todas las series y cargas, llega en el Paso 22.
          </p>
        </div>
      )}

      {/* ---- MODO B: motor → qué arrancador ---- */}
      {modo === 'arrancador' && hayMotor && (
        <div className="seccion">
          {variante && (
            <Tarjeta>
              <p className="overline seccion-titulo">Calibre sugerido (WEG SSW-05)</p>
              <FilaModelo
                badge="WEG"
                nombre={variante.modelo}
                detalle={`${variante.a} A · ajuste ≈ ${Math.round((amperes / variante.a) * 100)}%`}
                chips={
                  <>
                    <Chip variante="codigo">contactor {variante.contactor}</Chip>
                    <Chip variante="codigo">fusible {variante.fusible}</Chip>
                  </>
                }
              />
            </Tarjeta>
          )}

          <Tarjeta>
            <p className="overline seccion-titulo">Series que cubren {amperes} A</p>
            {seriesQueSirven.length > 0 ? (
              seriesQueSirven.map((s) => (
                <FilaModelo
                  key={s.id}
                  badge={s.badge}
                  nombre={s.nombre}
                  detalle={`${s.corrienteTexto} · ${s.tensionTexto}`}
                />
              ))
            ) : (
              <p>Ninguna serie cargada cubre esa corriente.</p>
            )}
          </Tarjeta>

          <p className="nota">
            A nivel de gama (datos de ejemplo, sin verificar). Con el motor de datos (Paso 11) va a
            sugerir la variante exacta de cada serie.
          </p>
        </div>
      )}
    </section>
  )
}
