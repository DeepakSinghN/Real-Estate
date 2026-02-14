'use client';

import React from 'react';
import {
    Wifi,
    Waves,
    Wind,
    Car,
    ShieldCheck,
    Tv,
    ChefHat,
    Dumbbell
} from 'lucide-react';

const amenityIcons: Record<string, any> = {
    "High-speed WiFi": Wifi,
    "Private Pool": Waves,
    "Air Conditioning": Wind,
    "Parking Space": Car,
    "24/7 Security": ShieldCheck,
    "Home Cinema": Tv,
    "Chef's Kitchen": ChefHat,
    "Private Gym": Dumbbell
};

interface AmenitiesFeaturesProps {
    amenities: string[];
}

const AmenitiesFeatures: React.FC<AmenitiesFeaturesProps> = ({ amenities }) => {
    return (
        <section className="bg-background-dark py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-20 reveal-up">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-widest uppercase mb-4">
                        Amenities & Features
                    </h2>
                    <div className="w-24 h-px bg-primary mx-auto opacity-50" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                    {amenities.map((item, i) => {
                        const Icon = amenityIcons[item] || ShieldCheck;
                        return (
                            <div key={i} className="flex flex-col items-center gap-6 group reveal-up">
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 shadow-2xl">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] md:text-xs text-foreground/40 font-bold uppercase tracking-[0.3em] group-hover:text-foreground transition-colors text-center">
                                    {item}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AmenitiesFeatures;
