'use client';

import React from 'react';
import { Search, Heart, Map, User } from 'lucide-react';

const MobileBottomNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-white/10 py-4 px-6 z-[100] safe-area-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
                <button className="flex flex-col items-center gap-1 text-primary group">
                    <Search size={22} className="group-active:scale-90 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-foreground/40 hover:text-primary transition-colors group">
                    <Heart size={22} className="group-active:scale-90 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Saved</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-foreground/40 hover:text-primary transition-colors group">
                    <Map size={22} className="group-active:scale-90 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Map</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-foreground/40 hover:text-primary transition-colors group">
                    <User size={22} className="group-active:scale-90 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;
