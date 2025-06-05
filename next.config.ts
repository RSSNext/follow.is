import './src/env'

import { codeInspectorPlugin } from 'code-inspector-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: 'webpack',
        hotKeys: ['altKey'],
      }),
    )
    return config
  },
}

export default nextConfig
