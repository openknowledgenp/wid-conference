'use client'

import { useEffect, useState } from 'react'
import CountdownTimer from './shared/CountdownTimer'
import VantaGlobe from './VantaGlobe'
import Image from 'next/image'
import configData from '../data/config.json';

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const Hero = () => {
  const [config, setConfig] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
      setConfig(configData.conference)
  }, [])

  // Add a loading state for SSR
  if (!mounted || !config) {
    return (
      <section className="relative h-screen w-screen bg-[#36a9e1]">
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center px-4 py-24 2xl:py-44">
          {/* Loading placeholder */}
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen bg-[#36a9e1] w-screen text-black overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <VantaGlobe />
      </div> */}

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center px-4 py-24 2xl:py-44 text-center">
        <div className="animate-fadeIn">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/wid.png`}
            alt="wid logo"
            className="mx-auto"
            height={140}
            width={140}
            priority
          />
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-white roboto-bold"
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            {config.title}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 text-[#FBBC0A] font-semibold italic underline font-sans"
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            {config.tagline}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 text-lg text-white">
            <div 
              className="flex items-center justify-center gap-2 font-neutral"
              style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <span>📅</span>
              {formatDate(config.date)} {/* Using consistent date formatting */}
            </div>
            <div 
              className="flex items-center justify-center gap-2 font-neutral"
              style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <span>📍</span>
              {config.venue.name}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <CountdownTimer targetDate={config.date} />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="px-8 py-3 bg-[#FBBC0A] hover:bg-[#FBBC0A]/80 rounded-lg font-semibold transform hover:scale-105 transition-transform text-white hover:outline-black focus:outline-none border-none"
              onClick={() => {
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Register Now
            </button>
          </div>
          <p className="text-base text-white italic mt-4">
            Spaces are limited - register today to secure your spot!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero