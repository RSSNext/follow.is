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
  // SEO optimization config
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  
  // Performance optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'geist'],
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
  
  // Redirects config
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://app.folo.is',
        permanent: true,
      },
    ]
  },
  
  // Headers optimization
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/opengraph-image.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
