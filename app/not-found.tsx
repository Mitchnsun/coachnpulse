import Link from 'next/link';

import { siteMetadata } from '@utils/site-metadata';
import { container, gutterX, primaryButton, sectionTitle, sectionY } from '@utils/styles';

export const metadata = {
  title: { absolute: `Page introuvable | ${siteMetadata.title}` },
};

const NotFound = () => (
  <section className={`${gutterX} ${sectionY}`}>
    <div className={container}>
      <h1 className={sectionTitle}>Page introuvable</h1>
      <p className="mt-4">La page demandée n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className={`mt-9 inline-block ${primaryButton}`}>
        Retour à l&apos;accueil
      </Link>
    </div>
  </section>
);

export default NotFound;
