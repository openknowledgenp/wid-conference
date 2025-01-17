'use client'

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 backdrop-blur-sm py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-left text-sm text-white/80">
          <p className="mb-2">
            Content on this site is licensed under a{' '}
            <Link 
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              className="text-[#40ADE3] hover:text-teal-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License
            </Link>
          </p>
          <p className="mb-2">
            Source code available under the{' '}
            <Link 
              href="https://opensource.org/licenses/MIT"
              className="text-[#40ADE3] hover:text-teal-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT license
            </Link>
          </p>
          <p>
            Developed and managed by{' '}
            <Link 
              href="https://oknp.org"
              className="text-[#40ADE3] hover:text-teal-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Knowledge Nepal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};