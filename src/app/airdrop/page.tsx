'use client'

import { AuthButton } from '@/components/auth'

export default function AirdropPage() {
  return (
    <div className="min-h-screen pt-40 flex flex-col items-center dark:bg-[linear-gradient(45deg,#d43421,#ff6a0b,#ff5d07)]">
      <div className="w-full space-y-8">
        <div className="text-center text-7xl font-bold space-y-2">
          <p>JOIN TO SHARE</p>
          <p className="text-power-orange dark:text-white">20,000,000</p>
          <p className="text-power-orange dark:text-white">$POWER</p>
          <p>AIRDROP</p>
        </div>
        <div className="flex justify-center">
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
