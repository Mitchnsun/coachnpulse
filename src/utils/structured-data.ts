import { siteMetadata } from '@utils/site-metadata';

const { siteUrl } = siteMetadata;
const organizationId = `${siteUrl}/#organization`;
const coachId = `${siteUrl}/coach#person`;

// schema.org description of the business and its coach, limited to facts shown on the site.
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteMetadata.title,
      inLanguage: 'fr-FR',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteMetadata.title,
      alternateName: 'Coachnpulse',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/img/logo-white.png`,
      description: siteMetadata.description,
      email: siteMetadata.email,
      telephone: siteMetadata.phoneInternational,
      knowsAbout: siteMetadata.sessions,
    },
    {
      '@type': 'Person',
      '@id': coachId,
      name: siteMetadata.coach,
      url: `${siteUrl}/coach`,
      image: `${siteUrl}/img/Luc-2025.jpeg`,
      jobTitle: 'Éducateur sportif, entraîneur de triathlon et préparateur mental',
      worksFor: { '@id': organizationId },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: "Diplôme d'État DEJEPS Triathlon" },
        { '@type': 'EducationalOccupationalCredential', name: 'Maître Nageur Sauveteur' },
      ],
      knowsAbout: [...siteMetadata.sessions, 'Préparation mentale'],
    },
  ],
};
