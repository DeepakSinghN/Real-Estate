'use client';

import React from 'react';
import { Heart, Bed, Bath, Move } from 'lucide-react';
import Link from 'next/link';

interface PropertyCardProps {
    id: string;
    image: string;
    name: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    tags: string[];
    type?: string;
    isFeatured?: boolean;
    isNew?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
    id,
    image,
    name,
    price,
    bedrooms,
    bathrooms,
    area,
    tags,
    type,
    isFeatured,
    isNew
}) => {
    return (
        <Link href={`/portfolio/${id}`} className="block">
            <div className="group relative cursor-pointer bg-background-dark md:rounded-sm overflow-hidden">
                {/* MOBILE VERSION (App-like) */}
                <div className="md:hidden space-y-3 p-0 pb-6">
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                        {/* Labels */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {isFeatured && (
                                <span className="bg-white text-background-dark text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                                    Featured
                                </span>
                            )}
                            {isNew && (
                                <span className="bg-primary/90 text-background-dark text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                                    New Listing
                                </span>
                            )}
                        </div>
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 w-9 h-9 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                            <Heart size={18} />
                        </button>
                    </div>

                    <div className="px-1 space-y-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">
                                {price.replace('USD ', '')}
                            </h3>
                            <div className="flex items-center gap-4 text-foreground/60 text-xs">
                                <span className="flex items-center gap-1.5 font-medium">
                                    <Bed size={14} className="text-primary" /> {bedrooms}
                                </span>
                                <span className="flex items-center gap-1.5 font-medium">
                                    <Bath size={14} className="text-primary" /> {bathrooms}
                                </span>
                            </div>
                        </div>

                        <p className="text-sm font-medium text-foreground tracking-tight line-clamp-1">
                            {name}
                        </p>

                        <div className="flex items-center gap-3 text-[11px] text-foreground/40 font-medium tracking-wide">
                            <span className="flex items-center gap-1.5">
                                <Move size={12} /> {area.replace('Floor Area ', '').split('|')[0].trim()}
                            </span>
                            <span>•</span>
                            <span>{type || tags[0]}</span>
                        </div>
                    </div>
                </div>

                {/* DESKTOP VERSION (Luxury Overlay) */}
                <div className="hidden md:block relative aspect-[16/10] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="bg-white/90 backdrop-blur-sm text-[8px] md:text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full text-background-dark">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="font-display text-3xl text-white font-medium mb-2 tracking-tight">
                            {name}
                        </h3>
                        <p className="text-primary text-base font-medium mb-4 tracking-wide">
                            {price}
                        </p>

                        <div className="flex items-center gap-6 text-xs text-white/60 uppercase tracking-widest font-bold border-t border-white/10 pt-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-white">{bedrooms.toString().padStart(2, '0')} Bedrooms</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white">{bathrooms.toString().padStart(2, '0')} Bathrooms</span>
                            </div>
                            <div className="flex flex-col gap-1 ml-auto">
                                <span>{area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
