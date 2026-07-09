import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Secure Checkout - Buy Retatrutide',
  description: 'Provide your research credentials and shipping details to place your custom peptide or metabolic compound wholesale inquiry.',
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
}
