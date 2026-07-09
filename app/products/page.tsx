import React from 'react';
import { Metadata } from 'next';
import ProductsClient from '@/components/ProductsClient';

export const metadata: Metadata = {
  title: 'Certified Research Peptides Catalog | Buy Retatrutide Online',
  description: 'Shop HPLC-verified research peptides including Retatrutide, Tirzepatide, and Semaglutide. 99%+ validated purity, nitrogen-sealed crystalline compounds.',
  alternates: {
    canonical: '/products',
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}
