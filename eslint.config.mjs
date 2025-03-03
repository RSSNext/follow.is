// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    fileCase: 'kebabCase',
    typeChecked: 'essential',
    project: true,
    tailwindCSS: false,
    ignores: ['src/lib/hono.ts'],
  },
)
