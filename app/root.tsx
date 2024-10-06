import './globals.css'
import '@fontsource/sn-pro'

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { siteInfo } from '@/constants'

export function Layout() {
  return (
    <html lang="en" className="font-sans antialiased scroll-smooth h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/icon.ico" type="image/x-icon" sizes="16x16" />

        <title>{siteInfo.title}</title>
        <meta name="description" content={siteInfo.description} />

        <meta property="og:title" content={siteInfo.title} />
        <meta property="og:description" content={siteInfo.description} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="979" />
        <meta property="og:image:height" content="557" />
        <meta property="og:image" content={`${siteInfo.domain}/public/opengraph-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteInfo.title} />
        <meta name="twitter:description" content={siteInfo.description} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="979" />
        <meta name="twitter:image:height" content="557" />
        <meta name="twitter:image" content={`${siteInfo.domain}/public/opengraph-image.png`} />

        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function HydrateFallback() {
  return <div>Loading...</div>
}

export default function Root() {
  return <h1>Hello, world!</h1>
}

export function ErrorBoundary() {
  return <h1>Something went wrong</h1>
}
