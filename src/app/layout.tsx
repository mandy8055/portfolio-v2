import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { SocialSidebar } from '@/components/social-sidebar';
import { ConsoleGraffiti } from '@/components/console-graffiti';
import './globals.css';
import { Footer } from '@/components/custom-footer';
import { StructuredData } from '@/components/structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manuj-sankrit-8055.vercel.app'),
  title: {
    default:
      'Manuj Sankrit | Senior Software Engineer & Open Source Evangelist',
    template: '%s | Manuj Sankrit',
  },
  description:
    'Senior Software Engineer specializing in React, Next.js, and TypeScript. Arctic Code Vault Contributor, and open-source evangelist. Building scalable web applications with modern JavaScript frameworks.',
  keywords: [
    'Manuj Sankrit',
    'mandy8055',
    'Software Engineer',
    'React Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Full Stack Developer',
    'Web Development',
    'JavaScript',
    'Arctic Code Vault Contributor',
    'Stack Overflow',
    'Open Source',
    'Frontend Developer',
    'UI Engineer',
    'Tech Blog',
    'Portfolio',
  ],
  authors: [
    { name: 'Manuj Sankrit', url: 'https://manuj-sankrit-8055.vercel.app' },
  ],
  creator: 'Manuj Sankrit',
  publisher: 'Manuj Sankrit',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manuj-sankrit-8055.vercel.app',
    siteName: 'Manuj Sankrit - Portfolio',
    title: 'Manuj Sankrit | Senior Software Engineer & Open Source Evangelist',
    description:
      'Arctic Code Vault Contributor | Stack Overflow Expert (6.8k+ rep) | Building scalable web apps with React, Next.js & TypeScript',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuj Sankrit | Senior Software Engineer & Open Source Evangelist',
    description:
      'Arctic Code Vault Contributor | Stack Overflow Expert | React, Next.js & TypeScript Specialist',
    creator: '@mandy8055',
  },
  alternates: {
    canonical: 'https://manuj-sankrit-8055.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Favicons - you can customize these */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ConsoleGraffiti />
          <Navbar />
          <SocialSidebar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
