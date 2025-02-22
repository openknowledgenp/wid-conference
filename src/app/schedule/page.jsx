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

  const formatPanelItems = (items) => {
    const moderatorIndex = items.findIndex(item => item.includes('Moderator:'));
    const panelistsIndex = items.findIndex(item => item.includes('Panelists:'));

    return (
      <div className="space-y-3">
        <div className="pl-4">
          <span className="font-medium text-gray-700">Moderator</span>
          <p className="text-gray-600 mt-1">{items[moderatorIndex].replace('Moderator: ', '')}</p>
        </div>
        <div className="pl-4">
          <span className="font-medium text-gray-700">Panelists</span>
          <ul className="mt-1 space-y-2">
            {items.slice(panelistsIndex + 1).map((panelist, i) => (
              <li key={i} className="text-gray-600 flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600 mt-2 mr-2 flex-shrink-0"></span>
                <span>{panelist.replace('- ', '')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const BreakoutSession = ({ session, showBorder = true }) => (
    <div className={`space-y-3 ${showBorder ? 'md:border-l md:pl-4' : ''} mb-6 md:mb-0`}>
      <div className="bg-blue-50 inline-block px-3 py-1 rounded-full text-sm text-gray-700 font-medium">
        {session.type}
      </div>
      <h3 className="text-base font-medium text-black">{session.title}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Organized by:</span> {session.organizer}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Hall:</span> {session.location}
      </p>
    </div>
  );

  const schedule = [
    {
      time: "9:00 - 10:00 AM",
      title: "Registration, Snacks & Networking",
      location: "Pre-Function Area and Waterfall Garden",
      items: ["Participants registration", "Coffee and snacks"]
    },
    {
      time: "10:00 - 10:25 AM",
      title: "Welcome Remarks",
      location: "Nepa Dhuku Hall",
      items: [
        "Nhasala Joshi, Women in Data (WiD) Steering Committee",
        "Meghan Nalbo, Country Representative, The Asia Foundation"
      ]
    },
    {
      time: "10:25 - 10:50 AM",
      title: "Keynote Presentation",
      location: "Nepa Dhuku Hall",
      items: ["Prof. Dr. Kushum Shakya, Former Dean of Faculty of Humanities and Social Sciences"]
    },
    {
      time: "10:50 - 11:00 AM",
      title: "Group Photo",
      location: "Nepa Dhuku Hall"
    },
    {
      time: "11:00 - 11:15 AM",
      title: "Lightning Talk",
      subtitle: "Barriers to Breakthroughs: Women in Nepal's Information and Communication Technology Landscape",
      location: "Nepa Dhuku Hall",
      items: ["Dibya Dali, Executive Member, Women in Information Technology (WIIT)"]
    },
    {
      time: "11:15 - 12:15 PM",
      title: "Panel Discussion",
      subtitle: "Data and Diversity: Ensuring Inclusive Data Practices",
      location: "Nepa Dhuku Hall",
      isPanel: true,
      items: [
        "Moderator: Arpana Shrestha, Senior Program Officer, The Asia Foundation",
        "Panelists:",
        "- Susma Pant, Director of Engineering, ExtensoData",
        "- Nir Shrestha, Director, Blind Youth Association of Nepal",
        "- Sagun Khanal, Senior Platform Product Manager, CloudFactory",
        "- Shristi Piya, Chief Development Officer, Rumsan"
      ]
    },
    {
      time: "12:15 - 12:30 PM",
      title: "Lightning Talk",
      subtitle: "Bridging Data and System Silos: Enhancing Data Interoperability in Nepal's Digital Governance Landscape",
      location: "Nepa Dhuku Hall",
      items: ["Sneha Shah, Senior Program Manager, The Asia Foundation"]
    },
    {
      time: "12:30 - 1:20 PM",
      title: "Lunch Break and Hall Breakout",
      location: "Waterfall Garden"
    },
    {
      time: "1:20 - 2:20 PM",
      isBreakout: true,
      sessions: [
        {
          title: "Digital Forensics: IT and Legal Aspects in Nepal",
          type: "Presentation with Q&A",
          organizer: "Logpoint",
          location: "Nepa Hall"
        },
        {
          title: "Breaking the Binary: Understanding and Addressing Gender Bias in AI Systems",
          type: "Workshop",
          organizer: "Udeshya Girls in STEM",
          location: "Dhuku Hall"
        },
        {
          title: "Data To Story: Data Engineering and Analytics Fundamentals",
          type: "Workshop",
          organizer: "Women Leaders in Technology",
          location: "Rara Hall"
        }
      ]
    },
    {
      time: "2:20 - 3:20 PM",
      isBreakout: true,
      sessions: [
        {
          title: "Gendered Disinformation: What Is It and Why We Should Care?",
          type: "Presentation with Q&A",
          organizer: "Digital Rights Nepal",
          location: "Nepa Hall"
        },
        {
          title: "Data Compass: Empowering Women Through Narratives and Networks",
          type: "Workshop",
          organizer: "The Algorithm",
          location: "Dhuku Hall"
        },
        {
          title: "Ethics of Data and Prompt Engineering",
          type: "Workshop",
          organizer: "Smart Cheli",
          location: "Rara Hall"
        }
      ]
    },
    {
      time: "3:20 - 3:30 PM",
      title: "Grabbing Coffee and Gathering Back",
      location: "Pre-Function Area and Waterfall Garden"
    },
    {
      time: "3:30 - 4:30 PM",
      title: "Panel Discussion",
      subtitle: "Data! Dialogue! Decisions!",
      location: "Nepa Dhuku Hall",
      isPanel: true,
      items: [
        "Moderator: Nhasala Joshi, Co-Founder and ED, Women Leaders in Technology",
        "Panelists:",
        "- Carolyn O'Donnell, Director of Impact, The Asia Foundation",
        "- Nirjana Sharma, Head of Communication and Information, UNESCO",
        "- Bimala Rai Poudyal, Member, National Assembly of Federal Parliament of Nepal"
      ]
    },
    {
      time: "4:30 - 5:00 PM",
      title: "Thank You and Closing Note",
      location: "Nepa Dhuku Hall",
      items: [
        "Federica Di Battista, Evidence and Knowledge Team Leader, FCDO",
        "Preeti Thapa, Deputy Country Representative, The Asia Foundation",
        "Nikesh Balami, CEO, Open Knowledge Nepal / Women in Data (WiD) Steering Committee"
      ]
    },
    {
      time: "5:00 PM Onwards",
      title: "Networking",
      location: "Pre-Function Area and Waterfall Garden"
    }
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
        <div className="container md:px-4 mx-auto">
          <div className="md:mx-16 mb-4">
            <h1 className="text-3xl font-bold mb-4 text-black">Women in Data (WiD) Conference 2025</h1>
            <p className="text-xl font-medium mb-2 text-[#FBBC0A] italic">"सङ्‍कल्प: Using Data to Turn Promises into Progress"</p>
            <div className="flex flex-col md:flex-row justify-left gap-2 text-lg ml-2">
              <div className="flex items-center text-black pr-2">
                <Calendar className="w-4 h-4" />
                <span className='text-base ml-2'>February 25, 2025</span>
              </div>
              <div className="flex items-center text-black pr-2">
                <Clock className="w-4 h-4" />
                <span className='text-base ml-2'>9:00 AM to 5:30 PM</span>
              </div>
              <div className="flex items-center text-black pr-2">
                <Hotel className="w-4 h-4" />
                <span className='text-base ml-1'>Radisson Hotel Kathmandu</span>
              </div>
            </div>
          </div>
          <div className="md:mx-16 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 ">
            <div className="flex bg-[#229EFD] bg-opacity-90 text-white font-semibold border-b border-l border-r border-[#36A9E1] text-base">
              <div className="w-32 md:w-52 flex-shrink-0 px-3 md:px-6 py-4 border-r border-white/20">Time</div>
              <div className="flex-1 px-3 md:px-6 py-4">Activities</div>
              <div className="hidden md:block w-64 flex-shrink-0 px-6 py-4 border-l border-white/20">Location</div>
            </div>

            <div className="divide-y divide-gray-200">
              {schedule.map((session, index) => (
                <div key={index}>
                  {session.isBreakout ? (
                    <div className="flex flex-col md:flex-row border-l border-r">
                      <div className="w-full md:w-52 flex-shrink-0 px-3 md:px-6 py-4 border-b md:border-b-0 md:border-r">
                        <div className="font-medium text-black text-base">{session.time}</div>
                      </div>
                      <div className="flex-1 px-3 md:px-6 py-4">
                        {/* Mobile view: Stack vertically */}
                        <div className="md:hidden space-y-8">
                          {session.sessions.map((breakout, idx) => (
                            <div key={idx} className="border-b pb-6 last:border-b-0 last:pb-0">
                              <BreakoutSession session={breakout} showBorder={false} />
                            </div>
                          ))}
                        </div>
                        {/* Desktop view: Grid layout */}
                        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
                          {session.sessions.map((breakout, idx) => (
                            <BreakoutSession key={idx} session={breakout} showBorder={idx > 0} />
                          ))}
                        </div>
                      </div>
                      <div className="hidden md:block w-64 flex-shrink-0 px-6 py-4 border-l">
                        <div className="space-y-2">
                          {session.sessions.map((breakout, idx) => (
                            <p key={idx} className="text-sm text-gray-600">{breakout.location}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex flex-col md:flex-row border-l border-r ${isBreakSession(session.title) ? 'bg-[#FCC10F]/10' : ''}`}>
                      <div className="w-full md:w-52 flex-shrink-0 px-3 md:px-6 py-4 border-b md:border-b-0 md:border-r">
                        <div className="font-medium text-black text-base">{session.time}</div>
                      </div>
                      <div className="flex-1 px-3 md:px-6 py-4">
                        <div className="space-y-2">
                          <h3 className="text-base font-semibold text-black">{session.title}</h3>
                          {session.subtitle && (
                            <p className="text-black font-medium">{session.subtitle}</p>
                          )}
                          {session.isPanel ? (
                            formatPanelItems(session.items)
                          ) : (
                            session.items && session.items.length > 0 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {session.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                      </div>
                      <div className="hidden md:block w-64 flex-shrink-0 px-6 py-4 border-l">
                        <p className="text-gray-600">{session.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        <div className="md:mx-16 mt-6 md:w-3/4">
          <p className="text-black">As we participate in this conference, we commit to fostering a respectful, inclusive, and welcoming environment for all. Please take a moment to review our <Link href="/coc" className="text-[#229EFD] underline">Code of Conduct</Link> to ensure a safe and positive experience for everyone.</p>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}