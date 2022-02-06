import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@layout': path.resolve(__dirname, './src/modules/layout'),
      '@home': path.resolve(__dirname, './src/modules/home'),
      '@about': path.resolve(__dirname, './src/modules/about'),
    },
  },
  plugins: [vue()]
})
