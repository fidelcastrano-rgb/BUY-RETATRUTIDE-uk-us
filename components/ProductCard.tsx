'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/lib/cart';
import { Product } from '@/lib/products';
import { ArrowUpRight, ShieldCheck, ShoppingCart, Percent } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToOrder } = useCart();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const selectedVariant = product.variants[selectedVariantIdx];

  // Calculate dynamic strikethrough or pricing
  const currentPrice = selectedVariant.price;
  const originalPrice = selectedVariant.originalPrice;

  const handleAdd = () => {
    addToOrder({
      name: product.name,
      variant: selectedVariant.label,
      price: currentPrice,
    });
    setAdded(true);
  };

  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => {
        setAdded(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [added]);

  return (
    <div
      className="bg-white border border-[#CBD5E1] hover:border-[#2563EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
      data-sp={currentPrice}
      data-sv={selectedVariant.label}
    >
      {/* Product Image and Badge Overlay */}
      <Link href={`/products/${product.slug}`} className="relative aspect-video w-full bg-[#EEF2F7] overflow-hidden block">
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF6B1A] to-amber-500 text-white text-[10px] font-bold font-heading uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
            {product.badge}
          </div>
        )}
        
        {/* COA Resolution Strip */}
        <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md rounded-lg p-2.5 flex items-center gap-1.5 border border-white/15 shadow-md">
          <ShieldCheck className="w-4 h-4 text-[#10B981] animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[10px] font-mono leading-none tracking-wider text-white uppercase font-bold">
              JUNE 2026 HPLC COMPLIANT
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#10B981] font-bold leading-none mt-1">
              PURITY: {product.coaVerified}
            </span>
          </div>
        </div>
      </Link>

      {/* Main product identifiers */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Category Tag */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-[#2563EB] uppercase tracking-widest font-bold bg-[#EEF2F7] px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-[#0F172A] text-lg sm:text-xl tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-[#475569] leading-relaxed font-normal italic">
            &ldquo;{product.tagline}&rdquo;
          </p>

          <p className="text-xs text-[#475569] leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Variant selection buttons */}
        <div className="mt-6 space-y-2.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569]">
            Select Formulation:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {product.variants.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariantIdx(i)}
                className={`text-xs p-2.5 rounded-lg border text-left transition-all relative flex flex-col justify-between group/v ${
                  selectedVariantIdx === i
                    ? 'border-[#2563EB] bg-[#EEF2F7]/40 text-[#0F172A]'
                    : 'border-[#CBD5E1] bg-white text-[#475569] hover:bg-[#EEF2F7]/20 hover:border-slate-400'
                }`}
              >
                <span className="font-semibold tracking-wide block truncate">{v.label}</span>
                <span className="font-mono mt-1 text-[11px] block text-[#0F172A] font-bold">
                  £{v.price}
                </span>
                
                {/* Savings element inside variant buttons */}
                {v.savings && (
                  <span className="absolute top-1.5 right-1.5 bg-[#10B981] text-white font-semibold text-[8px] px-1 rounded font-mono uppercase tracking-widest flex items-center">
                    <Percent className="w-1.5 h-1.5 mr-0.5" />
                    {v.savings.split('Save ')[1]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Price and Call-To-Actions */}
        <div className="mt-8 pt-5 border-t border-[#CBD5E1] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono text-[#475569] tracking-wider leading-none">
              EST. RESEARCH COST
            </span>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-xs text-[#475569] font-normal leading-none lowercase">from</span>
              <span className="text-2xl font-bold font-heading text-[#0F172A] leading-none">
                £{currentPrice}
              </span>
              
              {/* Optional strikethrough price */}
              {originalPrice && (
                <span className="text-xs text-zinc-400 line-through leading-none font-mono">
                  £{originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2.5">
            {/* View Details Link */}
            <Link
              href={`/products/${product.slug}`}
              className="p-3 bg-[#EEF2F7] hover:bg-slate-300 text-[#0F172A] rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-[#CBD5E1]/20"
              title="Access full HPLC verification, specifications, and COA files"
              aria-label={`View clinical characteristics of ${product.name}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Add to Order Button */}
            <button
              onClick={handleAdd}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 ${
                added
                  ? 'bg-[#10B981] text-white cursor-default'
                  : 'bg-[#FF6B1A] text-white hover:bg-[#1D4ED8]'
              }`}
              disabled={added}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{added ? '✓ Added' : 'Add to Order'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
