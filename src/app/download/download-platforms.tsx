"use client"

import { CheckCircle, Download, ExternalLink, Globe } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteInfo } from "@/constants"
import { PlatformIconMap, PlatformStoreLinkMap } from "@/constants/release"
import { usePlatform } from "@/hooks/use-platform"
import { scrollAnimations, springAnimations } from "@/lib/animations"

const platformDetails = {
  iOS: {
    name: "iOS",
    description: "iPhone & iPad",
    color: "from-blue-500 to-indigo-600",
  },
  macOS: {
    name: "macOS",
    description: "Mac computers",
    color: "from-gray-500 to-gray-700",
  },
  Windows: {
    name: "Windows",
    description: "Windows PC",
    color: "from-blue-600 to-blue-800",
  },
  Android: {
    name: "Android",
    description: "Android devices",
    color: "from-green-500 to-green-700",
  },
  Linux: {
    name: "Linux",
    description: "Linux distributions",
    color: "from-orange-500 to-red-600",
  },
}

export function DownloadPlatforms() {
  const { platform: detectedPlatform } = usePlatform()

  return (
    <section id="platforms" className="bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          {...scrollAnimations.fadeInUp}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Choose Your Platform
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Download for your preferred platform and enjoy seamless synchronization across all your
            devices.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(PlatformStoreLinkMap).map(([platform, storeInfo], index) => {
            const platformKey = platform as keyof typeof PlatformStoreLinkMap
            const details = platformDetails[platformKey]
            const isRecommended = detectedPlatform === platformKey

            if (!storeInfo && platformKey !== "Linux") {
              return null
            }

            return (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={springAnimations.withDelay(index * 0.05, "medium")}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springAnimations.withDelay(0.1, "fast")}
                    className="absolute -top-3 -right-3 z-10"
                  >
                    <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      <CheckCircle className="size-3" />
                      Recommended
                    </div>
                  </motion.div>
                )}

                <Card
                  className={`relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800 ${
                    isRecommended ? "ring-2 shadow-green-500/20 ring-green-500" : ""
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${details.color} ${
                      isRecommended ? "opacity-10" : "opacity-5"
                    } transition-opacity duration-300 group-hover:opacity-10`}
                  />

                  {/* Platform Icon */}
                  <div className="relative p-8">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${details.color} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isRecommended ? "scale-110" : ""
                      }`}
                    >
                      <div className={`${PlatformIconMap[platformKey]} text-2xl text-white`} />
                    </div>

                    {/* Platform Info */}
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {details.name}
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">{details.description}</p>

                    {/* Download Button */}
                    {storeInfo ? (
                      <Button
                        size="lg"
                        className="w-full rounded-xl border-0 bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl"
                        asChild
                      >
                        <Link href={storeInfo.link} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 size-4" />
                          Download from {storeInfo.name}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        className="w-full rounded-xl border-0 bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl"
                        asChild
                      >
                        <Link href={siteInfo.releaseLink} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 size-4" />
                          Download
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Web App Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.medium}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="mx-auto max-w-2xl border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-8 dark:border-orange-800 dark:from-orange-900/20 dark:to-red-900/20">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600">
                <Globe className="size-8 text-white" />
              </div>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Try on the Web
            </h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              No download required. Experience the full power of our platform directly in your
              browser.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-xl border-0 bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-xl"
                asChild
              >
                <Link href={siteInfo.appUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 size-5" />
                  Launch Web App
                  <ExternalLink className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                asChild
              >
                <Link href={siteInfo.releaseLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 size-5" />
                  All Downloads
                  <ExternalLink className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
