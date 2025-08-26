import type { MetadataRoute } from 'next'

import { siteInfo } from '@/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/'],
    },
    sitemap: `${siteInfo.webUrl}/sitemap.xml`,
    host: siteInfo.webUrl,
  }
}
