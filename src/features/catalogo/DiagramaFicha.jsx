// Diagrama de conexión del SSW-05 como ESQUEMA LÓGICO de cableado (mockup Paso 8):
// potencia (red → fusibles → K1 → SSW → motor, con RF supervisor de fases opcional)
// + comando 2 hilos (A1/A2, DI1/DI2, relés). Cada borne/elemento es tocable.
// La versión definitiva (con zoom/paneo y las dos vías A/B) se decide en el Paso 15.

const EST = {
  linea: { stroke: 'var(--ink-2)', strokeWidth: 1.6, fill: 'none' },
  lineaOpcional: { stroke: 'var(--ink-3)', strokeWidth: 1.4, strokeDasharray: '4 3', fill: 'none' },
  caja: { stroke: 'var(--brand)', strokeWidth: 1.8, fill: 'var(--surface)' },
  cajaOpcional: { stroke: 'var(--warn)', strokeWidth: 1.5, strokeDasharray: '5 3', fill: 'var(--warn-bg)' },
}

function Borne({ id, x, y, etiqueta, sel, onSelect, ancho = 30 }) {
  const activo = sel === id
  return (
    <g onClick={() => onSelect(id)} style={{ cursor: 'pointer' }}>
      {/* zona táctil generosa */}
      <rect x={x - ancho / 2 - 6} y={y - 14} width={ancho + 12} height={28} fill="transparent" />
      <rect
        x={x - ancho / 2}
        y={y - 9}
        width={ancho}
        height={18}
        rx={5}
        fill={activo ? 'var(--brand-2)' : 'var(--surface-2)'}
        stroke={activo ? 'var(--brand-2)' : 'var(--border-2)'}
        strokeWidth="1.2"
      />
      <text
        x={x}
        y={y + 3.5}
        textAnchor="middle"
        fontFamily="var(--fuente-mono)"
        fontSize="9.5"
        fontWeight="600"
        fill={activo ? 'var(--on-brand)' : 'var(--code)'}
      >
        {etiqueta}
      </text>
    </g>
  )
}

function Etiqueta({ x, y, children, anchor = 'start', tenue = false }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="var(--fuente-ui)"
      fontSize="9.5"
      fill={tenue ? 'var(--ink-3)' : 'var(--ink-2)'}
    >
      {children}
    </text>
  )
}

export function DiagramaPotencia({ sel, onSelect }) {
  const fases = [110, 170, 230] // x de L1 L2 L3
  return (
    <svg viewBox="0 0 340 480" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Red trifásica */}
      {fases.map((x, i) => (
        <g key={x}>
          <text x={x} y={16} textAnchor="middle" fontFamily="var(--fuente-mono)" fontSize="10" fontWeight="600" fill="var(--ink)">
            L{i + 1}
          </text>
          <line x1={x} y1={22} x2={x} y2={48} {...EST.linea} />
        </g>
      ))}

      {/* Fusibles F1/F2/F3 */}
      {fases.map((x) => (
        <g key={`f${x}`}>
          <rect x={x - 5} y={48} width={10} height={20} rx={2} {...EST.caja} />
          <line x1={x} y1={68} x2={x} y2={96} {...EST.linea} />
        </g>
      ))}
      <Borne id="F1" x={57} y={58} etiqueta="F1-F3" ancho={44} sel={sel} onSelect={onSelect} />

      {/* RF — supervisor de fases (opcional, punteado) */}
      <line x1={230} y1={80} x2={288} y2={80} {...EST.lineaOpcional} />
      <rect x={288} y={56} width={46} height={48} rx={6} {...EST.cajaOpcional} />
      <Borne id="RF" x={311} y={72} etiqueta="RF" sel={sel} onSelect={onSelect} />
      <Etiqueta x={311} y={96} anchor="middle" tenue>
        opcional
      </Etiqueta>

      {/* Contactor K1 (esquema 11.3) */}
      {fases.map((x) => (
        <g key={`k${x}`}>
          <line x1={x} y1={96} x2={x - 9} y2={116} {...EST.linea} />
          <line x1={x} y1={118} x2={x} y2={146} {...EST.linea} />
        </g>
      ))}
      <Borne id="K1" x={57} y={110} etiqueta="K1" sel={sel} onSelect={onSelect} />

      {/* Caja SSW-05 */}
      <rect x={88} y={146} width={164} height={130} rx={10} {...EST.caja} />
      <Borne id="R" x={110} y={160} etiqueta="R/1L1" ancho={42} sel={sel} onSelect={onSelect} />
      <Borne id="S" x={170} y={160} etiqueta="S/3L2" ancho={42} sel={sel} onSelect={onSelect} />
      <Borne id="T" x={230} y={160} etiqueta="T/5L3" ancho={42} sel={sel} onSelect={onSelect} />
      <text x={170} y={205} textAnchor="middle" fontFamily="var(--fuente-ui)" fontSize="12" fontWeight="700" fill="var(--ink)">
        SSW-05 Plus
      </text>
      <text x={170} y={222} textAnchor="middle" fontFamily="var(--fuente-ui)" fontSize="9.5" fill="var(--ink-2)">
        tiristores + by-pass interno
      </text>
      <Borne id="U" x={110} y={262} etiqueta="U/2T1" ancho={42} sel={sel} onSelect={onSelect} />
      <Borne id="V" x={170} y={262} etiqueta="V/4T2" ancho={42} sel={sel} onSelect={onSelect} />
      <Borne id="W" x={230} y={262} etiqueta="W/6T3" ancho={42} sel={sel} onSelect={onSelect} />

      {/* Al motor */}
      {fases.map((x) => (
        <g key={`m${x}`}>
          <line x1={x} y1={276} x2={x} y2={330} {...EST.linea} />
          <line x1={x} y1={330} x2={170} y2={362} {...EST.linea} />
        </g>
      ))}
      <circle cx={170} cy={392} r={30} {...EST.caja} />
      <text x={170} y={389} textAnchor="middle" fontFamily="var(--fuente-mono)" fontSize="13" fontWeight="700" fill="var(--ink)">
        M
      </text>
      <text x={170} y={403} textAnchor="middle" fontFamily="var(--fuente-mono)" fontSize="10" fill="var(--ink-2)">
        3~
      </text>
      <g onClick={() => onSelect('M')} style={{ cursor: 'pointer' }}>
        <circle cx={170} cy={392} r={30} fill="transparent" />
      </g>

      {/* Tierra en carcasa del motor */}
      <line x1={200} y1={392} x2={228} y2={392} {...EST.linea} />
      <line x1={228} y1={392} x2={228} y2={404} {...EST.linea} />
      <line x1={219} y1={404} x2={237} y2={404} {...EST.linea} />
      <line x1={222} y1={409} x2={234} y2={409} {...EST.linea} />
      <line x1={225} y1={414} x2={231} y2={414} {...EST.linea} />
      <Etiqueta x={244} y={396}>tierra en carcasa</Etiqueta>

      <Etiqueta x={8} y={458} tenue>
        Esquema lógico (fig. 11.3 del manual).
      </Etiqueta>
      <Etiqueta x={8} y={472} tenue>
        Tocá un borne para ver su función.
      </Etiqueta>
    </svg>
  )
}

