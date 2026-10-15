import type { MetadataRoute } from 'next';

import { PAGES } from '@data/pages';
import { siteMetadata } from '@utils/site-metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES).map(({ path }) => ({
    url: new URL(path, siteMetadata.siteUrl).href,
  }));
}
