import React from 'react';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
