'use client'

import { OpenPanelComponent } from '@openpanel/nextjs'

import { env } from '@/env'
import { useSession } from '@/lib/auth'

function OpenPanel() {
  const { data } = useSession()
  if (process.env.NODE_ENV === 'development') {
    return null
  }
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
    <>
      <OpenPanel />
      {children}
    </>
  )
}
