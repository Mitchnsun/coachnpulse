import Image from 'next/image';
import Link from 'next/link';

import Eyebrow from '@components/eyebrow';
import { siteMetadata } from '@utils/site-metadata';
import { container, gutterX, primaryButton, sectionY } from '@utils/styles';

const SPORTS = [
  { src: '/img/running2.jpg', label: 'Course à pied' },
  { src: '/img/swimming2.jpg', label: 'Natation' },
  { src: '/img/cycling2.jpg', label: 'Vélo', position: '70% center' },
];

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-[clamp(600px,50cqw,760px)] items-end overflow-hidden bg-black">
        <Image
          src="/img/running3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-b/srgb from-black/15 via-black/35 via-45% to-black/92" />
        <div className={`relative w-full pb-[clamp(40px,6cqw,88px)] ${container} ${gutterX}`}>
          <Eyebrow className="text-blue mb-5">Encadrement sportif personnalisé</Eyebrow>
          <h1 className="font-condensed max-w-[12ch] text-[clamp(46px,6.6cqw,100px)] leading-[.92] font-bold tracking-[-.005em] text-balance text-white uppercase">
            Programme sportif et bilan personnalisé
          </h1>
          <p className="mt-5 max-w-[36ch] text-[clamp(18px,1.6cqw,22px)] text-white/85">
            adapté à votre niveau et vos objectifs
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${siteMetadata.email}`} className={primaryButton}>
              Demande d&apos;informations
            </a>
            <a
              href={siteMetadata.phoneHref}
              className="font-condensed hover:border-blue hover:text-blue rounded-[2px] border border-white/50 px-7 py-[15px] text-[18px] font-semibold tracking-[.1em] text-white"
            >
              {siteMetadata.phone}
            </a>
          </div>
        </div>
      </section>
      <section className={`bg-black ${gutterX} ${sectionY}`}>
        <div className={container}>
          <div className="mb-[clamp(28px,3cqw,44px)] flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-condensed text-[clamp(34px,3.6cqw,52px)] leading-none font-bold text-white uppercase">
              Course à pied, natation, vélo
            </h2>
            <Link
              href="/description"
              className="font-condensed border-blue text-blue border-b pb-1 text-[17px] font-semibold tracking-[.12em] uppercase"
            >
              Découvrir le programme →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(10px,1.2cqw,16px)]">
            {SPORTS.map(({ src, label, position }, index) => (
              <Link
                key={src}
                href="/description"
                className="relative block h-[clamp(240px,34cqw,500px)] overflow-hidden rounded-[2px]"
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  sizes="(min-width: 760px) 33vw, 100vw"
                  className="object-cover"
                  style={position ? { objectPosition: position } : undefined}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t/srgb from-black/85 to-transparent p-6">
                  <span className="font-condensed text-[28px] font-bold text-white uppercase">
                    {label}
                  </span>
                  <span className="font-condensed text-blue text-[16px] font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
