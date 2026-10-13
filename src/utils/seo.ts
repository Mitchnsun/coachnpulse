import type { Metadata } from 'next';

import { siteMetadata } from '@utils/site-metadata';

type PageMetadataProps = {
  path: string;
  title: string;
  description: string;
};

// Metadata of a page: its own title, description and canonical URL, reused by the social cards.
export const pageMetadata = ({ path, title, description }: PageMetadataProps): Metadata => ({
  title: { absolute: `${title} | ${siteMetadata.title}` },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: siteMetadata.title,
    url: path,
    title,
    description,
    images: [
      {
        url: '/img/running3.jpg',
        width: 1024,
        height: 683,
        alt: 'Coureuse à pied au lever du soleil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
});
