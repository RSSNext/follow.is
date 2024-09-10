'use client'

import { motion } from 'framer-motion'

import { Header } from '@/components/header'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { Highlight } from '@/components/ui/hero-highlight'

export default function Home() {
  return (
    <>
      <Header />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            <Highlight>
              Next generation
            </Highlight>
            {' '}
            information browser
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
          <Button
            type="button"
            className="rounded-full"
          >
            Get Started
          </Button>
        </motion.div>
      </AuroraBackground>
      <div className="max-w-2xl mx-auto flex flex-col gap-80">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia explicabo fugiat fuga, delectus numquam! Sequi quia vero, perspiciatis fugit eveniet sed facere quasi earum similique, officiis inventore quibusdam odit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia explicabo fugiat fuga, delectus numquam! Sequi quia vero, perspiciatis fugit eveniet sed facere quasi earum similique, officiis inventore quibusdam odit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia explicabo fugiat fuga, delectus numquam! Sequi quia vero, perspiciatis fugit eveniet sed facere quasi earum similique, officiis inventore quibusdam odit.</p>
      </div>
    </>
  )
}
