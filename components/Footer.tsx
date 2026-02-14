'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background text-foreground pt-20 pb-10 relative overflow-hidden border-t border-white/5">
            {/* Subtle Wavy Decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path d="M0,1000 C300,800 400,1000 700,800 C1000,600 1200,800 1500,600" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0,800 C300,600 400,800 700,600 C1000,400 1200,600 1500,400" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
                    {/* Left Section: Brand & Contact */}
                    <div className="max-w-sm">
                        <div className="mb-10">
                            <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Investment Firm</p>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 group border-b border-primary/20 pb-1 hover:border-primary transition-colors cursor-pointer"
                            >
                                <span className="text-2xl font-display font-medium text-foreground text-left">The Real Estate Fund</span>
                                <ArrowUpRight size={18} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " />
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mb-12">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all">
                                <Instagram size={18} />
                            </Link>
                        </div>

                        {/* Schedule Visit Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-between gap-4 bg-primary text-background px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-background transition-all duration-500 min-w-[200px] shadow-xl"
                        >
                            Schedule a visit
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    {/* Right Section: Multi-column Links */}
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                        {/* Discover */}
                        <div className="space-y-6">
                            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold">Discover</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><Link href="/about" className="hover:text-primary transition-colors">About us</Link></li>
                                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                                <li><Link href="/blog" className="hover:text-primary transition-colors">Insights</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Investment Strategy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Performance</Link></li>
                            </ul>
                        </div>

                        {/* Service */}
                        <div className="space-y-6">
                            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold">Service</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact us</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">Investor Login</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold">Contact</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li>
                                    <a href="tel:9494168733" className="hover:text-primary transition-colors tracking-wider">949-416-8733</a>
                                </li>
                                <li>
                                    <a href="mailto:info@therealestatefunds.com" className="hover:text-primary transition-colors break-all">info@therealestatefunds.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/20">
                    <p>© 2026 The Real Estate Funds</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-foreground flex items-center gap-1">Privacy Policy <ArrowUpRight size={12} /></Link>
                        <Link href="#" className="hover:text-foreground flex items-center gap-1">Terms of Use <ArrowUpRight size={12} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
