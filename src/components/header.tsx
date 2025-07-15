'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'
import { GitHubStarContext } from '@/contexts/GitHubStarContext'
import { useViewport } from '@/hooks/use-viewport'
import { interactionAnimations, springAnimations } from '@/lib/animations'
import { cn } from '@/lib/utils'

import { Logo, LogoText } from './logo'
import { GitHubStarsButton } from './ui/github-star-button'
import { LiquidButton } from './ui/liquid'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const md = useViewport(state => state.md)

  const stars = use (GitHubStarContext)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springAnimations.medium}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow shadow-zinc-900/5'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <nav className="relative flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={interactionAnimations.hover}
              transition={springAnimations.ultraFast}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group"
              >
                <div className="relative">
                  <Logo className="h-6 sm:h-7 md:h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <LogoText className="h-3.5 sm:h-4 md:h-5 w-auto" />
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-start grow ml-8 gap-1">
              {siteInfo.navigation.map(item => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/80 group"
                  >
                    {item.title}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              {/* GitHub Stars - Always visible */}
              <GitHubStarsButton
                className="h-8 sm:h-9 md:h-10  rounded-lg"
                username="RSSNext"
                repo="Folo"
                showText={md}
                stars={stars}
              />

              {/* Download Button - Responsive sizing */}
              <LiquidButton
                variant="default"
                className="bg-white text-xs sm:text-sm hidden lg:block h-10 rounded-lg"
                size="sm"
              >
                <Link
                  href="/download"
                  className="relative z-10 font-semibold px-0.5 sm:px-1"
                >
                  Download
                </Link>
              </LiquidButton>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={springAnimations.ultraFast}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={springAnimations.fast}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-950 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <Logo className="h-8 w-auto" />
                    <LogoText className="h-5 w-auto" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close mobile menu"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="px-4 space-y-2">
                    {siteInfo.navigation.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
                  {/* GitHub Stars Button */}
                  <GitHubStarsButton
                    className="w-full h-10"
                    username="RSSNext"
                    repo="Folo"
                    showText={true}
                    stars={stars}
                  />

                  {/* Download Button */}
                  <LiquidButton variant="default" className="w-full bg-white">
                    <Link
                      href="/download"
                      className="relative z-10 font-medium w-full text-center block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Download Folo
                    </Link>
                  </LiquidButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
