import { defineConfig } from 'vite'
import purgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/viteportafolio/',
  plugins: [
    purgeCss({
      content: ['./index.html', './src/**/*.js'], // cambia según tu estructura
    })
  ],
})
