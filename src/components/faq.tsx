'use client'

import { motion } from 'motion/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/constants'
import { springAnimations } from '@/lib/animations'

import { LogoText } from './logo'

const faqs = [
  {
    id: 'what-is-folo',
    question: `What is ${APP_NAME}?`,
    answer: `${APP_NAME} is a next-generation information browser that aggregates content from multiple sources into a single, noise-free timeline with AI-powered features.`,
  },
  {
    id: 'what-is-power',
    question: 'What is $POWER?',
    answer:
      '$POWER is our native token that enables tipping creators, and participating in community governance.',
  },
  {
    id: 'is-it-free',
    question: 'Is it free to use?',
    answer: `Yes, ${APP_NAME} is completely free and open-source.`,
  },
  {
    id: 'platforms',
    question: 'What platforms are supported?',
    answer:
      'Available on macOS, Windows, Linux, iOS, Android, and web browsers.',
  },
  {
    id: 'getting-started',
    question: 'How do I get started?',
    answer:
      'Download the app, create an account, and add your favorite content sources. Our onboarding guides you through setup.',
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-24 left-12 text-orange-200/25 dark:text-orange-800/15"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-40 right-16 text-amber-200/30 dark:text-amber-800/20"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.medium}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200/60 dark:border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently asked
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about
            {' '}
            <LogoText className="h-[1.2ch] -translate-y-0.5 w-auto inline-block" />
            .
            {/* Can't find the answer you're looking for? */}
            {/* <span className="block mt-2">
              <a
                href="mailto:support@follow.is"
                className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors"
              >
                Reach out to our support team
              </a>
            </span> */}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.1, 'medium')}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={springAnimations.withDelay(index * 0.03, 'fast')}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={faq.id}
                  className="group"
                >
                  <AccordionTrigger className="text-left hover:no-underline px-5 py-4 transition-all duration-200 [&[data-state=open]>svg]:rotate-180">
                    <span className="text-base font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 group-data-[state=open]:text-orange-700 dark:group-data-[state=open]:text-orange-300 transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4">
                    <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.withDelay(0.2, 'medium')}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50/80 to-slate-100/60 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-700/60 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-violet-400/10 to-indigo-400/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col items-center gap-6 p-8">
              <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-200/50 dark:border-orange-700/50">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                </div>
                Still have questions?
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-md text-center leading-relaxed">
                Join our community and get help from other users, or reach out
                to our team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group relative overflow-hidden"
                  asChild
                >
                  <a
                    href="https://discord.gg/followapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.174.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Discord
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </Button>
                {/*
                <Button
                  variant="glass"
                  size="lg"
                  className="group relative"
                  asChild
                >
                  <a
                    href="mailto:support@follow.is"
                    className="flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Support
                  </a>
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
