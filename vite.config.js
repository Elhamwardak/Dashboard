import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
   server: {
    host: true, // Listen on all addresses (e.g. 192.168.x.x)
    port: 5173, // Or any port you want
  },
})
