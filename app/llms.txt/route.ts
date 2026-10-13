import { DIPLOMAS, EXPERIENCES } from '@data/coach';
import { PAGES } from '@data/pages';
import { COACHING_PRICES, PRICES, SESSION_HOURLY_PRICE, SESSION_PACKAGES } from '@data/prices';
import { siteMetadata } from '@utils/site-metadata';

export const dynamic = 'force-static';

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

// Plain-text summary of the site for AI agents (https://llmstxt.org), built from the site data.
export const GET = () => {
  const { title, siteUrl, description, coach, goals, sessions, phone, email } = siteMetadata;
  const pages = Object.values(PAGES).map(
    ({ path, title: pageTitle, description: pageDescription }) =>
      `[${pageTitle}](${new URL(path, siteUrl).href}): ${pageDescription}`
  );

  const content = `# ${title}

> Encadrement sportif personnalisé par ${coach}, éducateur sportif diplômé d'État DEJEPS Triathlon. ${description}, avec possibilité de séances encadrées sur le terrain ou à domicile.

## Pages

${list(pages)}

## Objectifs

${list(goals)}

## Séances encadrées (sur le terrain ou à domicile)

${list(sessions)}

## Le coach : ${coach}

### Diplômes

${list(DIPLOMAS)}

### Expérience

${list(EXPERIENCES)}

## Tarifs

### Programme d'entraînement à distance (exemples de tarifs forfaitaires)

${list(PRICES.map(({ label, price }) => `${label} : ${price}`))}

Les conseils (techniques, diététiques, matériels) sont inclus dans votre progression et l'accompagnement sportif.

### Séances encadrées (natation, vélo, course à pied, préparation physique)

${list([`Séance : ${SESSION_HOURLY_PRICE}/h`, ...SESSION_PACKAGES.map(({ label, price }) => `${label} : ${price}`)])}

### Coaching et préparation mentale

${list(
  COACHING_PRICES.map(
    ({ label, price, packageLabel, packagePrice }) =>
      `${label} : ${price}/h (${packageLabel.toLowerCase()} : ${packagePrice})`
  )
)}

## Contact

- Téléphone : ${phone}
- E-mail : ${email}
`;

  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
