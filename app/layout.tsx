import React from 'react';
import ClientLayout from './ClientLayout';
import type { Metadata } from 'next';
import { siteMetadata } from '../src/utils/site-metadata';
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
