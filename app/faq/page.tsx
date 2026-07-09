'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronRight, HelpCircle, ArrowRight, MessageSquare, Info } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  cat: string;
}

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [openIds, setOpenIds] = useState<{ [key: string ]: boolean }>({});

  const categories = [
    'All',
    'Buying & Ordering',
    'Pricing',
    'Products',
    'Quality',
    'Delivery',
    'Legal',
    'Usage',
  ];

  const faqData: FaqItem[] = [
    // Buying & Ordering
    {
      cat: 'Buying & Ordering',
      q: 'How do I place a bulk compound procurement inquiry?',
      a: 'Add your chosen peptide variants to our persistent Order Builder drawer, click "Order via WhatsApp" or "Email Order", and submit the generated summary. A support representative will instantly forward private transaction coordinates (local bank wires or secure wallet address).',
    },
    {
      cat: 'Buying & Ordering',
      q: 'What payment frameworks do you support?',
      a: 'We support fast domestic Bank Transfers (Faster Payments in the UK, ACH/Fedwire in the US) to maintain low administrative fees. We also accept premier privacy cryptocurrencies including Bitcoin (BTC) and Tether (USDT). Credit cards are not supported to preserve transaction discretion.',
    },
    {
      cat: 'Buying & Ordering',
      q: 'Do you offer custom contraction solutions for academic institutions?',
      a: 'Yes. Universities, clinical diagnostic laboratories, and independent biochemists can request continuous supply contracts to guarantee monthly batch deliveries. Contact sales@buyretat.com with your projected parameters and volumes.',
    },

    // Pricing
    {
      cat: 'Pricing',
      q: 'Why are under-dosed listings overseas far cheaper than your items?',
      a: 'Counterfeit networks bulk-fill vials with standard sodium chloride or mannitol, adding a microscopic speck of actual peptide. Authentic synthesis using high-fidelity Fmoc solid-phase techniques and GMP insulation relies on inputs that dictate base pricing. Substandard pricing guarantees placebo or toxic impurities.',
    },
    {
      cat: 'Pricing',
      q: 'What is the pricing advantage of bulk 10-vial kits?',
      a: 'Opting for our 10-vial kit structure provides immediate wholesale price discounts of up to 20% compared to individual vial allocations. This also guarantees your laboratory program works with a chemically uniform, single-batch lot, ensuring high analytical baseline precision.',
    },
    {
      cat: 'Pricing',
      q: 'Are custom quotes provided for wholesale orders?',
      a: 'Absolutely. For inquiries exceeding 5 kits (50 vials), we generate custom wholesale pricing quotes. Submit your volume specifications using our Contact page or email representational lines directly.',
    },

    // Products
    {
      cat: 'Products',
      q: 'What is Retatrutide lyophilized powder optimized for?',
      a: 'Retatrutide (LY3437943) is an advanced triple agonist designed to stimulate GIP, GLP-1, and glucagon receptor targets simultaneously in physiological structures. It is utilized primarily for comparative metabolic signaling and lipolysis assays.',
    },
    {
      cat: 'Products',
      q: 'How does Tirzepatide differ from classic GLP-1 agonists?',
      a: 'Tirzepatide acts as a dual GIP and GLP-1 receptor co-agonist, whereas classic GLP-1 agonists are highly selective for a single target. Tirzepatide stimulates insulinotropic pathways and cellular glucose metabolism comparisons with high precision.',
    },
    {
      cat: 'Products',
      q: 'Is Semaglutide stable for long-term molecular characterization?',
      a: 'Yes. Sourced as a single GLP-1 agonist, Semaglutide is synthetically optimized to maintain exceptional structural resilience at sub-zero temperatures, making it a reliable baseline benchmark reagent for academic laboratories.',
    },

    // Quality
    {
      cat: 'Quality',
      q: 'What analytical verification paperwork accompanies my shipment?',
      a: 'Every shipment package contains a batch reference hologram matching current June 2026 HPLC Chromatography reports. These reports trace the molecular sequence, mass-spectrometry peaks, and guarantee absolute absence of unwanted solvent residuals.',
    },
    {
      cat: 'Quality',
      q: 'How do you measure endotoxin loading levels?',
      a: 'Our batches undergo multi-stage centrifugal filtration column washes. Endotoxin saturation remains strictly below 0.05 EU/mL, ensuring optimal cellular cell integrity and minimizing reaction biases in tissue culturas.',
    },
    {
      cat: 'Quality',
      q: 'Do you offer refund options if an independent HPLC test shows deficiency?',
      a: 'Yes. In the highly unlikely event that a verified independent laboratory assay (via HPLC or MS) shows a structural purity level below our guaranteed 99% baseline, we immediately issue a full refund and cover transit fees.',
    },

    // Delivery
    {
      cat: 'Delivery',
      q: 'How does domestic UK shipping preserve thermal stability?',
      a: 'We use signature Royal Mail Tracked 24. While lyophilized powders are highly stable dry for up to 3 weeks at room temperature, all kits are nested in double thermal insulated capsules matching Leeds facility protocols.',
    },
    {
      cat: 'Delivery',
      q: 'Is US routing subjected to custom seizure risk?',
      a: 'Zero. To circumvent custom hold delays, we pre-route bulk inventories into our physical Jersey-City depot in New Jersey. US mainland orders are re-packed and shipped domestically via signature FedEx/UPS lanes.',
    },
    {
      cat: 'Delivery',
      q: 'How are packages labeled during shipping?',
      a: 'All packaging is entirely discreet. Parcels appear as general labware glass research accessories. There are no peptide names, chemical descriptions, or billing indications displayed externally.',
    },

    // Legal
    {
      cat: 'Legal',
      q: 'Do I require an institutional license to purchase these compounds?',
      a: 'Under current UK and US statutes, purchasing high-purity peptides for in-vitro scientific research, academic assays, or clinical characterizations is fully legal. Educational and corporate entities do not require specialized medical licensing to order.',
    },
    {
      cat: 'Legal',
      q: 'Can these peptides be utilized for domestic veterinary applications?',
      a: 'Decidedly no. These compounds are explicitly designated as research reagents for lab use only. Veterinary, diagnostic, food-additive, or human administration of any form is strictly prohibited under federal laws.',
    },
    {
      cat: 'Legal',
      q: 'What represents misuse of research materials?',
      a: 'Self-injection, clinical trials on non-approved animal populations, reconstitution or extraction in non-hygienic civil environments, or commercial resale as licensed medicinal drugs are severe breaches of our Terms of Use.',
    },

    // Usage
    {
      cat: 'Usage',
      q: 'What is the safest volumetric reconstitution process?',
      a: 'Reconstitution should only occur under a sterile laminar flow hood. Swab the rubber septum with 70% isopropyl alcohol, insert an empty syringe to equalize negative vacuum pressure, then add Bacteriostatic Water (benzyl alcohol preserved) slowly aiming at the inner vial wall.',
    },
    {
      cat: 'Usage',
      q: 'Why is aggressive shaking forbidden after adding fluid?',
      a: 'Peptide amino-acid chains are exceptionally fragile complexes. Shaking or creating bubble shears can break the secondary hydrogen linkages of the helix, rendering the active compound completely inactive for cell tissue receptor studies.',
    },
    {
      cat: 'Usage',
      q: 'How long does a peptide vial remain potent once dissolved?',
      a: 'Dissolved compounds are prone to rapid degradation. Reconstituted Retatrutide or Tirzepatide preserved at 2°C to 8°C inside a dark refrigeration cabinet values stability for exactly 28 days before molecular potency parameters decay.',
    }
  ];

  // Filters QA list based on search and selected category
  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = activeCat === 'All' || item.cat === activeCat;
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCat]);

  const toggleOpen = (q: string) => {
    setOpenIds((prev) => ({ ...prev, [q]: !prev[q] }));
  };

  // Build JSON-LD QA Schema dynamically
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.slice(0, 8).map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  };

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#CBD5E1]/40 bg-[#EEF2F7]/10">
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
                  className="text-xs text-[#2563EB] font-bold underline"
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
