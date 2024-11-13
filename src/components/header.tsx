'use client'

import Link from 'next/link'
import useSWR from 'swr'

import { siteInfo } from '@/constants'
import { cn } from '@/lib/utils'

import { Container } from './container'
import { Logo } from './logo'
import { NavDesktop } from './nav-desktop'
import { NavMobile } from './nav-mobile'
import { Button } from './ui/button'

export function Header() {
  const { data } = useSWR(
    'github-stars',
    async () => {
      const res = await fetch(siteInfo.githubApiLink)
      const data = (await res.json()) as { stargazers_count: number }
      return data
    },
  )

  return (
    <header
      className={cn(
        'p-4 md:px-10 backdrop-blur-lg fixed top-0 inset-x-0 z-50 transition-all',
      )}
    >
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link className="flex items-center gap-3" href="/#">
              <Logo className="h-7 w-auto" color="#000" />
              <p className="text-xl font-bold">Follow</p>
            </Link>
            <NavDesktop />
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="gap-2 bg-black text-white hover:bg-black/90 hidden md:flex"
              asChild
            >
              <a href={siteInfo.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="i-simple-icons-github size-4" />
                <span>Star on GitHub</span>
                {!!data?.stargazers_count && (
                  <>
                    <span className="i-mingcute-star-fill size-4 text-yellow-500 mb-0.5" />
                    <div className="font-medium">{(data?.stargazers_count / 1000).toFixed(1)}K</div>
                  </>
                )}
              </a>
            </Button>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/download">Get Started</Link>
            </Button>
            <NavMobile />
          </div>
        </nav>
      </Container>
    </header>
  )
}
