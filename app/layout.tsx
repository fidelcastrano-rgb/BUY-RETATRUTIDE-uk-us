import type {Metadata} from 'next';
import {Space_Grotesk, DM_Sans} from 'next/font/google';
import './globals.css'; // Global styles
import {CartProvider} from '@/lib/cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import OrderBuilder from '@/components/OrderBuilder';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Buy Retatrutide | Retatrutide Peptide for Sale | UK & USA',
  description: "Looking for how to get retatrutide? Buy retatrutide online with confidence. We offer 99% pure, lab-tested retatrutide peptide for sale. Your trusted source for retatrutide buy online USA & UK.",
  metadataBase: new URL('https://buyretat.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="bg-bg-main text-text-primary font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <OrderBuilder />
        </CartProvider>
      </body>
    </html>
  );
}
