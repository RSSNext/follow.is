import { iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'

const config: Config = {
  plugins: [
    iconsPlugin({ scale: 1.5 }),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}

export default config
