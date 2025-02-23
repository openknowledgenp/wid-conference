'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter();

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



  const handleHomeClick = (e) => {
    if (router.pathname === '/') {
      e.preventDefault();
      router.reload(); 
    }
  };

  return (
    <nav
      className={`w-full h-fit fixed top-0 transition-all duration-300 z-50 ${scrolled
        ? 'bg-[#229EFD] bg-opacity-100 shadow-sm py-2'
        : 'bg-[#229EFD] bg-opacity-90 pt-2'
        }`}
    >
      <div className='container mx-auto'>
        <div className="flex flex-wrap items-center justify-between mx-4 md:mx-16 md:px-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/wid_name.png`}
              className={`transition-all duration-300 ${scrolled ? 'h-12 w-[3.69rem] md:h-14 md:w-[4.31rem]' : 'h-14 w-[4.31rem] md:h-16 w-[4.92rem]'
                }`}
              alt="Logo"
              width={200}
              height={80}
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:hover:text-[#FBBC0A] rounded-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-end md:w-auto">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  href="/"
                  className="text-white 2xl:text-lg hover:text-[#FBBC0A] transition-colors"
                  onClick={handleHomeClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white 2xl:text-lg hover:text-[#FBBC0A] transition-colors"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/schedule"
                  className="text-white 2xl:text-lg hover:text-[#FBBC0A] transition-colors"
                >
                  Schedule
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-white 2xl:text-lg hover:text-[#FBBC0A] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                href='/schedule'
                className="px-4 py-2 bg-[#FBBC0A] 2xl:text-xl hover:bg-[#FBBC0A]/95 rounded-lg font-neutral transform hover:scale-105 transition-transform focus:outline-none border-none text-white">
                Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            {/* Mobile menu content */}
            <div className="p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-[#FBBC0A] rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-4 mt-8">
                <li>
                  <Link
                    href="/"
                    className="block text-black hover:text-[#FBBC0A] transition-colors py-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-gray-900 hover:text-[#FBBC0A] transition-colors py-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="block text-gray-900 hover:text-[#FBBC0A] transition-colors py-2"
                  >
                    Schedule
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/contact"
                    className="block text-gray-900 hover:text-[#FBBC0A] transition-colors py-2"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                  href='/register'
                    className="px-8 py-3 bg-[#FBBC0A] hover:bg-[#FBBC0A]/95 rounded-lg font-semibold transform hover:scale-105 transition-transform text-white hover:outline-black focus:outline-none border-none"
                  >
                    Register Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`container mx-auto mt-2 ${scrolled ? 'hidden' : 'block'} shadow-xl`}>
            <hr className=' text-white' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar