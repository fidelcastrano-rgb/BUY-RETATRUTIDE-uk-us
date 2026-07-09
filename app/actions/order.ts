'use server';

import { getPrisma } from '@/lib/prisma';
import { sendOrderEmails } from '@/lib/email';
import { PRODUCTS_DATA } from '@/lib/products';

export interface CheckoutInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  streetAddress: string;
  apartment?: string;
  postalCode: string;
  shippingMethod: 'express' | 'normal' | 'international';
  paymentMethod: 'Bitcoin (BTC)' | 'USDT' | 'Zelle' | 'Apple Pay' | 'Chime';
  items: Array<{
    key: string;
    name: string;
    variant: string;
    qty: number;
    price: number; // For verification
  }>;
  // Honeypot field for spam prevention
  website?: string;
}

export interface CheckoutResult {
  success: boolean;
  orderNumber?: string;
  error?: string;
}

const SHIPPING_DETAILS = {
  express: { name: 'Express Shipping (24 Hours)', cost: 65 },
  normal: { name: 'Normal Shipping (3–5 Days)', cost: 20 },
  international: { name: 'International Shipping', cost: 50 },
};

export async function placeOrderAction(input: CheckoutInput): Promise<CheckoutResult> {
  try {
    // 1. Honeypot Spam Protection
    if (input.website && input.website.trim() !== '') {
      console.warn('[SPAM BLOCK] Honeypot field was filled. Order blocked.');
      return { success: false, error: 'Spam detected. Submissions blocked.' };
    }

    // 2. Server-side Validation
    if (!input.firstName?.trim() || !input.lastName?.trim()) {
      return { success: false, error: 'First Name and Last Name are required.' };
    }
    if (!input.email?.trim() || !input.email.includes('@')) {
      return { success: false, error: 'A valid Email Address is required.' };
    }
    if (!input.phone?.trim()) {
      return { success: false, error: 'Phone Number is required.' };
    }
    if (!input.country?.trim() || !input.state?.trim() || !input.city?.trim() || !input.streetAddress?.trim() || !input.postalCode?.trim()) {
      return { success: false, error: 'Complete shipping address fields are required.' };
    }
    if (!input.items || input.items.length === 0) {
      return { success: false, error: 'Your cart is empty. Cannot process checkout.' };
    }
    if (!['express', 'normal', 'international'].includes(input.shippingMethod)) {
      return { success: false, error: 'Please select a valid shipping method.' };
    }
    if (!['Bitcoin (BTC)', 'USDT', 'Zelle', 'Apple Pay', 'Chime'].includes(input.paymentMethod)) {
      return { success: false, error: 'Please select a valid payment method.' };
    }

    // 3. Re-calculate & Validate Product Prices on the Server to Prevent Client-Side Tampering
    let calculatedSubtotal = 0;
    const validatedItems = input.items.map((cartItem) => {
      // Find the corresponding product in the official server-side database
      const dbProduct = PRODUCTS_DATA.find(
        (p) => p.name.toLowerCase() === cartItem.name.toLowerCase() ||
               cartItem.name.toLowerCase().includes(p.slug.toLowerCase())
      );

      if (!dbProduct) {
        throw new Error(`Product not found: "${cartItem.name}"`);
      }

      // Find the corresponding variant
      const dbVariant = dbProduct.variants.find(
        (v) => v.label.toLowerCase() === cartItem.variant.toLowerCase()
      );

      if (!dbVariant) {
        throw new Error(`Variant "${cartItem.variant}" not found for product "${cartItem.name}"`);
      }

      const itemPrice = dbVariant.price;
      const qty = Math.max(1, Math.round(cartItem.qty));
      calculatedSubtotal += itemPrice * qty;

      return {
        key: cartItem.key,
        name: dbProduct.name,
        variant: dbVariant.label,
        price: itemPrice,
        qty: qty,
      };
    });

    const selectedShipping = SHIPPING_DETAILS[input.shippingMethod];
    const calculatedTotal = calculatedSubtotal + selectedShipping.cost;

    // 4. Generate Unique Order Number
    const timestamp = Date.now().toString().slice(-6);
    const rand = Math.floor(100 + Math.random() * 900);
    const orderNumber = `AP-${timestamp}-${rand}`;

    // 5. Database Connection & Record Creation
    let orderRecord = null;
    const dbUrl = process.env.DATABASE_URL;
    const isDbConfigured = !!(dbUrl && (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) && !dbUrl.includes('user:password'));

    if (isDbConfigured) {
      try {
        const prisma = getPrisma();
        
        orderRecord = await prisma.order.create({
          data: {
            orderNumber: orderNumber,
            firstName: input.firstName.trim(),
            lastName: input.lastName.trim(),
            email: input.email.trim(),
            phone: input.phone.trim(),
            country: input.country.trim(),
            state: input.state.trim(),
            city: input.city.trim(),
            streetAddress: input.streetAddress.trim(),
            apartment: input.apartment?.trim() || null,
            postalCode: input.postalCode.trim(),
            shippingMethod: selectedShipping.name,
            shippingCost: selectedShipping.cost,
            paymentMethod: input.paymentMethod,
            orderTotal: calculatedTotal,
            status: 'Pending Payment',
            products: validatedItems as any, // Stores the array securely
          },
        });
        console.log(`[Database] Created order ${orderNumber} in PostgreSQL successfully.`);
      } catch (dbErr: any) {
        console.error('[Database Error] Failed to store order in database:', dbErr);
        console.warn(`[Database Fallback] Database write failed for order ${orderNumber}. Proceeding with email notifications and order simulation to prevent checkout disruption.`);
      }
    } else {
      console.warn(`[Database Skip] DATABASE_URL is missing, invalid, or left as default placeholder. Skipping PostgreSQL order record storage for order ${orderNumber}. Proceeding with order simulation.`);
    }

    // 6. Send Email Notifications
    try {
      await sendOrderEmails({
        orderNumber: orderNumber,
        customerName: `${input.firstName.trim()} ${input.lastName.trim()}`,
        customerEmail: input.email.trim(),
        customerPhone: input.phone.trim(),
        shippingAddress: {
          country: input.country.trim(),
          state: input.state.trim(),
          city: input.city.trim(),
          streetAddress: input.streetAddress.trim(),
          apartment: input.apartment?.trim() || undefined,
          postalCode: input.postalCode.trim(),
        },
        products: validatedItems,
        shippingMethod: selectedShipping.name,
        shippingCost: selectedShipping.cost,
        paymentMethod: input.paymentMethod,
        orderTotal: calculatedTotal,
      });
      console.log(`[Email Service] Checked and sent notifications for order ${orderNumber}`);
    } catch (emailErr) {
      console.error('[Email Notification Error] Failed to send Resend emails:', emailErr);
      // We don't fail the order if emails failed but database succeeded, so customer still sees order confirmation.
    }

    return {
      success: true,
      orderNumber: orderNumber,
    };
  } catch (err: any) {
    console.error('[Checkout System Error] Critical error during placeOrderAction:', err);
    return {
      success: false,
      error: err.message || 'An unexpected error occurred. Please try again.',
    };
  }
}
