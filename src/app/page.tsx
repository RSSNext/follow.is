import { Features } from '@/components/features'
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
      </main>
    </>
  )
}
