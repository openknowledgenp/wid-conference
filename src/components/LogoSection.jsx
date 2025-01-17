'use client'

import Image from 'next/image';
import Link from 'next/link';

const LogoSection = () => {
  const organizedByLogos = [
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/wlit.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/drn.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/naxa.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/ran.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/smartcheli.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/udhesya.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/wlit.png`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/wiit.png`,
  ];

  const LogoGrid = ({ logos }) => (
    <div className="flex flex-wrap gap-4 justify-left">
      {logos.map((logo, index) => (
        <Link
          key={index}
          href='/'
          className="flex items-center justify-center p-2 rounded-md shadow-sm bg-white w-44 border border-black w-40 hover:shadow-lg transition-all cursor-pointer"
        >
          <Image src={logo} alt={`Logo ${index + 1}`} width={176} height={64} className="max-h-16 object-contain" />
        </Link>
      ))}
    </div>
  );

  return (
    <div className="space-y-8 py-8 bg-[#fff] container mx-auto px-4">
      <section className="mx-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Organized By Women In Data Sterring Committee Members</h2>
        <LogoGrid logos={organizedByLogos} />
      </section>
      <section className="mx-auto container flex justify-left gap-8">
        <div className="w-1/3">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Supported by</h2>
          <div className="rounded-md shadow-sm bg-white shadow-lg border border-black hover:shadow-lg transition-all cursor-pointer">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/supports/stacked.png`} alt="Funding partners" width={400} height={200} />
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Managed by</h2>
          <div className="rounded-md shadow-sm bg-white shadow-lg border border-black hover:shadow-lg transition-all cursor-pointer p-4 w-fit">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/okn.png`} alt="Open Knowledge Nepal" width={48} height={48} className='w-40' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;