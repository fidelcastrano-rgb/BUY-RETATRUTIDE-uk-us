'use client';

import React from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  Clock,
  FlaskConical,
  Award,
  AlertTriangle,
  Flame,
  CheckCircle2,
  DollarSign,
  ChevronRight,
  TrendingDown,
  Activity,
  Milestone
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { num: '99.42%', tag: 'MAXIMUM BATCH RESOLUTION', desc: 'Validated independently via HPLC chromatography assays' },
    { num: '<0.05 EU', tag: 'ENDOTOXIN SATURATION RATIO', desc: 'Strictly matching chemical sterility guidelines' },
    { num: '14,200+', tag: 'LABS ACTIVE RE-ORDERS', desc: 'Serving academic institutions and organic synthesizers' },
    { num: 'ISO 9001', tag: 'GMP QUALITY ENCLOSED LOGS', desc: 'Manufactured under European clean room environments' },
  ];

  const values = [
    { title: 'Chemical Sterility', desc: 'All peptide structures undergo rigorous crystallization washing to remove reactionary solvents or deletions.', icon: FlaskConical },
    { title: 'Logistics Integrity', desc: 'Each tube is nitrogen vacuum purged to prevent oxidation and double-insulated to retain structural potency.', icon: Clock },
    { title: 'Absolute Discretion', desc: 'Your scientific investigations remain private. We pack all kits in neutral, unmarked, completely secure envelopes.', icon: ShieldCheck },
    { title: 'Academic Alliance', desc: 'Offering tailored contraction allocations and special budget-support discounts for institutional laboratory groups.', icon: Award },
    { title: 'Financial Discretion', desc: 'Zero commercial listing or card details leaked. We utilize secure bank networks and private cryptocurrencies.', icon: DollarSign },
    { title: 'Total Analytical Clarity', desc: 'Every lot contains public lot-matching certifications. No placebos, zero hidden fillers, 100% active compounds.', icon: Activity },
  ];

  const timeline = [
    { date: 'September 2021', title: 'Foundation & Synthesis Lab Sourcing', desc: 'Established in Leeds, UK to address the high volume of low-purity, contaminated peptide imports from overseas brokers.' },
    { date: 'June 2023', title: 'ISO 9001 Clean Room Certification', desc: 'Production facilities achieved full sterile GMP and ISO compliance, introducing high-resolution centrifuge filters.' },
    { date: 'November 2024', title: 'Leeds Cold-Chain Core Expansion', desc: 'Configured cryo-logistic tanks keeping materials stabilized at monitored sub-zero environments, reducing thermal variables.' },
    { date: 'April 2025', title: 'Northeast US Mainland Dispatch', desc: 'Opened our New New Jersey re-shipping station to route orders directly within the US mainland with zero customs delay.' },
    { date: 'June 2026', title: 'Triple Agonist Purity Milestones', desc: 'Successfully automated Fmoc solid-phase synthesis for advanced triple receptor-agonists, reaching 99.4% Retatrutide purity.' },
  ];

  const scamTypes = [
    { title: 'PLACEBO CLONES', desc: 'Websites displaying fake certificates, using base salt powders containing zero active peptides to steal lab trial budgets.', risk: 'EXTREME RISK OF ASSAY FAILURE' },
    { title: 'TELEGRAM & SOCIAL BROKERS', desc: 'Anonymous individuals representing unrecognized chemical entities, demanding instant money-transfer with zero delivery assurance.', risk: 'HIGH IDENTITY FRAUD PROFILES' },
    { title: 'CHEAP UNDER-DOSED LISTINGS', desc: 'Products selling at synthetic impossibilities (e.g., Retatrutide for £20). These are heavily diluted or laced with raw toxins.', risk: 'SEVERE HEAVY MEAT CONTAMINATIONS' },
  ];

  const verificationSteps = [
    'Always mandate batch-specific HPLC lot documents matching current 2026 parameters.',
    'Test solid crystals: genuine lyophilized peptides form structured uniform cakes, never loose crumbly sugars.',
    'Cross-reference physical dispatch locations: verify physical UK and US mainland secure re-shipper transit trails.',
    'Examine vacuum caps: secure laboratory vials utilize secure aluminum flips with matching laser-etched serial indexes.',
    'Avoid extreme discounts: genuine Fmoc custom compound refinement cost-threshold inputs dictate organic base pricing.',
  ];

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">About Authority</span>
        </div>

        {/* 1. HERO SECTION WITH WATERMARK */}
        <section className="relative text-center max-w-3xl mx-auto space-y-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-center font-heading font-black text-7xl sm:text-[10rem] tracking-tighter leading-none pointer-events-none select-none uppercase z-0">
            AUTHORITY
          </div>
          
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
              ORGANIC PURITY COMPLIANCE BOARD
            </span>
            <h1 className="font-heading font-extrabold text-[#0F172A] text-4xl sm:text-5xl tracking-tight leading-none mb-0">
              High-Fidelity Biochemical Sourcing Standards
            </h1>
            <p className="text-sm text-[#475569] leading-relaxed font-normal">
              Our continuous mission is to neutralize contaminated, unverified importing channels, equipping researchers across the UK and US with premium, certified peptide compounds.
            </p>
          </div>
        </section>

        {/* 2. STATS ROW (4 key numbers) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-[#CBD5E1] rounded-2xl p-6 text-center space-y-2 hover:shadow shadow-sm transition-all">
              <span className="block font-heading font-black text-[#2563EB] text-3xl sm:text-4xl lg:text-5.51xl tracking-tighter leading-none">
                {stat.num}
              </span>
              <span className="block text-[10px] font-mono tracking-widest font-bold text-[#0F172A] uppercase">
                {stat.tag}
              </span>
              <p className="text-[11px] text-[#475569] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </section>

        {/* 3. OUR STORY - 2 Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="story">
          
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
                ESTABLISHED REPUTATION
              </span>
              <h2 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-0 leading-tight">
                Our Genesis: Eliminating Placebo Impurities from Biological Assays
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              When research peptide compounds first commercialized, the market became flooded with substandard imports packing massive quantities of toxic heavy metals, residual chemical linkers, and short-chain deletes. Academic cell trials frequently failed due to placebos or extreme raw-volume disparities.
            </p>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Buy Retatrutide was founded as a private compliance depot to supply verified, nitrogen-purged products. By utilizing highly stable solid-phase synthesis arrays, our batches consistently reach a chromatographic threshold of 99%+. Every peptide lot has a matching live validation report verified by third-party HPLC chromatography laboratories.
            </p>

            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#FF6B1A] text-white text-xs font-bold font-heading uppercase tracking-wider py-4 px-6 rounded-lg shadow-sm hover:bg-[#1D4ED8]"
              >
                <span>Navigate Chemical Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right COA data card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 space-y-6 border-2 border-[#2563EB] shadow-xl relative">
              <div className="absolute top-4 right-4 bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-mono text-[9px] px-3 py-1 uppercase rounded-full">
                Active Certificate
              </div>
              
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-[#2563EB] uppercase">
                  BOMEDICAL ASSAY DATA
                </span>
                <h3 className="font-heading font-bold text-lg leading-none text-[#F8FAFC]">
                  Lot chromatography trace:
                </h3>
              </div>

              <div className="p-4.5 rounded-xl bg-slate-900 border border-white/5 space-y-2.5 font-mono text-[11px] text-zinc-350">
                <div className="flex justify-between">
                  <span>LOT SERIAL ID:</span>
                  <span className="text-[#FF6B1A] font-bold">HPLC-RET-2026-B4</span>
                </div>
                <div className="flex justify-between">
                  <span>BATCH CALIBRATION:</span>
                  <span className="text-white font-bold">Retatrutide 10mg Lyophilized</span>
                </div>
                <div className="flex justify-between">
                  <span>CHROMATOGRAPHIC PEAK:</span>
                  <span className="text-[#10B981] font-bold">99.42% Area Synthesis</span>
                </div>
                <div className="flex justify-between">
                  <span>ENDOTOXIN LOAD:</span>
                  <span className="text-[#10B981] font-bold">&lt; 0.05 EU/mL Sterile</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                  <span>VERIFICATION DATE:</span>
                  <span className="text-white font-bold">June 18, 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[10px] text-zinc-400 font-mono leading-normal pt-1 bg-slate-900/40 p-3 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Matches holographic stamp on physical vacuum cap flips.</span>
              </div>
            </div>
          </div>

        </section>

        {/* 4. OUR VALUES - 6 Card Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
              REGULATORY MOTIVATORS
            </span>
            <h2 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-0">
              The Seven pillars of Clinical Sourcing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white border border-[#CBD5E1] rounded-2xl p-6.5 hover:shadow-md transition-all flex flex-col space-y-5">
                <div className="bg-[#EEF2F7] border border-[#CBD5E1]/50 text-[#2563EB] p-3 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-[#0F172A] text-sm tracking-wide">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. COMPANY TIMELINE - 5 Milestone items */}
        <section className="bg-[#EEF2F7]/50 rounded-3xl p-8 sm:p-12 space-y-12 border border-[#CBD5E1]/30">
          <div className="text-center sm:text-left space-y-3">
            <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
              HISTORICAL TRAJECTORY
            </span>
            <h2 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-0">
              Establishing Sourcing Precedents
            </h2>
          </div>

          <div className="relative border-l-2 border-[#2563EB]/45 pl-6 sm:pl-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:border-l-0 lg:pl-0 lg:gap-6 lg:border-t-2 lg:pt-10">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative space-y-3 group lg:pt-1">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 bg-[#2563EB] text-white p-1 rounded-full ring-4 ring-white shadow-md lg:-top-[47px] lg:left-0">
                  <Milestone className="w-3.5 h-3.5 shrink-0" />
                </div>
                
                <span className="block text-[11px] font-mono text-[#2563EB] font-black uppercase tracking-wider">
                  {step.date}
                </span>
                <h4 className="font-heading font-bold text-sm text-[#0F172A] tracking-tight">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SCAM WARNING COMPONENT (RED THEMED) */}
        <section className="border-2 border-red-500 rounded-3xl overflow-hidden bg-red-500/5 shadow-2xl">
          {/* Warning banner */}
          <div className="bg-red-600 text-white p-5 sm:px-8 flex items-center gap-3.5 border-b border-red-500 selection:bg-white selection:text-red-600">
            <ShieldAlert className="w-8 h-8 stroke-[1.8] shrink-0 animate-bounce" />
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase font-bold text-white/90">
                CRITICAL BIO-SAFETY EXPOSURE
              </span>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl tracking-tight mb-0">
                ⚠️ REPORTED THIRD-PARTY PEPTIDE SCAMS WARNING
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Intro Copy */}
            <div className="max-w-2xl text-xs sm:text-sm text-[#475569] leading-relaxed">
              Due to the therapeutic success of GLP-1 analogues globally, the online biochemical market has experienced an exponential rise in counterfeit platforms targeting uneducated research personnel. Sourcing peptides without robust verification results in total loss of materials and severely contaminated lab trial budgets.
            </div>

            {/* 3 Scam card types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scamTypes.map((scam, i) => (
                <div key={i} className="bg-white border border-red-200 rounded-2xl p-6.5 flex flex-col justify-between space-y-4 shadow-sm hover:border-red-550 transition-all">
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-mono text-red-500 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold">
                      {scam.risk}
                    </span>
                    <h4 className="font-heading font-bold text-red-600 text-sm sm:text-base tracking-tight leading-snug">
                      {scam.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">
                      {scam.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparative pricing table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] font-heading uppercase">
                <Flame className="w-5 h-5 text-red-500 shrink-0" />
                <span>Price Comparison Matrice (Cheap places vs Certified Wholesalers)</span>
              </div>
              
              <div className="border border-red-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-red-50 border-b border-red-200 text-[#0F172A] uppercase font-mono font-bold tracking-wider">
                      <th className="p-4">Peptide Specimen</th>
                      <th className="p-4">Placebo Scam channels</th>
                      <th className="p-4 text-[#10B981]">GMP Verified Sourcing</th>
                      <th className="p-4">Primary Molecular Liability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="p-4 font-bold text-[#0F172A]">Retatrutide 10mg Vial</td>
                      <td className="p-4 text-red-500 line-through">£20.00 – £35.00</td>
                      <td className="p-4 font-bold text-[#10B981]">£149.00</td>
                      <td className="p-4">Mannitol filler / Sterile failure</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#0F172A]">Tirzepatide 10mg Vial</td>
                      <td className="p-4 text-red-500 line-through">£15.00 – £25.00</td>
                      <td className="p-4 font-bold text-[#10B981]">£79.00</td>
                      <td className="p-4">Deletions exceeding &gt;32%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#0F172A]">Semaglutide 5mg Vial</td>
                      <td className="p-4 text-red-500 line-through">£10.00 – £18.00</td>
                      <td className="p-4 font-bold text-[#10B981]">£59.00</td>
                      <td className="p-4">Toxins / Organic solvent residues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5-step verification guide */}
            <div className="bg-red-500/5 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">
                🔬 THE 5-STEP PEPTIDE IDENTITY TEST MANDATE:
              </span>
              <ul className="space-y-3.5 text-xs text-[#475569] leading-relaxed list-none pl-0">
                {verificationSteps.map((step, index) => (
                  <li key={index} className="flex gap-2.5 items-start">
                    <span className="bg-red-100 text-red-600 font-bold font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="font-sans font-normal text-[11px]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
