import { Quote } from 'lucide-react'
import Image from 'next/image'
import { getTweet } from 'react-tweet/api'

import { APP_NAME } from '@/constants'

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

const contentMap = {
  '1832329262163968223': 'The way you can get latest release notifications of your favorite singers. Thank you for making this Follow app.',
  '1833056589135442345': "Very nice news aggregation, and it gives 2 power token everyday, so far I just try move front end people I followed in, haven't done yet, will try move more rss subscribe.",
  '1832896505528930551': 'Follow is sick!!!! It is indeed the best RSS app on this planet, way better than any pure RSS app such as Reeder, Inoreader, or any apps with RSS features like Readwise Reader!!!',
  '1832725192860393593': 'Thanks for making information such a pleasant thing.',
  '1819361867359535603': "Just switched my RSS reader to Follow and it's a game-changer! The built-in AI summaries are saving me so much time. If you're drowning in feeds, this app might be your new best friend.",
  '1818661886340333782': 'Really enjoy Follow, the next generation RSS reader.\n Browse information with the way and structure of the browser, and add social attributes, which is a very novel product concept.',
  '1818653250381574206': "Awesome! I'm using it too.",
} as Record<string, string>

interface Testimonial {
  id: string
  text: string
  name: string
  screenName: string
  profileImageUrl: string
}

const testimonialList: Testimonial[] = [
  {
    id: 'manual-1',
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
        <p className="text-base tracking-tight text-card-foreground max-w-xs line-clamp-6">
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
            className="size-10 object-cover"
            src={testimonial.profileImageUrl}
            alt=""
            width={40}
            height={40}
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
      id: tweet?.id_str,
      text: contentMap[tweet?.id_str] ?? tweet?.text.slice(tweet.display_text_range[0], tweet.display_text_range[1]),
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
            Ready to experience the future?
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            {`${APP_NAME}—where information flows freely, and creators hold the power.`}
          </p>
        </div>
        <div className="relative flex h-[550px] w-full my-10 flex-col items-center justify-center overflow-hidden rounded-lg">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-[#fefaf4] dark:from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-[#fcf5ea] dark:from-background" />
        </div>
      </Container>
    </section>
  )
}
