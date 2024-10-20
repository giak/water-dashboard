import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      typescript: true,
      vueTsc: true,
      biome: {
        command: 'check',
      },
      eslint: {
        lintCommand: 'eslint . --ext .vue,.js,.ts,.jsx,.tsx'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
