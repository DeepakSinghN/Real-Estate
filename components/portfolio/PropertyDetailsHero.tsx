'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

interface PropertyDetailsHeroProps {
    image: string;
    name: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    isFeatured?: boolean;
}

const PropertyDetailsHero: React.FC<PropertyDetailsHeroProps> = ({
    image,
    name,
    price,
    bedrooms,
    bathrooms,
    area,
    isFeatured
}) => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-background/20" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24 relative z-10">
                <div className="max-w-4xl space-y-6 md:space-y-8 reveal-up">
                    {/* Tag */}
                    <div className="flex gap-4">
                        <span className="bg-primary text-background-dark text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-sm shadow-xl">
                            Sales
                        </span>
                        {isFeatured && (
                            <span className="bg-white text-background-dark text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-sm shadow-xl">
                                Nominee
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-7xl text-white tracking-tighter uppercase leading-[0.9]">
                        {name}
                    </h1>

                    {/* Price & Stats Row */}
                    <div className="space-y-4 md:space-y-6">
                        <p className="text-primary text-2xl md:text-4xl font-medium tracking-tight">
                            {price}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] font-bold border-t border-white/10 pt-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-white text-base md:text-lg tracking-normal lowercase first-letter:uppercase">
                                    {bedrooms.toString().padStart(2, '0')} Bedrooms
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white text-base md:text-lg tracking-normal lowercase first-letter:uppercase">
                                    {bathrooms.toString().padStart(2, '0')} Bathrooms
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white text-base md:text-lg tracking-normal">
                                    {area}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating CONTACT US - Mobile/Global Side Badge Placeholder */}
            <Link
                href="/contact"
                className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 group items-center"
            >
                <div className="bg-primary hover:bg-white text-background px-3 py-6 rounded-l-xl transition-all duration-500 shadow-2xl flex flex-col items-center gap-4 border border-white/10 backdrop-blur-sm transform group-hover:-translate-x-2">
                    <Mail size={16} className="rotate-0 group-hover:scale-110 transition-transform" />
                    <span
                        className="uppercase font-bold text-[10px] tracking-[0.2em] whitespace-nowrap"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        Contact Us
                    </span>
                </div>
            </Link>

            {/* Mobile Contact Button - Floating Bottom Right */}
            <Link
                href="/contact"
                className="md:hidden fixed bottom-24 right-6 bg-primary text-background px-6 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] z-50 shadow-2xl flex items-center gap-2 border border-white/20 active:scale-95 transition-all"
            >
                <Mail size={14} />
                Contact Us
            </Link>
        </section>
    );
};

export default PropertyDetailsHero;
