'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronUp, ChevronDown, Trash2, Send, Mail, X, CheckSquare, Lock } from 'lucide-react';
import { useCart } from '@/lib/cart';

export default function OrderBuilder() {
  const {
    items,
    totalPrice,
    updateQty,
    removeItem,
    clearOrder,
    sendWhatsApp,
    sendEmail,
    isMounted,
  } = useCart();

  const [expanded, setExpanded] = useState(true);

  if (!isMounted || items.length === 0) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="fixed bottom-6 right-6 z-45 max-w-sm sm:max-w-md w-full px-4 sm:px-0">
      <AnimatePresence>
        <motion.div
          initial={{ y: 150, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 150, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="bg-[#0F172A] border-2 border-[#FF6B1A] rounded-2xl shadow-2xl overflow-hidden text-white"
        >
          {/* Header */}
          <div
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between bg-slate-900 px-5 py-4 cursor-pointer border-b border-white/5 select-none"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#FF6B1A] text-white p-2 rounded-lg">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-wide text-[#FF6B1A]">
                  RE-INFORCED ORDER BUILDER
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'vials'} added • Total: £{totalPrice}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearOrder();
                }}
                className="p-1 px-2 rounded hover:bg-white/10 text-xs text-red-400 border border-red-400/20 mr-1 transition-colors"
                title="Clear all research items"
              >
                Clear
              </button>
              {expanded ? (
                <ChevronDown className="w-5 h-5 text-zinc-400" />
              ) : (
                <ChevronUp className="w-5 h-5 text-zinc-400" />
              )}
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-5 py-4 space-y-4 max-h-[300px] overflow-y-auto divide-y divide-white/5 scrollbar-thin">
                  {items.map((item, index) => (
                    <div
                      key={item.key}
                      className={`flex justify-between items-center ${index > 0 ? 'pt-3.5' : ''}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold tracking-wide text-zinc-100">{item.name}</span>
                        <span className="text-[11px] text-zinc-400 font-mono">Variant: {item.variant}</span>
                        <span className="text-[11px] text-white/90 font-mono mt-0.5">£{item.price} per vial / kit</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {/* Quantity controls */}
                        <div className="flex items-center bg-slate-800 border border-white/10 rounded-lg overflow-hidden select-none">
                          <button
                            onClick={() => updateQty(item.key, item.qty - 1)}
                            className="px-2.5 py-1.5 hover:bg-white/10 text-zinc-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono font-bold leading-none">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.key, item.qty + 1)}
                            className="px-2.5 py-1.5 hover:bg-white/10 text-zinc-400 transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Trash */}
                        <button
                          onClick={() => removeItem(item.key)}
                          className="p-1 px-1.5 bg-red-950/40 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals & Submit CTAs */}
                <div className="bg-slate-900 border-t border-white/5 p-5 space-y-4">
                  <div className="flex justify-between text-xs font-mono text-zinc-400 font-semibold">
                    <span>ESTIMATED TOTAL EXPENSES:</span>
                    <span className="text-white text-sm font-bold text-[#FF6B1A]">£{totalPrice}.00</span>
                  </div>
                  
                  {/* Primary Secured One-Page Checkout */}
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center gap-2 bg-[#FF6B1A] text-white hover:bg-[#2563EB] text-xs font-bold uppercase tracking-wider py-4 px-4 rounded-xl shadow cursor-pointer transition-all active:scale-[0.98] w-full text-center font-heading"
                  >
                    <Lock className="w-4 h-4 text-white" />
                    <span>Proceed to Secure Checkout</span>
                  </Link>

                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-white/5"></div>
                    <span className="flex-shrink mx-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">or inquire via</span>
                    <div className="flex-grow border-t border-white/5"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={sendWhatsApp}
                      className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white hover:bg-[#1EBE5A] text-xs font-bold uppercase py-3 px-3 rounded-xl shadow cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={sendEmail}
                      className="flex items-center justify-center gap-1.5 bg-slate-800 text-white hover:bg-slate-700 text-xs font-bold uppercase py-3 px-3 rounded-xl border border-white/10 shadow cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Rep</span>
                    </button>
                  </div>

                  {/* Research Agreement declaration */}
                  <div className="flex gap-2 text-[10px] text-zinc-550 font-mono pt-1 leading-normal">
                    <CheckSquare className="w-3.5 h-3.5 text-[#FF6B1A] shrink-0 mt-0.5" />
                    <span>Inquiring research entities accept full domestic legal and sterile storage conditions under local Bio-Safety oversight.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
