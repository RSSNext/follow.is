import './globals.css'
import '@fontsource/sn-pro'

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export function Layout() {
  return (
    <html lang="en" className="font-sans antialiased scroll-smooth h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
