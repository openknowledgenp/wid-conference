'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const VantaGlobe = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [scriptsLoaded, setScriptsLoaded] = useState({
    three: false,
    vanta: false,
  })

  useEffect(() => {
    setMounted(true)

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  useEffect(() => {
    // Only initialize when both scripts are loaded and component is mounted
    if (scriptsLoaded.three && scriptsLoaded.vanta && mounted && vantaRef.current && !vantaEffect.current) {
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
        size: 1.2,
        backgroundColor: 0x36a9e1,
      })
    }
  }, [scriptsLoaded, mounted])

  const handleThreeLoad = () => {
    setScriptsLoaded(prev => ({ ...prev, three: true }))
  }

  const handleVantaLoad = () => {
    setScriptsLoaded(prev => ({ ...prev, vanta: true }))
  }

  if (!mounted) {
    return <div className="w-full h-screen bg-[#36a9e1]" />
  }

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={handleThreeLoad}
      />
      <Script
        src="https://unpkg.com/vanta@latest/dist/vanta.globe.min.js"
        strategy="afterInteractive"
        onLoad={handleVantaLoad}
      />
      <div
        ref={vantaRef}
        className="w-full h-screen"
      />
    </>
  )
}

export default VantaGlobe