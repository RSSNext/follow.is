import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'
import { ViewFeature } from '@/components/view-feature'
import screenshotArticle from '@/images/screenshots/article.png'
import screenshotAudio from '@/images/screenshots/audio.png'
import screenshotNotification from '@/images/screenshots/notification.png'
import screenshotPicture from '@/images/screenshots/picture.png'
import screenshotSocialMedia from '@/images/screenshots/social-media.png'
import screenshotVideo from '@/images/screenshots/video.png'

const imagesToPreload = [
  screenshotArticle.src,
  screenshotAudio.src,
  screenshotNotification.src,
  screenshotPicture.src,
  screenshotSocialMedia.src,
  screenshotVideo.src,
]

export default function Home() {
  return (
    <>
      {imagesToPreload.map(src => (<link key={src} rel="preload" as="image" href={src} />))}
      <Header />
      <main>
        <Hero />
        <ViewFeature />
        <Features />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
