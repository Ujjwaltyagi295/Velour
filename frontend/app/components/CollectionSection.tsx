'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const CollectionSection = () => {
  // Use a typed ref to tell TypeScript this is a video element
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  return (
    <section className="w-full mt-[2rem] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="relative w-full h-[75vh] min-h-[500px] lg:h-[40rem] overflow-hidden">
        
          <Image
            src="/fashvid.png" 
            alt="MOE Collections"
            fill
            priority
            quality={90}
            className={`object-cover transition-opacity duration-700 ease-in-out `}
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
          
      
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isVideoReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
         
            <source src="/fashvid.webm" type="video/webm" />
            <source src="/fashvid.mp4" type="video/mp4" />
          </video>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex top-[70%] flex-col items-center justify-center p-4 text-white z-10">
            <h2 className="text-3xl md:text-4xl font-normal font-outfit tracking-[0.2em] uppercase text-center">
              MOE COLLECTIONS
            </h2>
            <Link href="/new-arrivals/bags" className="mt-4 text-sm font-semibold tracking-wider border-b border-white pb-1 transition-opacity hover:opacity-80">
              Shop The Collections
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[75vh] min-h-[500px] lg:h-[40rem] overflow-hidden">
          <Image
            src="/bag.webp"
            alt="Woman holding a new bag"
            fill
            quality={85} 
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
 
          <div className="absolute inset-0 flex top-[70%] flex-col items-center justify-center p-4 text-black">
            <h2 className="text-3xl md:text-4xl font-normal font-outfit tracking-[0.2em] uppercase text-center">
              NEW BAGS
            </h2>
            <Link href="/new-arrivals/bags" className="mt-4 text-sm font-semibold tracking-wider border-b border-black pb-1 transition-opacity hover:opacity-80">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;