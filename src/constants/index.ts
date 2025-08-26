import screenshotArticle from '@/images/screenshots/article.png'
import screenshotAudio from '@/images/screenshots/audio.png'
import screenshotNotification from '@/images/screenshots/notification.png'
import screenshotPicture from '@/images/screenshots/picture.png'
import screenshotSocialMedia from '@/images/screenshots/social-media.png'
import screenshotVideo from '@/images/screenshots/video.png'

export const alphaTestAirdropTotalUsers = 28675

export const APP_NAME = 'Folo'

export const siteInfo = {
  title: APP_NAME,
  description: 'Next-Gen Information Browser',
  webUrl: 'https://folo.is',
  appUrl: 'https://app.folo.is',
  githubLink: 'https://github.com/RSSNext/Folo',
  githubApiLink: 'https://ungh.cc/repos/RSSNext/Folo',
  xLink: 'https://x.com/folo_is',
  discordLink: 'https://discord.gg/followapp',
  productHuntLink: 'https://www.producthunt.com/posts/follow-5',
  releaseLink: 'https://github.com/RSSNext/Folo/releases/latest',
  navigation: [
    { title: 'Features', href: '/#features' },
    { title: 'Testimonials', href: '/#testimonials' },
    { title: 'FAQ', href: '/#faq' },
  ],
  seo: {
    titleTemplate: '%s | Folo - Next-Gen Information Browser',
    defaultTitle: 'Folo - Next-Gen Information Browser',
    description:
      'Folo is a powerful next-generation information browser that revolutionizes how you discover, organize, and consume content from across the web. Experience AI-powered content curation, real-time updates, and seamless multi-platform synchronization.',
    keywords: [
      'RSS reader',
      'RSS',
      'RSSHub',
      'information browser',
      'content curation',
      'news aggregator',
      'feed reader',
      'AI-powered',
      'real-time updates',
      'content discovery',
      'social media integration',
      'cross-platform',
    ] as string[],
    authors: [{ name: 'Follow Team' }] as Array<{ name: string }>,
    creator: 'Follow Team',
    publisher: 'Follow Team',
    openGraph: {
      type: 'website' as const,
      locale: 'en_US',
      url: 'https://folo.is',
      siteName: 'Folo',
      title: 'Folo - Next-Gen Information Browser',
      description:
        'Powerful next-generation information browser that revolutionizes how you discover, organize, and consume content from across the web.',
      images: [
        {
          url: 'https://folo.is/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Folo - Next-Gen Information Browser',
        },
      ] as Array<{
        url: string
        width: number
        height: number
        alt: string
      }>,
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@folo_is',
      creator: '@folo_is',
      title: 'Folo - Next-Gen Information Browser',
      description:
        'Powerful next-generation information browser that revolutionizes how you discover, organize, and consume content.',
      images: ['https://folo.is/opengraph-image.png'] as string[],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },
} as const

export const views = [
  {
    title: 'Articles',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotArticle,
  },
  {
    title: 'Social media',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotSocialMedia,
  },
  {
    title: 'Pictures',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotPicture,
  },
  {
    title: 'Videos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotVideo,
  },
  {
    title: 'Audio',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotAudio,
  },
  {
    title: 'Notifications',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotNotification,
  },
]

export type View = (typeof views)[number]
