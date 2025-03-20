'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Container } from '@/components/container'
import { Logo } from '@/components/logo'
import { APP_NAME, siteInfo } from '@/constants'

export function Footer() {
  const pathname = usePathname()

  return (
    <footer>
      <Container>
        {pathname !== '/airdrop' && (
          <div className="py-16">
            <div className="flex items-center justify-center gap-4">
              <Logo className="h-10 w-auto" />
              <p className="text-xl font-bold">{APP_NAME}</p>
            </div>
            <nav className="mt-10 text-sm" aria-label="quick links">
              <div className="-my-1 flex justify-center gap-x-6">
                {siteInfo.navigation.map(item => (
                  <Link key={item.href} href={item.href} className="hover:text-primary">
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
        <div className="flex flex-col items-center border-t py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href={siteInfo.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${APP_NAME} on Discord`}
            >
              <div className="i-simple-icons-discord" />
            </a>
            <a
              href={siteInfo.xLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${APP_NAME} on X`}
            >
              <div className="i-simple-icons-x" />
            </a>
            <a
              href={siteInfo.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${APP_NAME} on GitHub`}
            >
              <div className="i-simple-icons-github" />
            </a>
          </div>
          <p className="mt-6 text-sm sm:mt-0">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            {APP_NAME}
            .
          </p>
        </div>
      </Container>
    </footer>
  )
}
