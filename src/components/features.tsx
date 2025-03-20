'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import { APP_NAME } from '@/constants'
import screenShotAIDaily from '@/images/screenshots/AI At Your Fingertips.png'
import screenShotDiscover from '@/images/screenshots/Customized Info Hub.png'
import screenShotViews from '@/images/screenshots/Dynamic Content Support.png'
import screenShotPower from '@/images/screenshots/High Level Description.png'
import screenShotSocial from '@/images/screenshots/More Than Just An App.png'

import { Beam } from './beam'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
  {
    title: 'Customized Information Hub',
    description: (
      <>
        <div className="mb-4">
          Subscribe to a vast range of feeds and curated lists. Curate your favorites and keep track of what matters most to you.
        </div>
        <Beam />
      </>
    ),
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          className="rounded-lg"
          src={screenShotDiscover}
          alt="Screenshot of Discover page"
          priority
        />
      </div>
    ),
  },
  {
    title: 'Dynamic Content Support',
    description: `Because we know content is more than just text. From articles to videos, images to audio — ${APP_NAME} gets it all covered.`,
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          className="rounded-lg"
          src={screenShotViews}
          alt="Screenshot of Views page"
          priority
        />
      </div>
    ),
  },
  {
    title: 'AI At Your Fingertips',
    description: 'A smarter and more efficient browsing with AI-powered features like translation, summary, and more.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          className="rounded-lg"
          src={screenShotAIDaily}
          alt="Screenshot of AI Daily page"
          priority
        />
      </div>
    ),
  },
  {
    title: '$POWER An Ownership Economy',
    description: 'Tip creators across instantly with $POWER, support content you love, and unlock value in your own work. Your content, your power.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          className="rounded-lg"
          src={screenShotPower}
          alt="Screenshot of Power page"
          priority
        />
      </div>
    ),
  },
  {
    title: 'More Than Just An App',
    description: `This isn’t just another app. ${APP_NAME} is a community — introducing a new era of openness and community-driven experience.`,
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          className="rounded-lg"
          src={screenShotSocial}
          alt={`Screenshot of Personal page in ${APP_NAME}`}
          priority
        />
      </div>
    ),
  },
]

export function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      <StickyScroll content={content} />
    </motion.section>
  )
}
