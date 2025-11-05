'use client';

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestsellerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const products = [
    { id: 1, name: 'Cut-off dress', brand: 'MOE', price: '$70.00', image: '/bestsellers/best.webp', hoverImage: '/bestsellers/bestt.webp', colors: ['black'] },
    { id: 2, name: 'Serenity dress', brand: 'MAKOVER', price: '$98.00', image: '/bestsellers/best2.webp', hoverImage: '/bestsellers/bestt2.webp', colors: ['pink'] },
    { id: 3, name: 'Dress tied at the waist', brand: 'MOE', price: '$550.00', image: '/bestsellers/best3.webp', hoverImage: '/bestsellers/bestt3.webp', colors: ['pink', 'blue', 'black'] },
    { id: 4, name: 'Dress Sailor Galaxia', brand: 'MAKOVER', price: '$550.00', image: '/bestsellers/best4.webp', hoverImage: '/bestsellers/bestt4.webp', colors: ['green', 'pink'] },
    { id: 5, name: 'Elegant Evening Gown', brand: 'MOE', price: '$200.00', image: '/bestsellers/best5.webp', hoverImage: '/bestsellers/bestt5.webp', colors: ['black'] },
    { id: 6, name: 'Summer Breeze Dress', brand: 'MAKOVER', price: '$120.00', image: '/bestsellers/best6.webp', hoverImage: '/bestsellers/bestt6.webp', colors: ['white', 'blue'] },
    { id: 7, name: 'Classic Midi Dress', brand: 'MOE', price: '$180.00', image: '/bestsellers/best7.webp', hoverImage: '/bestsellers/bestt7.webp', colors: ['black', 'navy'] },
  ];


  useEffect(() => {
    const getItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 1024) return 2; 
      if (width < 1280) return 3; 
      return 4; 
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setItemsPerPage(getItemsPerPage());
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    else if (isRightSwipe) handlePrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const isNextDisabled = currentIndex >= maxIndex;
  const isPrevDisabled = currentIndex === 0;

  const indicatorWidthPercentage = (itemsPerPage / products.length) * 100;
  const totalMovableWidth = 100 - indicatorWidthPercentage;
  const indicatorLeftPosition = maxIndex > 0 ? (currentIndex / maxIndex) * totalMovableWidth : 0;

  return (
    <div className="w-full bg-white pb-8">
  
      <div className="flex justify-center py-6 sm:py-8 md:py-12 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-widest text-gray-800">
          OUR BESTSELLER
        </h1>
      </div>

      <div
        className="relative w-full px-3 sm:px-4 md:px-6 lg:px-8 group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
    
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-1 sm:px-1.5 md:px-2"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="flex flex-col">
                 
                  <div
                    className="relative bg-gray-100 overflow-hidden mb-3 md:mb-4 w-full aspect-[2/3] rounded-lg cursor-grab active:cursor-grabbing"
                    onMouseEnter={() => setHoveredIndex(product.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={hoveredIndex === product.id ? product.hoverImage : product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-opacity duration-300 pointer-events-none"
                      sizes="(max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                      priority={index < itemsPerPage}
                      draggable="false"
                    />
                  </div>

           
                  <div className="flex flex-col items-center px-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {product.brand}
                    </p>
                    <h3 className="text-sm text-[#212121] font-semibold text-center line-clamp-2 h-7 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#212121] font-semibold mb-3">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-200"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-200"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="relative w-full h-[0.19rem] bg-gray-200 mt-8 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gray-800 rounded-full"
            style={{
              width: `${indicatorWidthPercentage}%`,
              transform: `translateX(${indicatorLeftPosition}%)`,
              transition: 'transform 0.5s ease-in-out, width 0.5s ease-in-out',
            }}
          />
        </div>
      </div>


      {isMobile && (
        <div className="flex justify-center mt-4 text-xs text-gray-400">
          Swipe to see more
        </div>
      )}
    </div>
  );
};

export default BestsellerCarousel;
