'use client';

import React, { useState } from 'react';

interface PropertyMapProps {
    address: string;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ address }) => {
    const [isInteractive, setIsInteractive] = useState(false);
    const encodedAddress = encodeURIComponent(address);
    const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full bg-background overflow-hidden border-t border-white/5">
            {/* Map Container */}
            <div
                className="absolute inset-0 z-0"
                onClick={() => setIsInteractive(true)}
                onMouseLeave={() => setIsInteractive(false)}
            >
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{
                        border: 0,
                        pointerEvents: isInteractive ? 'auto' : 'none'
                    }}
                    src={embedUrl}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${address}`}
                ></iframe>

                {/* Interaction Overlay to prevent scroll hijacking */}
                {!isInteractive && (
                    <div className="absolute inset-0 bg-transparent z-10 cursor-pointer flex items-center justify-center group">
                        <div className="bg-background-dark/60 backdrop-blur-md px-6 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to interact with map
                        </div>
                    </div>
                )}
            </div>

            {/* Luxury Label Overlay */}
            <div className="absolute top-8 left-8 z-20 hidden md:block pointer-events-none">
                <div className="bg-background-dark/90 backdrop-blur-xl p-6 shadow-2xl rounded-sm border border-white/10 max-w-xs transition-opacity duration-500" style={{ opacity: isInteractive ? 0.4 : 1 }}>
                    <h3 className="font-display text-lg text-primary tracking-widest uppercase mb-2">
                        The Location
                    </h3>
                    <p className="text-foreground/60 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                        {address}
                    </p>
                </div>
            </div>

            {/* Cinematic Overlays to blend with the dark theme - subtler for color map */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default PropertyMap;
