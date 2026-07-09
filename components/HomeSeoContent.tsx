'use client';

import React from 'react';
import { Microscope, ShieldCheck, Truck, FlaskConical, Beaker, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomeSeoContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 bg-[#FAF9F6] border-y border-[#CBD5E1]/30 font-sans" id="research-dossier">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold bg-[#2563EB]/5 px-3 py-1.5 rounded-full inline-block border border-[#2563EB]/10">
            Scientific Reference & Guidelines
          </span>
          <h2 className="font-heading font-bold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-tight">
            Research & Procurement Reference Dossier
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto">
            High-fidelity synthetic peptide documentation for laboratories, covering receptor pharmacology, HPLC verification, and cold-chain stability.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Pharmacology (Double Row or Tall Card) */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-6 md:col-span-1 lg:row-span-2 relative overflow-hidden group hover:border-[#2563EB]/30 transition-colors"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2563EB]/5 to-transparent rounded-bl-full" />
            <div className="space-y-4">
              <div className="bg-[#2563EB]/5 p-3 rounded-xl inline-block border border-[#2563EB]/10 text-[#2563EB]">
                <Activity className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0F172A]">
                Tri-Agonist Affinity Profile
              </h3>
              <p className="text-xs text-[#64748B] font-mono uppercase tracking-wider">
                Receptor Model: LY3437943
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                The metabolic research landscape has witnessed a profound paradigm shift with the introduction of complex poly-agonists. For academic and institutional laboratories seeking to study synergistic metabolic regulation, the opportunity to <strong className="text-[#0F172A] font-semibold">buy retatrutide</strong> represents a critical milestone in exploring endocrine receptor affinity.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                This peptide targets the GCGR, GIPR, and GLP-1R pathways simultaneously, providing an advanced model to examine energy expenditure and lipid dynamics in controlled settings.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>GCGR: Glucagon Receptor Activation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>GIPR: Gastric Inhibitory Polypeptide</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>GLP-1R: Glucagon-Like Peptide-1</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Purity & HPLC Validation */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#10B981]/30 transition-colors"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="bg-[#10B981]/5 p-3 rounded-xl inline-block border border-[#10B981]/10 text-[#10B981]">
                <Microscope className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F172A]">
                99%+ Certified Purity
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                We verify every single batch of <strong className="text-[#0F172A] font-semibold">retatrutide peptide for sale</strong> through independent laboratory analysis. High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry are utilized to confirm complete sequence fidelity and exclude synthesis byproducts.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] flex items-center justify-between">
              <div>
                <span className="block text-xs font-mono text-[#64748B]">PURITY STANDARD</span>
                <span className="text-xl font-bold font-heading text-[#10B981]">≥ 99.0%</span>
              </div>
              <span className="text-[10px] font-mono bg-[#10B981]/10 text-[#10B981] px-2.5 py-1 rounded-full uppercase font-bold">
                HPLC Verified
              </span>
            </div>
          </motion.div>

          {/* Card 3: Reconstitution Protocol */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#FF6B1A]/30 transition-colors"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="bg-[#FF6B1A]/5 p-3 rounded-xl inline-block border border-[#FF6B1A]/10 text-[#FF6B1A]">
                <Beaker className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F172A]">
                Handling & Reconstitution
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Understanding <strong className="text-[#0F172A] font-semibold">how to get retatrutide</strong> successfully prepared for assays requires precise clean-room techniques. Reconstitute slowly using sterile bacteriostatic water and avoid violent agitation to preserve delicate molecular bonds.
              </p>
            </div>
            <div className="text-[11px] text-[#475569] bg-[#FAF9F6] p-3.5 rounded-xl border border-[#CBD5E1]/30 italic">
              * Store lyophilized powder at -20°C. Refrigerate liquid solution immediately post-reconstitution.
            </div>
          </motion.div>

          {/* Card 4: Global Logistics & Sourcing Standards (Span 2 columns on large screen) */}
          <motion.div 
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 md:col-span-1 lg:col-span-2 relative overflow-hidden text-white hover:border-slate-700 transition-colors"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#2563EB]/10 to-transparent rounded-bl-full" />
            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="bg-[#2563EB]/20 p-3 rounded-xl inline-block border border-[#2563EB]/30 text-[#60A5FA]">
                <Truck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Logistics & Global Clinical Depot
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Acquiring a high-purity <strong className="text-white font-semibold">retatrutide peptide buy online</strong> requires a secure, temperature-controlled transit matrix. To streamline fulfillment for laboratories looking to <strong className="text-white font-semibold">retatrutide buy online usa</strong> or source across Europe, we implement nitrogen-purged vial sealing, vacuum containment, and thermal insulated shipping shields.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Packaging</span>
                <span className="text-xs font-bold text-white">Nitrogen Shielded</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Dispatch Range</span>
                <span className="text-xs font-bold text-white">UK, US, & EU Wide</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Cold-Chain</span>
                <span className="text-xs font-bold text-white">Insulated Transit</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
