'use client'

import { Download, Globe, Smartphone, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

import { Logo, LogoText } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { siteInfo } from '@/constants'
import { PlatformStoreLinkMap } from '@/constants/release'
import { usePlatform } from '@/hooks/use-platform'
import { springAnimations } from '@/lib/animations'

export function DownloadHero() {
  const { platform, isLoading } = usePlatform()

  const handleSmartDownload = () => {
    if (!platform) {
      // 如果无法检测平台，滚动到平台选择区域
      document.querySelector('#platforms')?.scrollIntoView({
        behavior: 'smooth',
      })
      return
    }

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo) {
      // 如果有应用商店链接，直接跳转
      window.open(platformInfo.link, '_blank')
    }
    else if (platform === 'Linux') {
      // Linux 用户跳转到 GitHub releases
      window.open(siteInfo.releaseLink, '_blank')
    }
    else {
      // 其他情况滚动到平台选择区域
      document.querySelector('#platforms')?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const getButtonText = () => {
    if (isLoading) {
      return 'Loading...'
    }
    if (!platform) {
      return 'Choose Your Platform'
    }

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo) {
      return `Download for ${platform}`
    }
    else if (platform === 'Linux') {
      return 'Download for Linux'
    }
    return 'Choose Your Platform'
  }

  const getButtonIcon = () => {
    if (isLoading || !platform)
      return <Download className="size-5" />

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo || platform === 'Linux') {
      return <Download className="size-5" />
    }
    return <Download className="size-5" />
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springAnimations.medium}
          className="mb-8"
        >
          <Logo className="size-24 md:size-32 mx-auto" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.1, 'medium')}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-4">
            Download <LogoText className="w-auto ml-1 inline-block text-accent h-[1.2ch] -translate-y-1.5" />
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-orange-600 dark:text-orange-400 font-medium">
            <Sparkles className="size-5" />
            <span>Next-Gen Information Browser</span>
            <Sparkles className="size-5" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.2, 'medium')}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the future of content consumption. Available across all your devices with seamless synchronization and AI-powered features.
        </motion.p>

        {/* Platform Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.3, 'medium')}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Smartphone className="size-4" />
            <span>Mobile</span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Download className="size-4" />
            <span>Desktop</span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Globe className="size-4" />
            <span>Web</span>
          </div>
        </motion.div>

        {/* Smart Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.4, 'medium')}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="xl"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={handleSmartDownload}
            disabled={isLoading}
          >
            <span className="flex items-center gap-3">
              {getButtonIcon()}
              {getButtonText()}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </Button>

          {/* Alternative: Web App */}
          <Button
            variant="ghost"
            size="lg"
            className="px-6 py-3 text-base font-semibold rounded-xl border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            asChild
          >
            <a href={siteInfo.appUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="size-4 mr-2" />
              Try Web App
            </a>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={springAnimations.withDelay(0.5, 'medium')}
          className="mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          Or scroll down to see all platform options
        </motion.p>
      </div>
    </section>
  )
}
