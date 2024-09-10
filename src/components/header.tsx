'use client'

import { GithubIcon } from 'lucide-react'
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
        scrollOffset && 'border md:border-b md:border-t-0 md:border-x-0 m-2 md:m-0 rounded-md md:rounded-none shadow-sm md:shadow-none',
      )}
    >
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link className="flex items-center gap-4" href="#">
              <Logo className="h-8 w-auto" />
              <p className="text-xl font-bold">Follow</p>
            </Link>
            <NavDesktop />
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded-full hidden md:inline-flex" size="sm" asChild>
              <a href={siteInfo.appLink} target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
            <Button
              className="rounded-full flex gap-2 bg-transparent size-9 md:w-auto md:px-3"
              variant="outline"
              size="reset"
              asChild
            >
              <a href={siteInfo.githubLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
                <span className="hidden md:inline">Stars on GitHub</span>
              </a>
            </Button>
            <NavMobile />
          </div>
        </nav>
      </Container>
    </header>
  )
}
