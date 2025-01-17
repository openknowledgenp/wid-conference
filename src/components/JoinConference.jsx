'use client'

import Image from 'next/image';

export const JoinConference = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[#f6f6f6] backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-center text-black font-bold md:text-2xl mb-12">Why Join WiD Conference?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            {
              icon: "/images/icons/network.png",
              title: "Build Your Network",
              description: "Connect with policymakers, practitioners, and thought leaders."
            },
            {
              icon: "/images/icons/skills.png",
              title: "Enhance Your Skills",
              description: "Learn practical tools and methods for data-driven solutions."
            },
            {
              icon: "/images/icons/inspire.png",
              title: "Be Inspired",
              description: "Discover success stories and insights from leading women in data."
            },
            {
              icon: "/images/icons/future.png",
              title: "Shape the Future",
              description: "Contribute to a movement advancing data-driven gender equality."
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#40ADE3] p-0.5 rounded-xl">
              <div className="bg-[#FBBC0A] h-full rounded-xl p-4 text-black">
                <Image src={item.icon} alt={item.title} width={300} height={50} className="rounded-lg" />
                <h3 className="text-xl mb-2 mt-4 font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
