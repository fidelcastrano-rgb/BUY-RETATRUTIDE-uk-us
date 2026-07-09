'use client';

import React from 'react';
import Link from 'next/link';
import { FlaskConical, Mail, Clock, ShieldCheck, FileText, Smartphone } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const productLinks = [
    { label: 'Retatrutide Lyophilized Powder', href: '/products/retatrutide' },
    { label: 'Tirzepatide Lab Compound', href: '/products/tirzepatide' },
    { label: 'Semaglutide Pure Lyophilized', href: '/products/semaglutide' },
    { label: 'Bulk Wholesale Kits', href: '/products' },
  ];

  const resourceLinks = [
    { label: 'Scientific Blog', href: '/blog' },
    { label: 'Research FAQ Portal', href: '/faq' },
    { label: 'Purity Verification HPLC', href: '/about#story' },
    { label: 'Safe Reconstitution Manual', href: '/blog/how-to-use-and-reconstitute-peptides' },
  ];

  const legalLinks = [
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Contact Safety Representative', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0F172A] text-[#EEF2F7] border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-[#FF6B1A] text-white p-2.5 rounded-lg shadow-sm">
                <FlaskConical className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white leading-none mb-0.5">
                  BUY RETATRUTIDE
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#2563EB] font-bold uppercase leading-none">
                  RESEARCH PEPTIDES WAREHOUSE
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Premium modern luxury medical research peptide warehouse serving the academic, institutional, and independent scientific communities across the United Kingdom, United States, and Europe.
            </p>
            
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-350">
                <Mail className="w-4 h-4 text-[#FF6B1A]" />
                <a href="mailto:sales@buyretat.com" className="hover:text-white transition-colors">sales@buyretat.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-350">
                <Smartphone className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs">WhatsApp Helpline: Active Instant Response</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-350">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span>Mon - Sun: 08:30 – 21:00 GMT</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products Listing */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">
              Research Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-[#FF6B1A] transition-colors leading-relaxed">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">
              Research & Science
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-[#FF6B1A] transition-colors leading-relaxed">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Guidelines */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-6">
              Corporate & Support
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-[#FF6B1A] transition-colors leading-relaxed">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded bg-[#EEF2F7]/5 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono text-[#10B981]">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Facility</span>
              </div>
              <p className="text-[10px] text-zinc-450 leading-relaxed font-mono">
                All production batches undergo HPLC independent verification. Secure local dispatch, temperature-preserved.
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory Medical Disclaimer (Critical for Peptide Brand Compliance) */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="bg-[#1E293B] border-l-4 border-amber-500 rounded p-5 text-[11px] text-zinc-450 leading-relaxed space-y-2 font-mono">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4 shrink-0" />
              <span>STRICT SCIENTIFIC RESEARCH USE DISCLAIMER</span>
            </div>
            <p>
              <strong>ATTENTION:</strong> ALL CHEMICAL SUBSTANCES AND PEPTIDE REAGENTS SOLD AND REFERENCED THROUGH BUYRETAT.COM AND ASSOCIATED CORRESPONDENCES ARE DESTINED EXCLUSIVELY FOR CONTROLLED LABORATORY IN-VITRO RESEARCH AND IN-VITRO PHARMACOKINETICS ASSAYS. Under UK legislation, including the Human Medicines Regulations, and corresponding US FD&C rules, these products are explicitly not licensed, approved, or formulated for direct human administration, domestic veterinary, therapeutic, cosmetic, diagnostic, or dietary purposes.
            </p>
            <p>
              By purchasing or utilizing material described herein, laboratories and authorized technicians take full regulatory responsibility for the safe, certified containment and legal disposal of these substances in accordance with chemical bio-safety standards. Any form of misuse, clinical replication, or human ingestion of these research agents poses critical health liabilities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <div>
            <p>© {currentYear} BUY RETATRUTIDE UK & US, Ltd. All rights reserved. Registered UK and US Clinical Depot.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors text-zinc-500">HTML Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
