'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    q: 'Are these peptide substances approved for domestic human administration?',
    a: 'Absolutely not. All products displayed are chemical synthetics destined strictly for in-vitro academic trials, analytical pharmacokinetics matching, and clinical calibration. Under UK and US medical laws, self-administration is illegal and poses serious physiological dangers.',
  },
  {
    q: 'Does each production order arrive with a valid chromatography report?',
    a: 'Yes. Every dispatched kit or individual peptide vial contains a batch-specific serial reference code matching the online HPLC chromatography data sheet. You can cross-reference your specific vial on our About Page or get the PDF directly via email.',
  },
  {
    q: 'How does the domestic UK and international US dispatch routing function?',
    a: 'Orders received before 14:00 GMT are dispatched same-day. In the UK, we use Royal Mail Tracked 24. For US researchers, we maintain local dispatch centers in New Jersey to ship via FedEx or DHL with local mainland tracking and zero customs delay.',
  },
  {
    q: 'How should lyophilized compound packages be preserved upon arrival?',
    a: 'While our freeze-dried crystalline cakes remain stable in transit for up to 3 weeks at room temperature, laboratories should store them under stable refrigeration (2°C to 8°C) for short-term preservation, or freeze them (-20°C) for long-term molecular integrity up to 2 years.',
  },
  {
    q: 'What transaction processes and payment security options are supported?',
    a: 'To guarantee speed and absolute transactional discretion, we support instant Local Bank Transfers (Faster Payments in the UK, ACH in the US) alongside major privacy-focused crypto currencies including Bitcoin (BTC) and Tether (USDT). Instructions are provided in your pre-filled Cart summary on request.',
  },
];

export default function HomeFaqAccordion() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#CBD5E1]/40" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section title */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
            COMMON INQUIRIES
          </span>
          <h2 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight mb-0">
            Laboratory Sourcing Board
          </h2>
          <p className="text-xs text-[#475569]">
            Clear protocols regarding legality, purity matching, secure dispatch, and sterile storage.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#CBD5E1] rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5.5 text-left font-heading font-extrabold text-[#0F172A] text-sm sm:text-base tracking-tight hover:bg-[#EEF2F7]/40 transition-colors select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#FF6B1A] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2563EB] shrink-0 ml-4" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs text-[#475569] leading-relaxed border-t border-[#CBD5E1]/40 bg-[#EEF2F7]/10 animate-fade-in">
                    <p className="mb-0 font-normal leading-relaxed text-[13px]">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
