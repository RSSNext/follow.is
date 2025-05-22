import { PlatformIconMap } from '@/api/release'
import { Logo } from '@/components/logo'
import { APP_NAME } from '@/constants'

import { DownloadInfo } from './download-info'

export default async function DownloadPage() {
  return (
    <main className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <Logo className="size-32" />
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        {`Download ${APP_NAME}`}
      </h1>
      <p className="text-center mx-4 text-xl text-foreground/70">
        {`Available for ${Object.keys(PlatformIconMap).join(', ')}, Web.`}
      </p>
      <DownloadInfo />
    </main>
  )
}
