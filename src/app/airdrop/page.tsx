'use client'
import { getCsrfToken, useSession } from '@hono/auth-js/react'
import { toast, Toaster } from 'sonner'
import useSWR from 'swr'

import { AuthButton } from '@/components/auth'
import { Button } from '@/components/ui/button'
import { env } from '@/env'

export default function AirdropPage() {
  const { data: session, status } = useSession()
  const { data } = useSWR(
    session && status === 'authenticated' ? 'get-airdrop-amount' : null,
    async () => {
      const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/wallets/airdrop`, {
        credentials: 'include',
      })
      const data = (await res.json()) as {
        code: number
        data: { amount: number, claimed: boolean }
      }
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
          {status === 'authenticated' && data
            ? data.claimed
              ? 'You have already claimed your airdrop'
              : `You are eligible to receive ${data.amount} $POWER`
            : 'Sign in to claim your airdrop'}
        </p>
        {data?.claimed ? (
          <Button>Share on X</Button>
        ) : (
          <Button
            onClick={async () => {
              const res = await fetch(
                `${env.NEXT_PUBLIC_API_URL}/wallets/airdrop`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': await getCsrfToken(),
                  },
                  credentials: 'include',
                },
              )
              const data = await res.json() as { code: number, data: { transactionHash: string } }
              if (data.code === 0) {
                toast.success('Airdrop claimed successfully')
              }
              else {
                toast.error('Failed to claim airdrop')
              }
            }}
          >
            Claim Airdrop
          </Button>
        )}
        <AuthButton className="justify-center" />
        <Toaster />
      </main>
    </div>
  )
}
