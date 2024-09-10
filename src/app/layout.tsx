import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'

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
    <html lang="en" className="h-full">
      <body className={`${snPro.variable} font-sans antialiased h-full`}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
