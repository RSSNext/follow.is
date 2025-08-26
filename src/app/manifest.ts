import type { MetadataRoute } from 'next'

import { siteInfo } from '@/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteInfo.seo.defaultTitle,
    short_name: siteInfo.title,
    description: siteInfo.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'news', 'social'],
    lang: 'en',
    dir: 'ltr',
  }
}
