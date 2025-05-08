import Image from 'next/image'

import { getLatestReleaseInfo, getOs, PlatformStoreLinkMap } from '@/api/release'
import { APP_NAME, siteInfo } from '@/constants'
import ImageDownloadGitHub from '@/images/download/download-on-the-github.png'
import ImageTryOnTheBrowser from '@/images/download/try-on-the-browser.png'

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
        <div className="flex max-sm:flex-col gap-2">
          {PlatformStoreLinkMap[platform] && (
            <a href={PlatformStoreLinkMap[platform].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={PlatformStoreLinkMap[platform].image}
                alt={`Download on the ${PlatformStoreLinkMap[platform].name}`}
                className="h-14 w-fit"
                priority
              />
            </a>
          )}
          {releaseInfo?.downloadUrl[platform] && (
            <a href={releaseInfo.downloadUrl[platform]} target="_blank" rel="noopener noreferrer">
              <Image
                src={ImageDownloadGitHub}
                alt="Download on the GitHub"
                className="h-14 w-fit"
                priority
              />
            </a>
          )}

          <a href={siteInfo.appUrl}>
            <Image
              src={ImageTryOnTheBrowser}
              alt="Try on the browser"
              className="h-14 w-fit"
              priority
            />
          </a>
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
