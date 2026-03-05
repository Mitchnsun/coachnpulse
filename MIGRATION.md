# Migration de Gatsby vers Next.js

## Date de migration
Janvier 2025

## Résumé
Le projet Coach'n Pulse a été migré avec succès de Gatsby v5 vers Next.js 14.

## Changements principaux

### Structure du projet
- **Avant** : Gatsby avec structure `src/pages/`
- **Après** : Next.js avec App Router dans `app/`

### Fichiers de configuration
- ✅ Créé `next.config.js` pour la configuration Next.js
- ✅ Mis à jour `tsconfig.json` pour Next.js
- ✅ Créé `.eslintrc.json` pour ESLint Next.js
- ✅ Supprimé `gatsby-config.ts` et fichiers Gatsby associés

### Dépendances
- ✅ Remplacé Gatsby par Next.js 14
- ✅ Conservé styled-components
- ✅ Conservé TypeScript
- ✅ Supprimé les plugins Gatsby (gatsby-plugin-image, gatsby-plugin-sharp, etc.)
- ✅ Remplacé react-helmet-async par les métadonnées Next.js

### Composants et pages
- ✅ Converti tous les composants pour utiliser 'use client' (styled-components)
- ✅ Remplacé `gatsby Link` par `next/link`
- ✅ Remplacé `gatsby-plugin-image StaticImage` par `next/image`
- ✅ Migré les métadonnées du site vers `src/utils/site-metadata.ts`
- ✅ Supprimé le hook `useSiteMetadata` GraphQL

### Pages migrées
1. `/` - Page d'accueil
2. `/description` - Page description
3. `/coach` - Page coach
4. `/prices` - Page tarifs

### Assets
- ✅ Déplacé les images de `src/img/` vers `public/img/`
- ✅ Déplacé les fonts de `static/fonts/` vers `public/fonts/`
- ✅ Déplacé `favicon.ico` vers `public/`

### Build et déploiement
- ✅ Build statique configuré (`output: 'export'`)
- ✅ Images non optimisées pour export statique
- ✅ Tous les fichiers HTML générés dans `out/`

## Scripts mis à jour
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Tests de validation
- ✅ Build réussi sans erreurs
- ✅ Export statique fonctionnel
- ✅ Toutes les pages rendues correctement
- ✅ Images chargées correctement
- ✅ Styled-components fonctionnent en SSR

## Notes importantes
1. La configuration utilise `output: 'export'` pour générer un site statique
2. Les images utilisent `unoptimized: true` car l'optimisation automatique n'est pas compatible avec l'export statique
3. Tous les composants utilisant styled-components sont marqués comme 'use client'
4. Le GlobalStyle est maintenant un composant client wrappé dans ClientLayout

## Compatibilité
- Node.js 18.17+ (voir `.nvmrc`)
- Next.js 14.2.0
- React 18.3.1

## Prochaines étapes possibles
- Ajouter l'optimisation d'images avec un service externe si nécessaire
- Configurer le déploiement sur Vercel ou Netlify
- Ajouter des tests automatisés
- Améliorer le SEO avec les métadonnées Next.js avancées

---

# Migration de styled-components vers TailwindCSS v4

## Date de migration
Mars 2026

## Résumé
Le projet Coach'n Pulse a été migré de styled-components vers TailwindCSS v4 afin de moderniser et uniformiser le style de l'application.

## Changements principaux

### Dépendances
- ✅ Ajouté `tailwindcss` v4 et `@tailwindcss/postcss`
- ✅ Supprimé `styled-components` et `@types/styled-components`

### Fichiers de configuration
- ✅ Créé `postcss.config.js` avec le plugin `@tailwindcss/postcss`
- ✅ Créé `app/globals.css` avec `@import "tailwindcss"`, `@theme` (couleurs et fonte personnalisées) et styles de base
- ✅ Supprimé `src/utils/globalStyle.ts` (remplacé par `app/globals.css`)
- ✅ Mis à jour `next.config.js` : suppression de l'option `compiler.styledComponents`

### Thème Tailwind (`@theme` dans `globals.css`)
| Variable CSS | Valeur | Ancienne constante |
|---|---|---|
| `--color-black` | `#000000` | `BLACK` |
| `--color-white` | `#ffffff` | `WHITE` |
| `--color-grey` | `#666666` | `GREY` |
| `--color-grey-light` | `#eeeeee` | `GREY_LIGHT` |
| `--color-blue` | `#62bee3` | `BLUE` |
| `--color-green` | `#61b842` | `GREEN` |
| `--color-yellow` | `#ffbe5e` | `YELLOW` |
| `--font-agency` | `'AgencyFB', sans-serif` | — |

### Composants et pages migrés
- ✅ `src/components/header.tsx` — `StyledLink` remplacé par classes Tailwind `text-blue` / `text-grey hover:bg-grey-light`
- ✅ `src/components/footer.tsx` — `FooterContainer` remplacé par classes Tailwind
- ✅ `src/components/infos.tsx` — `InfosContainer` / `Text` remplacés par classes Tailwind avec breakpoint arbitraire `min-[750px]:`
- ✅ `src/components/tablePrices.tsx` — tous les éléments de tableau remplacés par classes Tailwind (avec variante `first:`)
- ✅ `app/page.tsx` — `Container`, `TriptyqueContainer`, `ImageContainer`, `StyledImage` remplacés
- ✅ `app/description/page.tsx` — tous les composants remplacés ; le dégradé radial complexe est géré via la classe `.description-poster` dans `globals.css`
- ✅ `app/coach/page.tsx` — tous les composants remplacés par classes Tailwind avec breakpoints arbitraires
- ✅ `app/prices/page.tsx` — tous les composants remplacés par classes Tailwind
- ✅ `app/ClientLayout.tsx` — suppression de `GlobalStyle` et marqueur `'use client'` (les styles globaux sont désormais dans `app/globals.css` importé par `app/layout.tsx`)

### Conventions TailwindCSS retenues
- **Couleurs personnalisées** : définies via `--color-*` dans `@theme` → utilisables directement (`text-blue`, `bg-black`, etc.)
- **Breakpoints non-standard** : valeurs arbitraires (`min-[750px]:`, `max-[800px]:`, etc.) pour conserver exactement les breakpoints d'origine
- **Styles complexes** : le dégradé radial du poster de la page description est géré par une classe CSS personnalisée (`.description-poster`) dans `globals.css`
- **Server Components** : les composants ne nécessitent plus `'use client'` puisque styled-components est supprimé

## Tests de validation
- ✅ Build réussi sans erreurs (`yarn build`)
- ✅ Aucune erreur ESLint (`yarn lint`)
- ✅ Aucune erreur TypeScript (`yarn typecheck`)
- ✅ Export statique fonctionnel
- ✅ Aucune référence résiduelle à styled-components

## Points d'attention post-migration
- Le fichier `src/utils/colors.ts` est conservé à titre de référence (non utilisé activement) ; il peut être supprimé si souhaité.
- L'import des polices (`public/fonts/fonts.css`) est désormais géré directement dans `app/layout.tsx`.
