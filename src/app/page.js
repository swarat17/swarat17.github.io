import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Toolkit from '@/components/Toolkit'
import Beyond from '@/components/Beyond'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Toolkit />
      <Beyond />
      <Activities />
      <Contact />
    </main>
  )
}
