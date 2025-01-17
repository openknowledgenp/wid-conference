'use client'

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#282828] backdrop-blur-sm py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-left text-sm text-white/80">
          <p className="mb-2 max-w-3xl">
            Content on this site is licensed under a{' '}
            <Link 
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              className="text-[#40ADE3] hover:text-teal-300 underline"
              target="_blank"π
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License.{' '}
            </Link>
             Source code available under the{' '}
            <Link 
              href="https://opensource.org/licenses/MIT"
              className="text-[#40ADE3] hover:text-teal-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
               MIT license
            </Link>
            . Developed and managed by{' '}
            <Link 
              href="https://github.com/openknowledgenp/wid-conference"
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

export default Footer;