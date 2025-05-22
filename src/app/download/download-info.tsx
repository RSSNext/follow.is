import Image from 'next/image'

import { PlatformStoreLinkMap } from '@/api/release'
import { siteInfo } from '@/constants'

export async function DownloadInfo() {
  return (
    <>
      <div className="flex max-sm:flex-col gap-2">
        {Object.keys(PlatformStoreLinkMap).map((platformKey) => {
          const platformStore = PlatformStoreLinkMap[platformKey as keyof typeof PlatformStoreLinkMap]
          if (!platformStore) {
            return null
          }
          return (
            <a
              key={platformStore.link}
              href={platformStore.link}

              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={platformStore.image}
                alt={`Download on the ${platformStore.name}`}
                className="h-14 w-fit"
                priority
              />
            </a>
          )
        })}
      </div>
      <section className="flex flex-col md:flex-row items-center gap-4">
        <a
          href={siteInfo.appUrl}
          className="underline underline-offset-2 decoration-muted-foreground hover:decoration-foreground transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try on the browser
        </a>

        <a
          href={siteInfo.releaseLink}
          className="underline underline-offset-2 decoration-muted-foreground hover:decoration-foreground transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all downloads on GitHub
        </a>
      </section>
    </>
  )
}
