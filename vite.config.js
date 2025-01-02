import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // Use 127.0.0.1 instead of localhost
    port: 5173, // Ensure you're using the correct port
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8787', // Target server
        changeOrigin: true, // Changes the origin of the request to the target URL
      },
    },
  },
})
