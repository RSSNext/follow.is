'use client'
import { useSession } from '@hono/auth-js/react'
import { Toaster } from 'sonner'
import useSWR from 'swr'

import { AuthButton } from '@/components/auth'
import type { DetailModel } from '@/components/follow-summary'
import { FollowSummary } from '@/components/follow-summary'
import { alphaTestAirdropTotalUsers } from '@/constants'
import { env } from '@/env'

type AirdropStatus = {
  amount: string
  rank: number
  detail: DetailModel | null
  tx: string
} | null

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
      <main className="w-full space-y-8 text-center">
        <div className="text-7xl font-bold space-y-2">
          <p>JOIN TO SHARE</p>
          <p className="text-power-orange dark:text-white">20,000,000</p>
          <p className="text-power-orange dark:text-white">$POWER</p>
          <p>AIRDROP</p>
        </div>
        <p className="text-2xl">
          {status === 'authenticated'
            ? data?.tx
              ? 'You have already claimed your airdrop'
              : data?.amount
                ? `You are at rank ${Math.ceil(data.rank / alphaTestAirdropTotalUsers * 100)}%, eligible to receive ${data.amount} $POWER`
                : 'You are not eligible to receive airdrop'
            : 'Sign in to check your eligibility'}
        </p>
        <AuthButton className="justify-center" />
        {data?.detail && <FollowSummary data={data?.detail} />}
      </main>
      <Toaster />
    </div>
  )
}
