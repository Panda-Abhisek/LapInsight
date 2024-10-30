import Header from '../components/Header'
import Hero from '../components/Hero'
import DiscoverTech from '../components/DiscoverTech'
import Compare from '../components/Compare'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DiscoverTech />
        <Compare />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}