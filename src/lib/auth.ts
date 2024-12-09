import type { BetterAuthClientPlugin } from 'better-auth/client'
import { createAuthClient } from 'better-auth/react'

import { env } from '@/env'

import type { authPlugins } from './hono'

const serverPlugins = [
  {
    id: 'getProviders',
    $InferServerPlugin: {} as (typeof authPlugins)[0],
  },
  {
    id: 'createSession',
    $InferServerPlugin: {} as (typeof authPlugins)[1],
  },
] satisfies BetterAuthClientPlugin[]

const authClient = createAuthClient({
  baseURL: `${env.NEXT_PUBLIC_API_URL}/better-auth`,
  plugins: serverPlugins,
})

export const { signIn, signOut, getSession, getProviders, createSession, useSession } = authClient

export async function loginHandler(provider: string) {
  return signIn.social({
    provider: provider as 'google' | 'github' | 'apple',
    callbackURL: `${env.NEXT_PUBLIC_WEB_URL}/airdrop`,
  })
}
