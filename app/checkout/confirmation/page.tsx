'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Copy, 
  Check, 
  Calendar, 
  CreditCard, 
  Truck, 
  DollarSign, 
  ExternalLink, 
  User, 
  Clock, 
  FlaskConical,
  Loader2 
} from 'lucide-react';

function ConfirmationDetails() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = React.useState(false);

  const orderNumber = searchParams.get('orderNumber') || 'AP-000000-000';
  const customerName = searchParams.get('name') || 'Valued Researcher';
  const paymentMethod = searchParams.get('payment') || 'Bitcoin (BTC)';
  const shippingMethod = searchParams.get('shipping') || 'Express Shipping (24 Hours)';
  const orderTotal = searchParams.get('total') || '0.00';

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <div className="bg-white border border-[#CBD5E1]/70 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Banner Success Header */}
        <div className="bg-emerald-600 text-white px-6 py-12 text-center space-y-4">
          <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-12 h-12 text-white stroke-[2.5]" />
          </div>
          <div className="space-y-1">
            <h1 className="font-heading font-black text-3xl tracking-tight uppercase leading-none">ORDER SECURED</h1>
            <p className="text-[10px] font-mono tracking-widest text-emerald-100 uppercase font-bold">Inquiry Successfully Registered</p>
          </div>
          <p className="text-sm text-emerald-50 max-w-md mx-auto leading-relaxed">
            Thank you for your order. We have received your request and will email your payment instructions shortly.
          </p>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-10 space-y-8 text-[#0F172A]">
          
          {/* Order Invoice Number Header */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1]/60 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider block leading-none">Your Reference Invoice ID</span>
              <span className="text-xl font-heading font-black tracking-tight font-mono select-all text-[#0F172A]">{orderNumber}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-mono font-bold bg-white border border-[#CBD5E1] hover:border-[#94A3B8] p-2.5 px-4 rounded-xl shadow-sm transition-all select-none active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">COPIED ID</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#475569]" />
                  <span>COPY ORDER NUMBER</span>
                </>
              )}
            </button>
          </div>

          {/* Checkout Attributes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-[#CBD5E1]/40 pb-8">
            
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#475569] border-b border-[#CBD5E1]/30 pb-2">Customer Details</h3>
              <div className="space-y-3 font-medium">
                <div className="flex items-center gap-2.5 text-sm">
                  <User className="w-4.5 h-4.5 text-[#2563EB]" />
                  <span>{customerName}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#475569]">
                  <Calendar className="w-4.5 h-4.5 text-[#2563EB]" />
                  <span>Staged on {currentDate}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#475569] border-b border-[#CBD5E1]/30 pb-2">Logistics & Methods</h3>
              <div className="space-y-3 font-medium">
                <div className="flex items-center gap-2.5 text-sm">
                  <Truck className="w-4.5 h-4.5 text-[#FF6B1A]" />
                  <span>{shippingMethod}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#475569]">
                  <CreditCard className="w-4.5 h-4.5 text-[#2563EB]" />
                  <span>Payment selection: <strong className="text-[#2563EB]">{paymentMethod}</strong></span>
                </div>
              </div>
            </div>

          </div>

          {/* Pricing Total Row */}
          <div className="flex justify-between items-center py-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase text-[#475569] block leading-none">GRAND TOTAL</span>
              <span className="text-[10px] text-zinc-400 font-mono">STAGED IN GBP (£)</span>
            </div>
            <span className="font-heading font-black text-3xl sm:text-4xl text-[#FF6B1A]">
              £{parseFloat(orderTotal).toFixed(2)}
            </span>
          </div>

          {/* Payment Warning Notice Block */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-6 flex gap-3 text-orange-800 text-xs sm:text-sm leading-relaxed">
            <Clock className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">⚠️ IMPORTANT: WAITING FOR INSTRUCTIONS</p>
              <p className="mt-1.5 text-orange-700 font-medium">
                Thank you for your order. We have received your request and will email your payment instructions shortly.
              </p>
              <p className="mt-1 text-orange-700/85">
                Our administration staff is currently reviewing stock availability and discrete packaging routing. <strong>Please do not send any payments</strong> until you receive a direct email containing verified transfer coordinates.
              </p>
            </div>
          </div>

          {/* Actions CTA buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 bg-[#0F172A] text-white hover:bg-[#2563EB] text-xs font-bold uppercase font-heading tracking-widest py-4 px-6 rounded-xl transition-all select-none text-center"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Back to Depot Home</span>
            </Link>
            <Link
              href="/products"
              className="flex justify-center items-center gap-2 bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#E2E8F0] text-xs font-bold uppercase font-heading tracking-widest py-4 px-6 rounded-xl transition-all select-none text-center"
            >
              <span>Explore Research Products</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Suspense fallback={
        <div className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
          <Loader2 className="w-10 h-10 text-[#FF6B1A] animate-spin mb-4" />
          <p className="text-sm font-mono text-[#475569] uppercase tracking-wider">Retrieving Order Receipt...</p>
        </div>
      }>
        <ConfirmationDetails />
      </Suspense>
    </main>
  );
}
