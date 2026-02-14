'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import PartnerSlider from '@/components/PartnerSlider';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const blogPosts = [
    {
        id: 'london-property',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean'
        },
        date: 'Oct 7',
        readTime: 'Watch 29 minutes',
        title: 'Prime Central London Property with Buying...',
        subtitle: 'Q&A with Cliff Gardener',
        excerptPrefix: 'Sean',
        excerpt: 'Cliff, welcome to Sun, Sea & Second Homes. For those who don’t know you, can you give a quick overview of your work in the prime central London market and what current trends you are seeing...'
    },
    {
        id: 'daniel-atwell',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean'
        },
        date: 'Aug 15',
        readTime: 'Watch 33 minutes',
        title: 'A Conversation with Daniel Atwell of One...',
        subtitle: 'Meet One Builders',
        excerptPrefix: 'Sean',
        excerpt: 'Danny, you’re co-founder and Managing Director of One Builders—one of the most respected luxury construction firms. We’ve worked together on several high-stakes projects for our international clients...'
    },
    {
        id: 'luxury-market',
        image: 'https://img.freepik.com/premium-photo/modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-suburban-house-architecture-residential-building_474717-200092.jpg?semt=ais_wordcount_boost&w=740&q=80',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean'
        },
        date: 'July 12',
        readTime: 'Read 12 minutes',
        title: 'Mastering the Luxury Real Estate Market',
        subtitle: 'Insights from the Top',
        excerptPrefix: 'Sean',
        excerpt: 'In this long-form analysis, we dive deep into what it takes to navigate the top 1% of the real estate market. From discretion to local expertise, discover the pillars of success in luxury living...'
    }
];

export default function BlogPage() {
    const container = React.useRef(null);

    useGSAP(() => {
        // Reveal Title
        gsap.fromTo('.blog-title-reveal',
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 0.1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.7)' }
        );

        // Staggered Feed
        gsap.fromTo('.blog-card-reveal',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.blog-feed',
                    start: 'top 80%',
                }
            }
        );
    }, { scope: container });

    return (
        <main ref={container} className="bg-background min-h-screen selection:bg-primary selection:text-background">
            <Navbar />

            {/* Blog Hero */}
            <BlogHero />

            {/* Blog Header */}
            <section className="py-22 md:py-24 text-center mb-4">
                <div className="container mx-auto px-6">
                    <h2 className="blog-title-reveal font-display text-7xl md:text-8xl lg:text-[10rem] text-white tracking-[0.2em] font-light uppercase opacity-10">
                        Blog
                    </h2>
                    <div className="relative -mt-10 md:-mt-24">
                        <p className="text-[6px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary font-bold px-6 leading-none">
                            Curated Insights for Discerning Homeowners
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Feed */}
            <section className="blog-feed pb-32 px-6">
                <div className="container mx-auto max-w-6xl space-y-12">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-card-reveal">
                            <BlogCard {...post} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Floating Contact Button */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
                <Link href="#contact" className="bg-accent-green text-primary border border-primary/20 hover:bg-primary hover:text-background px-8 py-5 rounded-l-full font-bold text-xs uppercase tracking-widest shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all flex items-center gap-4 group">
                    Contact Us
                </Link>
            </div>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 md:py-32 bg-accent-green overflow-hidden relative border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,203,179,0.1),transparent)] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 text-center reveal-up relative z-10">
                    <div className="w-16 h-[1px] bg-primary mx-auto mb-10" />
                    <h2 className="font-display text-5xl md:text-8xl font-bold mb-3 text-foreground tracking-tight">
                        Testimonials
                    </h2>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-bold opacity-80">
                        Voices of Sustained Success
                    </p>
                </div>

                <div className="mt-12 md:mt-20">
                    <PartnerSlider />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
