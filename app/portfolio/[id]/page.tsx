'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PropertyDetailsHero from '@/components/portfolio/PropertyDetailsHero';
import PropertyDescription from '@/components/portfolio/PropertyDescription';
import AmenitiesFeatures from '@/components/portfolio/AmenitiesFeatures';
import FullScreenSlider from '@/components/portfolio/FullScreenSlider';
import PropertyMap from '@/components/portfolio/PropertyMap';
import RelatedProperties from '@/components/portfolio/RelatedProperties';
import PropertySpecifications from '@/components/portfolio/PropertySpecifications';
import MobileBottomNav from '@/components/portfolio/MobileBottomNav';
import { properties } from '../page';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import Footer from '@/components/Footer';

// Extended data for details
const propertyDetails: Record<string, any> = {
    "westland-heights": {
        paragraphs: [
            "Windfall is a beautifully appointed five-bedroom luxury villa set within the prestigious gated community of Westland Heights on Barbados’ platinum west coast. One of just nine private villas nestled amongst mature tropical gardens, this is a rare opportunity to own in an intimate and highly regarded enclave.",
            "Ideally positioned only a short drive from the island's finest west coast beaches and the amenities of Holetown, Windfall combines privacy, security and convenience in equal measure.",
            "Westland Heights is known for its exclusivity and tranquil setting, while remaining moments from everything that makes the west coast so desirable.",
            "Owners enjoy access to the private beach club at The Fairmont Royal Pavilion, complete with sunbeds and premium facilities. Royal Westmoreland, Sugar Hill and Apes Hill Polo Club are all nearby, as are Lime Grove Lifestyle Centre, banks, supermarkets and a wide selection of restaurants and beach bars."
        ],
        subtitles: [
            "",
            "Prime West Coast Location",
            "A Distinctive Architectural Feature",
            "Lifestyle and Value"
        ],
        amenities: ["High-speed WiFi", "Private Pool", "Air Conditioning", "Parking Space", "24/7 Security", "Chef's Kitchen", "Home Cinema", "Private Gym"],
        specs: [
            { label: "Year Built", value: "2022" },
            { label: "Lot Size", value: "24,500 sqft" },
            { label: "Design Style", value: "Modern Caribbean" },
            { label: "Zoning", value: "Residential Luxury" },
            { label: "View Type", value: "Panoramic Ocean" },
            { label: "Security", value: "24/7 Gated Entry" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
            "https://framerusercontent.com/images/XXa3ETbWTkxKRkTQuS17lzXgrY.jpg?width=4000&height=2565",
            "https://framerusercontent.com/images/L20gXcb8AsPBubVHQh9zkhejU.jpg?width=3840&height=1920"
        ]
    },
    "apes-hill": {
        paragraphs: [
            "Experience the pinnacle of luxury living at Apes Hill. This stunning villa offers panoramic views of the Caribbean Sea and the signature golf course. Designed with a seamless indoor-outdoor flow, the property perfectly captures the essence of island elegance.",
            "The open-plan living areas are bathed in natural light, featuring high ceilings and premium finishes throughout. Each bedroom is a sanctuary of comfort, complete with en-suite bathrooms and private terraces.",
            "Located within a world-class gated community, you'll have access to exclusive amenities including tennis courts, a clubhouse, and a state-of-the- city fitness center."
        ],
        subtitles: [
            "",
            "Seamless Indoor-Outdoor Living",
            "Exclusive World-Class Amenities"
        ],
        amenities: ["Private Pool", "24/7 Security", "Air Conditioning", "Parking Space", "Private Gym", "High-speed WiFi"],
        specs: [
            { label: "Year Built", value: "2021" },
            { label: "Lot Size", value: "18,200 sqft" },
            { label: "Design Style", value: "Contemporary Minimal" },
            { label: "Zoning", value: "Gated Community" },
            { label: "View Type", value: "Golf Course & Sea" },
            { label: "Interior Area", value: "5,200 sqft" }
        ],
        gallery: [
            "https://framerusercontent.com/images/JmbKqCaBYi3wwC8n44HwtCCBs.jpg?scale-down-to=2048&width=3840&height=2560",
            "https://framerusercontent.com/images/ceaQYET2YtwJ00ssNQFrNFDBDeE.jpg?width=3840&height=2881",
            "https://framerusercontent.com/images/4O0VTLmTPbZ7E3pQi26URZSu6yw.jpg?width=3840&height=2881",
            "https://framerusercontent.com/images/wt2nVrYGxeVaLOGzU75BIju6X8.jpg?width=3840&height=5120",
            "https://framerusercontent.com/images/nqrlFQYJB1FbCZl37X3Yfk6GUJ8.jpg?width=3840&height=2881"
        ]
    }
};

// Default fallback for other properties
const defaultDetail = {
    paragraphs: [
        "This exceptional property represents the height of modern luxury. Located in one of the most sought-after neighborhoods, it offers unparalleled privacy and sophisticated design elements.",
        "Every detail has been meticulously crafted to provide a lifestyle of ease and opulence. From the grand entrance to the sweeping views, this is a home designed for those who demand the very best."
    ],
    subtitles: ["", "Modern Luxury Defined"],
    amenities: ["High-speed WiFi", "Air Conditioning", "Parking Space", "24/7 Security"],
    specs: [
        { label: "Year Built", value: "2023" },
        { label: "Zoning", value: "Luxury Residential" },
        { label: "Status", value: "Available" }
    ],
    gallery: [
        "https://framerusercontent.com/images/h8pT63d0ayklM7zFTMOwD9swuDk.jpg?width=3840&height=2160",
        "https://framerusercontent.com/images/fvhUX2P9zUML7lDMgqinDrQjMg.jpg?width=3840&height=2160",
        "https://framerusercontent.com/images/kByG1nt5NbJpWG8EfdHRpoeTKWU.jpg?width=3840&height=2160",
        "https://framerusercontent.com/images/7AHphKAFOClcu3RS9Wa83x3nc.jpg?width=3840&height=2160",
        "https://framerusercontent.com/images/W2eoW1Vt0jcX5LeqZ8WYxUcs.jpg?width=3840&height=2560"
    ]
};

export default function PropertyPage() {
    const { id } = useParams();
    const property = properties.find(p => p.id === id);
    const details = propertyDetails[id as string] || defaultDetail;

    if (!property) return notFound();

    const container = React.useRef(null);

    useGSAP(() => {
        // Shared reveal animation
        const reveals = gsap.utils.toArray('.reveal-up');
        reveals.forEach((el: any) => {
            gsap.fromTo(el,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <main ref={container} className="bg-background min-h-screen">
            <Navbar />

            <PropertyDetailsHero
                image={property.image}
                name={property.name}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                isFeatured={property.isFeatured}
            />

            <PropertyDescription
                locationTitle={property.name}
                paragraphs={details.paragraphs}
                subtitles={details.subtitles}
            />

            <AmenitiesFeatures
                amenities={details.amenities}
            />

            <FullScreenSlider
                images={details.gallery}
            />

            <PropertySpecifications
                specs={details.specs}
            />

            <PropertyMap
                address={property.name}
            />

            <RelatedProperties
                currentId={property.id}
            />

            {/* Footer */}
            <Footer />

            {/* Mobile Nav */}
            {/* <MobileBottomNav /> */}
        </main>
    );
}
