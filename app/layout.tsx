import type { Metadata } from "next";
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css'
import { ThirdPartyComponents } from "@/components/third-party-components";

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
    default: 'ODocs - Documentation Registry for AI Code Generation',
    template: '%s | ODocs',
  },
  description: 'Enables your AI coding assistant generates accurate, version-appropriate code on first try.',
  keywords: ['AI code generation', 'Vibe coding', 'documentation registry', 'framework versions', 'developer tools'],
  metadataBase: new URL('https://odocs.dev'),
  openGraph: {
    title: 'ODocs - Open Documentation Registry for AI Code Generation',
    description: 'Enables your AI coding assistant generates accurate, version-appropriate code on first try.',
    url: 'https://odocs.dev',
    siteName: 'ODocs',
    images: [
      {
        url: '/images/odocs-logo.svg',
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
    title: 'ODocs - Open Documentation Registry for AI Code Generation',
    description: 'Enables your AI coding assistant generates accurate, version-appropriate code on first try.',
    creator: '@odocs_dev',
    images: ['/images/odocs-logo.svg'],
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
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
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
        <ThirdPartyComponents />
        {children}
      </body>
    </html>
  );
}