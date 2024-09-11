import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ViewFeature } from '@/components/view-feature'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ViewFeature />
        <Features />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
