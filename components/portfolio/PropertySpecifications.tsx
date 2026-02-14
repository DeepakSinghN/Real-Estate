'use client';

import React from 'react';

interface SpecItem {
    label: string;
    value: string;
}

interface PropertySpecificationsProps {
    specs: SpecItem[];
}

const PropertySpecifications: React.FC<PropertySpecificationsProps> = ({ specs }) => {
    return (
        <section className="bg-background py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Section Header */}
                    <div className="reveal-up">
                        <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-widest uppercase mb-8 leading-tight">
                            Property<br />Specifications
                        </h2>
                        <p className="text-foreground/40 text-sm md:text-base leading-relaxed max-w-md">
                            Explore the detailed characteristics and architectural facts that define this extraordinary residence. Every element has been curated for institutional-grade quality.
                        </p>
                        <div className="mt-12 w-24 h-px bg-primary/40" />
                    </div>

                    {/* Right: Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 reveal-up">
                        {specs.map((spec, i) => (
                            <div key={i} className="group border-b border-white/10 pb-6 hover:border-primary/40 transition-colors">
                                <span className="block text-[10px] md:text-[11px] text-primary font-bold uppercase tracking-[0.2em] mb-3">
                                    {spec.label}
                                </span>
                                <span className="block text-lg md:text-xl text-foreground/80 font-medium tracking-tight group-hover:text-foreground transition-colors">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertySpecifications;
