import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </main>
  )
}
