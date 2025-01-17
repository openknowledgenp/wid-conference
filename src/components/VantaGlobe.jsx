'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const VantaGlobe = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  const initVanta = () => {
    if (!vantaRef.current || !window.VANTA) return
    
    if (!vantaEffect.current) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xfcc10f,
        backgroundColor: 0x36a9e1,
      })
    }
  }

  if (!mounted) {
    return <div className="w-full h-screen bg-[#36a9e1]" /> // Placeholder during SSR
  }

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/vanta@latest/dist/vanta.globe.min.js"
        strategy="afterInteractive"
        onLoad={initVanta}
      />
      <div
        ref={vantaRef}
        className="w-full h-screen"
      />
    </>
  )
}

export default VantaGlobe