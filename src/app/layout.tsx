import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

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
    <html lang="en">
      <body
        className={`${snPro.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
