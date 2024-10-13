import React, { PropsWithChildren } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './header';
import Footer from './footer';
import GlobalStyle from '../utils/globalStyle';

const Layout = ({ children }: PropsWithChildren) => (
  <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://www.coachnpulse.com/" />
    </Helmet>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </HelmetProvider>
);

export default Layout;
