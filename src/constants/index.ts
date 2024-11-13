import screenshotArticle from '@/images/screenshots/article.png'
import screenshotAudio from '@/images/screenshots/audio.png'
import screenshotNotification from '@/images/screenshots/notification.png'
import screenshotPicture from '@/images/screenshots/picture.png'
import screenshotSocialMedia from '@/images/screenshots/social-media.png'
import screenshotVideo from '@/images/screenshots/video.png'

export const alphaTestAirdropTotalUsers = 28675

export const siteInfo = {
  title: 'Follow',
  description: 'Next-Gen Information Browser',
  webUrl: 'https://follow.is',
  appUrl: 'https://app.follow.is',
  githubLink: 'https://github.com/RSSNext/follow',
  githubApiLink: 'https://api.github.com/repos/RSSNext/Follow',
  xLink: 'https://x.com/follow_app_',
  discordLink: 'https://discord.gg/followapp',
  releaseLink: 'https://github.com/RSSNext/Follow/releases/latest',
  navigation: [
    { title: 'Features', href: '/#features' },
    { title: 'Testimonials', href: '/#testimonials' },
    { title: 'FAQ', href: '/#faq' },
    { title: 'AirDrop', href: '/airdrop' },
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
