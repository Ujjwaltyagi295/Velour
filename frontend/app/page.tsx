"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';

import AnnouncementBar from './components/AnnouncementBar';
import BestsellerCarousel from './components/BestSellers';
import CollectionSection from './components/CollectionSection';
import BagSection from './components/BagSection';
import VideoSection from './components/VideoSection';
import CampaignStyles from './components/CampaignStyles';
import HeroAnimation from './components/DealSection';
import DiscoverSection from './components/DiscoverSection';
import ReelSection from './components/ReelSection';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='min-h-screen'>
      <AnnouncementBar/>
     
      <HeroSection/>
      <BestsellerCarousel/>
      <CollectionSection/>
      <BagSection/>
      <VideoSection/>
      <CampaignStyles/>
      <HeroAnimation/>
      <DiscoverSection/>
      <ReelSection/>
      <div className='min-h-screen'>
        
      </div>
    </div>
  );
};

export default Home;
