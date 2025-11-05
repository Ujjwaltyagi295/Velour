"use client";

import React, { useRef, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroAnimation = () => {
    const mainContainerRef = useRef(null);
    const leftImageContainerRef = useRef(null);
    const rightImageContainerRef = useRef(null);
    const textContentRef = useRef(null);
    const [animationConfig, setAnimationConfig] = useState({
        scrollEnd: "+=4000",
        leftRotateStart: -8,
        leftRotateEnd: -55,
        rightRotateStart: 8,
        rightRotateEnd: 45,
        yPercentStart: 170,
        yPercentEnd: -100,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            if (width < 640) {
                setAnimationConfig({
                    scrollEnd: "+=2000",
                    leftRotateStart: -5,
                    leftRotateEnd: -35,
                    rightRotateStart: 5,
                    rightRotateEnd: 25,
                    yPercentStart: 330,
                    yPercentEnd: -120,
                });
            } else if (width < 1024) {
                // Tablet: medium animations
                setAnimationConfig({
                    scrollEnd: "+=3000",
                    leftRotateStart: -6,
                    leftRotateEnd: -45,
                    rightRotateStart: 6,
                    rightRotateEnd: 35,
                    yPercentStart: 150,
                    yPercentEnd: -90,
                });
            } else {
                setAnimationConfig({
                    scrollEnd: "+=4000",
                    leftRotateStart: -8,
                    leftRotateEnd: -55,
                    rightRotateStart: 8,
                    rightRotateEnd: 45,
                    yPercentStart: 170,
                    yPercentEnd: -100,
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    pin: true,
                    start: "top top",
                    end: animationConfig.scrollEnd,
                    scrub: 1,
                }
            });

            tl.fromTo(leftImageContainerRef.current,
                { 
                    xPercent: 20, 
                    yPercent: animationConfig.yPercentStart, 
                    rotate: animationConfig.leftRotateStart 
                },
                { 
                    xPercent: 20, 
                    yPercent: animationConfig.yPercentEnd, 
                    rotate: animationConfig.leftRotateEnd, 
                    duration: 1, 
                    ease: "power2.inOut" 
                },
                "<0.5"
            );

            tl.fromTo(rightImageContainerRef.current,
                { 
                    xPercent: -10, 
                    yPercent: animationConfig.yPercentStart, 
                    rotate: animationConfig.rightRotateStart 
                },
                { 
                    xPercent: -10, 
                    yPercent: animationConfig.yPercentEnd, 
                    rotate: animationConfig.rightRotateEnd, 
                    duration: 1, 
                    ease: "power2.inOut" 
                }
            );
        }, mainContainerRef);

        return () => ctx.revert();
    }, [animationConfig]);

    return (
        <section
            className="relative w-full h-screen bg-[#f3f0eb] overflow-hidden flex justify-center items-center text-center"
            ref={mainContainerRef}
        >
     
            <div
                className="absolute top-0 left-0 w-[12rem] h-[16rem] sm:w-[18rem] sm:h-[22rem] md:w-[25%] md:h-[25rem] lg:h-[30rem] z-20" 
                ref={leftImageContainerRef}
            >
                <Image
                    src='/deal/leftimg.webp'
                    alt="Product Collection"
                    fill
                    sizes="(max-width: 640px) 12rem, (max-width: 768px) 18rem, 25vw"
                    objectFit="cover"
                    priority
                />
            </div>
            
      
            <div
                className="absolute top-0 right-0 w-[12rem] h-[16rem] sm:w-[18rem] sm:h-[22rem] md:w-[25%] md:h-[25rem] lg:h-[30rem] z-20"
                ref={rightImageContainerRef}
            >
                <Image
                    src='/deal/rightimg.webp'
                    alt="Fashion Model"
                    fill
                    sizes="(max-width: 640px) 12rem, (max-width: 768px) 18rem, 25vw"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className="relative z-10 text-black px-4" ref={textContentRef}>
                <p className="text-base sm:text-lg font-outfit font-normal ">
                    Discover the best deal
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-[8rem] font-outfit tracking-tight max-w-full my-2 sm:my-4">
                    SALE UP TO 50% FOR 
                </h1>
                <h1 className="text-3xl sm:text-5xl lg:text-[8rem] font-outfit tracking-tight max-w-full my-2 sm:my-4">
                   ALL COLLECTIONS
                </h1>
                <button className="bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 text-xs sm:text-sm font-semibold uppercase cursor-pointer transition-colors hover:bg-black">
                    Check Now
                </button>
            </div>
        </section>
    );
};

export default HeroAnimation;
