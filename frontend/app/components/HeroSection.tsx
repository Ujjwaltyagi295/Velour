import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="flex h-screen w-full relative">
      <Navbar />
      <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
        <Image
          src="/heroimg.jpg"
          alt="Hero Image 1"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 768px) 50vw, 0vw"
        />
      </div>

      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
        <Image
          src="/heroimg2.jpg"
          alt="Hero Image 2"
          fill
          className="object-cover"
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="absolute z-10 top-[70%] sm:top-[70%] md:top-[76%] font-outfit left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-center px-4">
        <p className="text-lg sm:text-xl md:text-xl mb-2 sm:mb-3 md:mb-4 ">
          Up to 50% off this Black Friday
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl mb-3 sm:mb-5 md:mb-8 tracking-wider">
          BLACK FRIDAY
        </h1>

        <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors font-medium">
          Discover Now
        </button>
      </div>
    </div>
  );
}
