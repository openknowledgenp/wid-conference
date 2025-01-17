'use client'

import Image from 'next/image';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
    <Navbar />
    <section id="about" className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-1 gap-4 items-center">
          <div className="space-y-4 text-black">
            <>
            <h2 className="text-3xl font-bold bg-clip-text text-black">
              About the WiD Conference 2025
            </h2>
            <p className="text-base leading-relaxed text-black max-w-5xl ">
              The Women in Data (WiD) Conference is an annual gathering organized by the Women in Data Steering Committee, a coalition of 12 leading organizations committed to advancing opportunities for women in the fields of data and technology. The WiD Conference has served as a platform to enhance women's capabilities in leveraging data for positive social and economic change.
            </p>
            <p className="text-base leading-relaxed max-w-5xl text-black">
              Supported by The Asia Foundation’s Data for Development Programme, the 2025 WiD Conference will be managed by Open Knowledge Nepal. The conference will bring together private sector leaders, nonprofit representatives, and international experts to create a dynamic environment for groundbreaking discussions and actionable outcomes.
            </p>
            </>
            <div >
            <h3 className="text-2xl font-semibold mt-8">2025 WiD Conference Objectives</h3>
            <ul className="list-disc pl-6 text-base leading-relaxed max-w-5xl v text-black">
              <li>Catalyze actionable commitments for leveraging data to advance gender equality.</li>
              <li>Strengthen data literacy among women, empowering the next generation with essential skills.</li>
              <li>Foster a collaborative platform for women data practitioners, policymakers, and leaders.</li>
              <li>Demonstrate the transformative power of data in addressing gender disparities and driving inclusive development.</li>
            </ul>
            </div>
            <>
            <h3 className="text-2xl font-semibold mt-8">Why Attend?</h3>
            <ul className="list-disc pl-6 text-base leading-relaxed max-w-5xl ml-4 text-black">
              <li>Build Your Network: Connect with policymakers, practitioners, and thought leaders.</li>
              <li>Enhance Your Skills: Gain practical tools and methods for data-driven solutions.</li>
              <li>Be Inspired: Hear success stories from leading women in data.</li>
              <li>Shape the Future: Contribute to a movement advancing data-driven gender equality.</li>
            </ul>
            </>

            <h3 className="text-2xl font-semibold mt-8">What to Expect?</h3>
            <p className="text-base leading-relaxed max-w-5xl text-black">
              This year’s program includes:
            </p>
            <ul className="list-disc pl-6 text-base leading-relaxed max-w-5xl ml-4 text-black">
              <li>Diverse Speakers: Gain insights from global and local leaders in the field of data, technology, and gender.</li>
              <li>Collaborative Panels: Explore key topics and challenges in data-driven solutions.</li>
              <li>Hands-on Workshops: Develop practical skills for leveraging data effectively.</li>
              <li>Breakout Sessions: Participate in discussions and sessions led by the Women in Data Steering Committee.</li>
            </ul>
          </div>
          <div>
            <div className="p-4 w-fit self-end">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/data-tools.png`} 
                alt="WiD Conference Logo"
                height={60} 
                width={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
