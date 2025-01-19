
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Instagram, Calendar, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Contact | Women in Data Conference 2025',
  description: 'Get in touch with the Women in Data (WiD) Conference team. Reach out for inquiries, partnership opportunities, or assistance with your registration for WiD 2025, where data meets action to advance gender equality',
  openGraph: {
    title: 'Contact | Women in Data Conference 2025',
    description: 'Get in touch with the Women in Data (WiD) Conference team. Reach out for inquiries, partnership opportunities, or assistance with your registration for WiD 2025, where data meets action to advance gender equality',
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
    title: 'Contact | Women in Data Conference',
    description: 'Get in touch with the Women in Data (WiD) Conference team. Reach out for inquiries, partnership opportunities, or assistance with your registration for WiD 2025, where data meets action to advance gender equality',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png`],
  },
}


const Card = ({ className, ...props }) => {
  return (
    <div
      className={`rounded-lg border border-[#229EFD] bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  );
};

const ContactPage = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/womenindatanp', hoverColor: 'hover:text-blue-600 text-[#229EFD]' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/womenindatanp', hoverColor: 'hover:text-blue-700 text-[#229EFD]' },
    { icon: Twitter, href: 'https://x.com/womenindatanp', hoverColor: 'hover:text-sky-500' },
    { icon: Instagram, href: 'https://www.instagram.com/womenindata.np/', hoverColor: 'hover:text-pink-500' }
  ];

  const contactInfo = [
    {
      icon: Calendar,
      title: "Registration Deadline",
      content: "February 10, 2025"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "conference@wid2025.com"
    }
  ];

  return (
    <>
    <Navbar/>
    <section id="contact" className="py-20 mt-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div className='md:mx-16 px-4'>
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-black">Contact & Stay Connected</h1>
          <p className="text-base text-gray-600 max-w-2xl mt-4">
            Join us in transforming promises into progress and shaping a future where data empowers everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 relative">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-blue-50 rounded-full mb-4 group-hover:bg-white transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to join us? Register now to secure your spot at the WiD Conference 2025.
          </p>
          <Link href="/register">
          <button
              href="/register"
              className="px-8 py-3 bg-[#FBBC0A] hover:bg-[#FBBC0A]/95 rounded-lg font-semibold transform hover:scale-105 transition-transform text-white hover:outline-black focus:outline-none border-none"
            >
              Register Now
            </button>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h2>
          <div className="flex items-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-all transform hover:scale-110 ${social.hoverColor}`}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
          <p className="text-gray-600">
            Stay tuned for updates on the full schedule and speaker announcements.
          </p>
        </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactPage;