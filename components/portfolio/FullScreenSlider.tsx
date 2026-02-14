'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FullScreenSliderProps {
    images: string[];
}

const FullScreenSlider: React.FC<FullScreenSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black">
            {/* Slides */}
            <div className="relative w-full h-full">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark hover:border-primary transition-all pointer-events-auto group"
                >
                    <ChevronLeft size={32} className="group-active:scale-90 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark hover:border-primary transition-all pointer-events-auto group"
                >
                    <ChevronRight size={32} className="group-active:scale-90 transition-transform" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Side Label Placeholder from reference (Nominee) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-[#5AB7B1] text-white px-8 py-4 rotate-90 translate-x-[40%] text-[10px] font-bold uppercase tracking-[0.3em] z-20 rounded-t-lg">
                Nominee
            </div>
        </section>
    );
};

export default FullScreenSlider;
