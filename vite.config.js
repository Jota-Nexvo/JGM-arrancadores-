import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: el repo se publica en GitHub Pages bajo /JGM-arrancadores-/
export default defineConfig({
  plugins: [react()],
  base: '/JGM-arrancadores-/',
})
