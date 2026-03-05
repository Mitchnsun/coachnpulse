import React from 'react';
import type { Metadata } from 'next';
import { siteMetadata } from '@utils/site-metadata';
import Header from '@components/header';
import Footer from '@components/footer';
import './globals.css';
import '../public/fonts/fonts.css';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.coachnpulse.com/" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
