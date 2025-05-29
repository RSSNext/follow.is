import { DownloadHero } from './download-hero'
import { DownloadPlatforms } from './download-platforms'

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
