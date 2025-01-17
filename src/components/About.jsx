'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

export const About = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/data/config.json')
      .then(res => res.json())
      .then(data => setConfig(data.conference.about));
  }, []);

  if (!config) return null;

  return (
    <section id="about" className="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-6 text-white mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-black">
              Welcome to the WiD Conference 2025
            </h2>
            <p className="text-base leading-relaxed text-black max-w-5xl mx-auto mb-0">
              Join us as we transform promises into progress! This annual event celebrates and empowers women in the data field by fostering collaboration among professionals, policymakers, and data enthusiasts to explore data-driven solutions to societal challenges.
            </p>
            <p className="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0">
              The Women in Data (WiD) Conference is a prestigious annual event organized by the Women in Data Steering Committee. Its mission is to enhance women's capabilities in leveraging data for positive social and economic impact.
            </p>
            <p className="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0">
              This year's theme, <span className="font-semibold italic">"सङ्‍कल्प: Using Data to Turn Promises into Progress"</span>, emphasizes the importance of actionable commitments to advance gender equality.
            </p>
          </div>
          <div className="">
            <div className="p-4 w-fit self-end">
              <Image 
                src="/images/icons/data-tools.png" 
                alt="collaboration" 
                height={60} 
                width={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};