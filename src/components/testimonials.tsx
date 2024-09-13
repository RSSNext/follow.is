import { Quote } from 'lucide-react'
import Image from 'next/image'
import { getTweet } from 'react-tweet/api'

import { Container } from './container'
import { Card } from './ui/card'
import { Marquee } from './ui/marquee'

const tweetIdList = [
  '1832329262163968223',
  '1833056589135442345',
  '1832896505528930551',
  '1832725192860393593',
  '1819361867359535603',
  '1818661886340333782',
  '1818653250381574206',
]

interface Testimonial {
  text: string
  name: string
  screenName: string
  profileImageUrl: string
}

const testimonialList: Testimonial[] = [
  {
    text: "I'm really enjoying it so far... it's super smooth and gorgeous. It being multiplatform is amazing, cuz there's literally zero good rss apps for windows.",
    name: '@adamfergusonart',
    screenName: 'Adam',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1787910265876500480/RfnkdD9r_400x400.jpg',
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="relative rounded-2xl p-6 flex flex-col">
      <Quote
        className="absolute right-6 top-6 opacity-10"
        width={105}
        height={78}
      />
      <blockquote className="relative basis-2/3">
        <p className="text-lg tracking-tight text-card-foreground max-w-xs line-clamp-6">
          {testimonial.text}
        </p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t pt-6 basis-1/3">
        <div>
          <div className="text-base text-card-foreground">
            {testimonial.screenName}
          </div>
          <div className="mt-1 text-sm text-card-foreground/50">
            {testimonial.name}
          </div>
        </div>
        <div className="overflow-hidden rounded-full">
          <Image
            className="size-14 object-cover"
            src={testimonial.profileImageUrl}
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
  const tweetList = (await Promise.all(tweetIdList.map(tweetId => getTweet(tweetId))))
    .filter(tweet => tweet != null)
    .map(tweet => ({
      text: tweet?.text.slice(tweet.display_text_range[0], tweet.display_text_range[1]),
      name: tweet?.user.name,
      screenName: `@${tweet?.user.screen_name}`,
      profileImageUrl: tweet?.user.profile_image_url_https,
    }))
    .concat(testimonialList)
  const firstRow = tweetList.slice(0, tweetList.length / 2)
  const secondRow = tweetList.slice(tweetList.length / 2)

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Read to experience the future?
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            Follow—where information flows freely, and creators hold the power.
          </p>
        </div>
        <div className="relative flex h-[700px] w-full my-10 flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s] basis-1/2">
            {firstRow.map(i => (
              <TestimonialCard key={i.text} testimonial={i} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] basis-1/2">
            {secondRow.map(i => (
              <TestimonialCard key={i.text} testimonial={i} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
        </div>
      </Container>
    </section>
  )
}
