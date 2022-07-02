import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
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
      '@auth': path.resolve(__dirname, './src/modules/auth'),
      '@users': path.resolve(__dirname, './src/modules/users'),
      '@books': path.resolve(__dirname, './src/modules/books'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers')
    }
  },
  plugins: [vue(), svgLoader()]
});
