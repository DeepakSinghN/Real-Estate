'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerSlider from '@/components/PartnerSlider';
import { gsap, useGSAP } from '@/lib/gsap';
import { Quote, ArrowRight, ShieldCheck, TrendingUp, Users, MapPin } from 'lucide-react';
import GlobalFootprint from '@/components/GlobalFootprint';
import BuyersCTA from '@/components/BuyersCTA';
import Footer from '@/components/Footer';

const StackedSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const images = [
    "https://www.theluxuryhomeshow.com/wp-content/uploads/2025/11/A-New-Standard-of-Coastal-Luxury-in-the-Pacific-Palisades-Riviera-aerial-view.jpg",
    "https://www.theluxuryhomeshow.com/wp-content/uploads/2025/11/A-New-Standard-of-Coastal-Luxury-in-the-Pacific-Palisades-Riviera-office.jpg",
    "https://www.theluxuryhomeshow.com/wp-content/uploads/2026/02/inside-a-4.7m-studio-city-residence-with-a-tulum-inspired-resort-feel-kitchen.jpg",
    "https://www.theluxuryhomeshow.com/wp-content/uploads/2025/10/Inside-Kirsten-Blazeks-Earthy-Spanish-Revival-in-Ojai-facade.jpg",
    "https://www.theluxuryhomeshow.com/wp-content/uploads/2025/11/Chateau-Corsica.-A-Contemporary-Take-on-Coastal-Luxury-living-area-fireplace.jpg"
  ];

  useGSAP(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, { scope: sliderRef });

  return (
    <div ref={sliderRef} className="relative w-full aspect-[4/5] max-w-xl mx-auto lg:ml-auto [perspective:2000px]">
      {images.map((img, idx) => {
        const isCurrent = idx === currentIndex;
        const isNext = idx === (currentIndex + 1) % images.length;
        const isNextNext = idx === (currentIndex + 2) % images.length;

        let zIndex = 0;
        let opacity = 0;
        let scale = 0.8;
        let xOffset = 100;
        let yOffset = 0;
        let rotateY = -45;
        let rotateZ = 10;
        let translateZ = -200;

        if (isCurrent) {
          zIndex = 30;
          opacity = 1;
          scale = 1;
          xOffset = 0;
          rotateY = 0;
          rotateZ = 0;
          translateZ = 0;
        } else if (isNext) {
          zIndex = 20;
          opacity = 0.7;
          scale = 0.95;
          xOffset = 30;
          rotateY = -15;
          rotateZ = 2;
          translateZ = -100;
        } else if (isNextNext) {
          zIndex = 10;
          opacity = 0.4;
          scale = 0.9;
          xOffset = 60;
          rotateY = -25;
          rotateZ = 4;
          translateZ = -200;
        }

        return (
          <div
            key={idx}
            className="absolute inset-0 transition-all duration-1000 ease-in-out will-change-transform"
            style={{
              zIndex,
              opacity,
              transformStyle: 'preserve-3d',
              transform: `
                translateX(${xOffset}px) 
                translateY(${yOffset}px) 
                translateZ(${translateZ}px) 
                scale(${scale}) 
                rotateY(${rotateY}deg) 
                rotateZ(${rotateZ}deg)
              `,
            }}
          >
            <div className="w-full h-full rounded-[60px] overflow-hidden border-[4px] border-primary/20 shadow-2xl bg-background-dark">
              <img
                src={img}
                alt="Real Estate & Leadership"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animations for general sections
    const revealSections = gsap.utils.toArray(['.reveal-up', '.reveal-section']);
    revealSections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
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

    // Cinematic Landing Page Quote Text Fill
    const lpQuoteWords = gsap.utils.toArray('.lp-quote-word');
    gsap.fromTo(lpQuoteWords,
      { color: 'rgba(255, 255, 255, 0.1)' },
      {
        color: '#ffffff',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.lp-quote-reveal-section',
          start: 'top 100%',
          end: 'bottom 60%',
          scrub: 1,
        }
      }
    );
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-32 bg-background text-foreground overflow-hidden">
        <div className="container mx-auto px-6 md:px-22">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-up">
              <div className="w-16 h-[1px] bg-primary mb-12" />
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
                About<br />The Real Estate Fund
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-12">
                Multi-family Real Estate Investments with Proven Returns
              </p>

              <div className="max-w-lg space-y-8 text-foreground/70 font-light leading-relaxed text-lg">
                <p>
                  The Real Estate Fund is a low leverage Private Equity Fund created to facilitate the acquisition of investment real estate with a particular emphasis on purchasing value-added multi-family properties.
                </p>
                <p>
                  Founded by Randolph De Lano, who has a long history of ensuring consistently high standards and excellent results for his investors. Our seasoned team has decades of experience investing in properties, providing Monthly Cash Flow and Capital Growth.
                </p>
                <Link href="/about" className="flex items-center gap-3 text-primary text-[11px] font-bold uppercase tracking-[0.2em] pt-4 group">
                  <span className="border-b border-primary pb-1 group-hover:border-foreground group-hover:text-foreground transition-all">Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="reveal-up">
              <StackedSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Quote Section */}
      <section className="lp-quote-reveal-section py-12 md:py-20 bg-[#0A1411] text-center px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl lg:text-[5.5em] leading-[1.1] font-medium tracking-tight text-white/10">
            {`The Real Estate Fund's business model is simple: Get into the real estate market near a low point and get out before an economic downturn.`.split(' ').map((word, i) => (
              <span key={i} className="lp-quote-word inline-block mr-[0.2em] mb-[0.1em]">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </section>


      {/* Investments Section */}
      <section id="investments" className="py-24 bg-[#0A1411] text-white">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="reveal-up mb-24">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white tracking-tight">
              Investments
            </h2>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold opacity-80 mt-4">
              Disciplined Focus & Multi-family Excellence
            </p>
          </div>

          {/* First Investment Block */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
            {/* Image First on Mobile */}
            <div className="reveal-up lg:order-2">
              <div className="rounded-sm overflow-hidden shadow-2xl border border-white/5">
                <img
                  alt="Modern Luxury Property"
                  className="w-full aspect-[16/10] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  src="https://www.theluxuryhomeshow.com/wp-content/themes/fluentformat/src/images/form-images/lhs-feature-gif.gif"
                />
              </div>
            </div>

            <div className="reveal-up lg:order-1">
              <h3 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] mb-8 md:mb-10 text-white tracking-tight">
                Portfolio Prime Acquisitions
              </h3>
              <div className="pl-6 md:pl-10 border-l border-primary/30 max-w-lg">
                <p className="text-white/70 font-light leading-relaxed mb-10 text-base md:text-lg">
                  Providing attractive housing for tenants seeking a safe environment they can be proud of. We focus on multi-family properties in the 24-60 unit range.
                </p>
                <button className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] border-b border-primary/50 pb-1 hover:text-white hover:border-white transition-all">
                  View Project Details
                </button>
              </div>
            </div>
          </div>

          {/* Second Investment Block */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Image First on Mobile */}
            <div className="reveal-up">
              <div className="rounded-sm overflow-hidden shadow-2xl border border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[16/10] md:h-[450px] object-cover hover:scale-105 transition-transform duration-1000"
                >
                  <source src="/HomeDecore.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="reveal-up lg:pl-20">
              <h3 className="font-display text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">Value-Add Approach</h3>
              <p className="text-white/60 font-light leading-relaxed text-base md:text-lg mb-10">
                It will take patience and rigorous due diligence to find the right opportunities for The Real Estate Fund to capitalize on. Our Founder or affiliates will invest directly in every property acquisition.
              </p>
              <div className="flex gap-10 text-primary opacity-40">
                <ShieldCheck size={44} strokeWidth={1} />
                <TrendingUp size={44} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUYERS CTA SECTION */}
      <BuyersCTA />

      {/* Partners Section (Testimonials) */}
      <section id="testimonials" className="py-8 md:py-10 bg-accent-green overflow-hidden relative">
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

        <div className="-mt-6 md:mt-0 reveal-up">
          <PartnerSlider />
        </div>
      </section>

      {/* GLOBAL FOOTPRINT */}
      <GlobalFootprint />

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background-dark border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center reveal-up">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 text-foreground leading-tight">Join The<br />Real Estate Fund Club</h2>
          <div className="flex justify-center items-center gap-6 mb-20">
            <div className="w-16 h-[1px] bg-primary" />
            <ShieldCheck size={24} className="text-primary" />
            <div className="w-16 h-[1px] bg-primary" />
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left bg-primary/5 p-10 md:p-16 rounded-3xl backdrop-blur-xl border border-primary/10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-2">Full Name</label>
              <input
                type="text"
                placeholder="Randolph De Lano"
                className="w-full bg-background-dark/50 border-primary/20 text-foreground rounded-2xl px-6 py-5 focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-2">Email Address</label>
              <input
                type="email"
                placeholder="name@firm.com"
                className="w-full bg-background-dark/50 border-primary/20 text-foreground rounded-2xl px-6 py-5 focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-2">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full bg-background-dark/50 border-primary/20 text-foreground rounded-2xl px-6 py-5 focus:border-primary transition-all outline-none resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full py-6 bg-primary text-background text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-foreground hover:text-background transition-all duration-500 shadow-2xl">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
