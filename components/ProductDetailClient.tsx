'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { Product } from '@/lib/products';
import {
  ShieldCheck,
  CheckCircle,
  ShoppingCart,
  Send,
  Mail,
  HelpCircle,
  BadgeAlert,
  FileText,
  ChevronRight
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { addToOrder } = useCart();
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'package' | 'storage' | 'supply'>('package');
  const [added, setAdded] = useState(false);

  const selectedVariant = product.variants[selectedVariantIdx];
  const currentPrice = selectedVariant.price;
  const originalPrice = selectedVariant.originalPrice;

  const handleAdd = () => {
    addToOrder({
      name: product.name,
      variant: selectedVariant.label,
      price: currentPrice,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const handleDirectWhatsApp = () => {
    let msg = `🧪 *NEW DIRECT INQUIRY - BUY RETATRUTIDE US & UK*\n`;
    msg += `----------------------------------------------\n`;
    msg += `• Product: ${product.name}\n`;
    msg += `• Formulation: ${selectedVariant.label}\n`;
    msg += `• Reference Price: $${currentPrice}\n`;
    msg += `----------------------------------------------\n`;
    msg += `Please send bank payment and rapid transit logistics coordinates.`;
    window.open(`https://wa.me/19174100236?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleDirectEmail = () => {
    const subject = `Inquiry: ${product.name} [${selectedVariant.label}]`;
    let msg = `Product: ${product.name}\n`;
    msg += `Formulation: ${selectedVariant.label}\n`;
    msg += `Reference Price: $${currentPrice}\n\n`;
    msg += `Please provide bulk invoice, purity logs, and secure payment coordinates.`;
    window.location.href = `mailto:sales@buyretat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="w-full">
      {/* 2-Column Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Image switcher */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden border border-[#CBD5E1] bg-white p-2 shadow-sm">
            <img
              src={product.images[activeImgIdx]}
              alt={`${product.name} chromatography raw layout`}
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute top-4 right-4 bg-slate-900/95 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
              Purity: {product.coaVerified}
            </div>
          </div>

          {/* Thumbnail selector (3 images) */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                className={`aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all bg-white relative p-1 cursor-pointer ${
                  activeImgIdx === idx ? 'border-[#2563EB] scale-95 shadow-md' : 'border-slate-200 hover:border-slate-400'
                }`}
                aria-label={`Switch main product view to camera angle ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${product.name} angle thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full rounded-xl"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Transactional details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            {/* Category tag */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#2563EB] uppercase tracking-widest font-extrabold bg-[#EEF2F7] px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#10B981]">
                <CheckCircle className="w-3.5 h-3.5" />
                IN STOCK • VERIFIED BATCH
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none mb-0">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic font-normal">
              &ldquo;{product.tagline}&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {product.description}
          </p>

          {/* Pricing block */}
          <div className="p-5 bg-white border border-[#CBD5E1] rounded-2xl shadow-sm space-y-1.5Packed">
            <span className="text-[9px] font-mono text-[#475569] uppercase tracking-wider block">
              Estimated Volume Cost:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-[#475569] lowercase font-normal">from</span>
              <span className="text-3xl font-bold font-heading text-[#0F172A] leading-none">
                ${currentPrice}
              </span>
              
              {originalPrice && (
                <span className="text-xs text-zinc-400 line-through leading-none font-mono">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Variant selector buttons */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569]">
              Formulation & Packaging:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.variants.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariantIdx(i)}
                  className={`text-xs p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                    selectedVariantIdx === i
                      ? 'border-2 border-[#2563EB] bg-[#EEF2F7]/50 text-[#0F172A] shadow-sm'
                      : 'border-slate-200 bg-white text-[#475569] hover:bg-[#EEF2F7]/20 hover:border-slate-300'
                  }`}
                >
                  <span className="font-bold tracking-wide text-base">{v.label}</span>
                  <span className="font-mono mt-1 text-sm font-bold text-[#0F172A]">
                    ${v.price}.00
                  </span>
                  
                  {v.savings && (
                    <span className="absolute top-3.5 right-3.5 bg-[#10B981] text-white font-semibold text-[9px] px-2 py-0.5 rounded-full font-mono uppercase tracking-widest">
                      {v.savings}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Buy Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* WhatsApp direct */}
            <button
              onClick={handleDirectWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] text-xs font-bold uppercase py-4 rounded-xl transition-all shadow cursor-pointer active:scale-95 text-center"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Order via WA</span>
            </button>

            {/* Email direct */}
            <button
              onClick={handleDirectEmail}
              className="flex items-center justify-center gap-2 bg-slate-850 hover:bg-slate-750 text-white text-xs font-bold uppercase py-4 rounded-xl transition-all shadow cursor-pointer active:scale-95 border border-white/5"
            >
              <Mail className="w-4 h-4" />
              <span>Email order</span>
            </button>

            {/* Add to order builder */}
            <button
              onClick={handleAdd}
              className={`flex items-center justify-center gap-2 text-xs font-bold uppercase py-4 rounded-xl shadow cursor-pointer transition-all active:scale-95 ${
                added
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#FF6B1A] text-white hover:bg-[#1D4ED8]'
              }`}
              disabled={added}
            >
              <ShoppingCart className="w-4 h-4 mr-0.5" />
              <span>{added ? '✓ Added' : 'Add to Builder'}</span>
            </button>
          </div>

          {/* Info boxes - Orange & Red borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Orange box: How ordering works */}
            <div className="border-l-4 border-[#FF6B1A] bg-[#FF6B1A]/5 rounded-r-xl p-4.5 text-xs text-[#475569] space-y-1">
              <div className="flex items-center gap-1.5 text-[#FF6B1A] font-bold uppercase font-heading text-[10px] tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Private Sourcing Core</span>
              </div>
              <p className="font-normal text-[11px] leading-relaxed">
                Add materials to order then dispatch inquires. We generate unique bank transfer parameters or crypto addresses directly inside secured correspondence lines. Dispatched discreetly within 12 hours.
              </p>
            </div>

            {/* Red box: Safety protocols */}
            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-xl p-4.5 text-xs text-[#475569] space-y-1">
              <div className="flex items-center gap-1.5 text-red-500 font-bold uppercase font-heading text-[10px] tracking-wider">
                <BadgeAlert className="w-4 h-4 text-red-500 shrink-0" />
                <span>Laboratory Safety Protocol</span>
              </div>
              <p className="font-normal text-[11px] leading-relaxed">
                Materials are designated for in-vitro analytical testing, comparative assays, academic structural characterizations. Strictly prohibited for human clinical intervention.
              </p>
            </div>
          </div>

          {/* COA verification link button */}
          <div className="pt-2">
            <a
              href="#coa"
              className="flex items-center gap-2 text-xs font-mono text-[#2563EB] font-bold hover:underline"
            >
              <FileText className="w-4 h-4 text-[#2563EB]" />
              <span>Access Certificate of Lot HPLC Analytics ({product.coaDocId})</span>
            </a>
          </div>

          {/* 3 tabs: Package Contents / Storage / Supply Chain */}
          <div className="border border-[#CBD5E1] rounded-2xl overflow-hidden bg-white mt-8 shadow-sm">
            <div className="grid grid-cols-3 border-b border-[#CBD5E1] bg-[#EEF2F7]/50">
              <button
                onClick={() => setActiveTab('package')}
                className={`py-3.5 text-xs font-bold uppercase font-heading tracking-wide transition-colors cursor-pointer ${
                  activeTab === 'package'
                    ? 'bg-white text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
                }`}
              >
                Package Contents
              </button>
              <button
                onClick={() => setActiveTab('storage')}
                className={`py-3.5 text-xs font-bold uppercase font-heading tracking-wide transition-colors cursor-pointer ${
                  activeTab === 'storage'
                    ? 'bg-white text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
                }`}
              >
                Storage Guide
              </button>
              <button
                onClick={() => setActiveTab('supply')}
                className={`py-3.5 text-xs font-bold uppercase font-heading tracking-wide transition-colors cursor-pointer ${
                  activeTab === 'supply'
                    ? 'bg-white text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
                }`}
              >
                Supply Chain
              </button>
            </div>

            <div className="p-6 text-xs text-[#475569] leading-relaxed">
              {activeTab === 'package' && <p>{product.tabs.packageContents}</p>}
              {activeTab === 'storage' && <p>{product.tabs.storage}</p>}
              {activeTab === 'supply' && <p>{product.tabs.supplyChain}</p>}
            </div>
          </div>

          {/* 4 trust badges grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-[#EEF2F7]/30 border border-[#CBD5E1]/40 rounded-2xl p-4">
            {product.trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col text-center sm:text-left space-y-1">
                <span className="text-xs font-bold font-heading text-[#0F172A] leading-tight block">
                  {badge.title}
                </span>
                <span className="text-[10px] text-[#475569] font-sans font-normal leading-normal block">
                  {badge.desc}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Certificate of analysis anchoring block */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden mt-12" id="coa">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 to-transparent" />
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#10B981]/15 border border-[#10B981]/30 px-3.5 py-1 text-xs font-mono text-[#10B981] uppercase rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>HPLC Quality Validation Checked</span>
          </div>
          
          <h3 className="font-heading font-extrabold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight leading-none mb-0">
            Certificate of Analysis (COA) Validation
          </h3>
          
          <p className="text-xs text-zinc-300 leading-relaxed font-normal">
            Every batch lot undergoes HPLC analysis matching high-grade molecular expectations. Serial <strong>{product.coaDocId}</strong> validated purity of compound at <strong>{product.coaVerified}</strong> with completely zero organic impurities or toxic solvents detected.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={handleDirectWhatsApp}
              className="bg-[#10B981] hover:bg-[#1EBE5A] text-white text-xs font-bold font-heading uppercase py-3.5 px-6 rounded-xl transition-all shadow cursor-pointer text-center"
            >
              Request HPLC PDF via WhatsApp
            </button>
            <Link
              href="/about"
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs font-bold font-heading uppercase py-3.5 px-6 rounded-xl transition-all text-center"
            >
              Authority & Story
            </Link>
          </div>
        </div>
      </section>

      {/* Below: Related products grid */}
      <div className="pt-16 border-t border-[#CBD5E1]/40 space-y-8 mt-16">
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-mono text-[#2563EB] font-bold tracking-widest uppercase">
            COMPREHENSIVE COMPARISON
          </span>
          <h2 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl tracking-tight mt-1 mb-0">
            Related Research Compounds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
