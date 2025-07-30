// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  devtools: { enabled: true },
  $meta: {
    name: 'example',
  },
  css: [
    join(currentDir, './assets/main.css')
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  }
})
