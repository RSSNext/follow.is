'use client'

import Image from 'next/image'

import screenShotAIDaily from '@/images/screenshots/ai-daily.png'
import screenShotDiscover from '@/images/screenshots/discover.png'
import screenShotPower from '@/images/screenshots/power.png'
import screenShotSocial from '@/images/screenshots/social.png'

import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
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
