'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { placeOrderAction, CheckoutInput } from '@/app/actions/order';
import { 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Truck, 
  CreditCard, 
  ShoppingBag, 
  AlertCircle, 
  Loader2, 
  ChevronRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export default function CheckoutForm() {
  const router = useRouter();
  const { items, totalPrice, clearOrder, isMounted } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    state: '',
    city: '',
    streetAddress: '',
    apartment: '',
    postalCode: '',
    shippingMethod: 'express' as 'express' | 'normal' | 'international',
    paymentMethod: 'Bitcoin (BTC)' as 'Bitcoin (BTC)' | 'USDT' | 'Zelle' | 'Apple Pay' | 'Chime',
    website: '', // Honeypot field for spam prevention
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const shippingCosts = {
    express: 65,
    normal: 20,
    international: 50,
  };

  const currentShippingCost = shippingCosts[formData.shippingMethod];
  const grandTotal = totalPrice + currentShippingCost;

  // Form Validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Street address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State / Province is required';
    if (!formData.postalCode.trim()) errors.postalCode = 'Postal / Zip code is required';
    if (!formData.country.trim()) errors.country = 'Country is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error on change
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleShippingChange = (method: 'express' | 'normal' | 'international') => {
    setFormData((prev) => ({
      ...prev,
      shippingMethod: method,
    }));
  };

  const handlePaymentChange = (method: typeof formData.paymentMethod) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setErrorMessage(null);

    // Minimum order check
    if (totalPrice < 100) {
      setErrorMessage('Minimum order sub-total must be at least $100.00 to place an order.');
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    // Validate
    if (!validateForm()) {
      const firstError = Object.values(formErrors)[0] || 'Please fill in all required fields.';
      setErrorMessage('Please fix the errors in the form before submitting.');
      // Scroll to top of form
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);

    try {
      // Map cart items for server action
      const orderItems = items.map((item) => ({
        key: item.key,
        name: item.name,
        variant: item.variant,
        qty: item.qty,
        price: item.price,
      }));

      const actionInput: CheckoutInput = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        streetAddress: formData.streetAddress,
        apartment: formData.apartment || undefined,
        postalCode: formData.postalCode,
        shippingMethod: formData.shippingMethod,
        paymentMethod: formData.paymentMethod,
        items: orderItems,
        website: formData.website, // Honeypot
      };

      const result = await placeOrderAction(actionInput);

      if (result.success && result.orderNumber) {
        // Clear order state from cart
        clearOrder();
        // Redirect to confirmation page
        router.push(
          `/checkout/confirmation?orderNumber=${encodeURIComponent(result.orderNumber)}&name=${encodeURIComponent(
            formData.firstName + ' ' + formData.lastName
          )}&payment=${encodeURIComponent(formData.paymentMethod)}&shipping=${encodeURIComponent(
            formData.shippingMethod === 'express'
              ? 'Express Shipping'
              : formData.shippingMethod === 'normal'
              ? 'Normal Shipping'
              : 'International Shipping'
          )}&total=${encodeURIComponent(grandTotal.toString())}`
        );
      } else {
        setErrorMessage(result.error || 'Failed to place the order. Please check your credentials or try again.');
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
    } catch (err: any) {
      console.error('[Checkout Form Error]', err);
      setErrorMessage(err.message || 'An unexpected connection error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Guard loading cart details
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center py-20 px-4">
        <Loader2 className="w-10 h-10 text-[#FF6B1A] animate-spin mb-4" />
        <p className="text-sm font-mono text-[#475569] uppercase tracking-wider">Mounting secure checkout module...</p>
      </div>
    );
  }

  // Cart is empty or below minimum case
  if ((items.length === 0 || totalPrice < 100) && !submitting) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center py-24 px-4 text-center">
        <div className="bg-[#0F172A] p-5 rounded-2xl shadow-xl border border-[#CBD5E1]/50 max-w-md w-full space-y-6">
          <div className="bg-[#FF6B1A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-[#FF6B1A]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="font-heading font-extrabold text-2xl text-white uppercase">
              {items.length === 0 ? 'YOUR CART IS EMPTY' : 'MINIMUM ORDER NOT MET'}
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {items.length === 0 ? 'No active compounds staged' : 'Minimum order amount is $100.00'}
            </p>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {items.length === 0 
              ? 'You must add lyophilized research compounds to your Order Builder drawer before proceeding to our secure checkout terminal.'
              : `Your current order sub-total is $${totalPrice.toFixed(2)}. The minimum required amount for research orders is $100.00.`}
          </p>
          <div className="pt-2">
            <Link
              href="/products"
              className="flex justify-center items-center gap-2 bg-[#FF6B1A] text-white hover:bg-[#1D4ED8] text-sm font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all"
            >
              <span>Explore Research Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#475569] mb-8 select-none">
          <Link href="/" className="hover:text-[#2563EB]">HOME</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-[#2563EB]">PRODUCTS</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0F172A] font-bold">SECURE CHECKOUT TERMINAL</span>
        </div>

        {/* Title Block */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full text-[11px] font-mono text-[#2563EB] font-bold uppercase tracking-widest mb-3">
            <Lock className="w-3 h-3 text-[#2563EB]" />
            <span>256-Bit SSL Encrypted Assured Transaction</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none mb-2">
            SECURE CHECKOUT
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] font-mono uppercase tracking-wide">
            Enter research entity credentials and shipping destination.
          </p>
        </div>

        {/* Error Alert Banner */}
        {errorMessage && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-4.5 flex gap-3 text-red-700 text-sm leading-relaxed items-start">
            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Checkout transaction paused</p>
              <p className="text-xs mt-1 text-red-600 font-medium">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Honeypot spam block field - hidden from human view */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website Address</label>
            <input
              id="website"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Left Columns - Form Details (8 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Panel 1: Customer Information */}
            <div className="bg-white border border-[#CBD5E1]/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#CBD5E1]/40 pb-4">
                <span className="bg-[#2563EB]/10 text-[#2563EB] w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm">1</span>
                <div>
                  <h3 className="font-heading font-extrabold text-lg leading-none">Customer Information</h3>
                  <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider block mt-1">Research entity contact record</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.firstName ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. John"
                  />
                  {formErrors.firstName && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.firstName}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.lastName ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. Doe"
                  />
                  {formErrors.lastName && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.email ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. researcher@lab.org"
                  />
                  {formErrors.email && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.phone ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. +1 (917) 410-0236"
                  />
                  {formErrors.phone && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Panel 2: Shipping Destination */}
            <div className="bg-white border border-[#CBD5E1]/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#CBD5E1]/40 pb-4">
                <span className="bg-[#2563EB]/10 text-[#2563EB] w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm">2</span>
                <div>
                  <h3 className="font-heading font-extrabold text-lg leading-none">Shipping Address</h3>
                  <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider block mt-1">Laboratory or facility delivery destination</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-[#475569]">Country <span className="text-red-500">*</span></label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#CBD5E1] rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 bg-white"
                >
                  <option value="United States">United States (US)</option>
                  <option value="United Kingdom">United Kingdom (UK)</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sweden">Sweden</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-[#475569]">Street Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                    formErrors.streetAddress ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                  }`}
                  placeholder="Street and number, P.O. Box"
                />
                {formErrors.streetAddress && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.streetAddress}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-[#475569]">Apartment, Suite, Unit, Building <span className="text-zinc-400 font-normal italic">(Optional)</span></label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#CBD5E1] rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.city ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. Leeds"
                  />
                  {formErrors.city && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.city}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">State / Province <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.state ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. Yorkshire"
                  />
                  {formErrors.state && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.state}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#475569]">Postal / Zip Code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                      formErrors.postalCode ? 'border-red-500 bg-red-50/10 focus:border-red-500' : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    }`}
                    placeholder="e.g. LS1 1AA"
                  />
                  {formErrors.postalCode && <p className="text-[11px] text-red-500 font-mono font-medium">{formErrors.postalCode}</p>}
                </div>
              </div>
            </div>

            {/* Panel 3: Shipping Method */}
            <div className="bg-white border border-[#CBD5E1]/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#CBD5E1]/40 pb-4">
                <span className="bg-[#2563EB]/10 text-[#2563EB] w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm">3</span>
                <div>
                  <h3 className="font-heading font-extrabold text-lg leading-none">Shipping Method</h3>
                  <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider block mt-1">Select carrier & fulfillment speed</span>
                </div>
              </div>

              <div className="space-y-3">
                
                {/* Option A: Express Shipping */}
                <div
                  onClick={() => handleShippingChange('express')}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between group ${
                    formData.shippingMethod === 'express'
                      ? 'border-[#FF6B1A] bg-orange-50/10'
                      : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shippingMethodSelection"
                      checked={formData.shippingMethod === 'express'}
                      readOnly
                      className="mt-1 accent-[#FF6B1A] h-4 w-4"
                    />
                    <div>
                      <span className="font-heading font-bold text-sm text-[#0F172A] block leading-none">Express Carrier Dispatch</span>
                      <span className="text-xs font-mono text-[#FF6B1A] font-semibold mt-1 block">Fulfillment time: 24 Hours (Tracked & Signed)</span>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-base text-[#0F172A]">$65.00</span>
                </div>

                {/* Option B: Normal Shipping */}
                <div
                  onClick={() => handleShippingChange('normal')}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between group ${
                    formData.shippingMethod === 'normal'
                      ? 'border-[#FF6B1A] bg-orange-50/10'
                      : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shippingMethodSelection"
                      checked={formData.shippingMethod === 'normal'}
                      readOnly
                      className="mt-1 accent-[#FF6B1A] h-4 w-4"
                    />
                    <div>
                      <span className="font-heading font-bold text-sm text-[#0F172A] block leading-none">Normal Tracked Dispatch</span>
                      <span className="text-xs font-mono text-[#475569] mt-1 block">Fulfillment time: 3–5 Days</span>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-base text-[#0F172A]">$20.00</span>
                </div>

                {/* Option C: International Shipping */}
                <div
                  onClick={() => handleShippingChange('international')}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between group ${
                    formData.shippingMethod === 'international'
                      ? 'border-[#FF6B1A] bg-orange-50/10'
                      : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shippingMethodSelection"
                      checked={formData.shippingMethod === 'international'}
                      readOnly
                      className="mt-1 accent-[#FF6B1A] h-4 w-4"
                    />
                    <div>
                      <span className="font-heading font-bold text-sm text-[#0F172A] block leading-none">International Insured Delivery</span>
                      <span className="text-xs font-mono text-[#475569] mt-1 block">Dispatched via premium global air freight</span>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-base text-[#0F172A]">$50.00</span>
                </div>

              </div>
            </div>

            {/* Panel 4: Payment Method */}
            <div className="bg-white border border-[#CBD5E1]/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#CBD5E1]/40 pb-4">
                <span className="bg-[#2563EB]/10 text-[#2563EB] w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm">4</span>
                <div>
                  <h3 className="font-heading font-extrabold text-lg leading-none">Payment Method</h3>
                  <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wider block mt-1">Select preferred transfer coordinate</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {([
                  'Bitcoin (BTC)',
                  'USDT',
                  'Zelle',
                  'Apple Pay',
                  'Chime',
                ] as const).map((method) => {
                  const selected = formData.paymentMethod === method;
                  return (
                    <div
                      key={method}
                      onClick={() => handlePaymentChange(method)}
                      className={`p-4 border rounded-xl cursor-pointer transition-all text-center select-none ${
                        selected
                          ? 'border-[#FF6B1A] bg-orange-50/10 text-[#FF6B1A] font-bold'
                          : 'border-[#CBD5E1] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold uppercase tracking-wide">{method}</div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Notice Message based on Payment selection */}
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4.5 flex gap-3 text-[#1E40AF] text-xs sm:text-sm leading-relaxed">
                <Info className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Instructions Regarding {formData.paymentMethod}</p>
                  <p className="mt-1 text-[#1E40AF]/85 text-xs">
                    Payment instructions will be emailed to you after we review your order. Please do not send payment until you receive those instructions.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Order Summary (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#0F172A] border-2 border-[#CBD5E1]/20 rounded-3xl p-6 sm:p-8 shadow-xl text-white space-y-6">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <ShoppingBag className="w-5 h-5 text-[#FF6B1A]" />
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#FF6B1A] leading-none">Order Summary</h3>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block mt-1">Review items staged for purchase</span>
                </div>
              </div>

              {/* Products List */}
              <div className="divide-y divide-white/5 max-h-[260px] overflow-y-auto pr-2 scrollbar-thin">
                {items.map((item) => (
                  <div key={item.key} className="py-3.5 flex justify-between items-start gap-4">
                    <div>
                      <span className="font-heading font-bold text-sm text-zinc-100 block leading-tight">{item.name}</span>
                      <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">Variant: {item.variant}</span>
                      <span className="text-[10px] text-zinc-400 font-mono block">Unit price: ${item.price.toFixed(2)}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono text-zinc-400 block">x{item.qty}</span>
                      <span className="font-mono text-sm font-bold text-zinc-200 block mt-1">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals Calculations */}
              <div className="border-t border-white/10 pt-4.5 space-y-3.5">
                
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span>PRODUCTS SUB-TOTAL</span>
                  <span className="text-zinc-200 font-bold">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span>DISPATCH COST</span>
                  <span className="text-zinc-200 font-bold">${currentShippingCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span>Fulfillment Carrier</span>
                  <span className="text-[#FF6B1A] font-bold text-[10px] uppercase">
                    {formData.shippingMethod === 'express' 
                      ? 'Express (24h)' 
                      : formData.shippingMethod === 'normal' 
                      ? 'Standard (3-5d)' 
                      : 'Int. Air Cargo'}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest leading-none">Estimated Total</span>
                    <span className="text-[10px] font-mono text-[#FF6B1A] uppercase tracking-wider mt-1 font-bold leading-none">US/UK INCL. COLD CHAIN</span>
                  </div>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-white leading-none">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

              </div>

              {/* Security Seals */}
              <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-400 space-y-2">
                <div className="flex gap-2 items-start">
                  <Lock className="w-3.5 h-3.5 text-[#FF6B1A] shrink-0 mt-0.5" />
                  <span>Your credentials are encrypted and stored inside a protected database. Resend and Postmark pipelines ensure strict transport layer security (TLS).</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF6B1A] text-white hover:bg-[#2563EB] text-sm font-bold uppercase font-heading tracking-widest py-4.5 px-6 rounded-xl shadow-lg cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Validating Transaction...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-white" />
                      <span>Place Research Order</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
