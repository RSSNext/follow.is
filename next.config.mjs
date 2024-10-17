import { fileURLToPath } from 'node:url'

import { createJiti } from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env here to validate during build. Using jiti we can import .ts files :)
await jiti.import('./src/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
