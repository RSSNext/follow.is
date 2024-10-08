'use client'
import { Download } from 'lucide-react'

import type { ReleaseInfo } from '@/api/release'
import { siteInfo } from '@/constants'
import { getPlatform } from '@/lib/utils'

import { Button } from './ui/button'

export function DownloadButtons(props: {
  releaseInfo: ReleaseInfo
}) {
  const { releaseInfo } = props
  const platform = getPlatform()

  return (
    <>
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
    </>
  )
}
