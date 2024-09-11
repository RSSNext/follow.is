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
    description: 'Our RSSHub community, comprising over 1,000 developers, has spent six years adapting nearly a thousand websites to provide almost all the content you need. This includes platforms like X (Twitter), Instagram, PlayStation, Spotify, Telegram, YouTube, and more. You can also write your own scripts to adapt additional websites.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotDiscover}
          alt="Screenshot of Discover page"
          priority
          fill
          objectFit="contain"
        />
      </div>
    ),
  },
  {
    title: 'Actions and AI features.',
    description: 'Follow leverages advanced AI to assist your operations. Beyond basic AI translation, summarization, and recommendations, it provides twice-daily AI reports to highlight key information from your subscriptions. Additionally, it offers a personalized AI knowledge base built from your subscriptions.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotAIDaily}
          alt="Screenshot of AI Daily page"
          priority
          fill
          objectFit="contain"
        />
      </div>
    ),
  },
  {
    title: 'Blockchain features and $Power token.',
    description: 'Follow uses blockchain technology as an incentive mechanism for active users and outstanding creators. Users can obtain more services and benefits by holding and using Power Token. Creators can obtain more rewards by providing high-quality content and services.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotPower}
          alt="Screenshot of Power page"
          priority
          fill
          objectFit="contain"
        />
      </div>
    ),
  },
  {
    title: 'Social features.',
    description: ' Follow is also a social platform that allows you to follow other users, share your subscriptions, and discover new content. It also offers a subscription list synchronization feature, enabling your friends to sync with your subscriptions.',
    content: (
      <div className="flex justify-center items-center h-[32rem] w-[50rem]">
        <Image
          src={screenShotSocial}
          alt="Screenshot of Personal page in Follow"
          priority
          fill
          objectFit="contain"
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
