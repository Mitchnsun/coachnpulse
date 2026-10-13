import PageHero from '@components/pageHero';
import PhotoStrip from '@components/photoStrip';
import TablePrices from '@components/tablePrices';
import { PAGES } from '@data/pages';
import { COACHING_PRICES, PRICES_NOTE, SESSION_HOURLY_PRICE, SESSION_PACKAGES } from '@data/prices';
import { pageMetadata } from '@utils/seo';
import { container, gutterX, sectionTitle, sectionY, twoColumnGrid } from '@utils/styles';

export const metadata = pageMetadata(PAGES.prices);

const COACHING_BORDERS = ['border-blue', 'border-ink'];

const PHOTOS = [
  { src: '/img/swimming2.jpg', alt: 'Natation' },
  { src: '/img/cycling.jpg', alt: 'Vélo' },
  { src: '/img/running5.jpg', alt: 'Course à pied' },
];

const PricesPage = () => {
  return (
    <>
      <PageHero
        image="/img/cycling.jpg"
        imagePosition="center 40%"
        overlayClassName="from-black/15"
        eyebrow="Formules"
        title="Tarifs"
      />
      <section className={`${gutterX} ${sectionY}`}>
        <div className={`items-start gap-[clamp(28px,5cqw,80px)] ${container} ${twoColumnGrid}`}>
          <div>
            <h2 className={sectionTitle}>Tarifs pour programme à distance</h2>
            <p className="text-muted-dark mt-4">
              Exemples de tarifs forfaitaires programme d&apos;entraînement
            </p>
            <p className="border-blue mt-[clamp(20px,3cqw,40px)] max-w-[44ch] border-t-[3px] pt-5">
              Les conseils (techniques, diététiques, matériels) sont inclus dans votre progression
              et l&apos;accompagnement sportif.
            </p>
          </div>
          <TablePrices />
        </div>
      </section>
      <section className={`bg-black text-white ${gutterX} ${sectionY}`}>
        <div className={`items-start gap-[clamp(28px,5cqw,80px)] ${container} ${twoColumnGrid}`}>
          <div>
            <h2 className={sectionTitle}>Possibilité de séances encadrées</h2>
            <p className="mt-4 max-w-[40ch] text-white/78">
              Sur le terrain ou à domicile (natation, vélo, course à pied, préparation physique)
            </p>
            <div className="mt-7 flex items-baseline gap-2">
              <span className="font-condensed text-blue text-[clamp(64px,7cqw,104px)] leading-[.9] font-bold">
                {SESSION_HOURLY_PRICE}
              </span>
              <span className="font-condensed text-[26px] font-semibold">/h</span>
            </div>
          </div>
          <div>
            <h3 className="font-condensed text-blue mb-2 text-[15px] font-semibold tracking-[.16em] uppercase">
              Forfaits séances
            </h3>
            <ul>
              {SESSION_PACKAGES.map(({ label, price }) => (
                <li
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/14 py-[18px] last:border-b-0"
                >
                  <span>{label}</span>
                  <span className="font-condensed text-[30px] leading-none font-bold whitespace-nowrap">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={`${gutterX} ${sectionY}`}>
        <div className={container}>
          <h2 className={`mb-[clamp(28px,3.6cqw,48px)] ${sectionTitle}`}>
            Coaching et préparation mentale
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(12px,1.6cqw,24px)]">
            {COACHING_PRICES.map(({ label, price, packageLabel, packagePrice }, index) => (
              <div
                key={label}
                className={`rounded-[2px] border-t-4 bg-white p-[clamp(24px,3cqw,40px)] ${COACHING_BORDERS[index]}`}
              >
                <div className="text-muted text-[13px] font-semibold tracking-[.16em] uppercase">
                  {label}
                </div>
                <div className="mt-3.5 mb-6 flex items-baseline gap-1.5">
                  <span className="font-condensed text-[clamp(56px,5cqw,72px)] leading-[.9] font-bold">
                    {price}
                  </span>
                  <span className="font-condensed text-[24px] font-semibold">/h</span>
                </div>
                <div className="border-line-light flex justify-between border-t pt-4">
                  <span>{packageLabel}</span>
                  <strong className="font-semibold">{packagePrice}</strong>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-dark mt-[clamp(20px,2.4cqw,32px)]">{PRICES_NOTE}</p>
        </div>
      </section>
      <PhotoStrip photos={PHOTOS} />
    </>
  );
};

export default PricesPage;
