'use client'

import { CheckCircle, Download, ExternalLink, Globe } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { siteInfo } from '@/constants'
import { PlatformIconMap, PlatformStoreLinkMap } from '@/constants/release'
import { usePlatform } from '@/hooks/use-platform'
import { scrollAnimations, springAnimations } from '@/lib/animations'

const platformDetails = {
  iOS: {
    name: 'iOS',
    description: 'iPhone & iPad',
    color: 'from-blue-500 to-indigo-600',
  },
  macOS: {
    name: 'macOS',
    description: 'Mac computers',
    color: 'from-gray-500 to-gray-700',
  },
  Windows: {
    name: 'Windows',
    description: 'Windows PC',
    color: 'from-blue-600 to-blue-800',
  },
  Android: {
    name: 'Android',
    description: 'Android devices',
    color: 'from-green-500 to-green-700',
  },
  Linux: {
    name: 'Linux',
    description: 'Linux distributions',
    color: 'from-orange-500 to-red-600',
  },
}

export function DownloadPlatforms() {
  const { platform: detectedPlatform } = usePlatform()

  return (
    <section id="platforms" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...scrollAnimations.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download for your preferred platform and enjoy seamless
            synchronization across all your devices.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(PlatformStoreLinkMap).map(
            ([platform, storeInfo], index) => {
              const platformKey = platform as keyof typeof PlatformStoreLinkMap
              const details = platformDetails[platformKey]
              const isRecommended = detectedPlatform === platformKey

              if (!storeInfo && platformKey !== 'Linux') {
                return null
              }

              return (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={springAnimations.withDelay(index * 0.05, 'medium')}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springAnimations.withDelay(0.1, 'fast')}
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <CheckCircle className="size-3" />
                        Recommended
                      </div>
                    </motion.div>
                  )}

                  <Card className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 ${
                    isRecommended
                      ? 'ring-2 ring-green-500 shadow-green-500/20'
                      : ''
                  }`}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${details.color} ${
                        isRecommended ? 'opacity-10' : 'opacity-5'
                      } group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Platform Icon */}
                    <div className="relative p-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${details.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                          isRecommended ? 'scale-110' : ''
                        }`}
                      >
                        <div
                          className={`${PlatformIconMap[platformKey]} text-white text-2xl`}
                        />
                      </div>

                      {/* Platform Info */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {details.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {details.description}
                      </p>

                      {/* Download Button */}
                      {storeInfo ? (
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link
                            href={storeInfo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="size-4 mr-2" />
                            Download from
                            {' '}
                            {storeInfo.name}
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link
                            href={siteInfo.releaseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="size-4 mr-2" />
                            Download
                          </Link>
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            },
          )}
        </div>

        {/* Web App Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.medium}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Globe className="size-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Try on the Web
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              No download required. Experience the full power of our platform
              directly in your browser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link
                  href={siteInfo.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="size-5 mr-2" />
                  Launch Web App
                  <ExternalLink className="size-4 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                asChild
              >
                <Link
                  href={siteInfo.releaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="size-5 mr-2" />
                  All Downloads
                  <ExternalLink className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
