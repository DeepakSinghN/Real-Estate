'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalFootprint = () => {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12 md:mb-24 reveal-section">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Our Reach</span>
                    <h2 className="font-display text-5xl md:text-7xl">Our Global Footprint</h2>
                </div>

                <div className="relative reveal-image">
                    {/* Simulated Map Background */}
                    <div className="w-full aspect-square md:aspect-[21/9] bg-accent-green rounded-2xl md:rounded-3xl relative overflow-hidden flex items-center justify-center opacity-40">
                        <div className="absolute inset-0 grayscale opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center" />
                        {/* Map Pins */}
                        <MapPin className="text-primary absolute top-1/4 left-1/3 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce" />
                        <MapPin className="text-primary absolute top-1/2 left-1/2 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce delay-300" />
                        <MapPin className="text-primary absolute top-1/3 right-1/4 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce delay-700" />
                    </div>

                    {/* Overlay Card */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                        <div className="bg-background/95 backdrop-blur-xl p-8 md:p-16 rounded-xl md:rounded-2xl border border-primary/20 shadow-3xl text-center max-w-lg reveal-section">
                            <h4 className="font-display text-2xl md:text-3xl mb-4 md:mb-6">Strategic Locations</h4>
                            <p className="text-foreground/60 font-light leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
                                Management offices across 3 continents, located in high growth dynamic urban centers.
                            </p>
                            <div className="inline-block px-8 py-4 md:px-10 md:py-5 bg-[#581016] text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:translate-y-[-4px] transition-transform cursor-pointer">
                                View Portfolios
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalFootprint;
