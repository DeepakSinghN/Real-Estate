'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap, useGSAP } from '@/lib/gsap';
import { KeyRound, X } from 'lucide-react';

const Navbar = () => {
    const container = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const menuTl = useRef<gsap.core.Timeline | null>(null);
    const lastScrollY = useRef(0);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(() => {
        // Initial nav entrance
        gsap.from('.nav-item', {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
        });

        // Hamburger to X animation overlay logic
        menuTl.current = gsap.timeline({ paused: true })
            .to('.mobile-overlay', {
                clipPath: 'circle(150% at 100% 0%)',
                duration: 0.8,
                ease: 'power4.inOut'
            })
            .from('.mobile-nav-item', {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.mobile-key', {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, '-=0.2')
            .from('.mobile-close', {
                rotate: -90,
                opacity: 0,
                duration: 0.4
            }, '-=0.6');
    }, { scope: container });

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) return; // Don't hide if mobile menu is open

            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true); // Ensure bar is visible when opening
            menuTl.current?.play();
            document.body.style.overflow = 'hidden';
        } else {
            menuTl.current?.reverse();
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    useGSAP(() => {
        gsap.to('.nav-bar-container', {
            y: isVisible ? 0 : -120,
            opacity: isVisible ? 1 : 0,
            duration: 0.8,
            ease: 'expo.out',
            overwrite: true
        });
    }, [isVisible]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div ref={container} className="relative z-[100]">
            {/* The Actual Visible Bar */}
            <nav
                className="nav-bar-container fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 md:px-12 text-white z-[110]"
            >
                {/* Left Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em]">
                    <Link href="/" className="hover:text-primary transition-colors nav-item">HOME</Link>
                    <Link href="/about" className="hover:text-primary transition-colors nav-item">ABOUT</Link>
                    <Link href="/portfolio" className="hover:text-primary transition-colors nav-item">Portfolio</Link>
                </div>

                {/* Center Logo (Desktop) / Left Logo (Mobile) */}
                <Link href="/" className="flex flex-col mt-3 items-start lg:items-center gap-1 group nav-item static lg:absolute lg:left-1/2 lg:-translate-x-1/2 translate-x-0">
                    <span className="text-[10px] tracking-[0.3em] font-light opacity-60">THE</span>
                    <span className="font-display font-medium text-xl md:text-2xl leading-none tracking-[0.1em] uppercase">REAL ESTATE FUND</span>
                    <span className="text-[9px] text-primary font-bold uppercase tracking-[0.4em] leading-none mt-1">EST. 2023</span>
                </Link>

                {/* Right Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em]">
                    <Link href="/blog" className="hover:text-primary transition-colors nav-item">Blog</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors nav-item">CONTACT</Link>
                    <a href="tel:949-416-8733" className="text-white nav-item">949-416-8733</a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 nav-item ml-auto focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className="w-8 h-[1px] bg-white" />
                    <span className="w-8 h-[1px] bg-white" />
                    <span className="w-8 h-[1px] bg-white" />
                </button>
            </nav>

            {/* Full-Screen Mobile Overlay - Sibling to nav bar, not affected by its Y transform */}
            <div className="mobile-overlay fixed inset-0 bg-background-dark/98 backdrop-blur-2xl z-[120] flex flex-col items-center justify-center pointer-events-none" style={{ clipPath: 'circle(0% at 100% 0%)' }}>
                {/* Dedicated Close Button */}
                <button
                    onClick={toggleMenu}
                    className="mobile-close absolute top-8 right-8 text-white hover:text-primary transition-colors pointer-events-auto p-2"
                >
                    <X size={40} strokeWidth={1} />
                </button>

                <div className="flex flex-col items-center gap-10 pointer-events-auto">
                    <Link href="/" onClick={toggleMenu} className="mobile-nav-item font-display text-5xl md:text-6xl text-white hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" onClick={toggleMenu} className="mobile-nav-item font-display text-5xl md:text-6xl text-white hover:text-primary transition-colors">About</Link>
                    <Link href="/portfolio" onClick={toggleMenu} className="mobile-nav-item font-display text-5xl md:text-6xl text-white hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="/blog" onClick={toggleMenu} className="mobile-nav-item font-display text-5xl md:text-6xl text-white hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contact" onClick={toggleMenu} className="mobile-nav-item font-display text-5xl md:text-6xl text-white hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Mobile Bottom Key Icon */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 mobile-key">
                    <div className="w-12 h-[1px] bg-primary/30 mb-8 mx-auto" />
                    <KeyRound size={32} className="text-primary rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
