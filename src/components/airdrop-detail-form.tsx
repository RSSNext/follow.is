import { getCsrfToken } from '@hono/auth-js/react'
import { Link2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import useSWRMutation from 'swr/mutation'

import { env } from '@/env'

import { Button } from './ui/button'
import { Input } from './ui/input'

export function AirdropDetailForm({ verifyLink }: { verifyLink?: string }) {
  const [postLink, setPostLink] = useState('')

  const fillVerifyInfo = useSWRMutation(
    ['fill-verify-info', postLink],
    async ([_, verify]) => {
      const res = await fetch(
        `${env.NEXT_PUBLIC_API_URL}/wallets/airdrop`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': await getCsrfToken(),
          },
          credentials: 'include',
          body: JSON.stringify({ verify }),
        },
      )
      const data = (await res.json()) as { code: number }
      if (data.code === 0) {
        toast.success('Your link has been submitted successfully. You\'re now eligible for the upcoming airdrop!')
      }
      else {
        toast.error('Failed to submit your link. Please try again later.')
      }
    },
  )

  const handleSubmitLink = () => {
    if (postLink.trim() !== '') {
      fillVerifyInfo.trigger()
        .catch(() => {
          toast.error('Failed to submit your link. Please try again later.')
        })
    }
    else {
      toast.error('Please enter your post link.')
    }
  }

  return (
    <div className="w-full sm:max-w-xl mx-auto my-10! pt-16 border-t">
      <h2 className="text-3xl font-bold mb-4">
        One more step to claim your airdrop
      </h2>
      <p className="text-lg mb-8 text-balance">
        To verify your humanity, please share the image of your alpha journey on any social media platform <strong>with what you love most about<br /> Follow 👀</strong>, submit the link here, and then come back here <strong>on November 18th</strong> to claim your $POWER.
      </p>
      <div className="relative flex justify-stretch max-w-xs mx-auto">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">
          <Link2 className="size-5" />
        </div>
        <Input
          type="url"
          placeholder={verifyLink ?? 'Enter your post link'}
          value={postLink}
          onChange={e => setPostLink(e.target.value)}
          className="pl-10 w-full h-auto rounded-r-none ring-offset-0! ring-0!"
        />
        <Button
          disabled={fillVerifyInfo.isMutating}
          onClick={handleSubmitLink}
          className="h-auto border-l-0 rounded-l-none font-medium"
          variant="outline"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
