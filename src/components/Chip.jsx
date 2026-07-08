import { IconoAlerta, IconoCheck } from './Iconos.jsx'
import './Chip.css'

// Chip de estado/dato. Variantes:
//  - neutro: etiqueta genérica (marca, serie…)
//  - codigo: códigos y datos técnicos en mono (E72, P105, A1…)
//  - advertencia: «sin verificar» (ámbar, con ícono)
//  - ok: verificado (verde, con ícono)
export default function Chip({ variante = 'neutro', children }) {
  return (
    <span className={`chip chip-${variante}`}>
      {variante === 'advertencia' && <IconoAlerta tamano={13} />}
      {variante === 'ok' && <IconoCheck tamano={13} />}
      {children}
    </span>
  )
}
