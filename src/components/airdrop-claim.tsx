'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'

import { AirdropClaimButton } from './airdrop-claim-button'

function NextStepButton(
  { onClick }: { onClick?: () => void },
) {
  return (
    <Button onClick={onClick} variant="ghost">
      Next Step
    </Button>
  )
}

export function AirdropClaim() {
  const [step, setStep] = useState(1)
  const nextStep = () => { setStep(step + 1) }

  const [productHuntLinkOpened, setProductHuntLinkOpened] = useState(false)

  return (
    <>
      <h1 className="text-3xl font-bold mt-16 mb-6">
        Claim Your Airdrop
      </h1>
      <div className="w-full max-w-[600px] mx-auto p-6 space-y-6 text-left border rounded-md">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 1: Vote on ProductHunt</h2>
            <p className="mb-4">Visit our ProductHunt page and upvote:</p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  window.open(siteInfo.productHuntLink, '_blank')
                  setProductHuntLinkOpened(true)
                }}
              >
                Open ProductHunt <div className="ml-2 size-4 i-simple-icons-producthunt" />
              </Button>
              {productHuntLinkOpened && (
                <NextStepButton
                  onClick={nextStep}
                />
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Follow on X</h2>
            <p>Follow our X account to continue:</p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  window.open(siteInfo.xLink, '_blank')
                }}
              >
                Follow on <div className="ml-2 size-4 i-simple-icons-x" />
              </Button>
              <NextStepButton onClick={nextStep} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 3: Join Discord</h2>
            <p>Join our Discord community to continue:</p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  window.open(siteInfo.discordLink, '_blank')
                }}
              >
                Join Discord <div className="ml-2 size-4 i-simple-icons-discord" />
              </Button>
              <NextStepButton onClick={nextStep} />
            </div>
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
