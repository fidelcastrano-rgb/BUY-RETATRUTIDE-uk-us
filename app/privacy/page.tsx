'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldAlert, Lock, Fingerprint } from 'lucide-react';

export default function PrivacyPage() {
  const currentYear = 2026;

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">Privacy Policy</span>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
            CONFIDENTIALITY DATA ENCLOSURE
          </span>
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight leading-none mb-0">
            Confidentiality Protocols
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] italic">
            Last updated: June 18, 2026. Data Protection Officer and Compliance Officers Board.
          </p>
        </div>

        {/* content box */}
        <div className="bg-white border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm text-xs sm:text-sm text-[#475569]">
          
          <div className="flex gap-3 items-start p-4 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded text-[#2563EB] text-xs font-mono">
            <Lock className="w-5 h-5 shrink-0" />
            <div>
              <strong>ENCRYPTED LOG DATABASE PROTOCOL:</strong> ALL INCOMING COMMUNICATION RECORDS, INQUIRY SPECIFICATIONS, LOGISTICS LEDGERS, AND METRIC CONVERSIONS ARE HOUSED ON ZERO-KNOWLEDGE SERVERS LOCATED OUTSIDE CENTRAL ADVERTISING NETWORKS.
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              1. Non-Commercial Data Protection Commitment
            </h2>
            <p>
              We guarantee that no client data, email addresses, laboratory inquiry parameters, delivery coordinates, or financial transfer metadata will ever be categorized, exposed, shared, or compiled for marketing, commercial data brokers, or advertising networks. We operate with absolute discretion to support sensitive biological research.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              2. Transactional Ledger Retention Limits
            </h2>
            <p>
              Account ledgers containing payment wire references, local UK Faster Payments settlement coordinates, or unique crypto hashes are maintained inside isolated flash drives for accounting audit periods and thereafter permanently cleared using secure shredding protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              3. Secure Correspondence Routing (No-tracking Cookie Framework)
            </h2>
            <p>
              Our website utilizes absolutely zero commercial telemetry trackers, Facebook pixels, or Google DoubleClick advertisement retargeting scripts. We do not track and compile browser profiles. The only active session state is client-side <code>localStorage</code> storing the current items inside your active Order Builder drawer, which remains fully inside local hardware caches until manually erased.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">
              4. Contact Channel Security Guidelines
            </h2>
            <p>
              Connecting through live WhatsApp channels implies agreement to WhatsApp&apos;s standard end-to-end encryption frameworks. Email correspondence using weaved lines redirects inquiries using secure SSL servers. If your laboratory program demands extreme secrecy, we recommend sending instructions through PGP-encrypted text inside email communication corridors.
            </p>
          </section>

        </div>

        <div className="flex justify-between items-center text-xs text-[#475569] font-mono border-t border-slate-200 pt-6">
          <span>© {currentYear} BUY RETATRUTIDE, Ltd.</span>
          <span>Confidentiality Seal Active</span>
        </div>

      </div>
    </div>
  );
}
