import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { siteMetadata } from '@utils/site-metadata';
import Header from '@components/header';
import Infos from '@components/infos';
import Footer from '@components/footer';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.coachnpulse.com/" />
      </head>
      <body className="bg-paper text-ink @container font-sans text-[17px] leading-[1.55]">
        <Header />
        <main>{children}</main>
        <Infos />
        <Footer />
      </body>
    </html>
  );
}
