"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

import { APP_NAME } from "@/constants"
import { springAnimations } from "@/lib/animations"

import { Container } from "./container"
import { Card } from "./ui/card"

interface Testimonial {
  id: string
  text: string
  name: string
  screenName: string
  profileImageUrl: string
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  // 为不同的卡片分配不同的渐变色
  const gradients = [
    "from-indigo-500/10 to-purple-600/10",
    "from-orange-500/10 to-red-600/10",
    "from-emerald-500/10 to-cyan-600/10",
    "from-violet-500/10 to-pink-600/10",
    "from-blue-500/10 to-indigo-600/10",
    "from-cyan-500/10 to-blue-600/10",
  ]

  const borderGradients = [
    "hover:border-indigo-300/50 dark:hover:border-indigo-600/50",
    "hover:border-orange-300/50 dark:hover:border-orange-600/50",
    "hover:border-emerald-300/50 dark:hover:border-emerald-600/50",
    "hover:border-violet-300/50 dark:hover:border-violet-600/50",
    "hover:border-blue-300/50 dark:hover:border-blue-600/50",
    "hover:border-cyan-300/50 dark:hover:border-cyan-600/50",
  ]

  const gradient = gradients[index % gradients.length]
  const borderGradient = borderGradients[index % borderGradients.length]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={springAnimations.withDelay(index * 0.05, "fast")}
      className="group mx-3 w-80 flex-shrink-0"
    >
      <Card
        className={`relative h-64 rounded-2xl bg-gradient-to-br p-6 ${gradient} border border-gray-200/60 dark:border-gray-700/60 ${borderGradient} flex flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/25 dark:hover:shadow-gray-900/25`}
      >
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
          <motion.svg
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            width="24"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray-400 dark:text-gray-500"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L24 4.266c-4.075 1.142-6.728 3.696-6.728 7.87 0 1.767.603 3.469 2.05 4.551.619.462 1.094 1.123 1.094 1.943 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.104.896-2 2-2z" />
            <path d="M0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L10 4.266c-4.075 1.142-6.728 3.696-6.728 7.87 0 1.767.603 3.469 2.05 4.551.619.462 1.094 1.123 1.094 1.943 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.104.896-2 2-2z" />
          </motion.svg>
        </div>

        {/* Content */}
        <blockquote className="group/text relative mb-4 flex-1 overflow-hidden">
          <p
            className="overflow-hidden pr-6 text-sm leading-relaxed text-gray-700 transition-colors duration-300 dark:text-gray-300"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              maxHeight: "4.5rem",
            }}
          >
            "{testimonial.text}"
          </p>

          {/* Overlay clipped text for hover effect */}
          <p
            className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text pr-6 text-sm leading-relaxed text-transparent opacity-0 transition-opacity duration-300 group-hover/text:opacity-100"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              maxHeight: "4.5rem",
            }}
          >
            "{testimonial.text}"
          </p>
        </blockquote>

        {/* Author */}
        <figcaption className="mt-auto flex items-center gap-3 border-t border-gray-200/50 pt-3 dark:border-gray-700/50">
          <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <Image
                className="h-10 w-10 rounded-full object-cover shadow-sm ring-2 ring-white dark:ring-gray-800"
                src={testimonial.profileImageUrl}
                alt={testimonial.name}
                width={40}
                height={40}
              />
            </motion.div>
            <div className="absolute -right-0.5 -bottom-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-blue-500 dark:border-gray-800">
              <motion.svg
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </motion.svg>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold text-gray-900 dark:text-white">
              {testimonial.screenName}
            </div>
            <div className="truncate text-xs text-gray-500 dark:text-gray-400">
              {testimonial.name}
            </div>
          </div>
        </figcaption>
      </Card>
    </motion.div>
  )
}

const tweetList = [
  {
    id: "1833056589135442345",
    text: "Very nice news aggregation, and it gives 2 power token everyday, so far I just try move front end people I followed in, haven't done yet, will try move more rss subscribe.",
    name: "🦋 AnneInCoding",
    screenName: "@anneincoding",
    profileImageUrl: "https://pbs.twimg.com/profile_images/1785961711150960640/33lS68gu_normal.jpg",
  },
  {
    id: "1832896505528930551",
    text: "Folo is sick!!!! It is indeed the best RSS app on this planet, way better than any pure RSS app such as Reeder, Inoreader, or any apps with RSS features like Readwise Reader!!!",
    name: "Poor Delmar's Handbook",
    screenName: "@delmarshandbook",
    profileImageUrl: "https://pbs.twimg.com/profile_images/1351213836100120579/x-n-YSQR_normal.jpg",
  },
  {
    id: "1832725192860393593",
    text: "Thanks for making information such a pleasant thing.",
    name: "$H!NDGEKYUME",
    screenName: "@shindgewongxj",
    profileImageUrl: "https://pbs.twimg.com/profile_images/1926131191217840128/TzsBgEv-_normal.png",
  },
  {
    id: "1819361867359535603",
    text: "Just switched my RSS reader to Folo and it's a game-changer! The built-in AI summaries are saving me so much time. If you're drowning in feeds, this app might be your new best friend.",
    name: "runes780",
    screenName: "@runes780",
    profileImageUrl: "https://pbs.twimg.com/profile_images/815928464150700032/1FJAoURS_normal.jpg",
  },
  {
    id: "1818661886340333782",
    text: "Really enjoy Folo, the next generation RSS reader.\n Browse information with the way and structure of the browser, and add social attributes, which is a very novel product concept.",
    name: "zanwei.guo",
    screenName: "@zanwei_guo",
    profileImageUrl: "https://pbs.twimg.com/profile_images/1853728628749864961/U6XotEEL_normal.jpg",
  },
  {
    id: "1818653250381574206",
    text: "Awesome! I'm using it too.",
    name: "MingCute",
    screenName: "@MingCute_icon",
    profileImageUrl: "https://pbs.twimg.com/profile_images/1785665962752233472/vU2SVqok_normal.jpg",
  },
  {
    id: "manual-1",
    text: "I'm really enjoying it so far... it's super smooth and gorgeous. It being multiplatform is amazing, cuz there's literally zero good rss apps for windows.",
    name: "@adamfergusonart",
    screenName: "Adam",
    profileImageUrl:
      "https://pbs.twimg.com/profile_images/1787910265876500480/RfnkdD9r_400x400.jpg",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-gradient-to-b from-gray-50/50 to-white py-24 dark:from-gray-900/50 dark:to-gray-950"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springAnimations.medium}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gradient-to-r from-slate-50 to-gray-50 px-4 py-2 dark:border-gray-700/50 dark:from-gray-900/50 dark:to-gray-800/50">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Testimonials
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Loved by thousands of
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              creators and consumers
            </motion.span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Join the growing community of content enthusiasts who've transformed their reading
            experience with {APP_NAME}.
          </p>
        </motion.div>
      </Container>

      <div>
        <Marquee
          pauseOnHover={true}
          speed={30}
          gradient={true}
          gradientColor="hsl(var(--background))"
          gradientWidth={100}
          className="[&_.rfm-marquee]:py-6"
        >
          {tweetList.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </Marquee>
      </div>

      {/* <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 text-center"
        >
          {[
            {
              value: '28,675+',
              label: 'Alpha Users',
              description: 'Early adopters loving it',
            },
            {
              value: '4.9/5',
              label: 'User Rating',
              description: 'Consistently high ratings',
            },
            {
              value: '100%',
              label: 'Open Source',
              description: 'Transparent & community-driven',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-transparent mb-2 bg-gradient-to-r bg-clip-text from-orange-400 to-red-500">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container> */}
    </section>
  )
}
