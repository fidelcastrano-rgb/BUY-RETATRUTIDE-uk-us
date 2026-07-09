import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquare,
  Mail,
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Truck,
  Ban,
  ClipboardList,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Sourcing & Support Representative | Buy Retatrutide',
  description: 'Reach our accounts and B2B procurement desk directly via WhatsApp or secure e-mail. Request HPLC certificates, get custom wholesale quotes, or arrange continuous deliveries.',
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  const steps = [
    { title: 'Formulation Selection', desc: 'Select peptides (Retatrutide, Tirzepatide, Semaglutide) and pack volumes in our built-in Order Builder drawer.' },
    { title: 'Submit Inquiry', desc: 'Click WhatsApp or Email. We instantly receive individual formulation and packing wishes.' },
    { title: 'Settlement details', desc: 'Our accounts rep sends private Faster Payments routing details or secure crypto keys.' },
    { title: 'Insulated Dispatch', desc: 'Compounds are packed in thermal double-padded capsules and shipped next day domestically.' },
  ];

  const safetyRules = [
    'All substances sold are strictly formulated for analytical characterization and in-vitro experiments.',
    'Under no grounds can peptides be diluted or handled in domestic, household, kitchen, or non-sterile environments.',
    'Chemical technicians must consume proper protective apparel (dust-mist goggles and gloves) during reconstitution.',
    'Leftover active reagents must be dissolved in alkaline solutions and processed within bio-hazardous sharper bins.',
  ];

  const locations = [
    { city: 'Leeds, UK Primary Depot', address: 'Leeds Logistics Park, Whitehall Road, West Yorkshire, LS12 6HP', type: 'Clinical Storage Hub' },
    { city: 'New Jersey, US Mainland Terminal', address: 'Port Jersey Blvd, Jersey City, Hudson County, NJ 07305', type: 'Northeast Re-shipper Station' },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb section */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">Contact Representative</span>
        </div>

        {/* Page Title */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono text-[#2563EB] font-bold tracking-widest uppercase bg-[#EEF2F7] px-3.5 py-1.5 rounded-full">
            REGULATORY CONCIERGE LINE
          </span>
          <h1 className="font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl tracking-tight mb-0">
            Secure Sourcing Support Services
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
            Procure verified compound batches, requestCertificate of Analysis PDFs, or finalize recurring academic allocation contracts securely.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: WhatsApp / Email Cards & 4-step order flow */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* WhatsApp Card (green border, response time table) */}
            <div className="border bg-white rounded-2xl p-6.5 border-[#25D366] shadow hover:shadow-lg transition-all space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-[#25D366]/10 p-3 rounded-xl border border-[#25D366]/20 text-[#25D366]">
                    <MessageSquare className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#25D366] uppercase font-bold">
                      IMMEDIATE ENVELOPE CORRESPONDENCE
                    </span>
                    <h3 className="font-heading font-extrabold text-[#01172A] text-base sm:text-lg mb-0 leading-none">
                      Helpline Representative WhatsApp
                    </h3>
                  </div>
                </div>
                
                <span className="bg-[#25D366] text-white font-mono text-[9px] px-2.5 py-1 uppercase rounded-full font-bold">
                  Active Now
                </span>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                Connect directly with our logistics team to discuss bulk volumes, request lot HPLC files, or establish instant private ledger payment parameters.
              </p>

              {/* Response Time Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden text-[11px] bg-[#EEF2F7]/25">
                <table className="w-full text-left font-mono text-[#475569]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-250 text-[#0F172A] font-bold">
                      <th className="p-2 px-3">Timeline Matrix</th>
                      <th className="p-2 px-3">Standard Response Velocity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-2 px-3 font-semibold text-[#0F172A]">Mon - Fri [08:30 – 21:00 GMT]</td>
                      <td className="p-2 px-3 text-[#10B981] font-bold">&lt; 5 Minutes Immediate</td>
                    </tr>
                    <tr>
                      <td className="p-2 px-3 font-semibold text-[#0F172A]">Sat - Sun [09:00 – 19:00 GMT]</td>
                      <td className="p-2 px-3 text-[#10B981] font-bold">&lt; 15 Minutes Quick</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/447700900077?text=Hello"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] text-xs font-bold uppercase py-3.5 px-6 rounded-xl transition-all shadow"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Start Live Sourcing Chat</span>
                </a>
              </div>
            </div>

            {/* Email Card (sales@buyretat.com) */}
            <div className="border border-slate-200 bg-white rounded-2xl p-6.5 shadow hover:shadow-lg transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#2563EB]/10 p-3 rounded-xl border border-[#2563EB]/20 text-[#2563EB]">
                  <Mail className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#2563EB] uppercase font-bold">
                    OFFICIAL CORRESPONDENCE RECORD
                  </span>
                  <h3 className="font-heading font-extrabold text-[#0C172A] text-base sm:text-lg mb-0">
                    Accounts & B2B Procurement Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                For official institutional RFQs, research grant purchase orders, cold-box logistics routing configurations, or vendor onboarding paperwork:
              </p>

              <div className="p-4 rounded-xl bg-[#EEF2F7]/50 border border-[#CBD5E1]/40 flex items-center justify-between text-xs font-mono text-[#0F172A]">
                <span>E-MAIL LOGISTICS:</span>
                <a href="mailto:sales@buyretat.com" className="font-bold text-[#2563EB] hover:underline">
                  sales@buyretat.com
                </a>
              </div>

              <p className="text-[11px] text-[#475569] font-mono leading-none italic">
                *Typical response threshold: within 60 minutes during standard terminal slots.*
              </p>
            </div>

            {/* 4-step order flow */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase font-heading text-[#0F172A]">
                <ClipboardList className="w-5 h-5 text-[#FF6B1A] shrink-0" />
                <span>Private Procurement Protocol</span>
              </div>

              <div className="relative border-l-2 border-[#CBD5E1] pl-6 ml-3.5 space-y-8 select-none">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative space-y-1.5">
                    {/* Circle Node */}
                    <div className="absolute -left-[32px] top-0 bg-[#0F172A] border-2 border-[#FF6B1A] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono text-[10px] shadow-sm">
                      {idx + 1}
                    </div>
                    
                    <h4 className="font-heading font-bold text-sm text-[#0F172A]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: No-store Pickup Block, Safety, Locations & Shipping Table */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* NO-IN-STORE WORKPLACE WARNING (large red card) */}
            <div className="border border-red-500 rounded-2xl bg-red-550/15 overflow-hidden shadow">
              <div className="bg-red-600 text-white p-4 sm:px-6 flex items-center gap-2.5">
                <Ban className="w-5 h-5 stroke-[2] shrink-0" />
                <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wide uppercase leading-none">
                  STRICT BIO-SECURITY SITE LOCK - NO PHYSICAL STORE PICKUP
                </span>
              </div>
              <div className="p-5.5 sm:p-6 space-y-3.5 text-xs text-[#475569] leading-relaxed">
                <p className="font-bold text-red-600">
                  ATTENTION: BOTH LEEDS AND JERSEY CITY PHYSICAL TERMINALS OPERATE UNDER EXCLUSIVE CLEAN-LEVEL LOCKDOWN.
                </p>
                <p>
                  Due to high-grade cold-chain preservation protocols, nitrogen purge maintenance, and strict regulatory criteria protecting biological reagents, physical collection or public walk-ins are forbidden. There are zero storefront or reception desk pick-up slots active.
                </p>
                <p>
                  Sourcing occurs exclusively via temperature-padded trackable distribution cargo. Authorized logistics technicians packing batches cannot interact with external personnel under bio-containment guidelines.
                </p>
              </div>
            </div>

            {/* Safety Rules List */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6.5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold font-heading uppercase text-red-650">
                <AlertTriangle className="w-5 h-5 text-red-550 shrink-0" />
                <span>Laboratory Safety Handling Directives</span>
              </div>

              <ul className="space-y-3 pl-0 list-none text-xs text-[#475569] leading-relaxed">
                {safetyRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="bg-red-50 text-red-600 font-bold font-mono text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-sans font-normal text-[11px]">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Cards (Leeds, Jersey city) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase font-heading text-[#0F172A]">
                <MapPin className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Certified Physical Warehouse Hubs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((loc, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-sm transition-all space-y-2.5">
                    <div className="flex justify-between items-center text-[9px] font-mono font-bold text-[#2563EB] uppercase">
                      <span>{loc.type}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-[#0F172A] tracking-tight leading-none mb-0.5">
                      {loc.city}
                    </h4>
                    <p className="text-[11px] text-[#475569] leading-relaxed font-normal">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Cargo Table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase font-heading text-[#0F172A]">
                <Truck className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Transit Cargo Logistics Tables</span>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left border-collapse text-[11px] font-mono text-[#475569]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-[#0F172A] font-bold">
                      <th className="p-3">Destinations</th>
                      <th className="p-3">Logistic Channel</th>
                      <th className="p-3">Average Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-bold text-[#0F172A]">United Kingdom</td>
                      <td className="p-3">Royal Mail Tracked 24 Signature</td>
                      <td className="p-3 text-[#10B981] font-bold">12 - 24 Hours Next-Day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#0F172A]">United States</td>
                      <td className="p-3">FedEx Mainland Re-ship Cargo</td>
                      <td className="p-3 text-[#10B981] font-bold">24 - 48 Hours Express</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#0F172A]">Europe Zone</td>
                      <td className="p-3">DHL Express Temperature Controlled</td>
                      <td className="p-3 text-zinc-450">2 - 4 Days Trackable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
