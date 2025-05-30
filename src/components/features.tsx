'use client'

import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { APP_NAME } from '@/constants'
import screenShotAIDaily from '@/images/screenshots/AI At Your Fingertips.png'
import screenShotDiscover from '@/images/screenshots/Customized Info Hub.png'
import screenShotViews from '@/images/screenshots/Dynamic Content Support.png'
import screenShotPower from '@/images/screenshots/High Level Description.png'
import screenShotSocial from '@/images/screenshots/More Than Just An App.png'
import { scrollAnimations, springAnimations } from '@/lib/animations'

import { Button } from './ui/button'

const features = [
  {
    id: 'hub',
    title: 'Customized Information Hub',
    description:
      "Powered by RSSHub, the world's largest RSS network with 5,000+ instances. Subscribe to feeds from any platform and curate your personalized information timeline.",
    image: screenShotDiscover,
    gradient: 'from-indigo-500 to-purple-600',
    icon: '🎯',
    details: [
      'Adapted 1,200 popular websites',
      'RSS & Social Media',
      'RSSHub Integration',
    ],
  },
  {
    id: 'dynamic',
    title: 'Dynamic Content Support',
    description: `From articles to videos, images to audio — ${APP_NAME} gets it all covered with intelligent content parsing.`,
    image: screenShotViews,
    gradient: 'from-emerald-500 to-cyan-600',
    icon: '⚡',
    details: [
      'Articles & Blogs',
      'Videos & Podcasts',
      'Images & Media',
      'Live Streams',
    ],
  },
  {
    id: 'ai',
    title: 'AI At Your Fingertips',
    description:
      'Smart browsing with AI-powered features like translation, summary, and content insights.',
    image: screenShotAIDaily,
    gradient: 'from-violet-500 to-pink-600',
    icon: '🤖',
    details: [
      'Auto Summaries',
      'Real-time Translation',
      'Smart Categories',
      'Content Insights',
    ],
  },
  {
    id: 'power',
    title: '$POWER Economy',
    description:
      'Tip creators instantly with $POWER, support content you love, and unlock value in your work.',
    image: screenShotPower,
    gradient: 'from-orange-500 to-red-600',
    icon: '💎',
    details: [
      'Tip Creators',
      'Earn Rewards',
      'Premium Features',
      'Community Governance',
    ],
  },
  {
    id: 'community',
    title: 'Community-Driven',
    description: `More than an app. ${APP_NAME} is a community introducing a new era of openness and collaboration.`,
    image: screenShotSocial,
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🌟',
    details: [
      'Open Source',
      'Community Lists',
      'Shared Collections',
      'Collaborative Features',
    ],
  },
]

export function Features() {
  const router = useRouter()
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...scrollAnimations.fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/60 dark:border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need for
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              modern content consumption
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover powerful features designed to transform how you discover,
            consume, and interact with content across the web.
          </p>
        </motion.div>

        {/* Features Grid with Proper 16:9 Aspect Ratio */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={springAnimations.withDelay(index * 0.05, 'medium')}
              viewport={{ once: true }}
              className={`group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } lg:flex items-center gap-12`}
            >
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200/50 dark:border-gray-600/50">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
                    />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      Feature {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details - New Modern Layout */}
                <div className="space-y-4">
                  {/* First Row - Single Full Width Card */}
                  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-900/80 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-lg hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-500 group/card">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {feature.details[0]}
                        </h4>
                      </div>
                    </div>
                    {/* Subtle background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/card:opacity-5 rounded-2xl transition-opacity duration-500`}
                    />
                  </div>

                  {/* Second Row - Two Smaller Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.details.slice(1, 3).map((detail, idx) => (
                      <div
                        key={idx}
                        className="relative p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:shadow-gray-900/5 dark:hover:shadow-gray-900/10 transition-all duration-300 group/small-card hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 shadow-sm`}
                          />
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-200 text-sm group-hover/small-card:text-gray-900 dark:group-hover/small-card:text-white transition-colors duration-200">
                              {detail}
                            </span>
                          </div>
                        </div>
                        {/* Hover gradient effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/small-card:opacity-3 rounded-xl transition-opacity duration-300`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Third Row - Final Feature in Full Width with Special Styling */}
                  {feature.details[3] && (
                    <div className="relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-dashed border-gray-300/60 dark:border-gray-600/60 hover:border-solid hover:shadow-lg hover:shadow-gray-900/5 dark:hover:shadow-gray-900/15 transition-all duration-500 group/dashed">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-200 group-hover/dashed:text-gray-900 dark:group-hover/dashed:text-white transition-colors duration-200">
                              {feature.details[3]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Screenshot Side */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative group/image">
                  {/* Main Screenshot Container - 16:9 Aspect Ratio */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl shadow-gray-900/20 dark:shadow-gray-900/40">
                    <Image
                      src={feature.image}
                      alt={`Screenshot of ${feature.title}`}
                      fill
                      className="object-cover group-hover/image:scale-105 transition-transform duration-700"
                      priority={index < 2}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.2, 'medium')}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/60 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to experience the future of content?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Join thousands of users who've transformed their content
              consumption experience.
            </p>
            {/* <a
              href="/download"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Download
            </a> */}
            <Button
              variant="gradient"
              size="lg"
              className="font-medium"
              onClick={() => {
                router.push('/download')
              }}
            >
              <Download />
              Download
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
