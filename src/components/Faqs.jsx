'use client'

import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import config from '../data/config.json'

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMounted]);

  return (
    <div className="relative bg-[#f1f1f1] backdrop-blur-sm py-16">
      <div className="container mx-auto px-4">
        <div className="md:mx-16">
          <h1 className="text-2xl text-black font-bold mb-8 text-center">
            <span className="relative heading-highlight">
              Frequently Asked Questions (FAQs)
            </span>
          </h1>
          
          <div ref={componentRef} className="grid md:grid-cols-2 gap-4">
            {config.faqData.map((faq, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`h-fit bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'z-10' : 'z-0'
                  }`}
                >
                  <button
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                  >
                    <h2 className="text-base font-medium text-black pr-4">
                      {faq.question}
                    </h2>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#40ADE3]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#40ADE3]" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="p-4 text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;