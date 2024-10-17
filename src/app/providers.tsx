'use client'

import { authConfigManager, SessionProvider } from '@hono/auth-js/react'

import { env } from '@/env'

authConfigManager.setConfig({
  baseUrl: env.NEXT_PUBLIC_API_URL,
  basePath: '/auth',
  credentials: 'include',
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
