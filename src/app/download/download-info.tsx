import { headers } from 'next/headers'
import type { FC } from 'react'

import type { ReleaseInfo } from '@/api/release'
import { getNightlyReleaseInfo } from '@/api/release'
import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'
import { cn } from '@/lib/utils'

export type OS = 'macOS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | ''

async function getOs(): Promise<OS> {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''

  if (userAgent.includes('Win'))
    return 'Windows'
  if (userAgent.includes('Mac'))
    return 'macOS'
  if (
    userAgent.includes('iPhone')
    || userAgent.includes('iPad')
    || userAgent.includes('iPod')
  ) {
    return 'iOS'
  }
  if (userAgent.includes('Android'))
    return 'Android'
  if (userAgent.includes('Linux'))
    return 'Linux'

  return ''
}

const PlatformIconMap = {
  windows: 'i-mingcute-windows-fill',
  macOS: 'i-mingcute-apple-fill',
  Linux: 'i-mingcute-linux-fill',
  iOS: 'i-mingcute-apple-fill',
  Android: 'i-mingcute-android-fill',
}

export const DownloadInfo: FC<{
  releaseInfo: ReleaseInfo
}> = async ({ releaseInfo }) => {
  const [
    platform,
    nightlyReleaseInfo,
  ] = await Promise.all(
    [
      getOs(),
      getNightlyReleaseInfo(),
    ],
  )

  return (
    <>
      {!releaseInfo.downloadUrl[platform] ? (
        <p className="text-xl text-foreground/70">
          {`Follow ${releaseInfo.name} is not available for ${platform}.`}
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          <Button className="p-6 rounded-lg" asChild>
            <a href={releaseInfo.downloadUrl[platform]}>
              <i className={cn(PlatformIconMap[platform as keyof typeof PlatformIconMap], 'mr-2')} />
              <span className="font-semibold text-lg">
                Download for {platform}
              </span>
              {/* <Download className="ml-2" size={20} /> */}
            </a>
          </Button>
          {!!nightlyReleaseInfo?.downloadUrl[platform] && (
            <Button
              className="rounded-lg bg-transparent"
              variant="ghost"
              asChild
            >
              <a href={nightlyReleaseInfo?.downloadUrl[platform]}>
                <span className="text-base">Download nightly version</span>
              </a>
            </Button>
          )}
        </div>
      )}
      <section className="flex flex-col sm:flex-row items-center gap-4">
        {/* {Object.keys(releaseInfo.downloadUrl)
          .filter(key => key !== platform)
          .map(key => (
            <a
              href={releaseInfo.downloadUrl[key]}
              key={key}
              className="underline underline-offset-2 decoration-muted-foreground hover:decoration-foreground transition-colors duration-300"
            >
              Download for {key}
            </a>
          ))} */}
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
