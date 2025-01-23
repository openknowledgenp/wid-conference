'use client'

import Link from 'next/link'
import CountdownTimer from './shared/CountdownTimer'
import configData from '../data/config.json'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const Hero = () => {
  const config = configData.conference

  return (
    <section className="relative h-screen/80 w-screen text-black overflow-hidden pt-10 md:pt-20 effect-container">
      <div className="mx-auto relative z-10 flex flex-col items-center justify-center px-4 pt-20 pb-16 2xl:py-24 text-center bg-[#229EFD] bg-opacity-90">
        <div className="animate-fadeIn">
          <h1
            className="text-5xl md:text-5xl 2xl:text-6xl font-bold mb-4 2xl:mb-6 bg-clip-text text-white roboto-bold"
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            {config.title}
          </h1>
          <p
            className="text-xl md:text-2xl 2xl:text-3xl mb-4 2xl:mb-6 text-[#FBBC0A] font-semibold italic font-sans"
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            {config.tagline}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 2xl:mb-10 text-lg 2xl:text-xl text-white">
            <div
              className="flex items-center justify-center gap-2 font-neutral"
              style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              {/* calendar icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path data remains the same */}
              </svg>
              {formatDate(config.date)}
            </div>
            <div
              className="flex items-center justify-center gap-2 font-neutral text-lg 2xl:text-xl"
              style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <span>📍</span>
              {config.venue.name}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <CountdownTimer targetDate={config.date} />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 bg-[#FBBC0A] hover:bg-[#FBBC0A]/95 rounded-lg font-semibold transform hover:scale-105 transition-transform text-white hover:outline-black focus:outline-none border-none"
            >
              Register Now
            </Link>
            <Link
              href='/about'
              className="px-8 py-3 rounded-lg font-semibold transform hover:scale-105 border border-[#FBBC0A] text-white hover:bg-white/10 hover:outline-black focus:outline-none"
            >
              Learn More
            </Link>
          </div>
          <p className="text-base text-white italic mt-4">
            Spaces are limited - register by February 14 to secure your spot!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero