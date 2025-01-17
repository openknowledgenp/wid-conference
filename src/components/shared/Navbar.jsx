'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`w-full fixed top-0 transition-all duration-300 z-50 ${
        scrolled
          ? 'bg-[#36a9e1]/60 backdrop-blur-sm shadow-sm py-2'
          : 'bg-[#36a9e1] py-2'
      }`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/icons/wid_name.png"
            className={`transition-all duration-300 ${
              scrolled ? 'h-12 w-[3.69rem] md:h-16 md:w-[4.31rem]' : 'h-14 w-[4.31rem] md:h-16 w-[4.92rem]'
            }`}
            alt="Logo"
            width={200}
            height={80}
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link
                href="/"
                className="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              {/* <button
                className="px-4 py-2 bg-[#FBBC0A] 2xl:text-xl hover:bg-[#FBBC0A]/80 rounded-lg font-semibold transform hover:scale-105 transition-transform focus:outline-none border-none text-white"
                onClick={() => console.log('register clicked')}
              >
                Register
              </button> */}
              Register
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile menu content */}
          <div className="p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4 mt-8">
              <li>
                <Link
                  href="/"
                  className="block text-black hover:text-blue-700 transition-colors py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar