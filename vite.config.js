import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this directory matches the one you expect
  },
  server: {
    port: 3000, // Replace 3000 with your desired port
  },
  plugins: [react()],
})
