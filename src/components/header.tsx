'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from '@utils/navigation';
import { siteMetadata } from '@utils/site-metadata';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-black">
      <div className="mx-auto flex h-[clamp(68px,6cqw,84px)] max-w-[1280px] items-center justify-between gap-6 px-[clamp(16px,4cqw,48px)]">
        <Link href="/" className="flex" onClick={closeMenu}>
          <Image
            src="/img/logo-dark.png"
            alt="Coach'n Pulse"
            width={320}
            height={306}
            priority
            className="block h-[clamp(44px,4cqw,56px)] w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-9 min-[760px]:flex">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-condensed border-b-2 py-1.5 text-[17px] font-semibold tracking-[.12em] uppercase ${
                  active ? 'border-blue text-white' : 'border-transparent text-white/66'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="bg-blue font-condensed rounded-[2px] px-5 py-3 text-[16px] font-bold tracking-[.1em] text-black uppercase hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[2px] border border-white/25 bg-transparent p-0 min-[760px]:hidden"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="bg-blue block h-0.5 w-5" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="flex flex-col border-t border-white/8 bg-black px-5 pt-3 pb-7 min-[760px]:hidden"
        >
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`font-condensed flex items-center justify-between border-b border-white/10 py-3 text-[30px] font-bold tracking-[.04em] uppercase ${
                  active ? 'text-white' : 'text-white/66'
                }`}
              >
                {label}
                <span className={`block size-2.5 ${active ? 'bg-blue' : 'bg-transparent'}`} />
              </Link>
            );
          })}
          <a
            href={siteMetadata.phoneHref}
            className="bg-blue font-condensed mt-5 p-3.5 text-center text-[18px] font-bold tracking-[.1em] text-black uppercase"
          >
            {siteMetadata.phone}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
