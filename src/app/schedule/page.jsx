import Image from 'next/image';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Schedule | Women in Data Conference 2025',
  description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  openGraph: {
    title: 'Schedule | Women in Data Conference 2025',
    description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule | Women in Data Conference',
    description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  },
}

export default function Schedule() {
  return (
    <>
      <Navbar />
      <section id="schedule" className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 h-screen gap-4 md:mx-20 ">
            <div className="space-y-4 h-90 text-black">
              <>
                <h2 className="text-3xl font-bold bg-clip-text text-black">
                  Schedule - WiD Conference 2025
                </h2>
                <p className="text-2xl leading-relaxed text-black max-w-5xl ">
                    Coming soon!
                </p>
              </>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
