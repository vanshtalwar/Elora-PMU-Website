import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Lip Blushing in Delhi | Premium Korean Lip Tint Treatment | Elora\'s PMU',
  description: 'Get natural, long-lasting lip blushing treatment in Delhi. Korean aesthetic techniques for beautifully tinted lips. Book your consultation today! Starting from ₹15,000.',
  keywords: 'lip blushing delhi, lip tint treatment, korean lip blush, permanent lip color, lip pigmentation treatment, PMU lips delhi',
  authors: [{ name: 'Elora\'s PMU' }],
  openGraph: {
    title: 'Lip Blushing in Delhi | Premium Korean Lip Tint Treatment',
    description: 'Get natural, long-lasting lip blushing treatment in Delhi. Korean aesthetic techniques for beautifully tinted lips.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Elora\'s PMU Delhi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lip Blushing in Delhi | Premium Korean Lip Tint Treatment',
    description: 'Get natural, long-lasting lip blushing treatment in Delhi. Korean aesthetic techniques for beautifully tinted lips.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://eloraspmu.com/lip-blushing-delhi',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4a5a5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Elora's PMU - Lip Blushing Delhi",
              "description": "Premium lip blushing and Korean aesthetic treatments in Delhi",
              "image": "https://eloraspmu.com/logo.png",
              "@id": "https://eloraspmu.com/lip-blushing-delhi",
              "url": "https://eloraspmu.com/lip-blushing-delhi",
              "telephone": "+91-98776-95827",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "South Delhi",
                "addressLocality": "Delhi",
                "addressRegion": "DL",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6139,
                "longitude": 77.2090
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/eloraspmu",
                "https://facebook.com/eloraspmu"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Lip Blushing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lip Blushing Treatment",
                      "description": "Natural Korean lip tint for beautifully enhanced lips"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "15000",
                      "priceCurrency": "INR",
                      "minPrice": "15000"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
