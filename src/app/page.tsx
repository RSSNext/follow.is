import { Features } from '@/components/features'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  )
}
