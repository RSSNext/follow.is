import { getTweetList } from '@/api/testimonial'
import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'

import type * as Route from './+types.home'

export async function loader() {
  const tweetList = await getTweetList()
  return { tweetList }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { tweetList } = loaderData
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials tweetList={tweetList} />
      <FAQ />
    </main>
  )
}
