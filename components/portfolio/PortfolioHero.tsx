'use client';

import React from 'react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const PortfolioHero = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        gsap.fromTo('.hero-content > *',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1.5, ease: 'power4.out' }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071"
                    alt="Luxury Portfolio"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center hero-content">
                <h1 className="font-display text-5xl md:text-8xl text-white font-bold tracking-tight mb-6 uppercase">
                    Our Listings For Sales
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                    View our collection of extraordinary properties.
                </p>
            </div>
        </section>
    );
};

export default PortfolioHero;
