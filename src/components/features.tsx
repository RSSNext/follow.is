'use client'

import {
  Bell,
  Download,
  FileText,
  Globe,
  Heart,
  Image as ImageIcon,
  Rss,
  Sparkles,
  Target,
  Users,
  Video,
} from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { APP_NAME } from '@/constants'
import screenShotAIDaily from '@/images/screenshots/AI At Your Fingertips.png'
import screenShotDiscover from '@/images/screenshots/Customized Info Hub.png'
import screenShotViews from '@/images/screenshots/Dynamic Content Support.png'
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
      { text: 'Adapted 1,200 popular websites', icon: Globe },
      { text: 'RSS & Social Media', icon: Rss },
      { text: 'RSSHub Integration', icon: Target },
      { text: 'Content Insights', icon: Sparkles },
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
      { text: 'Articles & Blogs', icon: FileText },
      { text: 'Videos & Podcasts', icon: Video },
      { text: 'Images & Media', icon: ImageIcon },
      { text: 'Notifications', icon: Bell },
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
      { text: 'Auto Summaries', icon: FileText },
      { text: 'Real-time Translation', icon: Globe },
      { text: 'Smart Categories', icon: Target },
      { text: 'Content Insights', icon: Sparkles },
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
      { text: 'Open Source', icon: Globe },
      { text: 'Community Lists', icon: Users },
      { text: 'Shared Collections', icon: Heart },
      { text: 'Collaborative Features', icon: Sparkles },
    ],
  },
]

export function Features() {
  const router = useRouter()
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...scrollAnimations.fadeInUp}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gradient-to-r from-slate-50 to-gray-50 px-4 py-2 dark:border-gray-700/50 dark:from-gray-900/50 dark:to-gray-800/50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Features
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Everything you need for
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              modern content consumption
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
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
              } items-center gap-12 lg:flex`}
            >
              {/* Content Side */}
              <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
                {/* Mobile Layout - Badge above title */}
                <div className="space-y-4 lg:hidden">
                  {/* Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 dark:border-gray-600/50 dark:from-gray-800 dark:to-gray-700">
                      <div
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
                      />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        Feature {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className={`h-14 w-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl text-white shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Badge and icon side by side */}
                <div className="hidden items-center justify-center gap-4 lg:flex lg:justify-start">
                  <div
                    className={`h-14 w-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl text-white shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 dark:border-gray-600/50 dark:from-gray-800 dark:to-gray-700">
                    <div
                      className={`h-2 w-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
                    />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      Feature {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div>
                  {/* Title for desktop only (mobile has it above) */}
                  <h3 className="mb-4 hidden text-3xl font-bold text-gray-900 lg:block lg:text-4xl dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details - New Modern Layout */}
                <div className="space-y-4">
                  {/* First Row - Single Full Width Card */}
                  <div className="group/card relative rounded-2xl border border-gray-200/60 bg-gradient-to-br from-white to-gray-50/80 p-5 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-gray-900/10 dark:border-gray-700/60 dark:from-gray-800 dark:to-gray-900/80 dark:hover:shadow-gray-900/20">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md`}
                      >
                        <div className="h-3 w-3 rounded-full bg-white opacity-80" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {feature.details[0].text}
                        </h4>
                      </div>
                    </div>
                    {/* Subtle background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-5`}
                    />
                  </div>

                  {/* Second Row - Two Smaller Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {feature.details.slice(1, 3).map((detail, idx) => (
                      <div
                        key={idx}
                        className="group/small-card relative rounded-xl border border-gray-200/60 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-900/5 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:shadow-gray-900/10"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 shadow-sm`}
                          />
                          <div>
                            <span className="text-sm font-medium text-gray-800 transition-colors duration-200 group-hover/small-card:text-gray-900 dark:text-gray-200 dark:group-hover/small-card:text-white">
                              {detail.text}
                            </span>
                          </div>
                        </div>
                        {/* Hover gradient effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 transition-opacity duration-300 group-hover/small-card:opacity-3`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Third Row - Final Feature in Full Width with Special Styling */}
                  {feature.details[3] && (
                    <div className="group/dashed relative rounded-xl border border-dashed border-gray-300/60 bg-gradient-to-r from-gray-50 to-white p-4 transition-all duration-500 hover:border-solid hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-600/60 dark:from-gray-800/50 dark:to-gray-900/50 dark:hover:shadow-gray-900/15">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                          >
                            {(() => {
                              const IconComponent = feature.details[3].icon
                              return (
                                <IconComponent className="h-4 w-4 text-white" />
                              )
                            })()}
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 transition-colors duration-200 group-hover/dashed:text-gray-900 dark:text-gray-200 dark:group-hover/dashed:text-white">
                              {feature.details[3].text}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Screenshot Side */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="group/image relative">
                  {/* Main Screenshot Container - 16:9 Aspect Ratio */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl shadow-gray-900/20 dark:bg-gray-800 dark:shadow-gray-900/40">
                    <Image
                      src={feature.image}
                      alt={`Screenshot of ${feature.title}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      priority={index < 2}
                    />
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
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-gray-200/60 bg-gradient-to-br from-slate-50 to-gray-50 p-8 dark:border-gray-700/50 dark:from-gray-900/50 dark:to-gray-800/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to experience the future of content?
            </h3>
            <p className="max-w-md text-gray-600 dark:text-gray-300">
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
