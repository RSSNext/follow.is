import { Quote } from 'lucide-react'

import type { Testimonial } from '@/api/testimonial'

import { Container } from './container'
import { Card } from './ui/card'
import { Marquee } from './ui/marquee'

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
          <img
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

export function Testimonials({
  tweetList,
}: {
  tweetList: Testimonial[]
}) {
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
