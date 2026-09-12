import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Separate build used only to produce the Capacitor (Android) app bundle.
// Uses index.mobile.html instead of index.html so the native app doesn't
// ship the marketing site's ad/analytics/SEO scripts (Ezoic, AdSense, GTM).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-mobile',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.mobile.html')
    }
  }
})
