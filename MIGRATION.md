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
