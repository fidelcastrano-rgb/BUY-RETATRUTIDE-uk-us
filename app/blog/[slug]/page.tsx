import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS_DATA, BlogPost } from '@/lib/blog';
import { PRODUCTS_DATA } from '@/lib/products';
import Link from 'next/link';
import {
  Calendar,
  User,
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Info,
  BadgeAlert,
  Send,
  ShoppingCart,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render blog slugs at build compile time
export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

// Generate rich, keyword-optimized SEO headers on the server
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - BUY RETATRUTIDE',
    };
  }

  return {
    title: `${post.title} | Buy Retatrutide Scientific Archives`,
    description: post.shortDesc,
    alternates: {
      canonical: `/blog/${post.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Related products - find matching product from slug or default to Retatrutide
  const relatedProduct = PRODUCTS_DATA.find((p) => p.slug === post.relatedProductSlug) || PRODUCTS_DATA[0];

  // Resolve related posts from database
  const relatedPosts = BLOG_POSTS_DATA.filter((p) => post.relatedSlugs.includes(p.slug)).slice(0, 3);

  return (
    <div className="w-full bg-[#F8FAFC] py-12 sm:py-20 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back to Blog link & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold font-heading uppercase text-[#2563EB] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to scientific blog</span>
          </Link>
          
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
            <Link href="/" className="hover:text-[#2563EB]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <Link href="/blog" className="hover:text-[#2563EB]">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[#0F172A] font-bold line-clamp-1">{post.title}</span>
          </div>
        </div>

        {/* Article header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF2F7] px-3 py-1.5 rounded-full text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider">
            {post.category}
          </div>
          
          <h1 className="font-heading font-extrabold text-[#0F172A] text-2.5xl sm:text-3.5xl lg:text-4xl tracking-tight leading-snug mb-0">
            {post.title}
          </h1>

          {/* Autorship and timeline meta */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-[#475569] uppercase font-bold pt-1.5 border-b border-[#CBD5E1]/45 pb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2563EB]" />
              PUBLISHED: {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              AUTHOR: {post.author}
            </span>
          </div>
        </div>

        {/* Mandatory Research Disclaimer */}
        <div className="bg-red-500/5 border-l-4 border-red-500 rounded p-4 text-[11px] font-mono text-zinc-450 leading-relaxed space-y-1 bg-red-50">
          <div className="flex items-center gap-1.5 text-red-650 font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>MANDATORY CRITICAL LABORATORY BIO-SAFETY DISCLAIMER</span>
          </div>
          <p>{post.disclaimer}</p>
        </div>

        {/* Hero image container */}
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#CBD5E1]/50 shadow-sm">
          <img
            src={post.heroImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Article Longform Sections */}
        <article className="space-y-8 text-xs sm:text-sm text-[#475569] bg-white border border-[#CBD5E1]/45 p-6 sm:p-10 rounded-3xl shadow-sm">
          {post.sections.map((sec, idx) => {
            const isH2 = sec.level === 'h2';
            return (
              <div key={idx} className="space-y-4">
                {isH2 ? (
                  <h2 className="font-heading font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight pt-4 border-t border-slate-100 first:border-t-0 first:pt-0 leading-snug">
                    {sec.heading}
                  </h2>
                ) : (
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] tracking-tight leading-snug">
                    {sec.heading}
                  </h3>
                )}

                <p className="leading-relaxed">{sec.content}</p>

                {/* Info and alert boxes */}
                {sec.infoBox && (
                  <div
                    className={`border-l-4 rounded-r-xl p-4.5 space-y-1 ${
                      sec.infoBox.type === 'tip'
                        ? 'border-[#FF6B1A] bg-[#FF6B1A]/5 text-[#475569]'
                        : 'border-red-500 bg-red-500/5 text-[#475550]'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 font-bold uppercase font-heading text-[10px] tracking-wider ${
                        sec.infoBox.type === 'tip' ? 'text-[#FF6B1A]' : 'text-red-550'
                      }`}
                    >
                      {sec.infoBox.type === 'tip' ? (
                        <Info className="w-4 h-4" />
                      ) : (
                        <BadgeAlert className="w-4 h-4" />
                      )}
                      <span>
                        {sec.infoBox.type === 'tip' ? 'Chemical Handling Tip' : 'Lab Safety Warning'}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed font-normal">{sec.infoBox.text}</p>
                  </div>
                )}

                {/* Data Tables where relevant */}
                {sec.table && (
                  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm mt-4">
                    <table className="w-full text-left border-collapse text-xs select-none">
                      <thead>
                        <tr className="bg-[#EEF2F7] border-b border-zinc-250 text-[#0F172A] font-mono font-bold uppercase tracking-wider">
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="p-3 sm:p-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-[#475569]">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((val, cIdx) => (
                              <td key={cIdx} className="p-3 sm:p-4 font-normal text-[11px] sm:text-xs">
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </article>

        {/* CTA BOX: WhatsApp + Shop redirections */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-950 border-2 border-[#FF6B1A] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl space-y-5 relative z-10 text-center sm:text-left">
            <span className="text-[9px] font-mono text-[#FF6B1A] font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              SECURE CONTINUOUS LAB ALLOCATION ACTIVE
            </span>
            <h3 className="font-heading font-extrabold text-[#F8FAFC] text-xl sm:text-2xl tracking-tight mb-1 leading-none">
              Inquire Dynamic Bulk Reagent Contracts
            </h3>
            <p className="text-xs text-zinc-350 leading-relaxed font-normal">
              Directly match your prospective cell assay volumes with our HPLC verified chemical batches. Connect to resolve bulk kit pricing and prompt UK/US dispatch parameters.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 justify-center sm:justify-start select-none">
              <a
                href={`https://wa.me/447700900077?text=Hello%20Dears,%20I'd%20like%20to%20inquire%20about%20ordering%2520${relatedProduct.name}`}
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] text-xs font-bold uppercase py-3.5 px-6 rounded-xl shadow cursor-pointer text-center"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>WhatsApp Dispatcher</span>
              </a>

              <Link
                href={`/products/${relatedProduct.slug}`}
                className="flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase py-3.5 px-6 rounded-xl shadow cursor-pointer text-center"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Explore {relatedProduct.name.split(' ')[0]} Specs</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles Box (3 links) */}
        <div className="pt-12 border-t border-[#CBD5E1]/45 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold font-heading uppercase text-[#0F172A]">
            <BookOpen className="w-5 h-5 text-[#2563EB]" />
            <span>Cross-linked scientific analysis archives</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-[#CBD5E1]/60 hover:border-[#2563EB] rounded-2xl p-5 hover:shadow transition-all space-y-2.5 flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-[#2563EB] uppercase font-extrabold bg-[#EEF2F7] px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0F172A] tracking-tight group-hover:text-[#2563EB] block leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#475569] uppercase font-heading pt-1 border-t border-slate-100">
                  <span>Enclosed analysis</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
