'use client'

import Link from 'next/link'

import { siteInfo } from '@/constants'
import { useScrollOffset } from '@/hooks/use-scroll-offset'
import { cn } from '@/lib/utils'

import { Container } from './container'
import { Logo } from './logo'
import { NavDesktop } from './nav-desktop'
import { NavMobile } from './nav-mobile'
import { Button } from './ui/button'

export function Header() {
  const scrollOffset = useScrollOffset()
  return (
    <header
      className={cn(
        'px-10 py-5 backdrop-blur-lg fixed top-0 inset-x-0 z-50 transition-all',
        scrollOffset && 'border-b',
      )}
    >
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link className="flex items-center gap-4" href="/#">
              <Logo className="h-8 w-auto" />
              <p className="text-xl font-bold">Follow</p>
            </Link>
            <NavDesktop />
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded-full hidden md:inline-flex" size="sm" asChild>
              <Link href="/download">Get Started</Link>
            </Button>
            <Button
              className="rounded-full border-neutral-300 dark:border-neutral-500 flex gap-2 bg-transparent size-9 md:w-auto md:px-3"
              variant="outline"
              size="reset"
              asChild
            >
              <a href={siteInfo.githubLink} target="_blank" rel="noopener noreferrer">
                <span className="i-simple-icons-github size-4" />
                <span className="hidden md:inline">Star on GitHub</span>
              </a>
            </Button>
            <NavMobile />
          </div>
        </nav>
      </Container>
    </header>
  )
}
