import React from 'react';
import { Metadata } from 'next';
import { BLOG_POSTS_DATA } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

const CATEGORIES = ['All', 'Purity & Sourcing', 'Peptide Science', 'Safety Protocols', 'Cost & Budgeting'];

export const metadata: Metadata = {
  title: 'Scientific Peptide Research Library & Clinical Guides | Buy Retatrutide',
  description: 'Read comprehensive, peer-reviewed scientific articles on Retatrutide chemical structures, clinical reconstitution safety protocols, and GIP/GLP-1 receptor modeling.',
  alternates: {
    canonical: '/blog',
  }
};

export default function BlogListingPage() {
  return <BlogListingClient posts={BLOG_POSTS_DATA} categories={CATEGORIES} />;
}
