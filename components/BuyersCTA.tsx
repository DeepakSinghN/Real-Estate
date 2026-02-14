'use client';

import React from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const BuyersCTA = () => {
    const container = React.useRef(null);

    useGSAP(() => {
        gsap.fromTo('.cta-reveal',
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cta-reveal',
                    start: 'top 85%',
                }
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-10 bg-background overflow-hidden px-6">
            <div className="container mx-auto max-w-7xl">
                <Link href="/portfolio" className="block cta-reveal group relative aspect-[4/5] md:aspect-[3/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Visual */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://cdn.centris.ca/public/cms/qc/consumersite/0f393b12789b4f45a72a6c46ad3a678c/young-happy-couple-real-estate-agent-shaking-hands-meeting-office.jpg"
                            alt="Luxury Living"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Dynamic Overlays - Darker on mobile for permanent readability */}
                        <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:group-hover:bg-black/60 transition-colors duration-700" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative h-full px-6 md:px-8 flex items-center justify-center">
                        {/* Title - Absolutely centered initially on desktop, shifted on mobile */}
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 -translate-y-28 md:translate-y-0 md:group-hover:-translate-y-24">
                            <h2 className="font-display text-3xl md:text-6xl text-white font-medium uppercase tracking-[0.2em]">
                                For Buyers
                            </h2>
                        </div>

                        {/* Content Container - Always visible on mobile, revealed on hover on desktop */}
                        <div className="relative mt-20 md:mt-24 max-w-xl opacity-100 md:opacity-0 translate-y-6 md:translate-y-12 md:group-hover:opacity-100 md:group-hover:translate-y-4 transition-all duration-700 flex flex-col items-center pointer-events-none group-hover:pointer-events-auto text-center">
                            <p className="text-white/80 text-[13px] md:text-lg font-light leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
                                Discover the ultimate guide to buying property in the most exclusive dynamic urban centers. We will help you throughout the entire process.
                            </p>

                            <div className="inline-block px-8 md:px-10 py-3 md:py-4 border border-white/30 text-white text-[9px] md:text-[12px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-background transition-all duration-500">
                                Find Out More
                            </div>
                        </div>
                    </div>

                    {/* Left/Right Floating Decoration */}
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/10 hidden lg:block" />
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/10 hidden lg:block" />
                </Link>
            </div>
        </section>
    );
};

export default BuyersCTA;
