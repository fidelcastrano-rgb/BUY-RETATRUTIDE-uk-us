'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen, Search, ChevronRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  date: string;
  author: string;
  heroImage: string;
  primaryKeyword: string;
}

interface BlogListingClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogListingClient({ posts, categories }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">Scientific Blog</span>
        </div>

        {/* Title block */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
            RESEARCH COMPLIANCE ARCHIVES
          </span>
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-none mb-0">
            Bio-Analytical Peptide Research Library
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
            Read comprehensive guides regarding chromatography certifications, proper sterile reconstituting math, dual vs triple-agonist comparative models, and chemical risk audits.
          </p>
        </div>

        {/* Filtering + Search controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center border-y border-[#CBD5E1]/45 py-5 select-none bg-white p-4.5 rounded-2xl shadow-sm">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0 border-r border-[#CBD5E1]/10 pr-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold font-heading uppercase tracking-widest px-4 py-2.5 rounded-xl shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] text-white shadow'
                    : 'bg-[#EEF2F7] text-[#475569] hover:bg-slate-350 hover:text-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Filter archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#2563EB] text-xs font-mono text-[#0F172A]"
            />
          </div>
        </div>

        {/* Blog Grid of 9 Cards! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#CBD5E1] hover:border-[#2563EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & tag */}
                <div className="relative aspect-video w-full bg-[#EEF2F7] overflow-hidden border-b border-[#CBD5E1]/40">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/10">
                    {post.category}
                  </div>
                </div>

                {/* content block */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[10px] font-mono text-[#475569] uppercase font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#FF6B1A]" />
                        {post.author.split(',')[0]}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-[#0F172A] text-lg tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#475550]/85 leading-relaxed font-normal line-clamp-3">
                      {post.shortDesc}
                    </p>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase font-heading tracking-wider">
                    <span className="text-[#2563EB] group-hover:text-[#FF6B1A] transition-colors inline-flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      <span>Read Full Guide</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 bg-white p-16 text-center border border-[#CBD5E1]/40 rounded-2xl text-slate-500">
              <p>No research guides match your current filter parameters.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
