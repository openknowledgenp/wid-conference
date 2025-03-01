import Image from 'next/image';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About | Women in Data Conference 2025',
  description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  openGraph: {
    title: 'About | Women in Data Conference 2025',
    description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Women in Data Conference',
    description: 'Learn about the Women in Data (WiD) Conference, an annual platform empowering women in data to collaborate, innovate, and create impact. Explore how WiD 2025 focuses on using data-driven insights to advance gender equality and foster societal progress.',
  },
}

export default function About() {
  return (
    <>
      <Navbar />
      <section id="about" className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 gap-4 md:mx-20 ">
            <div className="space-y-4 text-black">
              <>
                <h2 className="text-3xl font-bold bg-clip-text text-black">
                  About the WiD Conference 2025
                </h2>
                <p className="text-base leading-relaxed text-black max-w-5xl text-left ">
                  The Women in Data (WiD) Conference is an annual gathering organized by the <a href='https://www.womenindatanepal.org/' className='text-[#229EFD]'>Women in Data Steering Committee</a>, a coalition of 12 leading organizations committed to advancing opportunities for women in the fields of data and technology. The WiD Conference has served as a platform to enhance women's capabilities in leveraging data for positive social and economic change.
                </p>
                <p className="text-base leading-relaxed max-w-5xl text-black text-left">
                  Supported by <a href='https://asiafoundation.org/' className='text-[#229EFD]'>The Asia Foundation’s</a> <a href="https://www.d4dnepal.org/" className='text-[#229EFD]'>Data for Development Programme</a>, the 2025 WiD Conference is managed by <a href='https://oknp.org/' className='text-[#229EFD]'> Open Knowledge Nepal</a>. The conference will bring together private sector leaders, nonprofit representatives, and international experts to create a dynamic environment for groundbreaking discussions and actionable outcomes.
                </p>
                <p className="text-base leading-relaxed max-w-5xl text-black text-left">
              This year's theme, <span className="font-semibold text-[#FBBC0A] italic font-semibold">"सङ्‍कल्प: Using Data to Turn Promises into Progress"</span>, emphasizes the importance of actionable commitments to advance gender equality.
            </p>
                
              </>
              <div >
                <h3 className="text-2xl font-semibold mt-8 mb-4">2025 WiD Conference Objectives</h3>
                <ul className="list-decimal pl-8 text-base leading-relaxed max-w-5xl  text-black text-left">
                  <li>Catalyze actionable commitments for leveraging data to advance gender equality.</li>
                  <li>Strengthen data literacy among women, empowering the next generation with essential skills.</li>
                  <li>Foster a collaborative platform for women data practitioners, policymakers, and leaders.</li>
                  <li>Demonstrate the transformative power of data in addressing gender disparities and driving inclusive development.</li>
                </ul>
              </div>
              <>
                <h3 className="text-2xl font-semibold mt-12">Why Attend?</h3>
                <ul className="list-disc pl-8 text-base leading-relaxed max-w-5xl ml-4 text-black text-left">
                  <li><strong>Build Your Network:</strong> Connect with policymakers, practitioners, and thought leaders.</li>
                  <li><strong>Enhance Your Skills:</strong> Gain practical tools and methods for data-driven solutions.</li>
                  <li><strong>Be Inspired:</strong> Hear success stories from leading women in data.</li>
                  <li><strong>Shape the Future:</strong> Contribute to a movement advancing data-driven gender equality.</li>
                </ul>
              </>

              <h3 className="text-2xl font-semibold mt-8">What to Expect?</h3>
              <p className="text-base leading-relaxed max-w-5xl text-black text-left">
                This year’s program includes:
              </p>
              <ul className="list-disc pl-8 text-base leading-relaxed max-w-5xl ml-4 text-black text-left">
                <li><strong>Diverse Speakers:</strong> Gain insights from global and local leaders in the field of data, technology, and gender.</li>
                <li><strong>Collaborative Panels:</strong> Explore key topics and challenges in data-driven solutions.</li>
                <li><strong>Hands-on Workshops:</strong> Develop practical skills for leveraging data effectively.</li>
                <li><strong>Breakout Sessions:</strong> Participate in discussions and sessions led by the Women in Data Steering Committee.</li>
              </ul>
            </div>
            <>
              <p className="text-base leading-relaxed text-black max-w-5xl text-left">
                Whether you’re a student, professional, or data enthusiast, <strong>everyone passionate about using data to address societal challenges is welcome!</strong>
              </p>
              <h3 className="text-2xl text-black font-semibold mt-4">Register Now</h3>
              <p className="text-base leading-relaxed max-w-5xl text-black text-left">
                Mark your calendars and register by <strong>February 14, 2025</strong>, to secure your spot. Click <a href="/register" className='text-[#229EFD]'>here</a> to register or access the registration form here: <a href="/register" className='text-[#229EFD]'>https://conference.womenindatanepal.org/register/</a>
              </p>
              <p className="text-base leading-relaxed max-w-5xl text-black text-left">
              Stay tuned for updates on the full schedule and speaker announcements. Follow us on our social media platforms to stay updated: <a href="https://www.facebook.com/womenindatanp" className='text-[#229EFD]'>Facebook</a> | <a className='text-[#229EFD]' href='https://www.linkedin.com/company/womenindatanp/'>LinkedIn</a> | <a className='text-[#229EFD]' href='https://x.com/womenindatanp'>Twitter/X</a> | <a className='text-[#229EFD]' href='https://www.instagram.com/womenindata.np/'>Instagram</a>
              </p>
              <p className="text-base leading-relaxed max-w-5xl text-black text-left">
              Let’s march forward together - transforming promises into progress and shaping a future where data empowers everyone.
              </p>
              <p className="text-base leading-relaxed max-w-5xl text-black text-left"><strong>Be part of the movement. Be part of the change.</strong></p>
            </>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
