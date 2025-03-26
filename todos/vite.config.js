// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify' // Import Vuetify plugin

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }) // Vuetify ko auto-import enable kar raha hai
  ]
})
