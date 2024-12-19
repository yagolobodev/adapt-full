const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'swiper'],
  },
})
