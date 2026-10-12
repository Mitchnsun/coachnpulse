import Image from 'next/image';
import Link from 'next/link';

import { NAV_ITEMS } from '@utils/navigation';
import { container, gutterX } from '@utils/styles';

const Footer = () => (
  <footer className={`bg-black py-[clamp(32px,4cqw,48px)] text-white/66 ${gutterX}`}>
    <div className={`flex flex-wrap items-center justify-between gap-5 ${container}`}>
      <Image
        src="/img/blacklogo.jpg"
        alt="Coach'n Pulse"
        width={1024}
        height={316}
        className="block h-11 w-auto"
      />
      <nav className="flex flex-wrap gap-6">
        {NAV_ITEMS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-blue text-[14px] tracking-[.08em] text-white/75 uppercase"
          >
            {label}
          </Link>
        ))}
      </nav>
      <span className="text-[14px]">Encadrement sportif personnalisé ®Coach&apos;n Pulse</span>
    </div>
  </footer>
);

export default Footer;
