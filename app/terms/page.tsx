'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, Lock, Globe } from 'lucide-react';

export default function TermsPage() {
  const currentYear = 2026;

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">Terms of Use</span>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
            REGULATORY CONCORDANCE
          </span>
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-none mb-0">
            Terms & Conditions of Sourcing
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] italic">
            Last updated: June 18, 2026. Registered UK Chemical Depot & Corporate Partners.
          </p>
        </div>

        {/* Legal block */}
        <div className="bg-white border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm text-xs sm:text-sm text-[#475569]">
          
          <div className="p-4 bg-amber-500/5 border-l-4 border-amber-500 rounded text-amber-900 text-xs font-mono">
            <strong>CRITICAL MANDATE:</strong> BY BROWSING BUYRETAT.COM OR CONVERTING REQUESTS ON OUR PORTAL, LOGISTICS REPRESENTATIVES, INSTITUTIONAL AGENTS, AND CORPORATE LAB SERVICES RATIFY FULL AND ABSOLUTE CONTRACT CONCORDANCE REGARDING EXCLUSIVE RESEARCH CHEMICAL CHARACTERIZATION CONDITIONS.
          </div>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              1. Exclusive Laboratory Analytical Sourcing Use
            </h2>
            <p>
              Under current UK Medicines regulation and corresponding US FD&C codes, all reagents, crystalline compounds, and synthetic peptides cataloged on buyretat.com are destined solely for <strong>in-vitro scientific characterization, metabolic comparative testing, and academic cell-line characterization assays</strong>.
            </p>
            <p>
              These products contain active biological sequences that are explicitly NOT licensed, approved, or formulated for direct human administration, domestic veterinary, therapeutic, cosmetic, diagnostic, or agricultural use. Self-administration under any guise violates domestic legal standards and represents high-level physiological dangers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              2. Chemical Buyer Representation & Competence Guarantee
            </h2>
            <p>
              Upon finalizing any compound request, the purchaser confirms that they possess legitimate credentials representing an active research laboratory, academic faculty department, corporate testing service, or independent bio-synthesis lab group.
            </p>
            <p>
              The purchasing entity guarantees complete technical knowledge surrounding compound dilution, volumetric calculations, physical sterilization hoods usage, and disposal of biological sharp canisters in absolute compliance with local Environmental Protection legislation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              3. Private Banking & Crypto Correspondence
            </h2>
            <p>
              To safeguard research programmatic budgets, we utilize private Faster Payments bank transfers or secure cryptographic ledgers (Bitcoin / USDT). All payment steps must match coordinates compiled by our accounts desks. Any attempts at fraudulent wire recalls, payment system abuses, or placebos claim voids will result in immediate termination of supply contracts and blacklisting from our server networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              4. Disclaimer of Warranty & Biological Liabilities
            </h2>
            <p>
              Buy Retatrutide UK & US provides compound batches validated independently via third-party HPLC chromatography and certified sterile of residual reaction solvents. We offer no warranties, expressed or implied, regarding therapeutic or metabolic outcomes on unauthorized clinical test populations. Sourcing laboratory agents constitutes a transfer of full biological containment responsibility to the purchasing entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              5. Shipping & Discrete Cargo Delivery Contracts
            </h2>
            <p>
              Sourcing packages are routed via Royal Mail Tracked 24 domestically, or domestic FedEx mainland re-shippers internationally, preserving thermal cakes inside insulated capsule enclosures. We do not support storefront walk-in pickup under any grounds to guarantee sterile warehouse parameters.
            </p>
          </section>

        </div>

        <div className="flex justify-between items-center text-xs text-[#475569] font-mono border-t border-slate-200 pt-6">
          <span>© {currentYear} BUY RETATRUTIDE, Ltd.</span>
          <span>Security Validated Core API</span>
        </div>

      </div>
    </div>
  );
}
