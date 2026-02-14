'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PropertyFilters from '@/components/portfolio/PropertyFilters';
import PropertyCard from '@/components/portfolio/PropertyCard';
import MobileBottomNav from '@/components/portfolio/MobileBottomNav';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpDown } from 'lucide-react';
import Footer from '@/components/Footer';

export const properties = [
    {
        id: "westland-heights",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
        name: "1230 Bel Air Rd, Los Angeles, CA",
        price: "USD $12,500,000",
        bedrooms: 5,
        bathrooms: 6,
        area: "8,450 sqft",
        type: "Modern Villa",
        tags: ["Detached House / Villa", "Gated Development"],
        isFeatured: true
    },
    {
        id: "apes-hill",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
        name: "742 N Beverly Dr, Beverly Hills, CA",
        price: "USD $8,250,000",
        bedrooms: 4,
        bathrooms: 4,
        area: "5,200 sqft",
        type: "Classic Estate",
        tags: ["Detached House / Villa", "Gated Development"],
        isNew: true
    },
    {
        id: "sandy-lane",
        image: "https://framerusercontent.com/images/h8pT63d0ayklM7zFTMOwD9swuDk.jpg?width=3840&height=2160",
        name: "The Century #42A, Century City, CA",
        price: "USD $5,750,000",
        bedrooms: 3,
        bathrooms: 3,
        area: "3,400 sqft",
        type: "Luxury Penthouse",
        tags: ["Luxury Estate", "Exclusive Location"]
    },
    {
        id: "royal-palms",
        image: "https://framerusercontent.com/images/WlmGVrcF6UJ7xmaFtQoo3zg0Oos.jpg?scale-down-to=2048&width=2880&height=1350",
        name: "90210 Mountain View, Beverly Hills, CA",
        price: "USD $6,900,000",
        bedrooms: 5,
        bathrooms: 5,
        area: "6,100 sqft",
        type: "Modern Estate",
        tags: ["Exclusive", "Mountain View"]
    }
];

export default function PortfolioPage() {
    const container = React.useRef(null);
    const [filters, setFilters] = React.useState({
        search: '',
        location: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        priceRange: ''
    });

    const resetFilters = () => {
        setFilters({
            search: '',
            location: '',
            type: '',
            bedrooms: '',
            bathrooms: '',
            priceRange: ''
        });
    };

    const filteredProperties = React.useMemo(() => {
        return properties.filter(prop => {
            const matchesSearch = !filters.search ||
                prop.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                prop.id.toLowerCase().includes(filters.search.toLowerCase());

            const matchesLocation = !filters.location ||
                prop.name.toLowerCase().includes(filters.location.toLowerCase().replace('-', ' '));

            const matchesType = !filters.type ||
                prop.type.toLowerCase().includes(filters.type.toLowerCase());

            const matchesBeds = !filters.bedrooms ||
                (filters.bedrooms === '4+' ? prop.bedrooms >= 4 : prop.bedrooms === parseInt(filters.bedrooms));

            const matchesBaths = !filters.bathrooms ||
                (filters.bathrooms === '4+' ? prop.bathrooms >= 4 : prop.bathrooms === parseInt(filters.bathrooms));

            // Basic Price Range Parsing (Price format: "USD $12,500,000")
            const priceValue = parseInt(prop.price.replace(/[^0-9]/g, ''));
            const matchesPrice = !filters.priceRange || (
                filters.priceRange === '0-5m' ? priceValue <= 5000000 :
                    filters.priceRange === '5m-10m' ? (priceValue > 5000000 && priceValue <= 10000000) :
                        filters.priceRange === '10m-20m' ? (priceValue > 10000000 && priceValue <= 20000000) :
                            filters.priceRange === '20m+' ? priceValue > 20000000 : true
            );

            return matchesSearch && matchesLocation && matchesType && matchesBeds && matchesBaths && matchesPrice;
        });
    }, [filters]);

    useGSAP(() => {
        if (filteredProperties.length > 0) {
            gsap.fromTo('.property-card-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: 'power3.out',
                    overwrite: 'auto'
                }
            );
        }
    }, { scope: container, dependencies: [filteredProperties] });

    return (
        <main ref={container} className="bg-background min-h-screen pb-24 md:pb-0">
            <Navbar />

            {/* Hero Section - Hidden on Mobile */}
            <div className="hidden md:block">
                <PortfolioHero />
            </div>

            {/* Filters Section */}
            <div className="pt-24 md:pt-0">
                <PropertyFilters
                    filters={filters}
                    setFilters={setFilters}
                    onReset={resetFilters}
                />
            </div>

            {/* Property Grid Section */}
            <section className="py-8 md:py-24 bg-background">
                <div className="container mx-auto px-6">
                    {/* Mobile Listing Header */}
                    <div className="md:hidden flex items-center justify-between mb-8">
                        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                            {filteredProperties.length} Exclusive Listings
                        </h2>
                        <button className="flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-widest">
                            Newest <ArrowUpDown size={14} />
                        </button>
                    </div>

                    {filteredProperties.length > 0 ? (
                        <div className="property-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {filteredProperties.map((prop, idx) => (
                                <div key={prop.id} className="property-card-reveal">
                                    <PropertyCard {...prop} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                            <p className="text-foreground/40 font-display text-xl uppercase tracking-widest">
                                No properties found matching your filters
                            </p>
                            <button
                                onClick={resetFilters}
                                className="mt-6 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {filteredProperties.length > 0 && (
                        <div className="mt-12 md:mt-20 text-center">
                            <button className="inline-block px-12 py-5 bg-primary text-background-dark text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:translate-y-[-4px] transition-transform cursor-pointer shadow-xl">
                                Load More Properties
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Mobile Bottom Navigation */}
            {/* <MobileBottomNav /> */}
        </main>
    );
}
