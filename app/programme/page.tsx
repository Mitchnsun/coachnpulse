import Link from 'next/link';

import PageHero from '@components/pageHero';
import { PAGES } from '@data/pages';
import { pageMetadata } from '@utils/seo';
import { siteMetadata } from '@utils/site-metadata';
import {
  container,
  gutterX,
  primaryButton,
  sectionTitle,
  sectionY,
  twoColumnGrid,
} from '@utils/styles';

export const metadata = pageMetadata(PAGES.program);

const ProgramPage = () => {
  const { goals, sessions } = siteMetadata;
  return (
    <>
      <PageHero
        image="/img/running3.jpg"
        imagePosition="center 35%"
        overlayClassName="from-black/20"
        eyebrow="Encadrement sportif personnalisé"
        title="Le programme"
      />
      <section className={`${gutterX} ${sectionY}`}>
        <div className={`items-start gap-[clamp(28px,5cqw,80px)] ${container} ${twoColumnGrid}`}>
          <h2 className={`text-balance ${sectionTitle}`}>
            Programme sportif personnalisé adapté à votre niveau et vos objectifs
          </h2>
          <ul className="grid grid-cols-2 gap-x-[clamp(16px,2.4cqw,32px)]">
            {goals.map((goal, index) => (
              <li
                key={goal}
                className={`border-line flex items-baseline gap-3.5 border-t py-[18px] ${
                  index >= goals.length - 2 ? 'border-b' : ''
                }`}
              >
                <span className="font-condensed text-blue-dark text-[15px] font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[clamp(16px,1.4cqw,19px)] font-medium">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`bg-black text-white ${gutterX} ${sectionY}`}>
        <div className={container}>
          <h2 className={`max-w-[20ch] text-balance ${sectionTitle}`}>
            Possibilité d&apos;accompagnement par des séances encadrées
          </h2>
          <p className="text-blue mt-3.5 mb-[clamp(28px,3.6cqw,48px)] text-[18px]">
            (sur le terrain ou à domicile)
          </p>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] gap-px border border-white/14 bg-white/14">
            {sessions.map((session) => (
              <li
                key={session}
                className="font-condensed bg-black px-5 py-[clamp(20px,2.4cqw,32px)] text-[clamp(20px,1.8cqw,26px)] font-semibold uppercase"
              >
                {session}
              </li>
            ))}
          </ul>
          <Link href={PAGES.prices.path} className={`mt-9 inline-block ${primaryButton}`}>
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProgramPage;
