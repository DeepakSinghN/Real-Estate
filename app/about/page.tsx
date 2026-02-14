'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { gsap, useGSAP } from '@/lib/gsap';
import {
    ArrowRight, Flag, Eye, Heart, Shield, Scale, Lightbulb, KeyRound,
    MapPin, X, ChevronLeft, ChevronRight, Zap, FileText, Globe,
    Layers, ShieldCheck, TrendingUp, Users as UsersIcon
} from 'lucide-react';

const Counter = ({ end, duration = 2, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
    const countRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const obj = { value: 0 };
        gsap.to(obj, {
            value: end,
            duration: duration,
            ease: "power2.out",
            scrollTrigger: {
                trigger: countRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = Math.floor(obj.value).toString();
                }
            }
        });
    }, { scope: countRef });

    return (
        <span className="inline-flex items-center">
            {prefix && <span>{prefix}</span>}
            <span ref={countRef}>0</span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
};

export default function AboutPage() {
    const container = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const values = [
        { icon: ShieldCheck, title: "Build Responsibly", desc: "We prioritise the safety of our people and the protection of our communities, assets, and environment. Everything we build is guided by a commitment to responsibility and long-term impact." },
        { icon: Shield, title: "Act with Integrity", desc: "We stand strong on ethics and accountability. At Modulex, integrity shapes our decisions, builds trust, drives confident delivery, and fosters lasting partnerships." },
        { icon: UsersIcon, title: "Grow Together", desc: "We believe great things are built together. Through strong partnerships and shared goals, we collaborate to create a lasting impact, aligning progress with mutual success at every stage." },
        { icon: Heart, title: "Deliver Excellence", desc: "Our culture of excellence drives us to push boundaries, exceed expectations, and bring consistent quality to every project, every time. This helps us deliver consistent value." },
        { icon: Zap, title: "Value Every Voice", desc: "Just as modularity shapes our approach, inclusion shapes our culture. We champion diverse ideas, experiences, and perspectives to build smarter, more holistic solutions." },
        { icon: Lightbulb, title: "Lead with Vision", desc: "Staying ahead of market trends while maintaining a long-term perspective on value creation and urban transformation." },
        { icon: Scale, title: "Prudent Growth", desc: "Sustained and careful acquisition strategies that ensure long-term stability and superior risk-adjusted returns." },
        { icon: Globe, title: "Global Insight", desc: "Leveraging our international footprint to bring world-class standards to every local development project." }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % values.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);

    // Auto-slide every 2 seconds
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]); // Re-run on index change to reset timer if user manually slides

    useGSAP(() => {
        // Hero Content Reveal
        gsap.from('.hero-title span', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: 'expo.out',
        });

        gsap.from('.hero-image', {
            scale: 1.1,
            opacity: 0,
            duration: 2,
            ease: 'power2.out',
        });

        // Scroll Revelations (Repeatable)
        const sections = gsap.utils.toArray('.reveal-section');
        sections.forEach((section: any) => {
            gsap.fromTo(section,
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: "play reverse play reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                }
            );
        });

        // Image Parallax or Reveal
        const images = gsap.utils.toArray('.reveal-image');
        images.forEach((img: any) => {
            gsap.fromTo(img,
                { scale: 0.95, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 90%',
                        toggleActions: "play reverse play reverse",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'expo.out',
                }
            );
        });

        // Specific reveal for Vision & Mission cards
        const vmCards = gsap.utils.toArray('.vm-reveal');
        gsap.fromTo(vmCards,
            { y: 80, opacity: 0, scale: 0.95 },
            {
                scrollTrigger: {
                    trigger: vmCards[0] as any,
                    start: 'top 85%',
                    toggleActions: "play none none reverse",
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: 'expo.out',
            }
        );

        // Special Mobile Scroll Focus for Vision & Mission
        if (window.innerWidth < 768) {
            const cards = gsap.utils.toArray('.vision-mission-card');
            cards.forEach((card: any) => {
                gsap.fromTo(card,
                    { filter: 'blur(4px)', opacity: 0.4 },
                    {
                        filter: 'blur(0px)',
                        opacity: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 60%',
                            end: 'bottom 40%',
                            toggleActions: 'play reverse play reverse',
                        }
                    }
                );
            });
        }
    }, { scope: container });

    // Separate animation for slider to react to state changes
    useGSAP(() => {
        const updateSlider = () => {
            const vw = window.innerWidth;
            const isMobile = vw < 768;
            const cardWidth = isMobile ? vw * 0.85 : 500;
            const gap = isMobile ? 32 : 64;
            const centerOffset = (vw / 2) - (cardWidth / 2);
            const moveX = centerOffset - (currentIndex * (cardWidth + gap));

            const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

            tl.to('.values-track', {
                x: moveX,
                duration: 0.8
            }, 0);

            tl.to('.value-card', {
                scale: 0.85,
                opacity: 0.4,
                filter: 'blur(4px)',
                duration: 0.6
            }, 0);

            tl.to(`.value-card-${currentIndex}`, {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.6
            }, 0);

            // Progressive Bar Sync for Active Card
            gsap.fromTo(`.card-progress-${currentIndex}`,
                { width: '0%' },
                { width: '100%', duration: 3, ease: 'none' }
            );

            // Reset other bars
            values.forEach((_, idx) => {
                if (idx !== currentIndex) {
                    gsap.set(`.card-progress-${idx}`, { width: '0%' });
                }
            });
        };

        updateSlider();

        window.addEventListener('resize', updateSlider);
        return () => window.removeEventListener('resize', updateSlider);
    }, { scope: container, dependencies: [currentIndex] });

    return (
        <main ref={container} className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
                        <div className="max-w-4xl">
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-bold mb-8 block">About the Fund</span>
                            <h1 className="hero-title font-display text-6xl md:text-[100px] leading-[0.9] tracking-tight mb-8">
                                <span className="block italic">Redefining</span>
                                <span className="block">Real Estate</span>
                                <span className="block text-primary">Investment.</span>
                            </h1>
                        </div>
                        <div className="max-w-md lg:pt-12">
                            <p className="text-foreground/60 font-light leading-relaxed text-lg border-l border-primary/20 pl-8">
                                We bridge the gap between institutional wisdom and bespoke asset management, creating high-yield multi-family opportunities for the modern visionary.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                            alt="Modern Architectural Facade"
                            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* --- LEGACY SECTION --- */}
            <section className="py-20 md:py-32 bg-accent-green overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative reveal-image">
                            <div className="aspect-square overflow-hidden rounded-sm relative z-10 shadow-3xl">
                                <img
                                    src="https://tref.digitaldesignnyc.co/wp-content/uploads/2023/12/main2.jpeg"
                                    alt="Construction Excellence"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -bottom-10 -right-10 bg-[#581016] text-white p-12 md:p-16 z-20 shadow-2xl">
                                <span className="block text-5xl md:text-6xl font-display font-bold leading-none mb-2">
                                    <Counter end={15} suffix="+" />
                                </span>
                                <span className="block text-[10px] tracking-[0.3em] font-bold uppercase whitespace-nowrap">Years of Experience</span>
                            </div>
                        </div>

                        <div className="reveal-section lg:pl-12">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Our Legacy</span>
                            <h2 className="font-display text-5xl md:text-7xl leading-tight mb-10">
                                Legacy Meets <br /><span className="italic font-normal">Performance</span>
                            </h2>
                            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg max-w-lg">
                                <p>
                                    Founded on the principles of architectural integrity and financial rigor, The Real Estate Fund has spent over two decades identifying and revitalizing under-performing assets in key urban markets.
                                </p>
                                <p>
                                    Our approach is holistic: from the initial site selection and structural due diligence to the final finishing touches that define a luxury lifestyle. We don't just build portfolios; we restore environments where communities thrive and value is sustained for generations.
                                </p>
                                <button className="flex items-center gap-4 text-primary group">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-primary pb-1 group-hover:border-foreground group-hover:text-foreground transition-all">Learn About Our Method</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISION & MISSION --- */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 [perspective:2000px]">
                        <div className="vision-mission-card border border-primary/10 bg-primary/5 rounded-sm vm-reveal relative overflow-hidden group transition-all duration-500 md:hover:scale-[1.2] hover:z-20 cursor-pointer md:hover:shadow-[0_40px_100px_-20px_rgba(88,16,22,0.3)]">
                            {/* Content Wrapper (Blurred on desktop by default) */}
                            <div className="p-8 md:p-20 transition-all duration-500 md:blur-[4px] md:opacity-40 group-hover:blur-none group-hover:opacity-100">
                                <Flag className="text-primary mb-10 w-12 h-12 stroke-[1px] opacity-40" />
                                <h3 className="font-display text-4xl mb-8">Our Mission</h3>
                                <p className="text-foreground/70 font-light leading-relaxed text-lg">
                                    To deliver risk-adjusted superior returns to our investor capital through the selection of multi-family living, through sustained prudent acquisition, and thoughtful architectural design in high growth multi-family areas.
                                </p>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <Flag size={120} className="text-primary rotate-12" />
                                </div>
                            </div>

                            {/* Hover Indicator (Text Only) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none md:flex hidden z-30">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary animate-pulse">Hover here</span>
                            </div>
                        </div>

                        <div className="vision-mission-card border border-primary/10 bg-primary/5 rounded-sm vm-reveal relative overflow-hidden group transition-all duration-500 md:hover:scale-[1.2] hover:z-20 cursor-pointer md:hover:shadow-[0_40px_100px_-20px_rgba(88,16,22,0.3)]">
                            {/* Content Wrapper (Blurred on desktop by default) */}
                            <div className="p-8 md:p-20 transition-all duration-500 md:blur-[4px] md:opacity-40 group-hover:blur-none group-hover:opacity-100">
                                <Eye className="text-primary mb-10 w-12 h-12 stroke-[1px] opacity-40 transition-transform duration-700 group-hover:scale-110" />
                                <h3 className="font-display text-4xl mb-8">Our Vision</h3>
                                <p className="text-foreground/70 font-light leading-relaxed text-lg">
                                    To set the global benchmark for institutional real estate investment, recognized for our ability to transform urban landscapes and provide luxurious, sustainable residential living.
                                </p>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <Eye size={120} className="text-primary -rotate-12" />
                                </div>
                            </div>

                            {/* Hover Indicator (Text Only) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none md:flex hidden z-30">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary animate-pulse">Hover here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VALUES SECTION (Interactive Slider) --- */}
            <section className="py-12 md:py-20 bg-accent-green overflow-hidden min-h-[800px] flex flex-col justify-center border-y border-white/5">
                <div className="container mx-auto px-6 md:px-12 md:mb-24 reveal-section flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="max-w-3xl">
                        <span className="text-[12px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">CORE VALUES</span>
                        <h2 className="font-display text-5xl md:text-7xl font-semibold text-foreground">Built On Strong Values</h2>
                    </div>
                    <div className="max-w-md md:text-right">
                        <p className="text-foreground/50 max-w-sm italic text-lg leading-snug">
                            &ldquo;Most people see a maze. We see a goldmine. It takes more than capital to win in today's market, it takes the discipline to master the complex.&rdquo;
                        </p>
                    </div>
                </div>

                <div className="relative w-full px-0">
                    {/* Navigation Arrows - Overlay Container */}
                    <div className="container mx-auto px-6 md:px-12 absolute inset-0 z-20 pointer-events-none flex items-center justify-between">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex pointer-events-auto"
                            aria-label="Previous Value"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex pointer-events-auto"
                            aria-label="Next Value"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Slider Container - Full Width Viewport */}
                    <div className="w-full overflow-visible">
                        <div className="values-track flex gap-8 md:gap-16 items-center py-10 will-change-transform">
                            {values.map((value, idx) => (
                                <div
                                    key={idx}
                                    className={`value-card value-card-${idx} flex-shrink-0 w-[85vw] md:w-[500px] bg-background-dark p-12 md:p-16 rounded-sm border-l-4 border-[#E11D48]/40 flex flex-col items-start text-left`}
                                >
                                    <div className="mb-10">
                                        <value.icon className="text-[#E11D48] w-14 h-14 stroke-[1.2px]" />
                                    </div>
                                    <h4 className="font-display text-2xl md:text-3xl mb-6 font-bold text-foreground">{value.title}</h4>
                                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed font-light mb-10">{value.desc}</p>

                                    {/* Sub-card Progress Bar */}
                                    <div className="w-full mt-auto">
                                        <div className="h-[2px] w-full bg-primary/10 relative overflow-hidden">
                                            <div className={`card-progress-${idx} absolute top-0 left-0 h-full bg-[#E11D48] w-0`}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-6 md:hidden">
                        <button onClick={prevSlide} className="p-4 border border-primary/20 rounded-full text-primary bg-background/50"><ChevronLeft size={20} /></button>
                        <button onClick={nextSlide} className="p-4 border border-primary/20 rounded-full text-primary bg-background/50"><ChevronRight size={20} /></button>
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP (TEAM) --- */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-background border-y border-white/5">
                <div className="container mx-auto mb-12 md:mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 reveal-section">
                        <div className="max-w-2xl">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Leadership</span>
                            <h2 className="font-display text-5xl md:text-7xl">Guided By Visionaries</h2>
                        </div>
                        <p className="text-foreground/50 max-w-sm italic text-lg leading-snug">
                            "Our leadership team combines decades of real estate expertise with a relentless passion for excellence."
                        </p>
                    </div>
                </div>

                <div className="container mx-auto space-y-32">
                    {/* Founder */}
                    <div className="grid lg:grid-cols-2 gap-24 items-center reveal-section">
                        <div className="reveal-image order-2 lg:order-1">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative group bg-background-dark">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
                                    alt="Randolph De Lano"
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="font-display text-3xl text-white mb-1">Randolph De Lano</h3>
                                    <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">Managing Partner & Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 lg:pl-12">
                            <div className="w-16 h-[1px] bg-primary mb-12" />
                            <h3 className="font-display text-4xl md:text-5xl mb-8 leading-tight">Expert Approach. <br />Decades of Results.</h3>
                            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg">
                                <p>
                                    With over 25 years of investment in the luxury real estate sector, Randolph has spearheaded the acquisition of more than 50 multi-family assets. His vision for value-add potential has transformed architectural heritage sites into modern living hubs across Europe and North America.
                                </p>
                                <p>
                                    Formerly an MD at a top-tier European Private Equity firm, Randolph founded The Real Estate Fund to focus on niche, high-alpha multi-family opportunities.
                                </p>
                                <div className="flex gap-8 pt-4">
                                    <div className="text-center">
                                        <span className="block text-3xl font-display text-primary">
                                            <Counter end={50} suffix="+" />
                                        </span>
                                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold opacity-40">Acquisitions</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-3xl font-display text-primary">
                                            <Counter end={2} prefix="$" suffix="B+" />
                                        </span>
                                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold opacity-40">AUM managed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Leader */}
                    <div className="grid lg:grid-cols-2 gap-24 items-center reveal-section lg:flex-row-reverse">
                        <div className="lg:pl-24 order-1 lg:order-1">
                            <div className="w-16 h-[1px] bg-primary mb-12" />
                            <h3 className="font-display text-4xl md:text-5xl mb-8">Strategic Growth. <br />Measured Risk.</h3>
                            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg">
                                <p>
                                    Elena oversees all capital allocation and investment strategy. Prior to joining, she was a senior partner at a leading global advisory firm where she managed a portfolio of $500M in commercial assets.
                                </p>
                                <p>
                                    Her expertise in complex financial modeling and risk assessment ensures the Fund remains resilient through diverse market cycles.
                                </p>
                            </div>
                        </div>
                        <div className="reveal-image order-2 lg:order-2">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative group bg-background-dark">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976"
                                    alt="Elena Moretti"
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="font-display text-3xl text-white mb-1">Elena Moretti</h3>
                                    <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">Chief Investment Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ADVISORY BOARD --- */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-accent-green">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                        {[
                            { name: "Dr. Alistair Thorne", role: "Legal Advisor" },
                            { name: "Sarah Jenkins", role: "Architecture Lead" },
                            { name: "Marcus Chen", role: "Asset Strategy" },
                            { name: "Diane Ross", role: "Investor Relations" },
                            { name: "Julian Graves", role: "Financial Planning" }
                        ].map((member, idx) => (
                            <div key={idx} className="reveal-section text-center">
                                <div className="aspect-square bg-background-dark/10 rounded-full mb-8 overflow-hidden grayscale contrast-125 border border-primary/10">
                                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                                        <UsersIcon size={40} className="text-primary/40" />
                                    </div>
                                </div>
                                <h5 className="font-bold text-[11px] tracking-widest uppercase mb-1">{member.name}</h5>
                                <p className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GLOBAL FOOTPRINT --- */}
            <section className="py-20 md:py-32 bg-background overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12 md:mb-24 reveal-section">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Our Reach</span>
                        <h2 className="font-display text-5xl md:text-7xl">Our Global Footprint</h2>
                    </div>

                    <div className="relative reveal-image">
                        {/* Simulated Map Background */}
                        <div className="w-full aspect-square md:aspect-[21/9] bg-accent-green rounded-2xl md:rounded-3xl relative overflow-hidden flex items-center justify-center opacity-40">
                            <div className="absolute inset-0 grayscale opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center" />
                            {/* Map Pins */}
                            <MapPin className="text-primary absolute top-1/4 left-1/3 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce" />
                            <MapPin className="text-primary absolute top-1/2 left-1/2 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce delay-300" />
                            <MapPin className="text-primary absolute top-1/3 right-1/4 w-6 h-6 md:w-10 md:h-10 drop-shadow-2xl animate-bounce delay-700" />
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                            <div className="bg-background/95 backdrop-blur-xl p-8 md:p-16 rounded-xl md:rounded-2xl border border-primary/20 shadow-3xl text-center max-w-lg reveal-section">
                                <h4 className="font-display text-2xl md:text-3xl mb-4 md:mb-6">Strategic Locations</h4>
                                <p className="text-foreground/60 font-light leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
                                    Management offices across 3 continents, located in high growth dynamic urban centers.
                                </p>
                                <div className="inline-block px-8 py-4 md:px-10 md:py-5 bg-[#581016] text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:translate-y-[-4px] transition-transform cursor-pointer">
                                    View Portfolios
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 md:py-40 bg-background-dark relative overflow-hidden text-center px-6">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=2070')] bg-fixed bg-cover" />
                <div className="relative z-10 max-w-4xl mx-auto reveal-section">
                    <h2 className="font-display text-5xl md:text-8xl text-white mb-12 leading-tight">Investing in the <br />Future of Urban Living</h2>
                    <p className="text-white/60 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">
                        Join our network of sophisticated investors and gain access to exclusive multi-family opportunities.
                    </p>
                    <Link href="/#contact" className="inline-block px-12 py-6 bg-primary text-background text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 shadow-2xl">
                        Contact Our Team
                    </Link>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <Footer />
        </main>
    );
}
