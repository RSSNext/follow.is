import "./globals.css"

import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next/types"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { siteInfo } from "@/constants"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    template: siteInfo.seo.titleTemplate,
    default: siteInfo.seo.defaultTitle,
  },
  description: siteInfo.seo.description,
  keywords: [...siteInfo.seo.keywords],
  authors: [...siteInfo.seo.authors],
  creator: siteInfo.seo.creator,
  publisher: siteInfo.seo.publisher,
  metadataBase: new URL(siteInfo.webUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...siteInfo.seo.openGraph,
    images: [...siteInfo.seo.openGraph.images],
  },
  twitter: {
    ...siteInfo.seo.twitter,
    images: [...siteInfo.seo.twitter.images],
  },
  robots: {
    ...siteInfo.seo.robots,
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  manifest: "/manifest.json",
  applicationName: siteInfo.title,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteInfo.title,
  },
  formatDetection: {
    telephone: false,
  },
  category: "news",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full scroll-smooth font-sans antialiased`}>
      <head>
        <meta name="apple-itunes-app" content="app-id=6739802604" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* 结构化数据 - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Folo",
              "applicationCategory": "Productivity",
              "operatingSystem": ["Windows", "macOS", "Linux", "iOS", "Android"],
              "description": siteInfo.seo.description,
              "url": siteInfo.webUrl,
              "downloadUrl": siteInfo.appUrl,
              "screenshot": "https://folo.is/opengraph-image.png",
              "author": {
                "@type": "Organization",
                "name": "RSSNext",
                "url": siteInfo.githubLink,
                "sameAs": [
                  siteInfo.xLink,
                  siteInfo.githubLink,
                  siteInfo.discordLink,
                  siteInfo.productHuntLink
                ]
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              }
            })
          }}
        />

        {/* 结构化数据 - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Folo",
              "url": siteInfo.webUrl,
              "description": siteInfo.seo.description,
              "publisher": {
                "@type": "Organization",
                "name": "RSSNext"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteInfo.appUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZMBZBW3EC" />
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
