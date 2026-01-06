import React from 'react';
import ClientLayout from './ClientLayout';
import type { Metadata } from 'next';
import { siteMetadata } from '../src/utils/site-metadata';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.coachnpulse.com/" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
