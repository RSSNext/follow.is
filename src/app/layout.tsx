import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { siteInfo } from '@/constants'

const snPro = localFont({
  variable: '--font-sn-pro',
  src: '../fonts/SNPro-Variable.woff2',
})

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${snPro.variable} font-sans antialiased scroll-smooth h-full`}>
      <body className="h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
