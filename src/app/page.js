// src/app/page.tsx
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import { About } from '../components/About'
import Faqs from '../components/Faqs'
import LogoSection from '../components/LogoSection'
import Footer from '../components/Footer'
import { JoinConference } from '@/components/JoinConference'



export const metadata = {
  title: 'Women in Data Conference 2025',
  description: 'Join the Women in Data (WiD) Conference 2025, a premier annual event celebrating women in the data field. This year’s theme, \'सङ्‍कल्प: Using Data to Turn Promises into Progress,\' highlights actionable commitments and data-driven solutions for advancing gender equality. Be part of the change!',
  openGraph: {
    title: 'Women in Data Conference 2025',
    description: 'Join the Women in Data (WiD) Conference 2025, a premier annual event celebrating women in the data field. This year’s theme, \'सङ्‍कल्प: Using Data to Turn Promises into Progress,\' highlights actionable commitments and data-driven solutions for advancing gender equality. Be part of the change!',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women in Data Conference',
    description: 'Join us for the Women in Data Conference, a one-day event dedicated to empowering women in data science and analytics.',
  },
}


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