import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
