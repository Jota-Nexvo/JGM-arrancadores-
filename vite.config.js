import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// base: el repo se publica en GitHub Pages bajo /JGM-arrancadores-/
export default defineConfig({
  base: '/JGM-arrancadores-/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Precachea todo lo que genera el build: la app entera funciona sin señal
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
      },
      manifest: {
        name: 'JGM Arrancadores',
        short_name: 'Arrancadores',
        description:
          'Guía de campo para programación, instalación y configuración de arrancadores suaves. Funciona sin conexión.',
        lang: 'es',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#344687',
        background_color: '#344687',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
