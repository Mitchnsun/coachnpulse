'use client';

import React from 'react';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import GlobalStyle from '../src/utils/globalStyle';
import '../public/fonts/fonts.css';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
