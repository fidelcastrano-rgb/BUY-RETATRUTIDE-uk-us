'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronRight, MessageSquare, Info } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  cat: string;
}

interface FaqClientProps {
  faqData: FaqItem[];
  categories: string[];
}

export default function FaqClient({ faqData, categories }: FaqClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({});

  // Filters QA list based on search and selected category
  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = activeCat === 'All' || item.cat === activeCat;
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCat, faqData]);

  const toggleOpen = (q: string) => {
    setOpenIds((prev) => ({ ...prev, [q]: !prev[q] }));
  };

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">Research FAQ Board</span>
        </div>

        {/* Title sections */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
            BIO-ASSAY COMPLIANCE ARCHIVES
          </span>
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight mb-0">
            Peptide Sourcing & Logistics Knowledge Board
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
            Verify key documentation, chemical handling properties, transit guidelines, and secure bank escrow payment processes directly within our structured QA database.
          </p>
        </div>

        {/* Search Input bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions (e.g., Reconstitution, HPLC, Purity, Delivery)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#CBD5E1] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm shadow-sm transition-all text-[#0F172A]"
          />
        </div>

        {/* Categories + QA side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start pt-4">
          
          {/* Categories Sticky Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-2 select-none">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#475569] uppercase block mb-4 px-3">
              FAQ DEPARTMENTS:
            </span>
            <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`text-xs font-semibold text-left px-4 py-3 rounded-xl transition-all shrink-0 cursor-pointer ${
                    activeCat === cat
                      ? 'bg-[#2563EB] text-white shadow'
                      : 'bg-white border border-[#CBD5E1]/50 text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Quick Helper indicator card in Sidebar */}
            <div className="hidden lg:block bg-[#EEF2F7]/50 border border-[#CBD5E1]/30 rounded-2xl p-4 space-y-2.5 mt-8">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#2563EB] font-bold uppercase">
                <Info className="w-4 h-4 shrink-0" />
                <span>Audited Archives</span>
              </div>
              <p className="text-[10px] text-zinc-550 leading-relaxed font-mono">
                Our safety department updates these logs weekly. If your analytical assay questions remain, submit an inquiry to sales@buyretat.com.
              </p>
            </div>
          </div>

          {/* QA Accordeon Board */}
          <div className="lg:col-span-3 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.q];
                return (
                  <div
                    key={faq.q}
                    className="bg-white border border-[#CBD5E1] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleOpen(faq.q)}
                      className="w-full flex justify-between items-center px-6 py-5 text-left font-heading font-extrabold text-[#0F172A] text-sm sm:text-base tracking-tight hover:bg-[#EEF2F7]/40 transition-colors cursor-pointer select-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-405 shrink-0 ml-4 transition-transform ${
                          isOpen ? 'rotate-180 text-[#FF6B1A]' : 'text-[#2563EB]'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#CBD5E1]/40 bg-[#EEF2F7]/10 animate-fade-in">
                        <p className="mb-0 font-normal leading-relaxed text-[13px]">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-white border border-[#CBD5E1]/50 rounded-2xl p-12 text-center text-slate-500 font-sans space-y-3">
                <p>No analytical questions match your search scope: &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCat('All');
                  }}
                  className="text-xs text-[#2563EB] font-bold underline cursor-pointer"
                >
                  Clear all search terms
                </button>
              </div>
            )}
          </div>

        </div>

        {/* FAQ CTA Section at bottom */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden mt-16 shadow-lg border border-[#FF6B1A]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-[#FF6B1A]/5" />
          <div className="max-w-2xl space-y-6 relative z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 px-3 py-1 bg-slate-950 text-xs font-mono text-[#FF6B1A] uppercase rounded-full">
              <MessageSquare className="w-4 h-4" />
              <span>Helpline Representative Available</span>
            </div>
            
            <h3 className="font-heading font-extrabold text-[#F8FAFC] text-2.5xl sm:text-3xl tracking-tight leading-none mb-0">
              Need Direct Chemical Advisory Assistance?
            </h3>
            
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Our safety representatives and chemical formulation dispatchers provide continuous WhatsApp correspondence to configure bulk kit pricing and shipping parameters.
            </p>

            <div className="pt-2.5 flex flex-wrap gap-4 justify-center sm:justify-start select-none">
              <Link
                href="/contact"
                className="bg-[#FF6B1A] hover:bg-[#1D4ED8] text-white text-xs font-bold font-heading uppercase py-3.5 px-6 rounded-xl transition-all shadow"
              >
                Inquire Rep Directly
              </Link>
              <Link
                href="/products"
                className="bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs font-bold font-heading uppercase py-3.5 px-6 rounded-xl transition-all"
              >
                Explore Peptide Catalog
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
