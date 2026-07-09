export interface ProductVariant {
  label: string; // e.g. "5mg Vial"
  price: number;
  originalPrice?: number;
  savings?: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  shortDescription: string;
  pricePrefix: string;
  basePrice: number;
  badge?: string; // Best Seller, Bundle Deal
  variants: ProductVariant[];
  coaVerified: string; // Purity number, e.g., "99.42%"
  coaDate: string; // e.g. "June 2026"
  coaDocId: string; // e.g. "HPLC-RET-2026-6"
  tabs: {
    packageContents: string;
    storage: string;
    supplyChain: string;
  };
  trustBadges: { title: string; desc: string }[];
  images: string[]; // 3 images
}

export const PRODUCTS_DATA: Product[] = [
  {
    "slug": "buy-alluvi-retatrutide-40mg-x2-bundle",
    "name": "Alluvi Retatrutide 40mg ×2 Bundle",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide 40mg ×2 Bundle includes two pre-calibrated research devices designed for precision, consistency, and extended laborato...",
    "description": "Alluvi Retatrutide 40mg ×2 Bundle includes two pre-calibrated research devices designed for precision, consistency, and extended laboratory use. Ready-to-use with no preparation required, making it ideal for high-volume and multi-phase research workflows.",
    "pricePrefix": "from",
    "basePrice": 204.75,
    "coaVerified": "99.79%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 204.75
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.79% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "buy-alluvi-retatrutide-20mg-pen",
    "name": "Alluvi Retatrutide 20mg (R&D)",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide 20mg is a pre-calibrated research device designed for precision and convenience in laboratory settings.",
    "description": "Alluvi Retatrutide 20mg is a pre-calibrated research device designed for precision and convenience in laboratory settings. Ready-to-use with no preparation required, ensuring consistent and efficient experimental use. Approved for human use.",
    "pricePrefix": "from",
    "basePrice": 65,
    "coaVerified": "99.79%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 65
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.79% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/68c153351d1a646053b66e98_Retatrutide-5MG-With-Pen-1-scaled.jpg",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "alluvi-retatrutide-bpc-157-tb-500-40mg",
    "name": "Alluvi Retatrutide BPC-157 & TB-500 40mg",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide BPC-157 & TB-500 40mg is a ready-to-use research pen combining three advanced peptides in a pre-measured laboratory fo...",
    "description": "Alluvi Retatrutide BPC-157 & TB-500 40mg is a ready-to-use research pen combining three advanced peptides in a pre-measured laboratory formulation. Designed strictly for research purposes, this prefilled device offers precision handling, consistency, and convenience for controlled experimental settings across the UK and Europe.",
    "pricePrefix": "from",
    "basePrice": 90.99,
    "coaVerified": "99.05%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 90.99
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.05% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Retatrutide-BPC-157-TB-500.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "alluvi-glow-ghk-cu-bpc-157-tb-500-70mg",
    "name": "Alluvi Glow GHK-Cu - BPC-157 & TB-500 70mg",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Glow GHK-Cu - BPC-157 & TB-500 70mg is a pre-calibrated research peptide blend developed for laboratory and in-vitro research purp...",
    "description": "Alluvi Glow GHK-Cu - BPC-157 & TB-500 70mg is a pre-calibrated research peptide blend developed for laboratory and in-vitro research purposes only. This advanced 70mg research formula combines three widely studied peptides in a ready-made research device, manufactured to high analytical standards and supplied exclusively for R&D use within the UK and Europe.",
    "pricePrefix": "from",
    "basePrice": 58.49,
    "coaVerified": "99.84%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 58.49
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.84% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Glow-GHK-Cu-%E2%80%93-BPC-157-TB-500-70mg.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "alluvi-nad-1000mg",
    "name": "Alluvi NAD+ 1000mg",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi NAD+ 1000mg is a high-purity research compound supplied in a pre-calibrated research format for laboratory and in-vitro use only.",
    "description": "Alluvi NAD+ 1000mg is a high-purity research compound supplied in a pre-calibrated research format for laboratory and in-vitro use only. Designed for controlled scientific investigation, this premium 1000mg NAD+ formulation is available across the UK and Europe exclusively for R&D purposes.",
    "pricePrefix": "from",
    "basePrice": 110.49,
    "coaVerified": "99.65%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 110.49
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.65% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-NAD-1000mg.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "alluvi-tirzepatide-40mg",
    "name": "Alluvi Tirzepatide 40mg",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Tirzepatide 40mg R&D Only is a high-purity, pre-calibrated research pen designed exclusively for laboratory and analytical researc...",
    "description": "Alluvi Tirzepatide 40mg R&D Only is a high-purity, pre-calibrated research pen designed exclusively for laboratory and analytical research applications. Manufactured to strict quality standards and distributed across the UK and Europe, this ready-to-use research device ensures precision handling, consistency, and controlled laboratory study use. For research purposes only.",
    "pricePrefix": "from",
    "basePrice": 77.99,
    "coaVerified": "99.72%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 77.99
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.72% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Tirzepatide-40mg.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "buy-alluvi-retatrutide-40mg-x2-bundle-2",
    "name": "Alluvi Retatrutide 40mg ×2 Bundle (Variant 2)",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide 40mg ×2 Bundle includes two pre-calibrated research devices designed for precision, consistency, and extended laborato...",
    "description": "Alluvi Retatrutide 40mg ×2 Bundle includes two pre-calibrated research devices designed for precision, consistency, and extended laboratory use. Ready-to-use with no preparation required, making it ideal for high-volume and multi-phase research workflows.",
    "pricePrefix": "from",
    "basePrice": 204.75,
    "coaVerified": "99.79%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 204.75
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.79% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "buy-alluvi-retatrutide-20mg-pen-3",
    "name": "Alluvi Retatrutide 20mg (R&D) (Variant 3)",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide 20mg is a pre-calibrated research device designed for precision and convenience in laboratory settings.",
    "description": "Alluvi Retatrutide 20mg is a pre-calibrated research device designed for precision and convenience in laboratory settings. Ready-to-use with no preparation required, ensuring consistent and efficient experimental use. Approved for human use.",
    "pricePrefix": "from",
    "basePrice": 65,
    "coaVerified": "99.79%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 65
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.79% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/68c153351d1a646053b66e98_Retatrutide-5MG-With-Pen-1-scaled.jpg",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  },
  {
    "slug": "alluvi-retatrutide-bpc-157-tb-500-40mg-4",
    "name": "Alluvi Retatrutide BPC-157 & TB-500 40mg (Variant 4)",
    "tagline": "Premium Pre-calibrated R&D Device",
    "category": "Alluvi Premium",
    "shortDescription": "Alluvi Retatrutide BPC-157 & TB-500 40mg is a ready-to-use research pen combining three advanced peptides in a pre-measured laboratory fo...",
    "description": "Alluvi Retatrutide BPC-157 & TB-500 40mg is a ready-to-use research pen combining three advanced peptides in a pre-measured laboratory formulation. Designed strictly for research purposes, this prefilled device offers precision handling, consistency, and convenience for controlled experimental settings across the UK and Europe.",
    "pricePrefix": "from",
    "basePrice": 90.99,
    "coaVerified": "99.05%",
    "coaDate": "June 2026",
    "coaDocId": "PLACEHOLDER",
    "variants": [
      {
        "label": "1 Item",
        "price": 90.99
      }
    ],
    "tabs": {
      "packageContents": "Pre-calibrated research device.",
      "storage": "Store as per manufacturer guidelines.",
      "supplyChain": "Directly sourced from trusted synthesizing partners."
    },
    "trustBadges": [
      {
        "title": "99.05% Purity Verified",
        "desc": "Certified HPLC batch tested"
      },
      {
        "title": "Next-Day Dispatch",
        "desc": "Secure trackable UK distribution"
      },
      {
        "title": "Cold-Chain Potent",
        "desc": "Lyophilized to preserve stability"
      },
      {
        "title": "Discrete Packing",
        "desc": "Secure shipping with double padding"
      }
    ],
    "images": [
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Retatrutide-BPC-157-TB-500.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png",
      "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
    ]
  }
];