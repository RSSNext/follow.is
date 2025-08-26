import type { Metadata } from "next"

import { siteInfo } from "@/constants"

import { DownloadHero } from "./download-hero"
import { DownloadPlatforms } from "./download-platforms"

export const metadata: Metadata = {
  title: "Download Folo",
  description: "Download Folo for Windows, Mac, Linux, iOS, Android, or try it in your browser. Experience the next-generation information browser across all your devices.",
  keywords: [
    ...siteInfo.seo.keywords,
    "download Folo",
    "Folo app download",
    "desktop app",
    "mobile app",
    "cross-platform",
    "Windows download",
    "Mac download",
    "iOS download",
    "Android download",
  ],
  openGraph: {
    ...siteInfo.seo.openGraph,
    title: "Download Folo - Next-Gen Information Browser",
    description: "Download Folo for all your devices. Available for Windows, Mac, Linux, iOS, Android, and web browsers.",
    url: `${siteInfo.webUrl}/download`,
  },
  twitter: {
    ...siteInfo.seo.twitter,
    title: "Download Folo - Next-Gen Information Browser",
    description: "Download Folo for all your devices. Available for Windows, Mac, Linux, iOS, Android, and web browsers.",
  },
  alternates: {
    canonical: "/download",
  },
}

export default async function DownloadPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <DownloadHero />

      {/* Platform Downloads */}
      <DownloadPlatforms />
    </main>
  )
}
