'use client';

import Image from 'next/image';
import Link from 'next/link';

const CollectionSection = () => {
  return (
    <section className="w-full mt-[2rem] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
    
       <div className="relative w-full h-[75vh] min-h-[500px] lg:h-[40rem] overflow-hidden">
      
           <video
           
            src="/fashvid.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

         
          <div className="absolute inset-0 flex top-[70%]   flex-col items-center justify-center p-4 text-white">
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
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          /> 
 
           <div className="absolute inset-0 flex top-[70%]   flex-col items-center justify-center p-4 text-black">
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
