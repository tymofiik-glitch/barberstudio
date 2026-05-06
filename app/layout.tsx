import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/components/providers/ModalProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { Navbar } from '@/components/layout/Navbar'
import { BookingModal } from '@/components/ui/BookingModal'
import { StickyBookingBar } from '@/components/ui/StickyBookingBar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Two in One Barberstudio | Kapper Rijswijk | Skin Fade & Baardtrimmen',
  description:
    'Two in One Barberstudio in Rijswijk — beste kapper met 5 sterren. Skin fade, knippen, baardtrimmen. Online afspraak maken. Ook nabij Den Haag en Delft.',
  keywords: [
    // NL — lokaal
    'kapper Rijswijk', 'barbershop Rijswijk', 'kapper Den Haag', 'kapper Delft',
    'barbershop Den Haag', 'beste kapper Rijswijk', 'kapper in de buurt',
    // NL — diensten
    'skin fade Rijswijk', 'haarknippen Rijswijk', 'baardtrimmen Rijswijk',
    'fade knippen', 'baardverzorging', 'knippen heren', 'herenkapper Rijswijk',
    'Two in One Barberstudio', 'barberstudio Rijswijk',
    // EN — local
    'barber Rijswijk', 'barbershop Rijswijk', 'barber near me Rijswijk',
    'best barber Rijswijk', 'barber Den Haag', 'barber Delft',
    // EN — services
    'skin fade Netherlands', 'haircut Rijswijk', 'beard trim Rijswijk',
    'fade haircut', 'mens haircut Rijswijk', 'hair salon Rijswijk',
  ],
  openGraph: {
    title: 'Two in One Barberstudio | Kapper Rijswijk',
    description: 'Beste kapper in Rijswijk met 5 sterren. Skin fade, knippen en baardtrimmen. Maak online een afspraak.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    languages: {
      'nl-NL': '/',
      'en-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Two in One Barberstudio',
  image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80',
  description: 'Beste kapper in Rijswijk. Skin fade, haarknippen en baardtrimmen met 5-sterren service.',
  url: 'https://twoinonebarberstudio.nl',
  telephone: '+31647747131',
  priceRange: '€15 – €40',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Visseringlaan 19',
    addressLocality: 'Rijswijk',
    postalCode: '2288 ER',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0379497,
    longitude: 4.3328132,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '45',
    bestRating: '5',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
  ],
  sameAs: [
    'https://maps.app.goo.gl/z98fqEv8CTQFwdkj8',
    'https://www.instagram.com/two_in_one_barberstudio',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-dark text-off-white">
        <LanguageProvider>
          <ModalProvider>
            <Navbar />
            <BookingModal />
            <StickyBookingBar />
            {children}
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
