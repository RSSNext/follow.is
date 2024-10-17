'use client'

import { useSession } from '@hono/auth-js/react'
import useSWR from 'swr'

import { AuthButton } from '@/components/auth'
import { env } from '@/env'

export default function AirdropPage() {
  const { data: session, status } = useSession()
  const { data: amount } = useSWR(
    session && status === 'authenticated' ? 'get-airdrop-amount' : null,
    async () => {
      const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/wallets/airdrop`, {
        credentials: 'include',
      })
      const data = (await res.json()) as { code: number, data: number }
      if (data.code === 0) {
        return data.data
      }
      return 0
    },
  )

  return (
    <div className="min-h-screen pt-40 flex flex-col items-center dark:bg-[linear-gradient(45deg,#d43421,#ff6a0b,#ff5d07)]">
      <main className="w-full space-y-8">
        <div className="text-center text-7xl font-bold space-y-2">
          <p>JOIN TO SHARE</p>
          <p className="text-power-orange dark:text-white">20,000,000</p>
          <p className="text-power-orange dark:text-white">$POWER</p>
          <p>AIRDROP</p>
        </div>
        <p className="text-center text-2xl">
          {status === 'authenticated'
            ? `You are eligible to receive ${amount} $POWER`
            : 'Sign in to claim your airdrop'}
        </p>
        <AuthButton className="justify-center" />
      </main>
    </div>
  )
}
