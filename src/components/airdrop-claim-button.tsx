import { getCsrfToken } from '@hono/auth-js/react'
import confetti from 'canvas-confetti'
import { useRef } from 'react'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import useSWRMutation from 'swr/mutation'

import { env } from '@/env'

import { Button } from './ui/button'

export function AirdropClaimButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { mutate } = useSWRConfig()
  const claim = useSWRMutation(
    ['claim-airdrop'],
    async () => {
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

      const data = (await res.json()) as { code: number, message?: string }
      if (data.code === 0) {
        toast.success('Your airdrop has been claimed successfully.')

        await mutate('get-airdrop-amount')
      }
      else {
        toast.error(data.message)
      }

      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        void confetti({
          particleCount: 100,
          spread: 70,
          origin: {
            x: (rect.left + rect.width / 2) / viewportWidth,
            y: (rect.top + rect.height / 2) / viewportHeight,
          },
        })
      }
    },
  )

  return (
    <Button
      className="my-6 flex gap-2 items-center"
      disabled={claim.isMutating}
      onClick={() => { void claim.trigger() }}
      ref={buttonRef}
    >
      {claim.isMutating && <div className="i-mingcute-loading-3-fill animate-spin" />}
      {claim.isMutating ? 'Claiming...' : 'Claim Your Airdrop'}
    </Button>
  )
}
