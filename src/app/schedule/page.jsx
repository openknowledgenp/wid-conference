import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/Footer';
import { Clock, Calendar, Hotel } from 'lucide-react';

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
  const isBreakSession = (title) => {
    return title.toLowerCase().includes('coffee') ||
      title.toLowerCase().includes('lunch') ||
      title.toLowerCase().includes('networking') ||
      title.toLowerCase().includes('photo') ||
      title.toLowerCase().includes('snacks');
  };
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
        <div className="container md:px-4 mx-auto">
          <div className="md:mx-16 mb-4">
            <h1 className="text-3xl font-bold mb-4 text-black">Women in Data (WiD) Conference 2025</h1>
            <p className="text-xl font-medium mb-2 text-[#FBBC0A] italic">"सङ्‍कल्प: Using Data to Turn Promises into Progress"</p>
            <div className="flex flex-col md:flex-row justify-left  gap-2 text-lg ml-2">
              <div className="flex items-center ga text-black pr-2">
                <Calendar className="w-4 h-4" />
                <span className='text-base ml-2'>February 25, 2025</span>
              </div>
              <div className="flex items-center ga text-black pr-2">
                <Clock className="w-4 h-4" />
                <span className='text-base ml-2'>9:00 AM to 5:30 PM</span>
              </div>
              <div className="flex items-center ga text-black pr-2">
                <Hotel className="w-4 h-4" />
                <span className='text-base ml-1'>Radisson Hotel Kathmandu</span>
              </div>
            </div>
          </div>

          <div className="md:mx-16 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 md:w-3/4">
            <div className="flex bg-[#229EFD] bg-opacity-90 text-white font-semibold border-b border-l border-r border-[#36A9E1] text-base">
              <div className="w-52 flex-shrink-0 px-6 py-4 border-r border-white/20 text-base">
                Time
              </div>
              <div className="flex-1 px-6 py-4">
                Activities
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {[
                {
                  time: "9:00 AM - 10:00 AM",
                  title: "Registration, Snacks & Networking",
                  // items: ["Participants registration", "Coffee and snacks"]
                },
                {
                  time: "10:00 AM - 10:25 AM",
                  title: "Welcome Remarks",
                  // items: ["WiD SC Member", "TAF", "D4D"]
                },
                {
                  time: "10:25 AM - 10:50 AM",
                  title: "Keynote Presentation"
                },
                {
                  time: "10:50 AM - 11:00 AM",
                  title: "Group Photo"
                },
                {
                  time: "11:00 AM - 11:15 AM",
                  title: "Lightning Talk 1",
                  // items: ["Bridging Data and System Silos, by Sneha Shah, D4D Nepal"]
                },
                {
                  time: "11:15 AM - 12:15 PM",
                  title: "Panel Discussion 1",
                  // subtitle: "Moderator: Nhasala Joshi, WLiT",
                  // items: ["TAF", "UNESCO Kathmandu"]
                },
                {
                  time: "12:15 PM - 12:30 PM",
                  title: "Lightning Talk 2"
                },
                {
                  time: "12:30 PM - 1:20 PM",
                  title: "Lunch Break and Hall Breakout",
                  // items: ["Facilitated by 3 organizations parallelly"]
                },
                {
                  time: "1:20 PM - 2:20 PM",
                  title: "Breakout Session 1",
                  items: ["3 Sessions Parallelly"]
                },
                {
                  time: "2:20 PM - 3:20 PM",
                  title: "Breakout session 2",
                  items: ["3 Sessions Parallelly"]
                },
                {
                  time: "3:20 PM - 3:30 PM",
                  title: "Grabbing Coffee and Gathering Back",
                  // items: ["By WIIT"]
                },
                {
                  time: "3:30 PM - 4:30 PM",
                  title: "Panel Discussion 2",
                  // subtitle: "Moderator: Arpana Shrestha, D4D",
                  // items: ["YoungInnovation", "Logpoint"]
                },
                {
                  time: "4:30 PM - 5:00 PM",
                  title: "Thank You and Closing Note",
                  // items: ["FCDO", "TAF", "WiD SC Member"]
                },
                {
                  time: "5:00 PM Onwards",
                  title: "Networking"
                }
              ].map((session, index) => (
                <div
                  key={index}
                  className={`flex border-l border-r ${isBreakSession(session.title) ? 'bg-[#FCC10F]/10' : ''
                    }`}
                >
                  <div className="w-52 flex-shrink-0 px-6 py-4 border-r">
                    <div className="font-medium text-black text-base">{session.time}</div>
                  </div>
                  <div className="flex-1 px-6 py-4">
                    <div className="space-y-2">
                      {/* <h3 className={`text-base font-semibold ${isBreakSession(session.title) ? 'text-[#FCC10F]' : 'text-[#36A9E1]' */}
                      <h3 className={`text-base font-medium ${isBreakSession(session.title) ? 'text-black' : 'text-black'
                        }`}>
                        {session.title}
                      </h3>
                      {session.subtitle && (
                        <p className="text-gray-600">{session.subtitle}</p>
                      )}
                      {session.items && session.items.length > 0 && (
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {session.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="md:mx-16 mt-6 md:w-3/4">
              <p className="text-black">As we participate in this conference, we commit to fostering a respectful, inclusive, and welcoming environment for all. Please take a moment to review our <Link href="/coc"className="text-[#229EFD] underline">Code of Conduct</Link> to ensure a safe and positive experience for everyone.</p>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
