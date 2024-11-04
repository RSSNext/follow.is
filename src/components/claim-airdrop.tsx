import { getCsrfToken } from '@hono/auth-js/react'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import useSWRMutation from 'swr/mutation'

import { env } from '@/env'

import { Button } from './ui/button'

export function ClaimAirdrop() {
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
    },
  )

  return (
    <Button
      className="my-6 flex gap-2 items-center"
      disabled={claim.isMutating}
      onClick={() => { void claim.trigger() }}
    >
      {claim.isMutating && <div className="i-mingcute-loading-3-fill animate-spin" />}
      {claim.isMutating ? 'Claiming...' : 'Claim Your Airdrop'}
    </Button>
  )
}
