// src/app/page.tsx
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import { About } from '../components/About'
import Faqs from '../components/Faqs'
import LogoSection from '../components/LogoSection'
import { Footer } from '@/components/Footer'
import { JoinConference } from '@/components/JoinConference'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <JoinConference />
      <Faqs />
      <LogoSection />
      <Footer />
    </main>
  )
}