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
    { title: '$POWER', href: 'https://power.top' },
  ],
} as const

export const views = [
  {
    title: 'Articles',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotArticle,
  },
  {
    title: 'Social media',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotSocialMedia,
  },
  {
    title: 'Pictures',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotPicture,
  },
  {
    title: 'Videos',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotVideo,
  },
  {
    title: 'Audio',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotAudio,
  },
  {
    title: 'Notifications',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusantium rerum quidem et cum tempore, vitae assumenda nam veritatis quibusdam blanditiis nemo omnis maiores molestiae, est iure ad repellat hic?',
    image: screenshotNotification,
  },
]

export type View = typeof views[number]
