'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { siteInfo } from '@/constants'
import { cn } from '@/lib/utils'

import { Logo, LogoText } from './logo'
import { Button } from './ui/button'
import { GitHubStarsButton } from './ui/github-star-button'
import { LiquidButton } from './ui/liquid'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-900/10'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Logo className="h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <LogoText className="h-5 w-auto" />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
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
          <div className="flex items-center gap-3">

            <GitHubStarsButton className="h-9" username="RSSNext" repo="Folo" />

            <LiquidButton variant="default" className="bg-white" size="sm">
              <Link href="/download" className="relative z-10 font-medium px-1">
                Download
              </Link>
            </LiquidButton>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
