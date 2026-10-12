import { siteMetadata } from '@utils/site-metadata';
import { container, gutterX } from '@utils/styles';

const Infos = () => (
  <section className={`bg-blue py-[clamp(48px,6cqw,88px)] text-black ${gutterX}`}>
    <div className={`flex flex-wrap items-end justify-between gap-7 ${container}`}>
      <div>
        <div className="text-[13px] font-semibold tracking-[.22em] uppercase">Contact</div>
        <h2 className="font-condensed mt-2.5 text-[clamp(38px,4.6cqw,68px)] leading-[.95] font-bold uppercase">
          Demande d&apos;informations
        </h2>
      </div>
      <div className="flex flex-col gap-1.5">
        <a
          href={siteMetadata.phoneHref}
          className="font-condensed text-[clamp(26px,2.4cqw,34px)] leading-[1.1] font-bold text-black hover:text-white"
        >
          {siteMetadata.phone}
        </a>
        <a
          href={`mailto:${siteMetadata.email}`}
          className="self-start border-b border-black text-[clamp(17px,1.4cqw,20px)] font-medium text-black hover:border-white hover:text-white"
        >
          {siteMetadata.email}
        </a>
      </div>
    </div>
  </section>
);

export default Infos;
