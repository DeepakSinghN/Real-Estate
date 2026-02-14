'use client';

import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '@/app/portfolio/page';

interface RelatedPropertiesProps {
    currentId: string;
}

const RelatedProperties: React.FC<RelatedPropertiesProps> = ({ currentId }) => {
    const related = properties
        .filter(p => p.id !== currentId)
        .slice(0, 2);

    return (
        <section className="bg-background py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-24 reveal-up">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-widest uppercase mb-4">
                        You May Also Like
                    </h2>
                    <div className="w-24 h-px bg-primary mx-auto opacity-50" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {related.map((prop, idx) => (
                        <div key={idx} className="reveal-up">
                            <PropertyCard {...prop} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProperties;
