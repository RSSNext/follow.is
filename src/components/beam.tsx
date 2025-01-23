import * as React from 'react'
import { useRef } from 'react'

import { AnimatedBeam } from '@/components/ui/animated-beam'
import { cn } from '@/lib/utils'

import { Logo } from './logo'

function Circle({ ref, className, children }: { className?: string, children?: React.ReactNode } & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-9 items-center justify-center rounded-full text-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}

Circle.displayName = 'Circle'

export function Beam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const followRef = useRef<HTMLDivElement>(null)

  const logo1Ref = useRef<HTMLDivElement>(null)
  const logo2Ref = useRef<HTMLDivElement>(null)
  const logo3Ref = useRef<HTMLDivElement>(null)
  const logo4Ref = useRef<HTMLDivElement>(null)
  const logo5Ref = useRef<HTMLDivElement>(null)
  const logo6Ref = useRef<HTMLDivElement>(null)
  const logo7Ref = useRef<HTMLDivElement>(null)
  const logo8Ref = useRef<HTMLDivElement>(null)
  const logo9Ref = useRef<HTMLDivElement>(null)
  const logo10Ref = useRef<HTMLDivElement>(null)
  const logo11Ref = useRef<HTMLDivElement>(null)
  const logo12Ref = useRef<HTMLDivElement>(null)
  const logo13Ref = useRef<HTMLDivElement>(null)
  const logo14Ref = useRef<HTMLDivElement>(null)

  const logos = [
    {
      className: 'i-logos-bluesky',
      ref: logo1Ref,
    },
    {
      className: 'i-logos-github-icon',
      ref: logo2Ref,
    },
    {
      className: 'i-logos-google-icon',
      ref: logo3Ref,
    },
    {
      className: 'i-logos-ycombinator',
      ref: logo4Ref,
    },
    {
      className: 'i-logos-mastodon-icon',
      ref: logo5Ref,
    },
    {
      className: 'i-skill-icons-instagram',
      ref: logo6Ref,
    },
    {
      className: 'i-skill-icons-linkedin',
      ref: logo7Ref,
    },
    {
      className: 'i-simple-icons-playstation',
      ref: logo8Ref,
    },
    {
      className: 'i-logos-spotify-icon',
      ref: logo9Ref,
    },
    {
      className: 'i-logos-telegram',
      ref: logo10Ref,
    },
    {
      className: 'i-simple-icons-threads',
      ref: logo11Ref,
    },
    {
      className: 'i-logos-twitch',
      ref: logo12Ref,
    },
    {
      className: 'i-simple-icons-x',
      ref: logo13Ref,
    },
    {
      className: 'i-logos-youtube-icon',
      ref: logo14Ref,
    },
  ]

  return (
    <div
      className="relative flex flex-col w-full items-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex flex-col text-zinc-500 font-semibold text-sm mb-4">
        Manually adapted 1,200 popular websites.
      </div>
      <div className="flex size-full flex-col justify-between gap-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="flex flex-row items-center justify-between">
            <Circle ref={logos[index * 2].ref}>
              <i className={logos[index * 2].className} />
            </Circle>
            {index === 3 && (
              <Circle ref={followRef} className="p-0">
                <Logo />
              </Circle>
            )}
            <Circle ref={logos[index * 2 + 1].ref}>
              <i className={logos[index * 2 + 1].className} />
            </Circle>
          </div>
        ))}
      </div>

      {logos.map((logo, index) => {
        const multiple = Math.floor(index / 2) - 3

        return (
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={logo.ref as React.RefObject<HTMLElement>}
            toRef={followRef as React.RefObject<HTMLElement>}
            key={logo.className}
            curvature={multiple * 40}
            endYOffset={multiple * 3}
            reverse={index % 2 === 1}
            pathColor="#ccc"
          />
        )
      })}
    </div>
  )
}
