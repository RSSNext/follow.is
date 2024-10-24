'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import type { View } from '@/constants'
import { views } from '@/constants'
import screenShotAIDaily from '@/images/screenshots/ai-daily.png'
import screenShotDiscover from '@/images/screenshots/discover.png'
import screenShotPower from '@/images/screenshots/power.png'
import screenShotSocial from '@/images/screenshots/social.png'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { StickyScroll } from './ui/sticky-scroll-reveal'

function ViewImageSlide({ views, className }: { views: View[], className?: string }) {
  const totalImages = useMemo(() => views.length, [views])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const [resetFlag, setResetFlag] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered)
        return
      setSelectedIndex(prevIndex => (prevIndex + 1) % totalImages)
      setProgress(0)
    }, 3000)

    const progressInterval = setInterval(() => {
      if (isHovered)
        return
      setProgress(prevProgress => Math.min(prevProgress + 0.05, 1))
    }, 150)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isHovered, totalImages, resetFlag])

  return (
    <div className={cn('space-y-10 h-fit overflow-hidden', className)}>
      <div className="flex md:justify-center gap-2 max-w-[100vw] overflow-x-auto no-scrollbar">
        {views.map((view, index) => (
          <Button
            variant={selectedIndex === index ? 'default' : 'outline'}
            key={view.title}
            type="button"
            onClick={() => {
              setSelectedIndex(index)
              setResetFlag(!resetFlag)
              setProgress(0)
            }}
            className="relative transition-colors shrink-0"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: index === (selectedIndex + 1) % totalImages ? progress : 0,
              }}
              style={{ originX: 0 }}
              transition={{ duration: 0.15, ease: 'linear' }}
              className="absolute inset-0 bg-primary/10"
            />
            {view.title}
          </Button>
        ))}
      </div>
      <div
        className="w-[50rem] aspect-[100/65] relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {views.map(({ image, title }, index) => (
          <Image
            src={image}
            alt={`Screenshot of ${title} page`}
            priority
            key={title}
            className="absolute inset-0 object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${(index - selectedIndex) * 100}%)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const content = [
  {
    title: 'Dynamic Content Support',
    description: 'Because we know content is more than just text. From articles to videos, images to audio—Follow gets it all covered.',
    content: (
      <ViewImageSlide views={views} />
    ),
  },
  {
    title: 'Customized Information Hub',
    description: 'Subscribe to a vast range of Web 1, 2, and 3 feeds. Curate your favorites and keep track of what matters most to you.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotDiscover}
          alt="Screenshot of Discover page"
          priority
        />
      </div>
    ),
  },
  {
    title: 'AI At Your Fingertips',
    description: 'A smarter and more efficient browsing with AI-powered features—translation, summary, personalization, and more coming your way.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotAIDaily}
          alt="Screenshot of AI Daily page"
          priority
        />
      </div>
    ),
  },
  {
    title: '$POWER An Ownership Economy',
    description: 'Tip creators across instantly with $POWER. Support content you love, and unlock real value with your own pieces. Your content, your power.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotPower}
          alt="Screenshot of Power page"
          priority
        />
      </div>
    ),
  },
  {
    title: 'More Than Just An App',
    description: 'This isn’t just another app. Follow is a community—introducing a new era of openness and community-driven experience.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotSocial}
          alt="Screenshot of Personal page in Follow"
          priority
        />
      </div>
    ),
  },
]

export function Features() {
  return (
    <section>
      <StickyScroll content={content} />
    </section>
  )
}
