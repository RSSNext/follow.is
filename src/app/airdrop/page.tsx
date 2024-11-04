'use client'
import { useSession } from '@hono/auth-js/react'
import { Toaster } from 'sonner'
import useSWR from 'swr'

import { AuthButton } from '@/components/auth'
import type { AirdropStatus } from '@/components/follow-summary'
import { FollowSummary } from '@/components/follow-summary'
import { env } from '@/env'

export default function AirdropPage() {
  const { data: session, status } = useSession()
  const { data } = useSWR(
    session && status === 'authenticated' ? 'get-airdrop-amount' : null,
    async () => {
      const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/wallets/airdrop`, {
        credentials: 'include',
      })
      const data = (await res.json()) as { code: number, data: AirdropStatus }
      if (data.code === 0) {
        return data.data
      }
      return null
    },
  )

  return (
    <div className="min-h-screen flex flex-col items-center pt-36 dark:bg-[linear-gradient(45deg,#d43421,#ff6a0b,#ff5d07)]">
      <main className="w-full space-y-10 text-center">
        <div className="text-5xl sm:text-6xl font-bold space-y-2">
          <p>Check Your Eligibility for</p>
          <p className="text-power-orange dark:text-white">20,000,000 $POWER</p>
          <p>Follow Airdrop #1</p>
        </div>
        <AuthButton className="justify-center" />
        {data === null && (
          <p className="text-xl">Sorry, you are not eligible to claim Follow Airdrop #1. Please stay tuned for our next event.</p>
        )}
        {data?.detail && (<FollowSummary status={data} />)}
      </main>
      <Toaster theme="system" />
    </div>
  )
}
