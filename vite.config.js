import { defineConfig } from 'vite'
import purgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/VitePortafolio/',
  plugins: [
    purgeCss({
      content: ['./index.html', './script.js'],
    })
  ],
})
