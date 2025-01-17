// src/app/contact/page.tsx
import Link from 'next/link';
// import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
    <Navbar />
    <section id="contact" className="py-20 px-4 bg-[#f1f1f1]">
      <div className="container mx-auto h-full max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact & Stay Connected</h1>
        <p className="text-lg text-gray-700 mb-6">
          Mark your calendars and register by <strong>February 8, 2025</strong>, to secure your spot. Click
          <Link href="/register" className="text-blue-500 underline"> here</Link> to register or access the registration form
          <Link href="/register" className="text-blue-500 underline"> here</Link>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Stay tuned for updates on the full schedule and speaker announcements. Follow us on our social media
          platforms to stay updated:
        </p>

        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            {/* <FaFacebook size={32} /> */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            {/* <FaLinkedin size={32} /> */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            {/* <FaTwitter size={32} /> */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500">
            {/* <FaInstagram size={32} /> */}
          </a>
        </div>

        <p className="text-lg text-gray-700">
          Let’s march forward together - transforming promises into progress and shaping a future where data empowers
          everyone.
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
}
