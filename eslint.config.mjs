// @ts-check
import path from 'node:path'

import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    fileCase: 'kebabCase',
    typeChecked: 'essential',
    project: true,
    formatting: false,
    tailwindCSS: {
      order: false,
    },

  },
  {
    settings: {
      tailwindcss: {
        config: path.join(import.meta.dirname, './src/app/globals.css'),
      },
    },

  },
  {
    rules: {
      'tailwindcss/no-contradicting-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'unicorn/filename-case': 0,
      '@typescript-eslint/no-empty-object-type': 0,
    },
  },
)
