'use client'

import { Slot } from '@radix-ui/react-slot'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

export function StickyScroll({
  content,
}: {
  content: Array<{
    title: string
    description: string
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
        <div className="max-w-80">
          {content.map((item, index) => (
            <div key={item.title} className="h-[calc(100vh-4rem)] mt-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <Slot className="sticky top-1/4">
        {content[activeCard].content ?? null}
      </Slot>
    </div>
  )
}
