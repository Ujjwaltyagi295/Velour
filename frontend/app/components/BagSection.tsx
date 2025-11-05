'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const BagSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const bags = [
    {
      id: 1,
      name: 'Savanna Chic',
      image: '/bags/bag2.webp',
      href: '/products/savanna-chic',
    },
    {
      id: 2,
      name: 'Midnight Luxe',
      image: '/bags/bag3.webp',
      href: '/products/midnight-luxe',
    },
    {
      id: 3,
      name: 'Champagne Whisper',
      image: '/bags/bag4.webp',
      href: '/products/champagne-whisper',
    },
    {
      id: 4,
      name: 'Urban Muse',
      image: '/bags/bag5.webp',
      href: '/products/urban-muse',
    },
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) =>
        prev + 2 >= bags.length ? 0 : prev + 2
      );
    } else if (isRightSwipe) {
      setCurrentIndex((prev) =>
        prev - 2 < 0 ? Math.max(0, bags.length - 2) : prev - 2
      );
    }
  };

  return (
    <section className="w-full bg-[#f1f1f1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-center mb-16">
          Curated From The House
        </h2>

        <div className="hidden lg:grid grid-cols-4 gap-20">
          {bags.map((bag) => (
            <Link
              key={bag.id}
              href={bag.href}
              className="group flex flex-col items-center text-center"
            >
        
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-white">
                <Image
                  src={bag.image}
                  alt={bag.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="25vw"
                />
              </div>

              <h3 className="text-sm font-light tracking-wider uppercase border-b border-black pb-2 group-hover:opacity-70 transition-opacity">
                {bag.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          {bags.map((bag) => (
            <Link
              key={bag.id}
              href={bag.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-white">
                <Image
                  src={bag.image}
                  alt={bag.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="50vw"
                />
              </div>
              <h3 className="text-sm font-light tracking-wider uppercase border-b border-black pb-2 group-hover:opacity-70 transition-opacity">
                {bag.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel - 2 items at a time */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-2 gap-6">
            {bags.slice(currentIndex, currentIndex + 2).map((bag) => (
              <Link
                key={bag.id}
                href={bag.href}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden bg-white">
                  <Image
                    src={bag.image}
                    alt={bag.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="50vw"
                  />
                </div>

              
                <h3 className="text-xs font-light tracking-wider uppercase border-b border-black pb-2 group-hover:opacity-70 transition-opacity">
                  {bag.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(bags.length / 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * 2)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === Math.floor(currentIndex / 2)
                    ? 'bg-black'
                    : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagSection;
