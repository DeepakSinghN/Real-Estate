'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PartnerSlider from '@/components/PartnerSlider';
import GlobalFootprint from '@/components/GlobalFootprint';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { Calendar, Clock, User, ArrowLeft, Share2, Quote } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const blogPosts = [
    {
        id: 'london-property',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
        background: 'https://www.theluxuryhomeshow.com/wp-content/uploads/2025/11/A-New-Standard-of-Coastal-Luxury-in-the-Pacific-Palisades-Riviera-aerial-view.jpg',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean',
            role: 'Founding Partner'
        },
        date: 'Oct 7, 2025',
        readTime: '29 minute watch',
        title: 'Prime Central London Property with Buying Agent Cliff Gardener',
        subtitle: 'The Resilience of the London Market',
        content: [
            { type: 'p', text: 'Welcome to this exclusive edition of Sun, Sea & Second Homes. Today, we are honored to sit down with one of London\'s most prominent buying agents, Cliff Gardener.' },
            { type: 'quote', text: 'The London market isn’t just about property; it’s about heritage, scarcity, and a level of security that few other global cities can match.', author: 'Cliff Gardener' },
            { type: 'h3', text: 'Current Trends in PCL' },
            { type: 'p', text: 'Cliff shares deep insights into why international buyers are returning to Prime Central London (PCL) in record numbers. "We are seeing a shift from investment-only acquisitions to lifestyle-driven purchases," says Cliff. "Buyers want homes that tell a story, properties with character that have been meticulously maintained."' },
            { type: 'dialogue', speaker: 'Sean', text: 'Cliff, you’ve seen several market cycles. What makes this one different for the international investor?' },
            { type: 'dialogue', speaker: 'Cliff', text: 'Great question, Sean. It\'s the flight to quality. In previous years, volume was high. Now, it\'s about precision. Buyers would rather wait six months for the perfect lateral apartment in Mayfair than compromise on a standard townhouse.' },
            { type: 'p', text: 'The interview continues to explore the impact of recent interest rate shifts and why certain boroughs like Chelsea and Belgravia remain evergreen favorites for the discerning homeowner.' }
        ]
    },
    {
        id: 'daniel-atwell',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
        background: 'https://www.theluxuryhomeshow.com/wp-content/uploads/2025/11/A-New-Standard-of-Coastal-Luxury-in-the-Pacific-Palisades-Riviera-office.jpg',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean',
            role: 'Founding Partner'
        },
        date: 'Aug 15, 2025',
        readTime: '33 minute watch',
        title: 'A Conversation with Daniel Atwell of One Builders',
        subtitle: 'Building the Future of Luxury',
        content: [
            { type: 'p', text: 'In the world of high-end construction, details aren’t just important—they are everything. We spoke with Daniel Atwell, the visionary behind One Builders.' },
            { type: 'quote', text: 'Luxury is often invisible. It’s in the acoustic dampening of a wall, the precision of a hidden hinge, and the seamless integration of climate control.', author: 'Daniel Atwell' },
            { type: 'p', text: 'One Builders has been at the forefront of some of the most ambitious residential projects in the coastal regions. Daniel discusses the challenges of building in salt-heavy environments and the evolution of "smart luxury."' },
            { type: 'dialogue', speaker: 'Sean', text: 'Danny, you’ve worked with clients who demand the impossible. How do you manage those expectations?' },
            { type: 'dialogue', speaker: 'Danny', text: 'Transparency is our foundation. When we are dealing with reclaimed marble from Italy or custom millwork from Germany, the timeline is part of the story. Our clients value the journey as much as the result.' }
        ]
    },
    {
        id: 'luxury-market',
        image: 'https://images.unsplash.com/photo-1600607687940-477a4a989df3?auto=format&fit=crop&q=80&w=2070',
        background: 'https://www.theluxuryhomeshow.com/wp-content/uploads/2026/02/inside-a-4.7m-studio-city-residence-with-a-tulum-inspired-resort-feel-kitchen.jpg',
        author: {
            name: 'Sean Stewart',
            avatar: 'https://i.pravatar.cc/150?u=sean',
            role: 'Founding Partner'
        },
        date: 'July 12, 2025',
        readTime: '12 minute read',
        title: 'Mastering the Luxury Real Estate Market',
        subtitle: 'The Pillars of Elite Real Estate Engagement',
        content: [
            { type: 'p', text: 'NAVIGATING the upper echelons of global real estate requires more than just capital; it requires a nuanced understanding of culture, privacy, and long-term value.' },
            { type: 'h3', text: 'The Power of Discretion' },
            { type: 'p', text: 'In our world, the best properties often never hit the open market. Discretion is the true currency of the luxury sector. We explore how off-market transactions are handled and why networking is the most powerful tool in an agent\'s arsenal.' },
            { type: 'p', text: 'The article further discusses the rise of ESG (Environmental, Social, and Governance) factors in high-end residential choices and how the definition of "home" has expanded to include comprehensive wellness and security features.' }
        ]
    }
];

