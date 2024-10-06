import { reactRouter as ReactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import TSConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    ReactRouter({
      ssr: true,
      prerender: ['/'],
    }),
    TSConfigPaths(),
  ],
})
