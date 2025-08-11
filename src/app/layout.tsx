import './globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { siteInfo } from '@/constants'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="font-sans antialiased scroll-smooth h-full">
      <head>
        <meta name="apple-itunes-app" content="app-id=6739802604" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DZMBZBW3EC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DZMBZBW3EC');
`,
          }}
        />
      </head>
      <Providers>
        <body className="h-full">
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
