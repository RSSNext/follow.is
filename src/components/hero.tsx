'use client'

import { motion } from 'framer-motion'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { Highlight } from '@/components/ui/hero-highlight'
import { siteInfo } from '@/constants'

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <Highlight>
            Next-Gen
          </Highlight>
          {' '}
          Information Browser
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Enjoy a platformless experience like never before.
        </div>
        <Button
          type="button"
          className="rounded-full"
          asChild
        >
          <a href={siteInfo.releaseLink} target="_blank" rel="noopener noreferrer">Get Started</a>
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
