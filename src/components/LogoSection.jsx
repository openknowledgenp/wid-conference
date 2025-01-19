'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import organizations from '../data/organizations.json';

const LogoGrid = ({ logos }) => (
  <div className="flex flex-wrap gap-2 justify-left">
    {logos.map((organization, index) =>
    (
      <Link
        key={index}
        href={organization.url}
        className="flex items-center justify-center p-2 rounded-md shadow-sm bg-white w-44 2xl:w-56 border border-[#36a9e1] hover:shadow-lg transition-all cursor-pointer"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${organization.image}`}
          alt={organization.name}
          width={176}
          height={64}
          className="max-h-16 object-contain"
        />
      </Link>
    )
    )}
  </div>
);

const LogoSection = () => {

  return (
    <div className='container mx-auto'>
      <div className="md:mx-16 space-y-8 py-16 bg-[#fff] px-4">
        <div className='md:flex md:divide-x-4 md:divide-[#FBBC0A]'>
          <div className="md:w-8/12 2xl:w-9/12 mr-4">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Organized By Women In Data Steering Committee</h2>
            <LogoGrid logos={organizations.members} />
          </div>
          <div className="md:w-4/12 md:pl-8">
            <h2 className="text-lg font-bold mb-4 text-gray-800 mt-8 md:mt-0">Supported by</h2>
            <div className="rounded-md shadow-sm bg-white shadow-lg border border-[#36a9e1] hover:shadow-lg transition-all cursor-pointer p-8 md:pb-4 md:pt-2">
              <div className='md:px-2 mmd:r-4'>
                <Link href='/'>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/supports/ukid.png`} alt="UK International Development" width={200} height={100} className='w-fit' />
                </Link>
                <Link href='https://asiafoundation.org/'>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/supports/taf.png`} alt="The Asia Foundaiton" width={260} height={100} className='mx-3' />
                </Link>
                <Link href='https://www.d4dnepal.org/'>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/supports/d4d.png`} alt="Data for Development" width={260} height={100} className='mx-2' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="mx-auto container flex justify-left gap-8">
          <div className="md:w-4/12">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Managed by</h2>
            <div className="rounded-md shadow-sm bg-white shadow-lg border border-[#36a9e1] hover:shadow-lg transition-all cursor-pointer w-fit p-2">
              <Link href="https://oknp.org/">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/committee/okn.png`} alt="open knowledge nepal" width={200} height={200} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoSection;