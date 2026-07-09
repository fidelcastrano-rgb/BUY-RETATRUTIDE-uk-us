'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, FlaskConical, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart';

export default function Header() {
  const pathname = usePathname();
  const { items, totalPrice } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Shop Peptides', href: '/products' },
    { label: 'About Authority', href: '/about' },
    { label: 'Research FAQ', href: '/faq' },
    { label: 'Contact Rep', href: '/contact' },
    { label: 'Scientific Blog', href: '/blog' },
  ];

  const totalItemsCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* 1. Notice / Announcement Bar Marquee */}
      <div className="w-full bg-[#0F172A] text-white py-2.5 overflow-hidden border-b border-white/10 text-xs font-mono tracking-wider relative z-50">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-flex gap-12 text-zinc-300">
            <span>🧪 *JUNE 2026 HPLC INDEPENDENT LAB ANALYSIS ACTIVE: 99.42% RETATRUTIDE IN STOCK*</span>
            <span>🇬🇧 DISPATCHED DOMESTICALLY WITHIN THE UK VIA TRACKED 24 SIGNATURE CARRIERS</span>
            <span>🇺🇸 RE-SHIPPED FROM NEW JERSEY FOR COLD-CHAIN INTEGRITY IN US MAINLAND</span>
            <span>🛡️ ULTRA-DISCRETE PACKAGING WITH HOLOGRAPHIC SECURITY MATCHING VIAL ID</span>
            <span>💳 PRIVATE BANK TRANSFER & SECURE CRYPTO CORRESPONDENCE ENABLED</span>
          </div>
          {/* Duplicate to ensure seamless infinite scroll */}
          <div className="animate-marquee inline-flex gap-12 text-zinc-300" aria-hidden="true">
            <span>🧪 *JUNE 2026 HPLC INDEPENDENT LAB ANALYSIS ACTIVE: 99.42% RETATRUTIDE IN STOCK*</span>
            <span>🇬🇧 DISPATCHED DOMESTICALLY WITHIN THE UK VIA TRACKED 24 SIGNATURE CARRIERS</span>
            <span>🇺🇸 RE-SHIPPED FROM NEW JERSEY FOR COLD-CHAIN INTEGRITY IN US MAINLAND</span>
            <span>🛡️ ULTRA-DISCRETE PACKAGING WITH HOLOGRAPHIC SECURITY MATCHING VIAL ID</span>
            <span>💳 PRIVATE BANK TRANSFER & SECURE CRYPTO CORRESPONDENCE ENABLED</span>
          </div>
        </div>
      </div>

      {/* 2. Glassmorphism Sticky Nav */}
      <header className="sticky top-0 w-full glass-nav z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-[#FF6B1A] text-white p-2.5 rounded-lg shadow-sm transition-transform group-hover:scale-105">
                <FlaskConical className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#0F172A] leading-none mb-0.5">
                  BUY RETATRUTIDE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#2563EB] font-bold uppercase leading-none">
                  UK & US RESEARCH DEPOT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors py-2 group ${
                      isActive ? 'text-[#2563EB]' : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {link.label}
                    {/* Active/Hover Underline transition */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] transition-transform origin-left duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA and Shopping Badge */}
            <div className="hidden md:flex items-center gap-5">
              {totalItemsCount > 0 && (
                <div className="flex items-center gap-2 text-xs font-mono text-[#0F172A] bg-[#EEF2F7] px-3 py-1.5 rounded-full">
                  <ShoppingBag className="w-4 h-4 text-[#FF6B1A]" />
                  <span>£{totalPrice} ({totalItemsCount} vials)</span>
                </div>
              )}
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#FF6B1A] text-white text-xs font-bold font-heading uppercase tracking-wider py-3 px-5 rounded-lg shadow hover:bg-[#1D4ED8] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger menu trigger */}
            <div className="flex md:hidden items-center gap-3">
              {totalItemsCount > 0 && (
                <div className="flex items-center bg-[#EEF2F7] px-2.5 py-1 rounded-full text-xs font-mono text-[#0F172A]">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#FF6B1A]" />
                  <span className="ml-1">{totalItemsCount}</span>
                </div>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0F172A] hover:bg-[#EEF2F7] rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-[#CBD5E1] z-50 md:hidden overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-white to-[#EEF2F7]">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                        isActive
                          ? 'bg-[#EEF2F7] text-[#2563EB] border-l-4 border-[#2563EB]'
                          : 'text-[#475569] hover:bg-[#EEF2F7] hover:text-[#0F172A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4 border-t border-[#CBD5E1]">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full bg-[#FF6B1A] text-white text-xs font-bold font-heading uppercase tracking-wider py-3.5 rounded-lg shadow hover:bg-[#1D4ED8] transition-all"
                  >
                    <span>Order Research Peptides</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
