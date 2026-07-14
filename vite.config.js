import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base:'karlaandujar.github.io'
}

export default defineConfig({
  plugins: [react()],
})