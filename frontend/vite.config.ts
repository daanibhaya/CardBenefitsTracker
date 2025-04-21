import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="vitest" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.js']  
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})
