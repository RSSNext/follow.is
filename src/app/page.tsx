import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main className="pt-28 lg:pt-0">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </main>
  )
}
