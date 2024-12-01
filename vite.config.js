import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cacheDir: '.vite',
    host: '127.0.0.1', // Устанавливаем хост
    port: 5173
  },
  plugins: [
    vue(),
  ],
  assetsInclude: ['**/*.mov'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    force: true,
  }
})
