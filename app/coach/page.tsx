import Image from 'next/image';

import Eyebrow from '@components/eyebrow';
import PhotoStrip from '@components/photoStrip';
import { DIPLOMAS, EXPERIENCES } from '@data/coach';
import { PAGES } from '@data/pages';
import { pageMetadata } from '@utils/seo';
import { container, gutterX, twoColumnGrid } from '@utils/styles';

export const metadata = pageMetadata(PAGES.coach);

const PHOTOS = [
  { src: '/img/swimming.jpg', alt: 'Natation' },
  { src: '/img/cycling2.jpg', alt: 'Vélo', position: '70% center' },
  { src: '/img/running.jpg', alt: 'Course à pied' },
];

type CoachListProps = {
  title: string;
  items: string[];
  bulletClassName: string;
  itemClassName?: string;
};

const CoachList = ({ title, items, bulletClassName, itemClassName = '' }: CoachListProps) => (
  <div>
    <h2 className="font-condensed text-muted mb-1.5 text-[15px] font-semibold tracking-[.16em] uppercase">
      {title}
    </h2>
    <ul>
      {items.map((item) => (
        <li key={item} className="border-line flex gap-3.5 border-b py-3">
          <span className={`mt-[9px] size-2 flex-none ${bulletClassName}`} />
          <span className={itemClassName}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CoachPage = () => {
  return (
    <>
      <section className={`py-[clamp(40px,7cqw,104px)] ${gutterX}`}>
        <div className={`items-center gap-[clamp(32px,6cqw,96px)] ${container} ${twoColumnGrid}`}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
              <Image
                src="/img/Luc-2025.jpeg"
                alt="Luc Nahon"
                fill
                priority
                sizes="(min-width: 900px) 50vw, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
            <span className="bg-blue absolute bottom-0 left-0 block h-1.5 w-2/5" />
          </div>
          <div>
            <Eyebrow className="text-blue-dark mb-3.5">Le coach</Eyebrow>
            <h1 className="font-condensed mb-[clamp(28px,3cqw,44px)] text-[clamp(52px,6cqw,88px)] leading-[.92] font-bold uppercase">
              Luc Nahon
            </h1>
            <div className="flex flex-col gap-[clamp(24px,2.6cqw,36px)]">
              <CoachList
                title="Diplômes"
                items={DIPLOMAS}
                bulletClassName="bg-blue"
                itemClassName="font-medium"
              />
              <CoachList title="Expérience" items={EXPERIENCES} bulletClassName="bg-ink" />
            </div>
          </div>
        </div>
      </section>
      <PhotoStrip photos={PHOTOS} />
    </>
  );
};

export default CoachPage;
