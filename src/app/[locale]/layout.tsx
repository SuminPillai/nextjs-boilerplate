import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond, Cinzel_Decorative } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anantadrishtiyoga.com'),
  title: {
    default: 'Yoga Teacher Training in Rishikesh | Anantadrishti Yoga School',
    template: '%s | Anantadrishti Yoga',
  },
  description: 'Join Yoga Alliance certified 200 & 300-hour yoga teacher training in Rishikesh, India. Traditional Hatha & Ashtanga yoga. Accommodation included. Enroll for 2026.',
  keywords: [
    'yoga teacher training Rishikesh',
    'yoga teacher training India',
    '200 hour yoga teacher training Rishikesh',
    '300 hour yoga teacher training Rishikesh',
    '100 hour yoga teacher training Rishikesh',
    'yoga school Rishikesh',
    'best yoga school Rishikesh',
    'Yoga Alliance certified school Rishikesh',
    'RYT 200 certification India',
    'RYT 500 yoga Rishikesh',
    'yoga retreat Rishikesh',
    'yoga retreat India 2026',
    'meditation retreat Rishikesh',
    'Hatha yoga training Rishikesh',
    'Ashtanga yoga course Rishikesh',
    'pranayama course Rishikesh',
    'advanced pranayama course India',
    'breathwork course Rishikesh',
    'yoga ashram Rishikesh',
    'yoga capital of the world',
    'yoga teacher training Rishikesh 2026',
    'affordable yoga teacher training India',
    'yoga and meditation retreat Rishikesh',
  ],
  authors: [{ name: 'Anantadrishti Yoga', url: 'https://www.anantadrishtiyoga.com' }],
  creator: 'Anantadrishti Yoga',
  publisher: 'Anantadrishti Yoga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Yoga Teacher Training in Rishikesh, India | Anantadrishti Yoga School',
    description: 'Yoga Alliance certified 200 & 300-hour teacher training in the yoga capital of the world. Traditional Hatha & Ashtanga. Accommodation & meals included. Enroll 2026.',
    url: 'https://www.anantadrishtiyoga.com',
    siteName: 'Anantadrishti Yoga',
    images: [
      {
        url: '/img/extern/herosection.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoga Teacher Training at Anantadrishti Yoga, Rishikesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Teacher Training in Rishikesh, India | Anantadrishti Yoga',
    description: 'Yoga Alliance certified 200 & 300-hour yoga teacher training in Rishikesh. Hatha & Ashtanga. Accommodation included. Enroll for 2026 batches.',
    images: ['/img/extern/herosection.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/img/logo.webp',
    apple: '/img/logo.webp',
  },
  manifest: '/manifest.webmanifest',
};

import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { EventPopup } from "@/components/ui/EventPopup";
import { DictionaryProvider } from "@/components/providers/DictionaryProvider";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body
        className={`${poppins.variable} ${cormorant.variable} ${cinzel.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <DictionaryProvider dictionary={await getDictionary(locale as Locale)}>
          <div className="texture-overlay" />
          <Header />
          <main style={{ minHeight: "100vh" }}>
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
          <EventPopup />
        </DictionaryProvider>
      </body>
    </html>
  );
}
