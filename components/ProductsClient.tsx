'use client';

import React, { useState } from 'react';
import { PRODUCTS_DATA } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { ShieldCheck, Truck, Coins, RefreshCw } from 'lucide-react';

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories extracted dynamically
  const categories = ['All', ...Array.from(new Set(PRODUCTS_DATA.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  const trustItems = [
    { title: 'Independent HPLC Audited', desc: '99%+ minimum purity guaranteed per batch', icon: ShieldCheck },
    { title: 'Sub-Zero Cryo Storage', desc: 'Maintained at strict sub-zero environments', icon: RefreshCw },
    { title: 'Free domestic dispatch', desc: 'Over US mainland on multiple kit volumes', icon: Truck },
    { title: 'Discreet Billing Details', desc: 'Zero pharmaceutical labeling on packing', icon: Coins },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Breadcrumb & Titles */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#475569]">
            <span className="hover:text-[#2563EB] cursor-pointer"><a href="/">Home</a></span>
            <span>&bull;</span>
            <span className="text-[#0F172A] font-bold">Research Products Catalog</span>
          </div>
          
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-none mb-0">
            Certified Research Peptides Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl font-normal">
            Explore HPLC-purified lyophilized compounds formulated strictly for scientific evaluation, in-vitro metabolic assays, and chemical characterizations.
          </p>
        </div>

        {/* Sticky category Filter Bar */}
        <div className="sticky top-20 z-30 bg-[#F8FAFC]/80 backdrop-blur-md py-4 border-y border-[#CBD5E1]/40 flex gap-2 overflow-x-auto select-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold font-heading uppercase tracking-widest px-5 py-3 rounded-full shrink-0 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-white border border-[#CBD5E1] text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Trust Bar Section at bottom (4 trust items) */}
        <div className="pt-16 border-t border-[#CBD5E1]/40 space-y-8">
          <div className="text-center">
            <span className="text-[10px] font-mono text-[#2563EB] font-bold tracking-widest uppercase">
              WARRANTY AND HANDLING GUARANTEES
            </span>
            <h3 className="font-heading font-extrabold text-[#0F172A] text-lg sm:text-xl tracking-tight mt-1 mb-0">
              Your Research Security is Our Absolute Priority
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#CBD5E1] rounded-2xl p-6 flex flex-col space-y-4 hover:shadow shadow-sm transition-all text-center"
              >
                <div className="bg-[#EEF2F7] p-3 rounded-xl mx-auto text-[#2563EB] w-12 h-12 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-[#0F172A]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
