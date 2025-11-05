'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReelSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef({});

  const products = [
    { id: 1, video: '/reels/vid1.mp4', title: 'Detachable pleated waist dress', brand: 'MOE', price: '$120.00', image: '/reels/img1.webp' },
    { id: 2, video: '/reels/vid2.mp4', title: 'One shoulder dress', brand: 'MOE', price: '$120.00', image: '/reels/img2.webp' },
    { id: 3, video: '/reels/vid3.mp4', title: 'Dress with a lowered waist', brand: 'MOE', price: '$120.00', image: '/reels/img3.webp' },
    { id: 4, video: '/reels/vid4.mp4', title: 'Detachable pleated waist dress', brand: 'MOE', price: '$120.00', image: '/reels/img1.webp' },
    { id: 5, video: '/reels/vid5.mp4', title: 'Detachable pleated waist dress', brand: 'MOE', price: '$120.00', image: '/reels/img2.webp' },
    { id: 6, video: '/reels/vid6.mp4', title: 'Detachable pleated waist dress', brand: 'MOE', price: '$120.00', image: '/reels/img3.webp' },
  ];

  useEffect(() => {
    products.forEach((product, index) => {
      const video = videoRefs.current[product.id];
      if (video) {
        if (index === currentSlide) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentSlide, products]);

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const getProductForOffset = (offset) => {
    const index = (currentSlide + offset + products.length) % products.length;
    return products[index];
  };

  return (
    <div className="w-full mt-9 bg-white">
      
      <div className="px-6 md:px-12 py-8 items-center flex flex-col">
        <h2 className="text-2xl md:text-2xl font-normal font-outfit mb-5">Reels</h2>
        
     
        <h2 className="text-3xl md:text-4xl font-[450] font-outfit leading-0.5">INSPIRATION</h2>

      </div>

      <div className="w-full h-screen bg-white relative flex flex-col items-center justify-center overflow-hidden group">
        
        <div className="hidden md:flex items-center justify-center gap-4 w-full h-[85vh] transition-all duration-300">
          
          <div className="flex-shrink-0 w-[15vw] h-[65vh] scale-90">
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(-2).id] = el; }}
                src={getProductForOffset(-2).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[20vw] h-[75vh] scale-95">
            <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(-1).id] = el; }}
                src={getProductForOffset(-1).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[25vw] h-[85vh] z-10">
            <div className="relative w-full h-full bg-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(0).id] = el; }}
                src={getProductForOffset(0).video}
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[20vw] h-[75vh] scale-95">
            <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(1).id] = el; }}
                src={getProductForOffset(1).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[15vw] h-[65vh] scale-90">
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(2).id] = el; }}
                src={getProductForOffset(2).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

        </div>

        <div className="flex md:hidden items-center justify-center gap-2 w-full h-[85vh] transition-all duration-300 px-2">
          
          <div className="flex-shrink-0 w-[12vw] h-[50vh] scale-75">
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(-1).id] = el; }}
                src={getProductForOffset(-1).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[70vw] h-[80vh] z-10">
            <div className="relative w-full h-full bg-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(0).id] = el; }}
                src={getProductForOffset(0).video}
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-[12vw] h-[50vh] scale-75">
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={(el) => { if (el) videoRefs.current[getProductForOffset(1).id] = el; }}
                src={getProductForOffset(1).video}
                className="w-full h-full object-cover"
                loop muted playsInline
              />
            </div>
          </div>

        </div>

        <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-20 w-80 max-w-[calc(100%-32px)]">
          <div className="flex items-start gap-3 p-3 bg-white text-black backdrop-blur-md rounded-lg">
            <div className="w-15 h-14 bg-gray-400 rounded-lg flex-shrink-0">
              <img
                src={products[currentSlide].image}
                alt={products[currentSlide].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-black uppercase tracking-wider">
                {products[currentSlide].brand}
              </p>
              <h2 className="text-sm font-semibold text-black truncate">
                {products[currentSlide].title}
              </h2>
              <p className="text-sm font-bold mt-1">
                {products[currentSlide].price}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 justify-center">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all h-2 rounded-full ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/40 w-2 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300 hover:bg-white p-2 rounded-full shadow-lg group-hover:opacity-100 transition-opacity z-30"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300 hover:bg-white p-2 rounded-full shadow-lg group-hover:opacity-100 transition-opacity z-30"
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>

      </div>

    </div>
  );
}
