import { getLatestReleaseInfo } from '@/api/release'
import { Logo } from '@/components/logo'

import { DownloadInfo } from './download-info'

export default async function DownloadPage() {
  const releaseInfo = await getLatestReleaseInfo()

  if (!releaseInfo) {
    return <main className="min-h-screen" />
  }

  return (
    <main className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <Logo className="size-32" />
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        {`Download Follow ${releaseInfo.name}`}
      </h1>
      <p className="text-xl text-foreground/70">
        {`Available for ${Object.keys(releaseInfo.downloadUrl).join(', ')}, Web.`}
      </p>

      <DownloadInfo releaseInfo={releaseInfo} />
    </main>
  )
}
