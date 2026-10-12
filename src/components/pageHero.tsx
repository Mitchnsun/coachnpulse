import Image from 'next/image';

import Eyebrow from '@components/eyebrow';
import { container, gutterX } from '@utils/styles';

type PageHeroProps = {
  image: string;
  imagePosition: string;
  overlayClassName: string;
  eyebrow: string;
  title: string;
};

const PageHero = ({ image, imagePosition, overlayClassName, eyebrow, title }: PageHeroProps) => (
  <section className="relative flex h-[clamp(300px,28cqw,400px)] items-end overflow-hidden bg-black">
    <Image
      src={image}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
      style={{ objectPosition: imagePosition }}
    />
    <div className={`absolute inset-0 bg-linear-to-b/srgb to-black/85 ${overlayClassName}`} />
    <div className={`relative w-full pb-[clamp(32px,4cqw,56px)] ${container} ${gutterX}`}>
      <Eyebrow className="text-blue mb-3.5">{eyebrow}</Eyebrow>
      <h1 className="font-condensed text-[clamp(48px,6cqw,88px)] leading-[.95] font-bold text-white uppercase">
        {title}
      </h1>
    </div>
  </section>
);

export default PageHero;
