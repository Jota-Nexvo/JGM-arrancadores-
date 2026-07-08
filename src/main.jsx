import React from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

// Tipografías auto-alojadas (funcionan offline): IBM Plex Sans + Mono, subset latino
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-600.css'

import App from './App.jsx'
import './styles/global.css'
import { aplicarTamano, tamanoGuardado } from './lib/tamanoLetra.js'

// Service worker: cachea la app para que funcione sin señal
// y se actualiza solo cuando hay una versión nueva publicada.
registerSW({ immediate: true })

// Aplicar el tamaño de letra guardado antes de renderizar (evita salto visual)
aplicarTamano(tamanoGuardado())

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
