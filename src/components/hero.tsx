'use client'

import { Globe } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/constants'
import { floatingAnimations, floatingTransitions, scrollAnimations, springAnimations } from '@/lib/animations'

import GithubTrending from './github-trending'
import { Logo } from './logo'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-slate-100/60 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-100/60 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />

      {/* Floating Icon Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={springAnimations.withDelay(0.3, 'medium')}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top Left Icons */}
        <motion.div
          animate={floatingAnimations.strong}
          transition={floatingTransitions.gentle}
          className="absolute top-20 left-20 text-indigo-400/30 dark:text-indigo-500/20"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Top Right Icons */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            ...floatingTransitions.medium,
            delay: 0.5,
          }}
          className="absolute top-32 right-32 text-violet-400/35 dark:text-violet-500/25"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </motion.div>

        {/* Middle Left */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            ...floatingTransitions.strong,
            delay: 1,
          }}
          className="absolute top-1/2 left-16 text-blue-400/30 dark:text-blue-500/20"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </motion.div>

        {/* Middle Right */}
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            ...floatingTransitions.gentle,
            delay: 0.2,
          }}
          className="absolute top-1/2 right-20 text-indigo-300/35 dark:text-indigo-400/25"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
          </svg>
        </motion.div>

        {/* Bottom Icons */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-32 left-1/4 text-violet-400/25 dark:text-violet-500/15"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </motion.div>

        <motion.div
          animate={floatingAnimations.medium}
          transition={{
            ...floatingTransitions.medium,
            delay: 1.5,
          }}
          className="absolute bottom-40 right-1/3 text-blue-400/30 dark:text-blue-500/20"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo and Brand */}
        <motion.div
          {...scrollAnimations.fadeInUp}
          className="flex flex-col items-center justify-center gap-6 mb-12"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={springAnimations.withDelay(0.1, 'medium')}
              className="relative z-10"
            >
              <Logo className="h-16 w-auto sm:h-20" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-violet-500/30 rounded-full blur-xl opacity-25 scale-150" />

            {/* Logo decorative icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springAnimations.withDelay(0.5, 'fast')}
              className="absolute -top-2 -right-2 text-orange-500"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springAnimations.withDelay(0.6, 'fast')}
              className="absolute -bottom-1 -left-3 text-amber-500"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springAnimations.withDelay(0.2, 'medium')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/60 dark:border-gray-700/50"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {APP_NAME} - Next-Gen Information Browser
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 relative"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2 relative">
              Follow everything
              {/* Headline decorative icons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute -left-8 top-0 text-indigo-400/50 hidden lg:block"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </motion.div>
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent relative">
              in one place
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="absolute -right-8 top-0 text-violet-400/50 hidden lg:block"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.4, 'medium')}
          className="mb-12"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Organize content into one timeline, keep updated on what matters,
            {' '}
            <span className="font-semibold text-gray-900 dark:text-white relative inline-flex items-center gap-1">
              <svg
                className="w-4 h-4 text-accent translate-y-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              noise-free
            </span>
            .

            <br />
            Share lists, explore collections, and enjoy distraction-free
            browsing.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.5, 'medium')}
          className="flex justify-center mb-6 -mr-5 text-foreground"
        >
          <GithubTrending />
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.5, 'medium')}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/download">
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Download
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            asChild
          >
            <Link
              href="https://app.follow.is"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe />
              Try on Web
            </Link>
          </Button>
        </motion.div>

        {/* Stats or Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.6, 'medium')}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            {
              label: 'Content Types',
              description: 'Articles, videos, podcasts & more',
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              ),
            },
            {
              label: 'AI-Powered',
              description: 'Smart summaries & translations',
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              ),
            },
            {
              label: 'Open Source',
              description: 'Community-driven development',
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springAnimations.withDelay(0.7 + index * 0.05, 'fast')}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-orange-500 group-hover:text-red-500 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
