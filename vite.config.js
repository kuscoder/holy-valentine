import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/holy-valentine/',
   plugins: [react()],
   resolve: {
      alias: {
         '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
         '@pages': fileURLToPath(new URL('./src/components/pages', import.meta.url)),
         '@shared': fileURLToPath(new URL('./src/components/shared', import.meta.url)),
         '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
         '@locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
         '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
         '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
      }
   }
})
