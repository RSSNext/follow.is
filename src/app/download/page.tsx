import { Download } from 'lucide-react'
import osName from 'os-name'

import { getLatestReleaseInfo } from '@/api/release'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'

export default async function DownloadPage() {
  const releaseInfo = await getLatestReleaseInfo()
  const platform = osName().split(' ')[0]

  if (!releaseInfo) {
    return <main className="min-h-screen" />
  }

  return (
    <main className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <Logo className="size-40" />
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        {`Download Follow ${releaseInfo.name}`}
      </h1>
      <p className="text-xl text-foreground/70">
        {`Available for ${Object.keys(releaseInfo.downloadUrl).join(', ')}.`}
      </p>
      {
        !releaseInfo.downloadUrl[platform] ? (
          <p className="text-xl text-foreground/70">
            {`Follow ${releaseInfo.name} is not available for ${platform}.`}
          </p>
        ) : (
          <Button className="p-6 rounded-lg" asChild>
            <a href={releaseInfo.downloadUrl[platform]}>
              <span className="font-semibold text-lg">
                Download for
                {' '}
                {platform}
              </span>
              <Download className="ml-2" size={20} />
            </a>
          </Button>
        )
      }
      <section className="flex flex-col sm:flex-row items-center gap-4">
        {Object.keys(releaseInfo.downloadUrl)
          .filter(key => key !== platform)
          .map(key => (
            <a
              href={releaseInfo.downloadUrl[key]}
              key={key}
              className="underline underline-offset-2 decoration-muted-foreground hover:decoration-foreground transition-colors duration-300"
            >
              Download for
              {' '}
              {key}
            </a>
          ))}
        <a
          href={siteInfo.releaseLink}
          className="underline underline-offset-2 decoration-muted-foreground hover:decoration-foreground transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all downloads
        </a>
      </section>
    </main>
  )
}
