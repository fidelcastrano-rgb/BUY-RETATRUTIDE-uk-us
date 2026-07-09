import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/products',
        '/products/',
        '/about',
        '/faq',
        '/contact',
        '/blog',
        '/blog/',
      ],
      disallow: [
        '/terms',
        '/privacy',
      ],
    },
    sitemap: 'https://buyretat.com/sitemap.xml',
  };
}
