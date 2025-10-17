import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
          <section id="services">
        <Services />
      </section>
    </>
  )
}
import Services from '@/components/sections/home/Services'