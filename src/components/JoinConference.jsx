'use client'

import Image from 'next/image';

export const JoinConference = () => {
  return (
    <section id="about" className="py-10 px-4 bg-[#fff] backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-center text-black font-bold md:text-2xl mb-10">Why Join WiD Conference?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            {
              icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/network1.png`,
              title: "Build Your Network",
              description: "Connect with policymakers, practitioners, and thought leaders."
            },
            {
              icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/skills1.png`,
              title: "Enhance Your Skills",
              description: "Learn practical tools and methods for data-driven solutions."
            },
            {
              icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/inspire1.png`,
              title: "Be Inspired",
              description: "Discover success stories and insights from leading women in data."
            },
            {
              icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icons/sustainability.png`,
              title: "Shape the Future",
              description: "Contribute to a movement advancing data-driven gender equality."
            }
          ].map((item, index) => (
            <div key={index} className="border border-1 border-[#fcc10f] p-0.5 rounded-xl shadow-lg drop-shadow-sm focus:shadow-xl transition-shadow duration-300">
              <div className="h-full rounded-xl p-4 text-black text-center">
                <Image src={item.icon} alt={item.title} height={100} width={120}className="rounded-lg mx-auto" />
                <h3 className="text-xl mb-2 mt-1 font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
