'use client';

import React from 'react';

interface PropertyDescriptionProps {
    locationTitle: string;
    paragraphs: string[];
    subtitles?: string[];
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
    locationTitle,
    paragraphs,
    subtitles = []
}) => {
    return (
        <section className="bg-background py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                {/* Primary Header */}
                <div className="mb-16 md:mb-20 reveal-up">
                    <h2 className="font-display text-4xl md:text-6xl text-foreground/80 tracking-widest uppercase mb-12">
                        Description
                    </h2>
                    <p className="text-primary/80 font-medium text-lg md:text-xl tracking-tight leading-relaxed">
                        {locationTitle}
                    </p>
                </div>

                {/* Narrative Flow */}
                <div className="space-y-12 md:space-y-16 reveal-up">
                    {paragraphs.map((para, i) => (
                        <div key={i} className="space-y-8">
                            <p className="text-foreground/60 text-base md:text-xl leading-[1.8] font-light max-w-3xl mx-auto">
                                {para}
                            </p>
                            {subtitles[i] && (
                                <h3 className="text-foreground/70 font-display text-xl md:text-2xl tracking-widest uppercase pt-4">
                                    {subtitles[i]}
                                </h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyDescription;
