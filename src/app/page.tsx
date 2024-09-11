import { Container } from '@/components/container'
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
        <Container className="space-y-96 py-32">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam quaerat consequuntur asperiores, pariatur perferendis sit explicabo eaque sapiente dignissimos eius harum, sequi, ea vero quo non provident placeat? Officia!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam quaerat consequuntur asperiores, pariatur perferendis sit explicabo eaque sapiente dignissimos eius harum, sequi, ea vero quo non provident placeat? Officia!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam quaerat consequuntur asperiores, pariatur perferendis sit explicabo eaque sapiente dignissimos eius harum, sequi, ea vero quo non provident placeat? Officia!</p>
        </Container>
      </main>
    </>
  )
}
