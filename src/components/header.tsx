"use client"

import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import useSWR from "swr"

import { getGithubStar } from "@/actions/github-star"
import { Button } from "@/components/ui/button"
import { siteInfo } from "@/constants"
import { useViewport } from "@/hooks/use-viewport"
import { interactionAnimations, springAnimations } from "@/lib/animations"
import { cn } from "@/lib/utils"

import { Logo, LogoText } from "./logo"
import { GitHubStarsButton } from "./ui/github-star-button"
import { LiquidButton } from "./ui/liquid"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const md = useViewport((state) => state.md)

  const { data: stars } = useSWR("/api/github-star", getGithubStar)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springAnimations.medium}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "border-b border-gray-200/50 bg-white/95 shadow shadow-zinc-900/5 backdrop-blur-xl dark:border-gray-800/50 dark:bg-gray-950/95"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="relative flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={interactionAnimations.hover}
              transition={springAnimations.ultraFast}
              className="flex-shrink-0"
            >
              <Link href="/" className="group flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="relative">
                  <Logo className="h-6 w-auto transition-transform duration-300 group-hover:scale-110 sm:h-7 md:h-9" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <LogoText className="h-3.5 w-auto sm:h-4 md:h-5" />
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="ml-8 hidden grow items-center justify-start gap-1 lg:flex">
              {siteInfo.navigation.map((item) => (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100/80 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/80 dark:hover:text-white"
                  >
                    {item.title}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              {/* GitHub Stars - Always visible */}
              <GitHubStarsButton
                className="h-8 rounded-lg sm:h-9 md:h-10"
                username="RSSNext"
                repo="Folo"
                stars={stars ?? 0}
                showText={md}
              />

              {/* Download Button - Responsive sizing */}
              <LiquidButton
                variant="default"
                className="hidden h-10 rounded-lg bg-white text-xs sm:text-sm lg:block"
                size="sm"
              >
                <Link href="/download" className="relative z-10 px-0.5 font-semibold sm:px-1">
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={springAnimations.fast}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden dark:bg-gray-950"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <Logo className="h-8 w-auto" />
                    <LogoText className="h-5 w-auto" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close mobile menu"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <nav className="space-y-2 px-4">
                    {siteInfo.navigation.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="space-y-4 border-t border-gray-200 p-4 dark:border-gray-800">
                  {/* GitHub Stars Button */}
                  <GitHubStarsButton
                    className="h-10 w-full"
                    username="RSSNext"
                    repo="Folo"
                    showText={true}
                    stars={stars ?? 0}
                  />

                  {/* Download Button */}
                  <LiquidButton variant="default" className="w-full bg-white">
                    <Link
                      href="/download"
                      className="relative z-10 block w-full py-2 text-center font-medium"
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
