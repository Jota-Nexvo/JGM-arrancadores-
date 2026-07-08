// Íconos SVG estilo line (trazo 1.8, puntas redondeadas), 20-24px.
// Regla de diseño: sin emojis en la UI.

function Svg({ tamano = 20, children, ...props }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconoLupa(props) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </Svg>
  )
}

export function IconoAlerta(props) {
  return (
    <Svg {...props}>
      <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </Svg>
  )
}

export function IconoCheck(props) {
  return (
    <Svg {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </Svg>
  )
}

export function IconoChevron(props) {
  return (
    <Svg {...props}>
      <path d="m9 6 6 6-6 6" />
    </Svg>
  )
}

export function IconoEscudo(props) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3z" />
    </Svg>
  )
}

export function IconoGrilla(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </Svg>
  )
}

/* Gota de marca del encabezado: rellena en --brand-2 (no line) */
export function GotaMarca({ tamano = 22 }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.7s6.4 6.6 6.4 11.2a6.4 6.4 0 1 1-12.8 0C5.6 9.3 12 2.7 12 2.7z"
        fill="var(--brand-2)"
      />
      <circle cx="12" cy="14.6" r="2.1" fill="var(--on-brand)" opacity="0.9" />
    </svg>
  )
}
