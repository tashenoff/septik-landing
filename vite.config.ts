import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Отключаем использование нативных модулей Rollup
    rollupOptions: {
      context: 'globalThis',
    },
  },
})
