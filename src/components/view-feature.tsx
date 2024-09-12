'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Container } from '@/components/container'
import { views } from '@/constants'
import { cn } from '@/lib/utils'

export function ViewFeature() {
  const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Six types of views
          </h2>
          <p className="mt-6 text-lg tracking-tight text-balance">
            Use different views for various types of content to offer an experience equal to or better than the original platform - Articles, Social Media, Pictures, Videos, Podcasts, and Notifications
          </p>
        </div>
        <Tabs.Root
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          orientation={tabOrientation}
          defaultValue="Articles"
        >
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <Tabs.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {views.map(view => (
                <div
                  key={view.title}
                  className={cn(
                    'group relative rounded-full px-4 py-1 lg:rounded-xl lg:p-6',
                    "has-[[data-state='active']]:bg-secondary has-[[data-state='active']]:text-secondary-foreground",
                  )}
                >
                  <h3>
                    <Tabs.Trigger
                      className="text-lg"
                      value={view.title}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      {view.title}
                    </Tabs.Trigger>
                  </h3>
                  <p className="mt-2 hidden text-sm lg:block">
                    {view.description}
                  </p>
                </div>
              ))}
            </Tabs.List>
          </div>
          <div className="lg:col-span-7">
            {views.map(view => (
              <Tabs.Content
                key={view.title}
                value={view.title}
              >
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {view.description}
                  </p>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-10 w-[45rem] overflow-hidden sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
                >
                  <Image
                    className="w-full"
                    src={view.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </motion.div>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </Container>
    </section>
  )
}
