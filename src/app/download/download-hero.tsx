"use client"

import { Download, Globe, Smartphone, Sparkles } from "lucide-react"
import { motion } from "motion/react"

import { Logo, LogoText } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { siteInfo } from "@/constants"
import { PlatformStoreLinkMap } from "@/constants/release"
import { usePlatform } from "@/hooks/use-platform"
import { springAnimations } from "@/lib/animations"

export function DownloadHero() {
  const { platform, isLoading } = usePlatform()

  const handleSmartDownload = () => {
    if (!platform) {
      // 如果无法检测平台，滚动到平台选择区域
      document.querySelector("#platforms")?.scrollIntoView({
        behavior: "smooth",
      })
      return
    }

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo) {
      // 如果有应用商店链接，直接跳转
      window.open(platformInfo.link, "_blank")
    } else if (platform === "Linux") {
      // Linux 用户跳转到 GitHub releases
      window.open(siteInfo.releaseLink, "_blank")
    } else {
      // 其他情况滚动到平台选择区域
      document.querySelector("#platforms")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  const getButtonText = () => {
    if (isLoading) {
      return "Loading..."
    }
    if (!platform) {
      return "Choose Your Platform"
    }

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo) {
      return `Download for ${platform}`
    } else if (platform === "Linux") {
      return "Download for Linux"
    }
    return "Choose Your Platform"
  }

  const getButtonIcon = () => {
    if (isLoading || !platform) return <Download className="size-5" />

    const platformInfo = PlatformStoreLinkMap[platform]
    if (platformInfo || platform === "Linux") {
      return <Download className="size-5" />
    }
    return <Download className="size-5" />
  }

  return (
    <section className="relative flex min-h-[max(100svh,1000px)] items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springAnimations.medium}
          className="mb-8"
        >
          <Logo className="mx-auto size-24 md:size-32" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.1, "medium")}
          className="mb-6"
        >
          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl dark:from-white dark:via-gray-100 dark:to-white">
            Download{" "}
            <LogoText className="text-accent ml-1 inline-block h-[1.2ch] w-auto -translate-y-1.5" />
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg font-medium text-orange-600 md:text-xl dark:text-orange-400">
            <Sparkles className="size-5" />
            <span>Next-Gen Information Browser</span>
            <Sparkles className="size-5" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.2, "medium")}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300"
        >
          Experience the future of content consumption. Available across all your devices with
          seamless synchronization and AI-powered features.
        </motion.p>

        {/* Platform Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.3, "medium")}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Smartphone className="size-4" />
            <span>Mobile</span>
          </div>
          <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Download className="size-4" />
            <span>Desktop</span>
          </div>
          <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Globe className="size-4" />
            <span>Web</span>
          </div>
        </motion.div>

        {/* Smart Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.4, "medium")}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="xl"
            className="group rounded-xl border-0 bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-xl"
            onClick={handleSmartDownload}
            disabled={isLoading}
          >
            <span className="flex items-center gap-3">
              {getButtonIcon()}
              {getButtonText()}
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                →
              </motion.div>
            </span>
          </Button>

          {/* Alternative: Web App */}
          <Button
            variant="ghost"
            size="lg"
            className="rounded-xl border-2 px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            asChild
          >
            <a href={siteInfo.appUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 size-4" />
              Try Web App
            </a>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={springAnimations.withDelay(0.5, "medium")}
          className="mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          Or scroll down to see all platform options
        </motion.p>
      </div>
    </section>
  )
}
