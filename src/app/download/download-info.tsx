import { headers } from 'next/headers'
import type { FC } from 'react'

import type { ReleaseInfo } from '@/api/release'
import { Button } from '@/components/ui/button'
import { APP_NAME, siteInfo } from '@/constants'
import { cn } from '@/lib/utils'

export type OS = 'macOS' | 'iOS' | 'Windows' | 'Android' | 'Linux'

async function getOs(): Promise<OS | undefined> {
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
}

const PlatformIconMap: Record<OS, string> = {
  Windows: 'i-mingcute-windows-fill',
  macOS: 'i-mingcute-apple-fill',
  Linux: 'i-mingcute-linux-fill',
  iOS: 'i-mingcute-apple-fill',
  Android: 'i-mingcute-android-fill',
}

const PlatformStoreLinkMap: Record<OS, { link: string, name: string } | undefined> = {
  iOS: { link: 'https://apps.apple.com/us/app/folo-follow-everything/id6739802604', name: 'App Store' },
  macOS: { link: 'https://apps.apple.com/us/app/folo-follow-everything/id6739802604', name: 'Mac App Store' },
  Windows: { link: 'https://apps.microsoft.com/detail/9nvfzpv0v0ht?mode=direct', name: 'Microsoft Store' },
  Android: undefined,
  Linux: undefined,
}

export const DownloadInfo: FC<{
  releaseInfo: ReleaseInfo
}> = async ({ releaseInfo }) => {
  const platform = await getOs()

  return (
    <>
      {(!platform || (!releaseInfo.downloadUrl[platform] && !PlatformStoreLinkMap[platform])) ? (
        <p className="text-xl text-foreground/70">
          {`${APP_NAME} ${releaseInfo.name} is not available for ${platform}.`}
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {PlatformStoreLinkMap[platform] && (
            <Button className="p-6 rounded-lg" asChild>
              <a href={PlatformStoreLinkMap[platform]?.link} target="_blank" rel="noopener noreferrer">
                <i className={cn(PlatformIconMap[platform as keyof typeof PlatformIconMap], 'mr-2')} />
                <span className="font-semibold text-lg">
                  Open in {PlatformStoreLinkMap[platform]?.name}
                </span>
              </a>
            </Button>
          )}
          {releaseInfo.downloadUrl[platform] && (
            <Button className="p-6 rounded-lg" asChild variant="outline">
              <a href={releaseInfo.downloadUrl[platform]} target="_blank" rel="noopener noreferrer">
                <i className={cn(PlatformIconMap[platform as keyof typeof PlatformIconMap], 'mr-2')} />
                <span className="font-semibold text-lg">
                  Download for {platform}
                </span>
              </a>
            </Button>
          )}
          <Button className="p-6 rounded-lg" asChild variant="outline">
            <a href={siteInfo.appUrl}>
              <i className="i-mingcute-chrome-fill mr-2" />
              <span className="font-semibold text-lg">
                Try in browser
              </span>
            </a>
          </Button>
        </div>
      )}
      <section className="flex flex-col sm:flex-row items-center gap-4">
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
