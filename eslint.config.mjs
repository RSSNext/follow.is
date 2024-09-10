// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    fileCase: 'kebabCase',
    typeChecked: 'essential',
    project: true,
    tailwindCSS: {
      order: false,
    },
  },
  {
    rules: {
      '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    },
  },
)
