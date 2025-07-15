import { createAuthClient } from 'better-auth/react'

import { env } from '@/env'

const authClient = createAuthClient({
  baseURL: `${env.NEXT_PUBLIC_API_URL}/better-auth`,
})

export const { signIn, signOut, getSession, useSession } = authClient

export async function loginHandler(provider: string) {
  return signIn.social({
    provider: provider as 'google' | 'github' | 'apple',
    callbackURL: `${env.NEXT_PUBLIC_WEB_URL}/airdrop`,
  })
}
