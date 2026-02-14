'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

const BlogHero = () => {
    const container = React.useRef(null);

    useGSAP(() => {
        gsap.fromTo('.hero-title-reveal',
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 }
        );

        gsap.fromTo('.hero-bg-zoom',
            { scale: 1.1 },
            { scale: 1, duration: 2.5, ease: 'power2.out' }
        );
    }, { scope: container });

    return (
        <section ref={container} className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0 hero-bg-zoom">
                <img
                    src="https://www.theluxuryhomeshow.com/wp-content/uploads/2026/02/inside-a-4.7m-studio-city-residence-with-a-tulum-inspired-resort-feel-kitchen.jpg"
                    alt="Luxury Real Estate"
                    className="w-full h-full object-cover"
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="hero-title-reveal">
                    <h1 className="font-display text-5xl md:text-8xl lg:text-[7em] text-white tracking-widest font-medium uppercase drop-shadow-2xl">
                        Sun, Sea & <br className="hidden md:block" /> Second Homes
                    </h1>
                    <div className="mt-8 flex items-center justify-center gap-6">
                        <div className="w-12 h-[1px] bg-white/50" />
                        <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
                            The Official Blog
                        </span>
                        <div className="w-12 h-[1px] bg-white/50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
