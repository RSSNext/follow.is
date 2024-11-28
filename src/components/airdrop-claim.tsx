'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'

import { AirdropClaimButton } from './airdrop-claim-button'
import { Card } from './ui/card'

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

  return (
    <>
      <h1 className="text-3xl font-bold my-6">
        Claim Your Airdrop
      </h1>
      <Card className="relative w-full max-w-[600px] min-h-[300px] mx-auto p-6 flex justify-center items-center text-left overflow-hidden">

        <motion.div
          className="absolute top-0 left-0 h-2 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 1: Follow on X</h2>
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

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Join Discord</h2>
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

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 3: Claim Your Airdrop</h2>
            <p>You're all set! Click the button below to claim your airdrop:</p>
            <p>
              We will need some time to process it after you click to claim it. If there is no response for a long time, you can close the page and come back to check it later. You do not need to click to claim it again.
            </p>
            <AirdropClaimButton />
          </div>
        )}
      </Card>
    </>
  )
}
