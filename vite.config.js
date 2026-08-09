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
      // Exclude the details/ folder — image files there may be locked by Picsart/other apps
      ignored: ['**/details/**', '**/.git/**']
    }
  }
})

