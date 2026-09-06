import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true,
    watch: {
      // Exclude folders locked by external tools or Windows indexing
      ignored: ['**/details/**', '**/.git/**', '**/new images/**', '**/public/new images/**', '**/*.heic', '**/*.pdf', '**/*.mov', '**/*.MOV']
    }
  }
})

