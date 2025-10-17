import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
          <section id="features">
        <Features />
      </section>
    </>
  )
}
import Features from '@/components/sections/home/Features'