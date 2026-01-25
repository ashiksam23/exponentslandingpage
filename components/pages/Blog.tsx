import React, { useEffect } from 'react';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

interface BlogProps {
    onNavigate: (page: 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos') => void;
}

const POSTS = [
    {
        id: 'sovereignty',
        title: 'Operational Sovereignty: The Founder\'s Guide to Administrative Freedom',
        excerpt: 'Stop being the bottleneck. Learn how to install Operational Sovereignty and decouple your genius from administrative friction.',
        date: 'Jan 24, 2026',
        readTime: '12 min read',
        image: '/assets/blog/operational-sovereignty.png',
        category: 'Strategy',
        route: 'post-sovereignty' as const
    },
    {
        id: 'cos',
        title: 'The New Chief of Staff: How AI is Redefining Executive Support in 2026',
        excerpt: 'The traditional EA is dead. Discover how the AI Chief of Staff is redefining executive support, context management, and founder productivity.',
        date: 'Jan 24, 2026',
        readTime: '10 min read',
        image: '/assets/blog/ai-chief-of-staff.png',
        category: 'Intelligence',
        route: 'post-cos' as const
    }
];

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
    useEffect(() => {
        document.title = "Intelligence Briefs | ExponentOS";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-white dark:bg-brand-black transition-colors duration-500 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="max-w-4xl mb-16">
                    <button
                        onClick={() => onNavigate('home')}
                        className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-red transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Return to Command Center
                    </button>

                    <h1 className="text-5xl md:text-7xl font-bold text-brand-black dark:text-white leading-[0.95] tracking-tighter mb-6 uppercase">
                        Intelligence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/60">Briefs</span>
                    </h1>
                    <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-400 font-light leading-relaxed max-w-2xl">
                        Strategic dispatches on operational sovereignty, AI-driven leverage, and the future of high-performance execution.
                    </p>
                </div>

                {/* Featured Post (First one) */}
                <div className="mb-20">
                    <div
                        className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-neutral-200 dark:border-brand-neutral-800 overflow-hidden cursor-pointer hover:border-brand-red/50 transition-colors duration-500"
                        onClick={() => onNavigate(POSTS[0].route)}
                    >
                        <div className="relative h-64 lg:h-auto overflow-hidden">
                            <img
                                src={POSTS[0].image}
                                alt={POSTS[0].title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity"></div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-brand-neutral-50 dark:bg-brand-neutral-900/50">
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-red mb-6">
                                <span className="px-2 py-1 bg-brand-red/10 rounded-sm">{POSTS[0].category}</span>
                                <span className="text-brand-neutral-400 dark:text-brand-neutral-600">Featured Brief</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white leading-tight mb-6 group-hover:text-brand-red transition-colors">
                                {POSTS[0].title}
                            </h2>
                            <p className="text-lg text-brand-neutral-600 dark:text-brand-neutral-400 mb-8 font-light line-clamp-3">
                                {POSTS[0].excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-neutral-500 font-mono">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {POSTS[0].date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {POSTS[0].readTime}</span>
                                </div>
                                <div className="w-10 h-10 border border-brand-neutral-300 dark:border-brand-neutral-700 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                                    <ArrowRight className="w-4 h-4 text-brand-black dark:text-white group-hover:text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {POSTS.slice(1).map((post) => (
                        <div
                            key={post.id}
                            className="group flex flex-col border border-brand-neutral-200 dark:border-brand-neutral-800 cursor-pointer hover:border-brand-red/50 transition-all duration-500"
                            onClick={() => onNavigate(post.route)}
                        >
                            <div className="relative aspect-video overflow-hidden border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-brand-black/80 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 bg-brand-neutral-50/50 dark:bg-brand-neutral-900/30">
                                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-neutral-500 font-mono mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-brand-neutral-300 dark:bg-brand-neutral-700 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-brand-black dark:text-white mb-4 leading-snug group-hover:text-brand-red transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                    Read Dispatch <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Lead Magnet Placeholder */}
                <div className="mt-24 p-12 bg-brand-black text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Stay Sovereign</h2>
                        <p className="text-brand-neutral-400 max-w-xl mx-auto mb-8 font-light">
                            Join 2,500+ founders receiving weekly strategic dispatches on AI-driven leverage and operational sovereignty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your executive email"
                                className="flex-1 bg-brand-neutral-900 border border-brand-neutral-800 px-6 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                            />
                            <Button variant="primary" className="whitespace-nowrap px-8">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
