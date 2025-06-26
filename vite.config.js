import { defineConfig } from 'vite'
import purgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/portfoliovite2doparcial/',
  plugins: [
    purgeCss({
      content: ['./index.html', './src/**/*.js'], // cambia según tu estructura
    })
  ],
})
