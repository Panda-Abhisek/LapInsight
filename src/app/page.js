import Hero from '../components/Hero'
import DiscoverTech from '../components/DiscoverTech'
import Specs from '../components/Specs'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DiscoverTech />
        <Specs />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
    </>
  )
}