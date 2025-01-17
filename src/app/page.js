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
  description: 'Join us for the Women in Data Conference, a one-day event dedicated to empowering women in data science and analytics.',
  openGraph: {
    title: 'Women in Data Conference 2025',
    description: 'Join us for the Women in Data Conference, a one-day event dedicated to empowering women in data science and analytics.',
    url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png` ,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png`,
        width: 1200,
        height: 630,
        alt: 'Women in Data Conference Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women in Data Conference',
    description: 'Join us for the Women in Data Conference, a one-day event dedicated to empowering women in data science and analytics.',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png`],
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