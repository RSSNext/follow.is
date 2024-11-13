'use client'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { siteInfo } from '@/constants'

import { AirdropClaimButton } from './airdrop-claim-button'

export function AirdropClaim() {
  const [step, setStep] = useState(1)
  const [productHuntLinkOpened, setProductHuntLinkOpened] = useState(false)
  const [productHuntLink, setProductHuntLink] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const validateProductHuntLink = (link: string) => {
    return link.includes('producthunt.com/@')
  }

  const handleProductHuntSubmit = async () => {
    setIsSubmitting(true)
    setError('')

    if (validateProductHuntLink(productHuntLink)) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStep(2)
    }
    else {
      setError('Please enter a valid ProductHunt profile link.')
    }
    setIsSubmitting(false)
  }

  const handleTwitterFollow = () => {
    window.open(siteInfo.xLink, '_blank')
    setStep(3)
  }

  const handleDiscordJoin = () => {
    window.open(siteInfo.discordLink, '_blank')
    setStep(4)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mt-16 mb-6">
        Claim Your Airdrop
      </h1>
      <div className="w-full max-w-[600px] mx-auto p-6 space-y-6 text-left border rounded-md">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 1: Vote on ProductHunt</h2>
            {!productHuntLinkOpened ? (
              <div>
                <p className="mb-4">First, visit our ProductHunt page and upvote:</p>
                <Button onClick={() => {
                  window.open('https://www.producthunt.com/posts/your-product', '_blank')
                  setProductHuntLinkOpened(true)
                }}
                >
                  Open ProductHunt <div className="ml-2 size-4 i-simple-icons-producthunt" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>Great! Now submit your ProductHunt profile link:</p>
                <Input
                  id="productHuntLink"
                  type="text"
                  placeholder="https://www.producthunt.com/@yourusername"
                  value={productHuntLink}
                  onChange={e => setProductHuntLink(e.target.value)}
                  className="w-full"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button onClick={handleProductHuntSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Follow on X</h2>
            <p>Follow our X account to continue:</p>
            <Button onClick={handleTwitterFollow}>
              Follow on <div className="ml-2 size-4 i-simple-icons-x" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 3: Join Discord</h2>
            <p>Join our Discord community to continue:</p>
            <Button onClick={handleDiscordJoin}>
              Join Discord <div className="ml-2 size-4 i-simple-icons-discord" />
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 4: Claim Your Airdrop</h2>
            <p>You're all set! Click the button below to claim your airdrop:</p>
            <AirdropClaimButton />
          </div>
        )}
      </div>
    </>
  )
}
