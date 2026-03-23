import './global.css';
import Script from "next/script";
import ClientProviders from '../components/ClientProviders';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'CampusMart – Student Marketplace',
  description: 'Buy, sell, and get assignment help from verified students on your campus. CampusMart is your trusted campus marketplace.',
  openGraph: {
    title: 'CampusMart – Student Marketplace',
    description: 'Buy, sell, and get assignment help from verified students on your campus.',
    url: 'https://campusmart.store',
    siteName: 'CampusMart',
    images: [
      {
        url: 'https://campusmart.store/fav.jpg',
        width: 1200,
        height: 630,
        alt: 'CampusMart – Student Marketplace',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampusMart – Student Marketplace',
    description: 'Buy, sell, and get assignment help from verified students on your campus.',
    images: ['https://campusmart.store/fav.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/fav.jpg',
    shortcut: '/fav.jpg',
    apple: '/fav.jpg',
    other: [
      { rel: 'icon', url: '/fav.jpg', sizes: '32x32', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '64x64', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '96x96', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '128x128', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '192x192', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '256x256', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '384x384', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '512x512', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '1024x1024', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '180x180', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '152x152', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '167x167', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '192x192', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '256x256', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '512x512', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8234149876760532" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8234149876760532"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
