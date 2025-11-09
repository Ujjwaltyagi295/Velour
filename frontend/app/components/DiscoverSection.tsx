'use client';

import Image from 'next/image';
import Link from 'next/link';

const DiscoverSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE SECTION */}
        <div className="hidden lg:block relative w-full h-[40rem] overflow-hidden">
          <Image
            src="/discover/leftimg.webp"
            alt="Woman holding a new bag"
            fill
            className="object-cover"
            sizes="50vw"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 lg:p-12 text-white">
            <p className="text-xs lg:text-sm font-semibold tracking-[0.15em] uppercase mb-6 opacity-90">
              Most-loved collections
            </p>

            <h2 className="text-5xl lg:text-6xl font-semibold font-outfit tracking-[0.1em] uppercase leading-tight mb-2">
              COSY &
            </h2>

            <h2 className="text-5xl lg:text-6xl font-semibold font-outfit tracking-[0.1em] uppercase leading-tight mb-8">
              COMFORT
            </h2>

            <Link
              href="/new-arrivals/bags"
              className="text-xs lg:text-sm font-semibold bg-white text-black px-4 py-4 tracking-[0.12em] uppercase border-b border-white pb-4 transition-opacity hover:opacity-70"
            >
              Discover Now
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[75vh] min-h-[500px] lg:h-[40rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/discover/rightvid.webm" type="video/webm" />
            <source src="/discover/rightvid.mp4" type="video/mp4" />
       
          </video>
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 lg:hidden text-white">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 opacity-90">
              Most-loved collections
            </p>

            <h2 className="text-4xl font-semibold font-outfit tracking-[0.1em] uppercase leading-tight mb-2">
              COSY &
            </h2>

            <h2 className="text-4xl font-semibold font-outfit tracking-[0.1em] uppercase leading-tight mb-6">
              COMFORT
            </h2>

            <Link
              href="/new-arrivals/bags"
              className="text-xs font-semibold bg-white text-black px-4 py-3 tracking-[0.12em] uppercase border-b border-white pb-3 transition-opacity hover:opacity-70"
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
