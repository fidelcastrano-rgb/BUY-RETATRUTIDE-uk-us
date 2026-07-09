import React from 'react';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Secure Checkout - Buy Retatrutide',
  description: 'Provide your research credentials and shipping details to place your custom peptide or metabolic compound wholesale inquiry.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <CheckoutForm />
    </main>
  );
}
