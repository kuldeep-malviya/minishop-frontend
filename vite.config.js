import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ye line add karo
  build: {
    outDir: 'dist', // ye folder name Render me publish directory me dena hai
  },
})
