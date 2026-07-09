import React from 'react';
import { Metadata } from 'next';
import FaqClient from '@/components/FaqClient';

interface FaqItem {
  q: string;
  a: string;
  cat: string;
}

const CATEGORIES = [
  'All',
  'Buying & Ordering',
  'Pricing',
  'Products',
  'Quality',
  'Delivery',
  'Legal',
  'Usage',
];

const FAQ_DATA: FaqItem[] = [
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

export const metadata: Metadata = {
  title: 'Research Peptides Sourcing & Logistics FAQ | Buy Retatrutide',
  description: 'Get answers regarding our certified high-purity Retatrutide, Tirzepatide, and Semaglutide shipments, storage, reconstitution, and secure escrow payments.',
  alternates: {
    canonical: '/faq',
  }
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_DATA.slice(0, 10).map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient faqData={FAQ_DATA} categories={CATEGORIES} />
    </>
  );
}
