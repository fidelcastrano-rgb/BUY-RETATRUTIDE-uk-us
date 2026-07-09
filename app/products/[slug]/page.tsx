import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS_DATA } from '@/lib/products';
import ProductDetailClient from '@/components/ProductDetailClient';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static parameters for high speed pre-rendering (SSG) at build time
export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic SEO-optimized headers and metadata compilation on the server
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found - BUY RETATRUTIDE',
    };
  }

  return {
    title: `Buy ${product.name} UK & US | HPLC ${product.coaVerified} Purity`,
    description: `Shop certified ${product.name} Lyophilized Powder. ${product.tagline}. Pre-tested lot ${product.coaDocId} available for secure UK & US dispatch.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Related products - filter out current
  const relatedProducts = PRODUCTS_DATA.filter((p) => p.slug !== resolvedParams.slug).slice(0, 3);

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb strip */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <Link href="/products" className="hover:text-[#2563EB]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#0F172A] font-bold">{product.name}</span>
        </div>

        {/* Client Interactive Frame */}
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />

      </div>
    </div>
  );
}
