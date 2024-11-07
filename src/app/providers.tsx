'use client'
import { authConfigManager, SessionProvider, useSession } from '@hono/auth-js/react'
import { OpenPanelComponent } from '@openpanel/nextjs'

import { env } from '@/env'

authConfigManager.setConfig({
  baseUrl: env.NEXT_PUBLIC_API_URL,
  basePath: '/auth',
  credentials: 'include',
})

function OpenPanel() {
  const { data } = useSession()
  return (
    <OpenPanelComponent
      clientId={env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID}
      apiUrl={env.NEXT_PUBLIC_OPENPANEL_API_URL}
      trackScreenViews={true}
      trackAttributes={true}
      trackOutgoingLinks={true}
      profileId={data?.user?.id}
    />
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <OpenPanel />
      {children}
    </SessionProvider>
  )
}
