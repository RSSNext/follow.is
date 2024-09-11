import { Quote } from 'lucide-react'
import Image from 'next/image'
import type { Tweet } from 'react-tweet/api'
import { getTweet } from 'react-tweet/api'

import { Container } from './container'
import { Card } from './ui/card'

const tweetIdList = [
  '1832774682875191423',
  '1820074091334008924',
  '1832010310246699078',
  '1830213559038754968',
  '1829930560502054993',
  '1820438144363405722',
]

export async function Testimonials() {
  const tweetList = await Promise.all(
    tweetIdList.map(tweetId => getTweet(tweetId)),
  )
  const testimonials = tweetList.reduce<Tweet[][]>((acc, tweet, index) => {
    if (index % 2 === 0) {
      acc.push([])
    }
    if (tweet) {
      acc.at(-1)?.push(tweet)
    }
    return acc
  }, [])

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
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <Card className="relative rounded-2xl p-6">
                      <Quote
                        className="absolute right-6 top-6 opacity-10"
                        width={105}
                        height={78}
                      />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-card-foreground">
                          {testimonial.text.slice(testimonial.display_text_range[0], testimonial.display_text_range[1])}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t pt-6">
                        <div>
                          <div className="text-base text-card-foreground">
                            {testimonial.user.name}
                          </div>
                          <div className="mt-1 text-sm text-card-foreground/50">
                            {testimonial.user.screen_name}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full">
                          <Image
                            className="size-14 object-cover"
                            src={testimonial.user.profile_image_url_https}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </Card>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
