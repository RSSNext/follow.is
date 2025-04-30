import { getLatestReleaseInfo, getOs, PlatformIconMap, PlatformStoreLinkMap } from '@/api/release'
import { Button } from '@/components/ui/button'
import { APP_NAME, siteInfo } from '@/constants'
import { cn } from '@/lib/utils'

export async function DownloadInfo() {
  const platform = await getOs()
  const releaseInfo = await getLatestReleaseInfo()

  return (
    <>
      {(!platform || (!releaseInfo?.downloadUrl[platform] && !PlatformStoreLinkMap[platform])) ? (
        <p className="text-xl text-foreground/70">
          {`${APP_NAME} is not available for ${platform}.`}
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
          {releaseInfo?.downloadUrl[platform] && (
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
