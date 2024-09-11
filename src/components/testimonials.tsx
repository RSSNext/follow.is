import { Quote } from 'lucide-react'
import Image from 'next/image'
import type { Tweet } from 'react-tweet/api'
import { getTweet } from 'react-tweet/api'

import { Container } from './container'
import { Card } from './ui/card'
import { Marquee } from './ui/marquee'

const tweetIdList = [
  '1832774682875191423',
  '1820074091334008924',
  '1832010310246699078',
  '1830213559038754968',
  '1829930560502054993',
  '1820438144363405722',
]

function TestimonialCard({ tweet }: { tweet: Tweet }) {
  return (
    <Card className="relative rounded-2xl p-6 flex flex-col">
      <Quote
        className="absolute right-6 top-6 opacity-10"
        width={105}
        height={78}
      />
      <blockquote className="relative basis-2/3">
        <p className="text-lg tracking-tight text-card-foreground max-w-xs">
          {tweet.text.slice(tweet.display_text_range[0], tweet.display_text_range[1])}
        </p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t pt-6 basis-1/3">
        <div>
          <div className="text-base text-card-foreground">{tweet.user.name}</div>
          <div className="mt-1 text-sm text-card-foreground/50">
            {tweet.user.screen_name}
          </div>
        </div>
        <div className="overflow-hidden rounded-full">
          <Image
            className="size-14 object-cover"
            src={tweet.user.profile_image_url_https}
            alt=""
            width={56}
            height={56}
          />
        </div>
      </figcaption>
    </Card>
  )
}

export async function Testimonials() {
  const tweetList = (await Promise.all(
    tweetIdList.map(tweetId => getTweet(tweetId)),
  )).filter(tweet => tweet != null)
  const firstRow = tweetList.slice(0, tweetList.length / 2)
  const secondRow = tweetList.slice(tweetList.length / 2)

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Loved by community.
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div className="relative flex h-[800px] w-full my-10 flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s] grow">
            {firstRow.map(tweet => (
              <TestimonialCard key={tweet?.id_str} tweet={tweet} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] grow">
            {secondRow.map(tweet => (
              <TestimonialCard key={tweet?.id_str} tweet={tweet} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
        </div>
      </Container>
    </section>
  )
}
