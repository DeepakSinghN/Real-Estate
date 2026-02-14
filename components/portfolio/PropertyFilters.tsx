'use client';

import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface PropertyFiltersProps {
    filters: {
        search: string;
        location: string;
        type: string;
        bedrooms: string;
        bathrooms: string;
        priceRange: string;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        search: string;
        location: string;
        type: string;
        bedrooms: string;
        bathrooms: string;
        priceRange: string;
    }>>;
    onReset: () => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ filters, setFilters, onReset }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="bg-background-dark border-y border-white/5 py-8 md:py-16">
            <div className="container mx-auto px-6">
                {/* MOBILE FILTERS (App-like UI) */}
                <div className="md:hidden space-y-6">
                    {/* Top Search Bar */}
                    <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/60">
                            <Search size={20} />
                        </span>
                        <input
                            type="text"
                            name="search"
                            value={filters.search}
                            onChange={handleChange}
                            placeholder="Beverly Hills, CA"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary shadow-2xl"
                        />
                    </div>

                    {/* Quick Filter Pills (Horizontal Scroll) */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
                        <button
                            onClick={onReset}
                            className="flex-shrink-0 snap-start bg-primary text-background-dark px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
                        >
                            <SlidersHorizontal size={16} /> Reset
                        </button>

                        <div className="relative flex-shrink-0 snap-start">
                            <select
                                name="priceRange"
                                value={filters.priceRange}
                                onChange={handleChange}
                                className="appearance-none bg-white/5 border border-white/10 text-foreground px-6 py-3 pr-10 rounded-xl font-bold text-xs uppercase tracking-wider outline-none focus:ring-1 focus:ring-primary"
                            >
                                <option value="" className="bg-background-dark">Price Range</option>
                                <option value="0-5m" className="bg-background-dark">$0 - $5M</option>
                                <option value="5m-10m" className="bg-background-dark">$5M - $10M</option>
                                <option value="10m-20m" className="bg-background-dark">$10M - $20M</option>
                                <option value="20m+" className="bg-background-dark">$20M+</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                        </div>

                        <div className="relative flex-shrink-0 snap-start">
                            <select
                                name="bedrooms"
                                value={filters.bedrooms}
                                onChange={handleChange}
                                className="appearance-none bg-white/5 border border-white/10 text-foreground px-6 py-3 pr-10 rounded-xl font-bold text-xs uppercase tracking-wider outline-none focus:ring-1 focus:ring-primary"
                            >
                                <option value="" className="bg-background-dark">Beds</option>
                                <option value="1" className="bg-background-dark">1</option>
                                <option value="2" className="bg-background-dark">2</option>
                                <option value="3" className="bg-background-dark">3</option>
                                <option value="4+" className="bg-background-dark">4+</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                        </div>

                        <div className="relative flex-shrink-0 snap-start">
                            <select
                                name="type"
                                value={filters.type}
                                onChange={handleChange}
                                className="appearance-none bg-white/5 border border-white/10 text-foreground px-6 py-3 pr-10 rounded-xl font-bold text-xs uppercase tracking-wider outline-none focus:ring-1 focus:ring-primary"
                            >
                                <option value="" className="bg-background-dark">Property Type</option>
                                <option value="villa" className="bg-background-dark">Villa</option>
                                <option value="penthouse" className="bg-background-dark">Penthouse</option>
                                <option value="estate" className="bg-background-dark">Estate</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* DESKTOP FILTERS (Luxury Dropdown Grid) */}
                <div className="hidden md:block">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight mb-4 uppercase">
                            Properties Results
                        </h2>
                        <p className="text-primary/60 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-80">
                            Please click Reset Filters before new search
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Top Row: Search and Basic Selects */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">
                                    <Search size={18} />
                                </span>
                                <input
                                    type="text"
                                    name="search"
                                    value={filters.search}
                                    onChange={handleChange}
                                    placeholder="Search by address or ID"
                                    className="w-full bg-white/5 rounded-lg py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/20 border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm"
                                />
                            </div>

                            <div className="relative">
                                <select
                                    name="location"
                                    value={filters.location}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 rounded-lg py-4 px-4 text-foreground appearance-none border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                >
                                    <option value="" className="bg-background-dark">Location</option>
                                    <option value="los-angeles" className="bg-background-dark">Los Angeles, CA</option>
                                    <option value="beverly-hills" className="bg-background-dark">Beverly Hills, CA</option>
                                    <option value="century-city" className="bg-background-dark">Century City, CA</option>
                                    <option value="malibu" className="bg-background-dark">Malibu, CA</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <ChevronDown size={18} />
                                </span>
                            </div>

                            <div className="relative">
                                <select
                                    name="type"
                                    value={filters.type}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 rounded-lg py-4 px-4 text-foreground appearance-none border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                >
                                    <option value="" className="bg-background-dark">Property type</option>
                                    <option value="villa" className="bg-background-dark">Modern Villa</option>
                                    <option value="penthouse" className="bg-background-dark">Luxury Penthouse</option>
                                    <option value="estate" className="bg-background-dark">Classic Estate</option>
                                    <option value="mansion" className="bg-background-dark">Modern Mansion</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <ChevronDown size={18} />
                                </span>
                            </div>
                        </div>

                        {/* Bottom Row: Advanced Selects and Reset */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="relative">
                                <select
                                    name="bedrooms"
                                    value={filters.bedrooms}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 rounded-lg py-4 px-4 text-foreground appearance-none border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                >
                                    <option value="" className="bg-background-dark">Bedroom</option>
                                    <option value="1" className="bg-background-dark">1 Bedroom</option>
                                    <option value="2" className="bg-background-dark">2 Bedrooms</option>
                                    <option value="3" className="bg-background-dark">3 Bedrooms</option>
                                    <option value="4+" className="bg-background-dark">4+ Bedrooms</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <ChevronDown size={18} />
                                </span>
                            </div>

                            <div className="relative">
                                <select
                                    name="bathrooms"
                                    value={filters.bathrooms}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 rounded-lg py-4 px-4 text-foreground appearance-none border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                >
                                    <option value="" className="bg-background-dark">Bathroom</option>
                                    <option value="1" className="bg-background-dark">1 Bathroom</option>
                                    <option value="2" className="bg-background-dark">2 Bathrooms</option>
                                    <option value="3" className="bg-background-dark">3 Bathrooms</option>
                                    <option value="4+" className="bg-background-dark">4+ Bathrooms</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <ChevronDown size={18} />
                                </span>
                            </div>

                            <div className="relative">
                                <select
                                    name="priceRange"
                                    value={filters.priceRange}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 rounded-lg py-4 px-4 text-foreground appearance-none border border-white/10 outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                >
                                    <option value="" className="bg-background-dark">Price range</option>
                                    <option value="0-5m" className="bg-background-dark">$0 - $5,000,000</option>
                                    <option value="5m-10m" className="bg-background-dark">$5,000,000 - $10,000,000</option>
                                    <option value="10m-20m" className="bg-background-dark">$10,000,000 - $20,000,000</option>
                                    <option value="20m+" className="bg-background-dark">$20,000,000+</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <ChevronDown size={18} />
                                </span>
                            </div>

                            <button
                                onClick={onReset}
                                className="bg-primary hover:bg-primary/90 text-background-dark py-4 px-8 rounded-lg font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group shadow-lg active:scale-95"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyFilters;
