'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import configData from '../data/config.json';

export const About = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig(configData.conference.about);
  }, []);

  if (!config) return null;

  return (
    <section id="about" className="px-4 bg-[#f6f6f6] backdrop-blur-sm">
      <div className="container mx-auto pb-12">
        <div className="md:mx-16 px-4 grid md:grid-cols-3 gap-4">
          <div className="space-y-3 col-span-2 text-white mb-8 pt-16">
            <h2 className="text-3xl font-bold bg-clip-text text-black ">
              Welcome to the WiD Conference 2025
            </h2>
            <p className="text-base leading-relaxed text-black max-w-5xl mx-auto mb-0">
              Join us as we transform promises into progress! This annual event celebrates and empowers women in the data field by fostering collaboration among professionals, policymakers, and data enthusiasts to explore data-driven solutions to societal challenges.
            </p>
            <p className="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0">
              The Women in Data (WiD) Conference is a prestigious annual event organized by the Women in <a className='text-[#229EFD] underline' href='https://www.womenindatanepal.org/'>Data Steering Committee</a>. Its mission is to enhance women's capabilities in leveraging data for positive social and economic impact.
            </p>
            <p className="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0">
              This year's theme, <span className="font-semibold italic">"सङ्‍कल्प: Using Data to Turn Promises into Progress"</span>, emphasizes the importance of actionable commitments to advance gender equality.
            </p>
          </div>
          <div className="pt-8 hidden md:block">
            <div className="p-4 pb-0 w-fit">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/wid_blue.png`} 
                alt="collaboration" 
                height={60} 
                className='mb-0'
                width={300}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};