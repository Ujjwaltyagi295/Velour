'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CampaignStyles = () => {
  const campaigns = [
    {
      id: 1,
      title: 'CASUAL DRESS BY MOE',
      subtitle: 'Unlock the Secrets of Causal Dress',
      image: '/campaign/fashimg.webp',
      href: '/campaign/casual-dress',
      linkText: 'Check Now',
    },
    {
      id: 2,
      title: 'MODERN ELEGANT',
      subtitle: 'The new season is on the horizon',
      image: '/campaign/fashimg2.webp',
      href: '/campaign/modern-elegant',
      linkText: 'Check Now',
    },
    {
      id: 3,
      title: 'GLAMOUR',
      subtitle: "It's time to refresh with closet staples",
      image: '/campaign/fashimg3.webp',
      href: '/campaign/glamour',
      linkText: 'Check Now',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campaigns.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, campaigns.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-sm font-light tracking-widest uppercase text-gray-500 mb-4 text-center">
            Autumn / Winter
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] uppercase text-center">
            Campaign Styles
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative w-full mb-8">
            {/* Carousel Container */}
            <div className="overflow-hidden bg-gray-100">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="w-full flex-shrink-0">
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Content */}
            <div className="text-center mt-6 px-4">
              <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                {campaigns[currentSlide].title}
              </h3>
              <p className="text-sm font-light text-gray-600 mb-6">
                {campaigns[currentSlide].subtitle}
              </p>
              <Link
                href={campaigns[currentSlide].href}
                className="text-sm font-light tracking-wider uppercase border-b border-black pb-1 hover:opacity-70 transition-opacity inline-block"
              >
                {campaigns[currentSlide].linkText}
              </Link>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {campaigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-black'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Full Width with Small Gap */}
        <div className="hidden md:block">
          <div className="px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="group flex flex-col">
                  {/* Image Container - Full width with smaller gap */}
                  <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                      {campaign.title}
                    </h3>
                    <p className="text-sm font-light text-gray-600 mb-6">
                      {campaign.subtitle}
                    </p>

                    {/* Link */}
                    <Link
                      href={campaign.href}
                      className="text-sm font-light tracking-wider uppercase border-b border-black pb-1 hover:opacity-70 transition-opacity inline-block"
                    >
                      {campaign.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignStyles;
