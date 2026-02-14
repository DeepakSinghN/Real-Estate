'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, Globe } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const container = React.useRef(null);

    useGSAP(() => {
        gsap.fromTo('.contact-card',
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.5 }
        );

        gsap.fromTo('.reveal-field',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 1 }
        );

        gsap.fromTo('.background-image',
            { scale: 1.1, filter: 'blur(20px)' },
            { scale: 1, filter: 'blur(8px)', duration: 3, ease: 'power2.out' }
        );
    }, { scope: container });

    return (
        <main ref={container} className="bg-background-dark min-h-screen relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                    alt="Modern Architecture"
                    className="background-image w-full h-full object-cover opacity-40grayscale"
                />
                <div className="absolute inset-0 bg-background-dark/60 backdrop-blur-[8px]" />
            </div>

            {/* Content Container */}
            <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-10">
                <div className="contact-card w-full max-w-5xl bg-[#F5F2ED] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row">

                    {/* Left Side: Form Section */}
                    <div className="flex-grow p-8 md:p-16">
                        <div className="mb-12">
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-medium leading-[1.1]">
                                Send us a <span className="italic font-light">Message</span>
                            </h1>
                            <p className="text-[#666666] text-sm md:text-base mt-4 font-light">
                                Interested in <span className="font-bold text-[#1A1A1A]">The Real Estate Funds? <br />
                                </span> <span className="font-medium text-[#444444]">Schedule a visit</span> in just a few clicks.
                            </p>
                        </div>

                        <form className="space-y-8 md:space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="reveal-field relative border-b border-[#D1D1D1] pb-2 group">
                                    <label className="text-[10px] uppercase tracking-widest text-[#999999] mb-2 block">First name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#BBBBBB] text-sm md:text-base py-1"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] group-focus-within:w-full transition-all duration-500" />
                                </div>
                                <div className="reveal-field relative border-b border-[#D1D1D1] pb-2 group">
                                    <label className="text-[10px] uppercase tracking-widest text-[#999999] mb-2 block">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#BBBBBB] text-sm md:text-base py-1"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] group-focus-within:w-full transition-all duration-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="reveal-field relative border-b border-[#D1D1D1] pb-2 group">
                                    <label className="text-[10px] uppercase tracking-widest text-[#999999] mb-2 block">Your email</label>
                                    <input
                                        type="email"
                                        placeholder="example@domain.com"
                                        className="w-full bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#BBBBBB] text-sm md:text-base py-1"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] group-focus-within:w-full transition-all duration-500" />
                                </div>
                                <div className="reveal-field relative border-b border-[#D1D1D1] pb-2 group">
                                    <label className="text-[10px] uppercase tracking-widest text-[#999999] mb-2 block">Phone number</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (000) 000-0000"
                                        className="w-full bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#BBBBBB] text-sm md:text-base py-1"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] group-focus-within:w-full transition-all duration-500" />
                                </div>
                            </div>

                            <div className="reveal-field relative border-b border-[#D1D1D1] pb-2 group">
                                <label className="text-[10px] uppercase tracking-widest text-[#999999] mb-2 block">Message</label>
                                <textarea
                                    placeholder="Tell us about your interest..."
                                    rows={1}
                                    className="w-full bg-transparent border-none outline-none text-[#1A1A1A] placeholder:text-[#BBBBBB] text-sm md:text-base py-1 resize-none"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] group-focus-within:w-full transition-all duration-500" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                                <p className="text-[10px] md:text-xs text-[#999999] font-medium reveal-field">
                                    *You'll hear back from us within one business day.
                                </p>
                                <button className="reveal-field group bg-white text-[#1A1A1A] px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 flex items-center gap-3">
                                    Send <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        {/* Card Footer Info */}
                        <div className="mt-20 pt-12 border-t border-[#D1D1D1]/50 reveal-field flex flex-wrap items-center justify-between gap-10">
                            <div className="space-y-4">
                                <p className="text-[10px] uppercase tracking-widest text-[#999999] font-bold">Get in touch</p>
                                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                                    <a href="tel:8188879797" className="text-[#1A1A1A] font-medium text-sm md:text-base hover:text-[#000] flex items-center gap-2">
                                        (818) 887-9797
                                    </a>
                                    <span className="w-1 h-1 bg-[#D1D1D1] rounded-full hidden md:block" />
                                    <a href="mailto:info@belleoaksmarketplace.com" className="text-[#1A1A1A] font-medium text-sm md:text-base hover:text-[#000] flex items-center gap-2">
                                        info@therealestatefunds.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <a href="#" className="w-10 h-10 rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Background Quote/Text */}
            <div className="fixed bottom-10 left-10 opacity-10 pointer-events-none hidden lg:block">
                <p className="font-display text-8xl text-white uppercase tracking-tighter opacity-10">Connect</p>
            </div>
            {/* Footer */}
            <Footer />
        </main>
    );
}
