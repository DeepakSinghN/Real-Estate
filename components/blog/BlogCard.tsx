'use client';

import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    id: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    title: string;
    subtitle: string;
    excerpt: string;
    excerptPrefix: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    id,
    image,
    author,
    date,
    readTime,
    title,
    subtitle,
    excerpt,
    excerptPrefix
}) => {
    return (
        <Link href={`/blog/${id}`} className="block group">
            <div className="flex flex-col md:flex-row bg-[#0E1B18] border border-white/5 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden">
                {/* Image Section */}
                <div className="md:w-[45%] overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 aspect-[4/3] md:aspect-auto"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 md:w-[55%] flex flex-col justify-center bg-[#0E1B18]">
                    {/* Author Metadata */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                            <span>{author.name}</span>
                            <span className="opacity-30">•</span>
                            <span className="text-foreground/40">{date}</span>
                            <span className="opacity-30">•</span>
                            <span className="text-foreground/40">{readTime}</span>
                        </div>
                    </div>

                    {/* Blog Titles */}
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground font-medium uppercase tracking-tight leading-[1.1] mb-6 group-hover:text-primary transition-colors duration-500">
                        {title}
                    </h2>

                    <h4 className="font-sans text-xs md:text-sm font-bold text-primary/80 mb-8 uppercase tracking-[0.3em]">
                        {subtitle}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed line-clamp-3 md:line-clamp-4 italic border-l border-primary/20 pl-6">
                        <span className="font-bold text-foreground/80 not-italic mr-2">{excerptPrefix}:</span>
                        {excerpt}
                    </p>

                    {/* Hover Action */}
                    <div className="mt-10 overflow-hidden h-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            Read Full Story <span className="text-lg">→</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
