'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'

import { Logo } from './logo'

export function Hero() {
  return (
    <AuroraBackground className="relative flex flex-col h-[90vh] items-center justify-center text-slate-950 transition-colors gap-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.div
          initial={{ scale: 3 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="z-50 origin-top"
        >
          <Logo className="h-20 w-auto" />
        </motion.div>
        <p className="text-xl font-bold dark:text-white">Follow</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-2 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
          Next generation information browser
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 pb-4">
          Enjoy a platformless experience like never before.
        </div>

        <div className="flex items-center gap-4">
          <Button type="button" className="rounded-full bg-transparent text-foreground" variant="outline" asChild>
            <Link href={siteInfo.appUrl}>Try web app</Link>
          </Button>

          <Button type="button" className="rounded-full" asChild>
            <Link href="/download">Download</Link>
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
