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

import { Button } from './ui/button'
import { StickyScroll } from './ui/sticky-scroll-reveal'

function ViewImageSlide({ views }: { views: View[] }) {
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
      setProgress(0)
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isHovered, totalImages, resetFlag])

  return (
    <div className="space-y-10">
      <div className="flex max-sm:px-4 sm:justify-center gap-2 max-w-[100vw] overflow-x-auto no-scrollbar">
        {views.map((view, index) => (
          <Button
            variant={selectedIndex === index ? 'default' : 'outline'}
            key={view.title}
            type="button"
            onClick={() => {
              setSelectedIndex(index)
              setResetFlag(!resetFlag)
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
        className="w-[50rem] max-w-[100vw] aspect-[100/65] relative overflow-hidden"
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
    title: 'Multimedia Processing',
    description: 'Because we know content is more than just text.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem] relative">
        <ViewImageSlide views={views} />
      </div>
    ),
  },
  {
    title: 'Everything is RSSible.',
    description: 'Founded in 2018, RSSHub is powered by over 1,000 developers. Stay connected with sources like X, Instagram, PlayStation, Spotify, Telegram, YouTube, and more.',
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
    title: 'AI at Your Fingertips',
    description: 'Transform your browsing with AI-powered Actions. Instantly translate, summarize, or create personal knowledge bases. All in one seamless experience.',
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
    title: '$POWER an Ownership Economy',
    description: 'Fair. Transparent. Empowering. Tip creators with $POWER, and earn it for producing quality content. A simple, rewarding way to fuel creativity.',
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
    title: 'Social, Community',
    description: 'Follow is also a community. Connect with others, share your subscriptions, and discover fresh content. You are always in sync.',
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
