'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { Highlight } from '@/components/ui/hero-highlight'
import { configs } from '@/configs'

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
          <Highlight>Next-Gen</Highlight> Information Browser
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Enjoy a platformless experience like never before.
        </div>

        <div className="flex items-center gap-4">
          <Button type="button" className="rounded-full bg-transparent" variant="outline" asChild>
            <Link href={configs.webUrl}>Try web app</Link>
          </Button>

          <Button type="button" className="rounded-full" asChild>
            <Link href="/download">Download</Link>
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
