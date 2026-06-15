import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // Dev serves at root. The production build is copied into the gated
  // design-artifacts site at site/prototypes/ai-tutor-setup/, so its asset
  // URLs need that base. (See README → "Updating the shared build".)
  base: command === 'build' ? '/prototypes/ai-tutor-setup/' : '/',
  plugins: [react(), tailwindcss()],
}))
