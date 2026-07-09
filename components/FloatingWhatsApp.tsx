'use client';

import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWA = () => {
    // Standard chemical supplier WhatsApp text
    const text = encodeURIComponent("Hello! I'm researching Retatrutide/Tirzepatide and would like to inquire about bulk kits, purity verification certificates, and prompt dispatch options for the US and UK.");
    window.open(`https://wa.me/19174100236?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleWA}
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all outline-none border border-[#1EBE5A]/30 group cursor-pointer"
      aria-label="Chat with our sales and safety representative on WhatsApp"
    >
      {/* WhatsApp Custom Svg or elegant chat bubble */}
      <div className="relative">
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <MessageSquareText className="w-5 h-5 shrink-0 stroke-[2] group-hover:rotate-6 transition-transform" />
      </div>
      
      {/* Label - hidden on small mobile screen widths */}
      <span className="hidden sm:inline-block text-xs font-bold font-heading tracking-wide uppercase">
        Chat with us
      </span>
    </button>
  );
}