export function DiagramaComando({ sel, onSelect }) {
  return (
    <svg viewBox="0 0 340 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Rieles L y N (control 90–250 Vca) */}
      <text x={30} y={16} textAnchor="middle" fontFamily="var(--fuente-mono)" fontSize="10" fontWeight="600" fill="var(--ink)">L</text>
      <text x={66} y={16} textAnchor="middle" fontFamily="var(--fuente-mono)" fontSize="10" fontWeight="600" fill="var(--ink)">N</text>
      <line x1={30} y1={22} x2={30} y2={230} {...EST.linea} />
      <line x1={66} y1={22} x2={66} y2={110} {...EST.linea} />

      {/* A1 vía F11 */}
      <line x1={30} y1={60} x2={120} y2={60} {...EST.linea} />
      <rect x={120} y={54} width={20} height={12} rx={2} {...EST.caja} />
      <line x1={140} y1={60} x2={205} y2={60} {...EST.linea} />
      <Borne id="F11" x={158} y={40} etiqueta="F11/F12" ancho={52} sel={sel} onSelect={onSelect} />

      {/* A2 vía F12 al neutro */}
      <line x1={66} y1={100} x2={120} y2={100} {...EST.linea} />
      <rect x={120} y={94} width={20} height={12} rx={2} {...EST.caja} />
      <line x1={140} y1={100} x2={205} y2={100} {...EST.linea} />

      {/* S1 marcha/paro → DI1 */}
      <line x1={30} y1={150} x2={110} y2={150} {...EST.linea} />
      <line x1={110} y1={150} x2={130} y2={140} {...EST.linea} />
      <line x1={132} y1={150} x2={205} y2={150} {...EST.linea} />
      <Etiqueta x={30} y={132}>S1 · marcha/paro (retención)</Etiqueta>

      {/* S2 reset → DI2 */}
      <line x1={30} y1={200} x2={110} y2={200} {...EST.linea} />
      <line x1={110} y1={200} x2={130} y2={190} {...EST.linea} />
      <line x1={132} y1={200} x2={205} y2={200} {...EST.linea} />
      <Etiqueta x={30} y={182}>S2 · reset (NA, 0,5 s)</Etiqueta>

      {/* Caja de control del SSW-05 */}
      <rect x={205} y={30} width={122} height={240} rx={10} {...EST.caja} />
      <text x={266} y={250} textAnchor="middle" fontFamily="var(--fuente-ui)" fontSize="11" fontWeight="700" fill="var(--ink)">
        SSW-05 · control
      </text>
      <Borne id="A1" x={228} y={60} etiqueta="A1" sel={sel} onSelect={onSelect} />
      <Borne id="A2" x={228} y={100} etiqueta="A2" sel={sel} onSelect={onSelect} />
      <Borne id="DI1" x={228} y={150} etiqueta="DI1" sel={sel} onSelect={onSelect} />
      <Borne id="DI2" x={228} y={200} etiqueta="DI2" sel={sel} onSelect={onSelect} />

      {/* Relés de salida */}
      <Borne id="B13" x={296} y={60} etiqueta="13" sel={sel} onSelect={onSelect} />
      <Borne id="B14" x={296} y={100} etiqueta="14/23" ancho={40} sel={sel} onSelect={onSelect} />
      <Borne id="B24" x={296} y={150} etiqueta="24" sel={sel} onSelect={onSelect} />
      <Etiqueta x={296} y={186} anchor="middle" tenue>
        relés 1 A
      </Etiqueta>
      <Etiqueta x={296} y={198} anchor="middle" tenue>
        250 Vca
      </Etiqueta>

      <Etiqueta x={8} y={286} tenue>
        Comando 2 hilos (fig. 11.2/11.3). A1/A2: 90–250 Vca.
      </Etiqueta>
      <Etiqueta x={8} y={298} tenue>
        Energizar el control ANTES que la potencia.
      </Etiqueta>
    </svg>
  )
}
