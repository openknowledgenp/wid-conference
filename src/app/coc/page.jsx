import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Code of Conduct | Women in Data Conference 2025',
  description: 'Our commitment to creating a safe, inclusive, and respectful environment for all participants at the Women in Data Conference 2025.',
  openGraph: {
    title: 'Code of Conduct | Women in Data Conference 2025',
    description: 'Our commitment to creating a safe, inclusive, and respectful environment for all participants at the Women in Data Conference 2025.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code of Conduct | Women in Data Conference',
    description: 'Our commitment to creating a safe, inclusive, and respectful environment for all participants at the Women in Data Conference 2025.',
  },
}

export default function CodeOfConduct() {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 gap-4 md:mx-20">
            <div className="space-y-4 text-black">
              <h1 className="text-3xl font-bold">
                Women in Data Conference 2025 – Code of Conduct
              </h1>

              <p className="text-base leading-relaxed text-black max-w-5xl text-left">
                The <strong>Women in Data Conference 2025</strong> is a space for learning, collaboration, and empowerment. We value the participation of each member and want all attendees to have a positive and fulfilling experience. Accordingly, all attendees are expected to show respect and courtesy to others throughout the event.
              </p>

              <p className="text-base leading-relaxed max-w-5xl text-left">
                To ensure a safe and inclusive environment, all attendees, speakers, exhibitors, organizers, and volunteers 
                must adhere to the following Code of Conduct. Organizers will enforce this code throughout the event.
              </p>

              <h2 className="text-2xl font-semibold mt-8">Code of Conduct</h2>
              <p className="text-base leading-relaxed max-w-5xl text-left">
                Women in Data is committed to providing a <strong>harassment-free and inclusive</strong> experience 
                for everyone, regardless of gender identity, sexual orientation, disability, physical appearance, 
                body size, race, ethnicity, religion, or professional background.
              </p>
              <p className="text-base leading-relaxed max-w-5xl text-left">
                We do <strong>not</strong> tolerate harassment, discrimination, or any form of behavior that may 
                cause another participant to feel unsafe, insecure, or unwelcome.
              </p>

              <h2 className="text-2xl font-semibold mt-8">Expected Behavior</h2>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-base leading-relaxed">
                  ✔ Treat everyone with <strong>respect, kindness, and professionalism</strong>
                </li>
                <li className="text-base leading-relaxed">
                  ✔ Be <strong>inclusive and welcoming</strong> to diverse perspectives
                </li>
                <li className="text-base leading-relaxed">
                  ✔ <strong>Engage thoughtfully</strong> in discussions and debates
                </li>
                <li className="text-base leading-relaxed">
                  ✔ Follow the <strong>event guidelines</strong> and instructions from organizers
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8">Unacceptable Behavior</h2>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-base leading-relaxed">
                  🚫 Harassment, discrimination, or intimidation
                </li>
                <li className="text-base leading-relaxed">
                  🚫 Disruptive, offensive, or exclusionary language
                </li>
                <li className="text-base leading-relaxed">
                  🚫 Unwanted contact or unsafe behavior
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8">Reporting</h2>
              <p className="text-base leading-relaxed max-w-5xl text-left">
                If you experience or witness any inappropriate behavior, please report it immediately to an event 
                organizer or volunteer.
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="text-base leading-relaxed">
                  📩 <strong>Contact:</strong>
                  <a href="https://conference.womenindatanepal.org/contact/" 
                     className="text-[#229EFD] ml-2">
                    conference.womenindatanepal.org/contact
                  </a>
                </li>
                <li className="text-base leading-relaxed">
                  📍 <strong>On-Site Support:</strong> Approach any event volunteer or the help desk
                </li>
              </ul>
              <p className="text-base leading-relaxed max-w-5xl text-left">
                Women in Data organizers will take <strong>swift and appropriate action</strong>, including verbal 
                warnings, removal from the event, or further escalation if necessary. Violations may result in 
                removal from the event.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}