export default function BlogDetailPage() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);
    const container = React.useRef(null);

    if (!post) {
        notFound();
    }

    useGSAP(() => {
        gsap.fromTo('.reveal-hero',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
        );

        gsap.fromTo('.reveal-content',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.post-body',
                    start: 'top 85%',
                }
            }
        );
    }, { scope: container });

    return (
        <main ref={container} className="bg-background min-h-screen selection:bg-primary selection:text-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.background}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 reveal-hero">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-12 hover:pl-2 transition-all group">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Insight & Analysis
                            </span>
                            <div className="flex items-center gap-2 text-[10px] text-foreground/40 font-medium uppercase tracking-widest">
                                <Calendar size={14} className="text-primary/60" /> {post.date}
                            </div>
                        </div>

                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8 tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-wider">{post.author.name}</p>
                                    <p className="text-[10px] text-primary/60 uppercase tracking-widest mt-1 font-medium">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10" />
                            <div className="flex items-center gap-2 text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
                                <Clock size={14} className="text-primary/60" /> {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="post-body py-24 md:py-32 bg-background relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_350px] gap-20">
                        {/* Post Body content */}
                        <div className="space-y-12 max-w-3xl">
                            {post.content.map((item, idx) => {
                                if (item.type === 'p') {
                                    return <p key={idx} className="reveal-content text-foreground/70 text-lg md:text-xl font-light leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:mr-3 first-letter:float-left">{item.text}</p>;
                                }
                                if (item.type === 'h3') {
                                    return <h3 key={idx} className="reveal-content font-display text-3xl md:text-4xl text-white font-medium pt-8 tracking-tight">{item.text}</h3>;
                                }
                                if (item.type === 'quote') {
                                    return (
                                        <div key={idx} className="reveal-content relative py-12 px-10 md:px-16 bg-accent-green/30 border-l-4 border-primary rounded-r-2xl overflow-hidden group">
                                            <Quote className="absolute top-8 left-8 text-primary/20 w-16 h-16 -scale-x-100" />
                                            <p className="relative z-10 text-white text-2xl md:text-3xl font-display leading-relaxed italic mb-6">
                                                "{item.text}"
                                            </p>
                                            <cite className="relative z-10 text-primary text-xs font-bold uppercase tracking-[0.3em] not-italic">
                                                — {item.author}
                                            </cite>
                                        </div>
                                    );
                                }
                                if (item.type === 'dialogue') {
                                    return (
                                        <div key={idx} className="reveal-content flex gap-6 pb-4 border-b border-white/5">
                                            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] w-24 flex-shrink-0">{item.speaker}:</span>
                                            <p className="text-foreground/60 text-lg font-light leading-relaxed italic">
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                            {/* Share and Tags */}
                            <div className="reveal-content pt-20 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                                <div className="flex gap-4">
                                    {['Investment', 'Lifestyle', 'Privacy'].map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold text-foreground/40 border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.3em] border border-primary/20 px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-all">
                                    <Share2 size={16} /> Share Post
                                </button>
                            </div>
                        </div>

                        {/* Sidebar (Desktop) */}
                        <aside className="hidden lg:block space-y-16">
                            <div className="p-8 bg-[#0E1B18] border border-white/5 rounded-2xl reveal-content">
                                <h4 className="font-display text-xl text-white mb-6 tracking-tight">Investment Exclusive</h4>
                                <p className="text-[11px] text-foreground/50 leading-relaxed mb-10 font-medium">
                                    Access off-market multi-family listings and private insights reserved for club members.
                                </p>
                                <Link href="#contact" className="block w-full py-4 text-center bg-primary text-background text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-white transition-all shadow-xl">
                                    Request Information
                                </Link>
                            </div>

                            <div className="space-y-8 reveal-content">
                                <h4 className="font-display text-xl text-white tracking-tight border-b border-white/10 pb-4">Recent Updates</h4>
                                {['The Art of Discretion', 'Chelsea Real Estate 2026', 'Mediterranean Villas'].map((title) => (
                                    <div key={title} className="group cursor-pointer">
                                        <p className="text-[10px] text-primary/60 font-medium uppercase tracking-widest mb-2">Portfolio Insights</p>
                                        <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors font-medium leading-[1.4] line-clamp-2">{title}</p>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* GLOBAL FOOTPRINT */}
            <GlobalFootprint />

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

            {/* Contact CTA banner */}
            <section className="py-20 bg-primary text-background text-center px-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10 max-w-4xl mx-auto tracking-tight uppercase">
                    Buy properties.
                </h2>
                <Link href="#contact" className="inline-block px-12 py-6 border-2 border-background font-bold text-xs uppercase tracking-[0.4em] rounded-full hover:bg-background hover:text-primary transition-all shadow-2xl">
                    Inquire Now
                </Link>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
