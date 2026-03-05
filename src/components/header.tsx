import React from 'react';
import Link from 'next/link';

const logoClass = 'inline-block text-blue p-4 hover:bg-transparent';
const navLinkClass = 'inline-block text-grey p-4 hover:bg-grey-light';

const Header = () => (
  <header>
    <Link href="/" className={logoClass}>
      COACH&apos;N PULSE
    </Link>
    <Link href="/description" className={navLinkClass}>
      Description
    </Link>
    <Link href="/coach" className={navLinkClass}>
      Coach
    </Link>
    <Link href="/prices" className={navLinkClass}>
      Tarifs
    </Link>
  </header>
);

export default Header;
