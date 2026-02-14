'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
    {
        name: "Arthur Montgomery",
        role: "Private Equity Investor",
        quote: "The precision with which The Real Estate Fund identifies value-add opportunities is unmatched. Their commitment to low leverage has consistently secured our portfolio's growth.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961"
    },
    {
        name: "Eleanor Vance",
        role: "Strategic Asset Partner",
        quote: "Transparency and results. These are the pillars that make Randolph and his team stand out in the multi-family sector. A level of professional integrity that is truly premium.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976"
    },
    {
        name: "Julian Thorne",
        role: "Global Management Director",
        quote: "Working with The Real Estate Fund has been a masterclass in strategic acquisition. Their market entry timing is consistently impeccable.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070"
    },
    {
        name: "Sophia Rossi",
        role: "Institutional Capital Lead",
        quote: "A rare combination of conservative risk management and aggressive growth vision. They are the benchmark for multi-family excellence.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
    }
];

const PartnerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isAnimating = useRef(false);

    const move = useCallback((direction: number) => {
        if (isAnimating.current) return;
        setCurrentIndex((prev) => {
            let next = prev + direction;
            if (next < 0) next = partners.length - 1;
            if (next >= partners.length) next = 0;
            return next;
        });
    }, []);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            move(1);
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [currentIndex, move]);


    useGSAP(() => {
        if (!containerRef.current) return;

        const timeline = gsap.timeline({
            onStart: () => { isAnimating.current = true; },
            onComplete: () => { isAnimating.current = false; }
        });

        cardsRef.current.forEach((card, idx) => {
            if (!card) return;

            let diff = idx - currentIndex;

            // Infinite circular logic
            if (diff > partners.length / 2) diff -= partners.length;
            if (diff < -partners.length / 2) diff += partners.length;

            const isCenter = diff === 0;
            const opacity = isCenter ? 1 : Math.max(0, 1 - Math.abs(diff) * 0.6);
            const scale = isCenter ? 1 : 0.85 - Math.abs(diff) * 0.1;

            const xOffset = diff * 100;
            const zOffset = Math.abs(diff) * -200;
            const rotationY = diff * -25;
            const blur = isCenter ? 0 : Math.min(2, Math.abs(diff) * 1); // Reduced max blur

            timeline.to(card, {
                xPercent: xOffset,
                z: zOffset,
                rotationY,
                scale,
                opacity,
                // Removed filter: blur() animation as it is very heavy on scroll
                duration: 1,
                ease: "power3.out",
                zIndex: 10 - Math.abs(diff),
                pointerEvents: isCenter ? 'auto' : 'none',
            }, 0);
        });
    }, { dependencies: [currentIndex], scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto md:py-2 px-4 md:px-0 select-none">
            {/* Cards Container */}
            <div className="relative h-[380px] md:h-[400px] flex items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
                {partners.map((partner, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { cardsRef.current[idx] = el; }}
                        className="absolute w-full max-w-[280px] md:max-w-3xl border-l-0 p-4 md:px-10 md:py-8 lg:px-16 lg:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 will-change-transform bg-transparent"
                    >
                        {/* Image Wrapper */}
                        <div className="relative w-20 h-20 md:w-40 md:h-40 flex-shrink-0">
                            <div className="absolute inset-[-15px] bg-primary/20 rounded-full blur-[30px] opacity-30 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/40 p-1 bg-transparent">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-primary text-background p-2.5 rounded-full shadow-xl">
                                <Quote size={14} fill="currentColor" />
                            </div>
                        </div>

                        {/* Quote Content */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-base md:text-lg lg:text-xl font-display text-white leading-tight italic mb-4 md:mb-6 font-medium opacity-90">
                                "{partner.quote}"
                            </p>
                            <div className="space-y-1">
                                <h4 className="text-primary tracking-[0.4em] text-[9px] md:text-xs font-bold uppercase">
                                    {partner.name}
                                </h4>
                                <p className="text-foreground/40 tracking-[0.2em] text-[8px] md:text-[10px] uppercase font-bold">
                                    {partner.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Layer */}
            <div className="relative -mt-8 flex flex-col items-center gap-6 md:gap-10 z-[110]">
                <div className="flex items-center gap-8 md:gap-20">
                    <button
                        onClick={() => move(-1)}
                        className="group flex flex-col items-center gap-2 transition-all cursor-pointer"
                        aria-label="Previous Partner"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.1em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">Prev</span>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2.5">
                        {partners.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => !isAnimating.current && setCurrentIndex(idx)}
                                className="group p-1.5 cursor-pointer"
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <div
                                    className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'bg-primary w-8 md:w-10' : 'bg-primary/20 w-2.5 md:w-3 group-hover:bg-primary/40'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => move(1)}
                        className="group flex flex-col items-center gap-2 transition-all cursor-pointer"
                        aria-label="Next Partner"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.1em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerSlider;
