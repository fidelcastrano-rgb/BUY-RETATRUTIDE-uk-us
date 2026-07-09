import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  FlaskConical,
  Activity,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Lock,
  Sparkles,
  Zap
} from 'lucide-react';
import { PRODUCTS_DATA } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import HomeSeoContent from '@/components/HomeSeoContent';
import HomeFaqAccordion from '@/components/HomeFaqAccordion';

export const metadata: Metadata = {
  title: 'Buy Retatrutide Online | 99% Pure Research Peptides US & UK',
  description: 'Sourcing 99%+ HPLC-verified Retatrutide, Tirzepatide, and Semaglutide lyophilized compounds. Strictly formulated and nitrogen-sealed for controlled laboratory assays.',
  alternates: {
    canonical: '/',
  }
};

export default function HomePage() {
  const heroBadges = [
    { text: '99.42% Verified Purity', desc: 'Batch HPLC Checked' },
    { text: 'Safe Cold-Chain Log', desc: 'Secure Insulation' },
    { text: 'Next-Day US Dispatch', desc: 'UK Re-shipper Active' },
    { text: 'Discrete Packaging', desc: 'No Chemical Labels' },
  ];

  const features = [
    {
      title: 'Solid-Phase Fmoc Synthesis',
      desc: 'Formulated in European high-precision laboratory arrays employing automatic multi-column synthesized sequences.',
      icon: FlaskConical,
    },
    {
      title: 'Endotoxin Removal Phase',
      desc: 'Undergoes active double-centrifuge chromatography columns to guarantee endotoxin parameters remain under <0.1 EU/mL.',
      icon: ShieldCheck,
    },
    {
      title: 'Nitrogen-Vacuum Isolation',
      desc: 'Each vial' + "'" + 's oxygen is completely purged under clinical vacuum conditions, sealing active chains in inert nitrogen gas.',
      icon: Activity,
    },
  ];

  const stats = [
    { value: '99.42%', label: 'HPLC PEAK PURITY REACHED', desc: 'Batch June 2026 certification' },
    { value: '<0.05 EU', label: 'ENDOTOXIN COMPLIANCE', desc: 'Safest baseline parameters currently' },
    { value: '14,200+', label: 'LABS SUPPLIED LOCALLY', desc: 'Academic & independent researchers' },
    { value: '12 Hours', label: 'DISPATCH VELOCITY', desc: 'With temperature insulation' },
  ];

  const bentoGrid = [
    {
      title: 'Structural Helix Verification',
      desc: 'Every peptide batch undergoes independent Mass Spectrometry sequence validation matching the reference databases before catalog allocation.',
      size: 'md:col-span-2 bg-[#EEF2F7]/50',
      icon: Sparkles,
    },
    {
      title: 'Thermal Logistics Core',
      desc: 'Shipped under strict heat-resistant vacuum cells to prevent hydrogen bond shear degradation under sub-optimal seasonal transit conditions.',
      size: 'md:col-span-1 bg-white border border-[#CBD5E1]',
      icon: Zap,
    },
    {
      title: 'Pre-Purification Columns',
      desc: 'Raw amino-acid components are filtered at multiple steric intervals, removing shortened failure-sequence chains and residual reaction reagents completely.',
      size: 'md:col-span-1 bg-white border border-[#CBD5E1]',
      icon: TrendingUp,
    },
    {
      title: 'Physical Secure Vaulting',
      desc: 'Materials are preserved under cryogenic conditions in our high-security New Jersey depot and Leeds re-shipping terminal to guarantee consistency and potency.',
      size: 'md:col-span-2 bg-[#EEF2F7]/50',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-[#F8FAFC]">
      {/* 3. HERO SECTION */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40 overflow-hidden border-b border-[#CBD5E1]/50 bg-[#0B0F19] text-white">
        {/* Full-bleed Background Hero Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
            alt="UK & US Trusted Research Peptide Wholesale Depot Background"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 saturate-[0.85]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlays to blend the edges and guarantee perfect typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#2563EB]/20 border border-[#2563EB]/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#60A5FA] font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Certified Clinical Peptide Warehouse</span>
            </div>

            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-0">
              US & UK Trusted <br />
              <span className="text-[#3B82F6]">Research Peptides</span> <br />
              Wholesale Depot.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              Sourcing elite 99%+ HPLC-verified Retatrutide, Tirzepatide, and Semaglutide lyophilized compounds. Strictly formulated and nitrogen-sealed for controlled laboratory assays, academic investigations, and metabolics modeling.
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-2">
              <Link
                href="/products"
                className="bg-[#FF6B1A] text-white text-sm font-bold uppercase font-heading tracking-widest py-4.5 px-8 rounded-xl shadow-lg hover:bg-[#2563EB] transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Explore Research Catalog
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-md text-white text-sm font-semibold uppercase font-heading tracking-widest py-4.5 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                Purity verification
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {heroBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col pt-3 md:pt-0 md:px-3 text-left">
                  <span className="text-xs font-bold font-heading text-white leading-tight">
                    {badge.text}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 tracking-wider uppercase">
                    {badge.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL SCROLL STRIP - AUTO-SCROLLING */}
      <section className="w-full bg-[#0F172A] text-white py-4.5 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-flex gap-16 text-xs font-mono tracking-widest text-[#FF6B1A] font-bold uppercase py-1">
            <span>🛡️ PURE AMINO SEQUENCE STABILITY</span>
            <span>✦ NITROGEN-PURGED FLIP VIALS IN STOCK</span>
            <span>🛡️ BACTERIOSTATIC COMPLIANCE REGISTERED</span>
            <span>✦ ACADEMIC INSTITUTIONS PRIORITY DELIVERIES</span>
            <span>🛡️ RECONSTITUTION TEMPERATURE CONTROLS LAB</span>
          </div>
          <div className="animate-marquee inline-flex gap-16 text-xs font-mono tracking-widest text-[#FF6B1A] font-bold uppercase py-1" aria-hidden="true">
            <span>🛡️ PURE AMINO SEQUENCE STABILITY</span>
            <span>✦ NITROGEN-PURGED FLIP VIALS IN STOCK</span>
            <span>🛡️ BACTERIOSTATIC COMPLIANCE REGISTERED</span>
            <span>✦ ACADEMIC INSTITUTIONS PRIORITY DELIVERIES</span>
            <span>🛡️ RECONSTITUTION TEMPERATURE CONTROLS LAB</span>
          </div>
        </div>
      </section>

      {/* 5. FEATURES / PRECISION SECTION */}
      <section className="py-20 bg-white border-b border-[#CBD5E1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image layout */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2563EB] to-[#FF6B1A] rounded-3xl blur opacity-15" />
              <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#CBD5E1]">
                <img
                  src="https://peptidelabuk.co.uk/wp-content/uploads/2026/04/68c153351d1a646053b66e98_Retatrutide-5MG-With-Pen-1-scaled.jpg"
                  alt="High purity lyophilized Retatrutide peptide vials and pre-calibrated research devices"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Highlight Overlay Card */}
              <div className="absolute bottom-6 right-6 bg-[#0F172A] border border-white/20 p-5 rounded-2xl shadow-xl max-w-xs text-white">
                <span className="text-[10px] font-mono text-[#FF6B1A] uppercase tracking-wider font-bold">
                  PRECISION GUARANTEE
                </span>
                <p className="text-xs font-sans text-zinc-350 leading-relaxed mt-2">
                  Our laboratory utilizes high-precision sterilization columns and nitrogen isolation blocks to prevent structural chain degradation.
                </p>
              </div>
            </div>

            {/* Right Copy */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
                  STERILITY & COMPLIANCE RULES
                </span>
                <h2 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-tight mb-0">
                  Formulated for Uncompromised Research Authenticity.
                </h2>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                We synthesize at strict European labs under ISO 9001 certifications. Once batch crystallization completes, we vacuum pack each vial in oxygen-absent chambers to shield compounds from light oxidation, preserving original potency levels during local or international transit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[#EEF2F7] border border-[#CBD5E1]/50 p-3 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center text-[#2563EB]">
                      <item.icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-[#0F172A] text-sm tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTS GRID */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#CBD5E1]/40" id="shop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section title */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
              RESEARCH GRADE FORMULATIONS
            </span>
            <h2 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-tight mb-0">
              Select Your High-Purity Research Compound
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Statically-certified batch listings showing pure crystalline peptides. Choose single research vials or bulk 10-vial kits to secure maximum project investment values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.slice(0, 9).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROVEN DATA / STATS SECTION */}
      <section className="py-20 bg-[#0F172A] text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-[#FF6B1A]/5 opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono text-[#FF6B1A] uppercase tracking-widest font-bold">
              EMPIRICAL MASS ASSAYS
            </span>
            <h2 className="font-heading font-extrabold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight leading-tight mb-0">
              Proven Scientific Reagent Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center space-y-2 group hover:border-[#FF6B1A] transition-all">
                <span className="block font-heading font-black text-[#FF6B1A] text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-none">
                  {stat.value}
                </span>
                <span className="block text-[10px] font-mono tracking-widest font-bold text-white uppercase pt-1">
                  {stat.label}
                </span>
                <span className="block text-[10px] text-zinc-400 font-normal">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CARDS / FEATURES BENTO GRID (WHITE BG SECTION) */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#CBD5E1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section title */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
              INFRASTRUCTURE INTEGRITY
            </span>
            <h2 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-none mb-0">
              The Bio-Analytical Standard
            </h2>
            <p className="text-xs text-[#475569]">
              How we sustain elite laboratory-level consistency across multiple production arrays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoGrid.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-[#CBD5E1]/20 ${item.size}`}
              >
                <div className="bg-white border border-[#CBD5E1]/40 p-3.5 rounded-2xl text-[#2563EB] shadow-sm w-12 h-12 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                
                <div className="space-y-2.5">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0F172A] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <HomeSeoContent />

      {/* 11. FAQ ACCORDION (5-6 QUESTIONS) */}
      <HomeFaqAccordion />

      {/* 12. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 border-2 border-[#FF6B1A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-8xl font-black font-heading pointer-events-none select-none tracking-widest leading-none">
              BUYRETAT
            </div>
            
            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <span className="text-[10px] font-mono text-[#FF6B1A] font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 bg-slate-950 rounded-full">
                ACTIVE PIPELINE CONTRACATION
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight mb-0 text-white">
                Register Your Biological Research Sourcing Needs
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-lg mx-auto">
                Secure continuous access to certified batches of high-purity peptides. Place your bulk compound inquiry to finalize delivery options and pricing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2.5">
                <Link
                  href="/products"
                  className="bg-[#FF6B1A] text-white text-xs font-bold font-heading uppercase tracking-wider py-4 px-8 rounded-xl shadow shadow-amber-500/10 hover:bg-[#1D4ED8] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Configure Bulk Kit Order
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white/20 text-white text-xs font-bold font-heading uppercase tracking-wider py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
                >
                  Call Procurement Rep
                </Link>
              </div>

              {/* Secure terms indicator */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-450 font-mono pt-3">
                <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                <span>All communication logs are heavily guarded and encrypted. No commercial customer profiles shared.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
