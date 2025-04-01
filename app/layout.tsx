import type { Metadata } from "next";
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css'

// Initialize fonts with Latin subset
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: {
    default: 'ODocs - Version-Aware AI Code Generation',
    template: '%s | ODocs',
  },
  description: 'Ensure your AI coding assistant generates accurate, version-appropriate code with ODocs.',
  keywords: ['AI code generation', 'documentation registry', 'framework versions', 'developer tools'],
  metadataBase: new URL('https://odocs.dev'),
  openGraph: {
    title: 'ODocs - Open Documentation Registry for AI Code Generation',
    description: 'Solve version mismatch issues in AI-generated code with ODocs',
    url: 'https://odocs.dev',
    siteName: 'ODocs',
    images: [
      {
        url: '/images/odocs-og-image.png',
        width: 1200,
        height: 630,
        alt: 'ODocs - Open Documentation Registry for AI Code Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODocs - Version-Aware AI Code Generation',
    description: 'Solve version mismatch issues in AI-generated code with ODocs',
    creator: '@odocs_dev',
    images: ['/images/odocs-twitter-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://odocs.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}