'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'

import GithubTrending from './github-trending'
import { Logo } from './logo'

export function Hero() {
  return (
    <AuroraBackground className="relative flex flex-col h-[90vh] items-center justify-center text-slate-950 dark:text-slate-50 transition-colors gap-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.div
          initial={{ scale: 3 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="z-40 origin-top"
        >
          <Logo className="h-20 w-auto" />
        </motion.div>
        <p className="text-xl font-bold">Follow</p>
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
          Follow your favorites in one inbox
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-2 pb-8 max-w-4xl text-center">
          As they say, your thoughts are what you read—and we’ve been consuming noisy feeds for too long! Follow organizes content into one timeline, keeping you updated on what matters, noise-free. Share lists, explore collections, and enjoy distraction-free browsing.
        </div>

        <div className="grid items-center gap-4 grid-cols-1 md:grid-cols-2">
          <Button type="button" asChild size="xl" className="w-full text-xl">
            <Link href="/download">Get Started</Link>
          </Button>
          <Button type="button" className="px-4 bg-[#111] hover:bg-[#111]" variant="ghost" size="xl">
            <Link href={siteInfo.githubLink} target="_blank">
              <GithubTrending />
            </Link>
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
