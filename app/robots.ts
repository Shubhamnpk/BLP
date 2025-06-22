import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/private/',
        '/*?*',
        '/*/$',
        '/*?*/',
        '/*?utm_',
        '/*?gclid=',
        '/*?fbclid=',
        '/*?msclkid=',
      ],
    },
    sitemap: 'https://bhagawotilama.com/sitemap.xml',
  }
}
