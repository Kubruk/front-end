import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@home': path.resolve(__dirname, './src/modules/home'),
      '@about': path.resolve(__dirname, './src/modules/about'),
      '@login': path.resolve(__dirname, './src/modules/login')
    }
  },
  plugins: [vue()]
});
