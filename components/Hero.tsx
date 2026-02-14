'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        url: '/Real Estate Hero Images/slide1.jpeg',
        title: 'The Real Estate Fund',
        subtitle: 'Expert Approach',
    },
    {
        url: '/Real Estate Hero Images/slide2-1.jpeg',
        title: 'Modern Living',
        subtitle: 'Premium Portfolio',
    },
    {
        url: '/Real Estate Hero Images/slide3-1.jpeg',
        title: 'Strategic Growth',
        subtitle: 'Value-Add Focus',
    }
];

const Hero = () => {
    const container = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // No zoom animation needed, keeping only the cross-fade handled by CSS transitions

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

        tl.from('.hero-content', {
            y: 50,
            opacity: 0,
            delay: 0.5,
        })
            .from('.hero-line', {
                width: 0,
                duration: 1.5,
                ease: 'expo.inOut',
            }, '-=0.8');
    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative h-[100dvh] md:h-screen flex flex-col justify-end overflow-hidden pb-12 md:pb-20"
        >
            {/* Background Slideshow (Merge/Fade Effect) */}
            <div className="absolute inset-0 z-0 bg-background-dark overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10 active-slide' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="w-full h-full object-cover brightness-50"
                        />
                    </div>
                ))}
                {/* Visual Overlay to match screenshot depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-12 z-10 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2 md:gap-12 hero-content">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-5xl md:text-[100px] font-medium leading-[1.1] md:leading-[0.85] tracking-tight mb-4 text-white">
                            The Real Estate Fund<br />
                            Expert Approach
                        </h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 max-w-lg">
                            <p className="text-[12px] font-light md:text-[16px] md:font-normal text-primary uppercase tracking-[0.2em] leading-relaxed">
                                UNLOCK THE TRUE POTENTIAL OF YOUR MULTI-FAMILY REAL ESTATE INVESTMENT
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between gap-6 w-full md:w-auto mt-8 md:mt-0">
                        <button className="flex-1 md:flex-none md:w-auto px-6 md:px-12 py-4 border border-primary/50 text-primary rounded-sm font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-primary hover:text-background transition-all duration-500 backdrop-blur-sm">
                            INVESTMENT INQUIRY
                        </button>

                        {/* Slide Navigation */}
                        <div className="flex items-center gap-6 md:gap-12">
                            <button onClick={handlePrev} className="text-white/60 hover:text-white transition-colors">
                                <ChevronLeft size={32} strokeWidth={1} />
                            </button>
                            <button onClick={handleNext} className="text-white/60 hover:text-white transition-colors">
                                <ChevronRight size={32} strokeWidth={1} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Slide Counter or Decorative Text */}
            <div className="absolute bottom-12 left-12 opacity-5 pointer-events-none hidden lg:block">
                <span className="text-[120px] font-black leading-none tracking-tighter text-white">0{currentIndex + 1}</span>
            </div>
        </section>
    );
};

export default Hero;
