import './globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { siteInfo } from '@/constants'
import { GitHubStarProvider } from '@/contexts/GitHubStarContext'

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
  const stars = await fetch(`https://api.github.com/repos/RSSNext/Folo`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },

  })
    .then(res => res.json())
    .then((data) => {
      return data.stargazers_count
    })
    .catch((e) => {
      console.error(e)
      return -1
    })

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
        <GitHubStarProvider stars={stars}>
          <body className="h-full">
            <Header />
            {children}
            <Footer />
          </body>
        </GitHubStarProvider>
      </Providers>
    </html>
  )
}
