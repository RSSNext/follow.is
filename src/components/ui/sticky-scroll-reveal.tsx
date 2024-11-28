'use client'

import { Slot } from '@radix-ui/react-slot'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'

export function StickyScroll({
  content,
}: {
  content: Array<{
    title: string
    description: string | React.ReactNode
    content?: React.ReactNode
  }>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0% 0%', '100% 0%'],
  })

  const [activeCard, setActiveCard] = useState(0)
  const cardLength = content.length
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <div
      className="flex justify-center space-x-4"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-[90vw] md:max-w-80">
          {content.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              key={item.title}
              className="md:h-[calc(100vh-6rem)] md:mt-24 text-center md:text-left"
            >
              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>
              <p className="text-lg mt-10 text-balance">
                {item.description}
              </p>
              <Slot className="max-w-full h-fit my-10 md:hidden">
                {item.content ?? null}
              </Slot>
            </motion.div>
          ))}
        </div>
      </div>
      <Slot className="sticky top-1/4 max-md:hidden">
        {content[activeCard].content ?? null}
      </Slot>
    </div>
  )
}
