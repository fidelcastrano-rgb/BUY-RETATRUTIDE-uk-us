'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface OrderItem {
  key: string; // e.g. "retatrutide|5mg"
  name: string;
  variant: string; // e.g. "5mg" (or "10 vials x 5mg")
  price: number;
  qty: number;
}

interface CartContextProps {
  items: OrderItem[];
  addToOrder: (item: { name: string; variant: string; price: number }) => void;
  removeItem: (key: string) => void;
  updateQty: (key: string, qty: number) => void;
  clearOrder: () => void;
  totalPrice: number;
  sendWhatsApp: () => void;
  sendEmail: () => void;
  isMounted: boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      const stored = localStorage.getItem('buyretat_order');
      if (stored) {
        try {
          setItems(JSON.parse(stored));
        } catch (e) {
          console.error('Error loading order state', e);
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('buyretat_order', JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addToOrder = (item: { name: string; variant: string; price: number }) => {
    const key = `${item.name.toLowerCase().replace(/\s+/g, '-')}|${item.variant.toLowerCase().replace(/\s+/g, '')}`;
    
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.key === key);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      } else {
        return [...prev, { key, name: item.name, variant: item.variant, price: item.price, qty: 1 }];
      }
    });
  };

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  };

  const updateQty = (key: string, qty: number) => {
    if (qty <= 0) {
      removeItem(key);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, qty } : item))
    );
  };

  const clearOrder = () => {
    setItems([]);
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Compile summary of order and format text
  const compileOrderMessage = () => {
    let msg = `🧪 *NEW PEPTIDE INQUIRY - BUY RETATRUTIDE US & UK*\n`;
    msg += `----------------------------------------------\n`;
    items.forEach((item) => {
      msg += `• ${item.name} (${item.variant}) x${item.qty} - $${item.price * item.qty}\n`;
    });
    msg += `----------------------------------------------\n`;
    msg += `*Total Appr. Price:* $${totalPrice}\n\n`;
    msg += `*Preferred Dispatch:* US/UK Mainland Next Day\n`;
    msg += `Please confirm shipping details and payment instructions (Bank Transfer / Bitcoin / USDT).`;
    return msg;
  };

  const sendWhatsApp = () => {
    const formattedText = encodeURIComponent(compileOrderMessage());
    // US primary contact
    const phone = '19174100236';
    window.open(`https://wa.me/${phone}?text=${formattedText}`, '_blank');
  };

  const sendEmail = () => {
    const subject = encodeURIComponent('🧪 Peptide Bulk Research Order Inquiry');
    const body = encodeURIComponent(
      compileOrderMessage().replace(/\*/g, '') // remove markdown bold for standard email
    );
    window.location.href = `mailto:sales@buyretat.com?subject=${subject}&body=${body}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToOrder,
        removeItem,
        updateQty,
        clearOrder,
        totalPrice,
        sendWhatsApp,
        sendEmail,
        isMounted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
