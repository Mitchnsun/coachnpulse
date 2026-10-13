# Audit SEO et visibilité pour les agents IA — coachnpulse.com

- **Date** : 13 octobre 2026
- **Périmètre** : site en production https://www.coachnpulse.com (déploiement du 12/10/2026, v5) et code de ce dépôt
- **Règle suivie** : aucune information inventée. Tout ce qui est ajouté au site provient de textes déjà publiés. Le reste est posé en questions (section 7).

## 1. Synthèse

Techniquement, le site est sain : HTML statique lisible sans JavaScript, HTTPS, langue déclarée, et tous les robots testés y ont accès. Mais il était presque invisible pour les moteurs et les agents IA :

1. **Bug critique** : toutes les pages déclaraient la page d'accueil comme URL canonique. Google était ainsi invité à ignorer `/description`, `/coach` et `/prices`.
2. **Pas de `robots.txt`, de `sitemap.xml` ni de `llms.txt`** (réponse 404).
3. **Titre et description identiques sur les 4 pages.** Le titre « Coach'n Pulse » ne contient aucun mot recherché (coach, triathlon, Grenoble…).
4. **Aucune donnée structurée (schema.org) ni aucune carte de partage (Open Graph).**
5. **Très peu de texte** : environ 90 mots sur l'accueil, navigation comprise. « Grenoble » n'apparaît pas sur l'accueil.
6. **Aucune présence externe trouvée.** Les recherches sur « Coach'n Pulse » Luc Nahon et sur coachnpulse.com ne renvoient pas le site. La marque se confond avec des homonymes (« Coach Pulse »).

Cette branche corrige tous les points qui ne demandent aucune information nouvelle (sections 3 et 4). Les gains les plus importants restent ensuite le contenu, la fiche Google Business Profile et les avis. Ils dépendent des réponses aux questions (section 7).

## 2. Méthode

- Analyse du site en production avec `curl` : statuts HTTP, redirections, balises `<head>`, titres H1 à H6, attributs `alt`, texte visible sans JavaScript.
- Test d'accès avec les robots Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot et CCBot : tous reçoivent une réponse **200**. Le pare-feu Vercel ne bloque aucun robot aujourd'hui.
- Recherches web sur la marque et sur le coach.
- Lecture du code (Next.js 15, `output: 'export'`, hébergement Vercel).
- **Limites** : pas d'accès à Google Search Console ni à Vercel. L'état réel d'indexation n'est donc **pas mesuré**, il est à vérifier (Q23).

### Points positifs

- Contenu rendu côté serveur : lisible par tous les agents IA, y compris ceux qui n'exécutent pas JavaScript.
- HTTPS avec HSTS, `lang="fr"`, balise viewport, temps de réponse d'environ 0,2 s (CDN Vercel).
- Attributs `alt` présents sur les images de contenu.
- Navigation en liens HTML classiques, dans l'en-tête et le pied de page.

## 3. Constats

| #   | Priorité | Constat                                                                                                                                          | Statut                             |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 1   | Critique | Canonical de **toutes** les pages = `https://www.coachnpulse.com/` (codé en dur dans `app/layout.tsx`)                                           | ✅ Corrigé                         |
| 2   | Haute    | `robots.txt` et `sitemap.xml` absents (404)                                                                                                      | ✅ Corrigé                         |
| 3   | Haute    | Même `<title>` et même meta description sur toutes les pages, sans mot-clé                                                                       | ✅ Corrigé                         |
| 4   | Haute    | Aucune donnée structurée schema.org                                                                                                              | ✅ Partiel (voir A3)               |
| 5   | Haute    | Contenu très court : ni déroulement de l'accompagnement, ni public visé, ni FAQ, ni avis                                                         | ❓ Infos nécessaires (Q12 à Q17)   |
| 6   | Haute    | Ancrage local faible : pas de lieu sur l'accueil ; fiche Google Business Profile inconnue                                                        | ❓ Q1 à Q3                         |
| 7   | Moyenne  | Pas d'Open Graph ni de carte Twitter/X : aperçu pauvre sur WhatsApp, Facebook, LinkedIn…                                                         | ✅ Corrigé                         |
| 8   | Moyenne  | Photos très lourdes (export statique sans optimisation) : 2,7 Mo d'images sur l'accueil                                                          | ✅ Corrigé (−86 %, voir section 4) |
| 9   | Moyenne  | Favicon de 39×39 px : Google demande un carré multiple de 48 px pour l'afficher dans les résultats                                               | ✅ Corrigé                         |
| 10  | Moyenne  | `coachnpulse.com` redirige vers `www` en **307 (temporaire)** ; `http://coachnpulse.com` fait 2 sauts (308 puis 307)                             | ⚙️ Réglage Vercel (section 5)      |
| 11  | Moyenne  | H1 peu descriptifs : « Description », « Tarifs ». Le H1 de l'accueil ne contient ni « coach », ni « triathlon », ni lieu                         | ❓ Arbitrage éditorial (Q19)       |
| 12  | Basse    | Page 404 en anglais (« This page could not be found. ») avec deux balises `<title>`                                                              | ✅ Corrigé                         |
| 13  | Basse    | Hiérarchie des titres de `/coach` : un H1 suivi directement de H3                                                                                | ✅ Corrigé (H2)                    |
| 14  | Basse    | URL en anglais (`/prices`) ou peu parlante (`/description`) sur un site francophone                                                              | ❓ Q18                             |
| 15  | Basse    | Aucun outil de mesure dans le code (ni analytics, ni balise de vérification Search Console)                                                      | ❓ Q21, Q23                        |
| 16  | Basse    | Pas de mentions légales (obligatoires pour un site professionnel en France, et signal de confiance)                                              | ❓ Q5                              |
| 17  | Basse    | Les photos de sport semblent venir d'une banque d'images : aucune photo réelle de séance ou d'athlète, sauf le portrait                          | ❓ Q10                             |
| 18  | Info     | Ligne de tarif ambiguë : « Plus de 20 kms autour de l'agglomération grenobloise : 0,50€/km ». Un humain comme un agent IA peut mal l'interpréter | ❓ Q15                             |
| 19  | Info     | Images publiées mais inutilisées : `Luc.jpg`, `blacklogo.jpg`, `whitelogo.jpg`, `running4.jpg`                                                   | Non traité (nettoyage optionnel)   |

## 4. Modifications faites dans cette branche

| Fichier                                         | Rôle                                                                                                                                                |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                                | Suppression du canonical codé en dur, ajout de `metadataBase` et des données structurées JSON-LD                                                    |
| `src/data/pages.ts`                             | Titre et description SEO de chaque page (source unique pour les pages, le sitemap et `llms.txt`)                                                    |
| `src/utils/seo.ts`                              | Métadonnées par page : `<title>`, description, canonical propre à la page, Open Graph, carte Twitter/X                                              |
| `src/utils/structured-data.ts`                  | JSON-LD `WebSite`, `Organization` (Coach'n Pulse) et `Person` (Luc Nahon, diplômes), uniquement avec des faits affichés sur le site                 |
| `app/robots.ts` → `/robots.txt`                 | Autorise tous les robots et indique le sitemap                                                                                                      |
| `app/sitemap.ts` → `/sitemap.xml`               | Les 4 pages                                                                                                                                         |
| `app/llms.txt/route.ts` → `/llms.txt`           | Résumé en texte brut pour les agents IA ([llmstxt.org](https://llmstxt.org)), généré à partir des mêmes données que les pages, donc toujours à jour |
| `app/not-found.tsx`                             | Page 404 en français                                                                                                                                |
| `app/favicon.ico`, `icon.png`, `apple-icon.png` | Icônes 16/32/48 px, 192 px et 180 px (iOS), générées à partir du logo existant                                                                      |
| `app/coach/page.tsx`                            | « Diplômes » et « Expérience » passent de H3 à H2 (rendu visuel identique) ; leurs données sont déplacées dans `src/data/coach.ts`                  |
| `public/img/*.jpg`                              | Recompression JPEG qualité 80 des 8 photos utilisées : 4,7 Mo → 0,7 Mo, dont 2,7 Mo → 0,4 Mo sur l'accueil                                          |

Le texte visible, le design et les URL ne changent pas, à l'exception de la page 404.

### Titres et descriptions retenus

| Page           | `<title>`                                                  |
| -------------- | ---------------------------------------------------------- |
| `/`            | Coach sportif & triathlon à Grenoble \| Coach'n Pulse      |
| `/description` | Programme sportif personnalisé \| Coach'n Pulse            |
| `/coach`       | Luc Nahon, coach diplômé DEJEPS triathlon \| Coach'n Pulse |
| `/prices`      | Tarifs coaching et programme à distance \| Coach'n Pulse   |

### Vérifications après déploiement

- Ouvrir https://www.coachnpulse.com/robots.txt, `/sitemap.xml` et `/llms.txt`.
- Tester l'accueil et `/coach` dans le [test des résultats enrichis](https://search.google.com/test/rich-results) et le [Schema Markup Validator](https://validator.schema.org/).
- Vérifier l'aperçu de partage avec le [Sharing Debugger de Facebook](https://developers.facebook.com/tools/debug/) ou en envoyant le lien sur WhatsApp.

## 5. Actions hors code (à faire de votre côté)

1. **Vercel → Settings → Domains** : faire rediriger `coachnpulse.com` vers `www.coachnpulse.com` en **308 (permanent)** au lieu de 307.
2. **Google Search Console** :
   - ajouter la propriété « Domaine » (vérification DNS) ;
   - soumettre `https://www.coachnpulse.com/sitemap.xml` ;
   - demander l'indexation des 4 URL ;
   - suivre le rapport « Pages » pour voir ce qui est indexé ou exclu, et pourquoi.
3. **Bing Webmaster Tools** : importer la propriété depuis Search Console et soumettre le sitemap. L'index Bing alimente Copilot et DuckDuckGo, et plusieurs assistants IA s'appuient sur des index de recherche tiers.
4. **Google Business Profile** : c'est le premier levier pour des recherches comme « coach sportif Grenoble » ou « coach triathlon Grenoble ». Une activité qui se déplace chez ses clients peut déclarer une zone de service sans adresse publique (Q2).
5. **Pare-feu Vercel** : si un blocage des robots IA est proposé, le laisser désactivé. Aujourd'hui, tous les robots testés passent.

## 6. Arbitrages pris (et pourquoi)

- **A1 — « Grenoble » dans le titre de l'accueil.** Le site parle déjà de séances encadrées autour de l'agglomération grenobloise et de l'expérience au GUC (Grenoble Université Club). Le programme à distance n'étant pas limité à un lieu, la description précise « À distance ou en séances encadrées ». À confirmer (Q1).
- **A2 — `robots.txt` ouvert à tous les robots, IA comprises (y compris ceux qui servent à l'entraînement des modèles).** L'objectif est la visibilité, et le contenu est une information commerciale publique. C'est réversible à tout moment.
- **A3 — JSON-LD `Organization` plutôt que `LocalBusiness`.** Google exige une adresse (`address`) pour `LocalBusiness`. Sans adresse ni zone confirmée, `Organization` évite de publier une donnée fausse. Il sera remplacé par `LocalBusiness` (avec `areaServed` et `sameAs`) après les réponses aux questions Q1 à Q4.
- **A4 — Pas de tarifs dans le JSON-LD.** Les prix figurent déjà dans le HTML et dans `llms.txt`, et Google n'affiche pas de résultat enrichi pour ce type de prestation de service. Le gain d'une troisième copie est faible.
- **A5 — Texte visible, H1 et URL inchangés.** Ce sont des choix éditoriaux, posés en questions (Q18, Q19).
- **A6 — Recompression JPEG plutôt que passage au WebP/AVIF.** Aucun changement de code, compatibilité totale, −86 % de poids. Les images inutilisées n'ont pas été touchées.
- **A7 — `llms.txt`.** C'est une convention émergente, pas un facteur de classement Google. Son coût est quasi nul et il donne aux agents un résumé propre et à jour, avec diplômes, tarifs et contact.
- **A8 — Image de partage = photo d'accueil (`running3.jpg`).** À remplacer par une photo réelle de Luc ou d'une séance si elle existe, idéalement au format 1200×630 (Q10).
- **A9 — Volontairement non ajouté** :
  - `meta keywords` : ignorée par les moteurs ;
  - `lastmod`, `changefreq` et `priority` dans le sitemap : `lastmod` serait la date de build, ce qui est trompeur ;
  - avis, horaires, adresse et réseaux sociaux : non connus.

## 7. Questions ouvertes

### Zone géographique et présence locale

- **Q1.** Zone d'intervention des séances encadrées : quelles communes, quel rayon ? Y a-t-il un lieu fixe (salle, cabinet) ou uniquement le terrain et le domicile ? Quels lieux de séance peuvent être cités ?
- **Q2.** Une fiche Google Business Profile existe-t-elle ? Si oui, quelle est son URL ? Sinon, faut-il la créer ?
- **Q3.** Le programme à distance est-il proposé partout en France ? À l'étranger ?

### Identité et confiance

- **Q4.** Quels profils officiels relier au site (Instagram, Facebook, Strava, LinkedIn, YouTube…) ?
- **Q5.** Pour les mentions légales : statut juridique, SIRET, numéro de carte professionnelle d'éducateur sportif, TVA applicable ou non (les prix sont-ils TTC ?).
- **Q6.** Depuis quand l'activité existe-t-elle ?
- **Q7.** Les expériences GUC triathlon et Eklore-ed sont-elles actuelles ou passées ? Avec quelles dates ? Sans date, un agent IA peut les présenter comme actuelles.
- **Q8.** Faut-il préciser les résultats sportifs (Ironman : années, éventuellement temps) ?
- **Q9.** Existe-t-il des avis clients réels (Google, Facebook, témoignages écrits) publiables avec l'accord des clients ?
- **Q10.** Les photos de sport viennent-elles d'une banque d'images ? Existe-t-il des photos réelles (Luc en séance, athlètes accompagnés) avec les droits d'utilisation ?
- **Q11.** Une adresse e-mail sur le domaine (par ex. contact@coachnpulse.com) est-elle envisageable ?

### Offre et contenu

- **Q12.** Comment se déroule concrètement l'accompagnement ? Le bilan initial (durée, contenu, à distance ou non), la forme du programme (plateforme ou application utilisée), la fréquence des ajustements, le mode d'échange avec le coach.
- **Q13.** Quel public est visé : débutants, sportifs confirmés, triathlètes, ultra-distance ? Y a-t-il des limites (âge, niveau) ?
- **Q14.** En quoi consiste la préparation mentale proposée ?
- **Q15.** La ligne « Plus de 20 kms autour de l'agglomération grenobloise : 0,50€/km » correspond-elle à des frais de déplacement ? Les tarifs sont-ils à jour en octobre 2026 ?
- **Q16.** Quelles questions les prospects posent-ils le plus souvent ? Elles serviraient de base à une FAQ, très utile pour Google comme pour les agents IA.
- **Q17.** Luc peut-il écrire ou valider du contenu régulier (conseils, préparation d'une course, retours d'expérience) ? À quel rythme réaliste ?

### Choix éditoriaux à arbitrer

- **Q18.** Renommer `/description` en `/programme` et `/prices` en `/tarifs`, avec redirections 308 ? _Recommandation : oui, et maintenant, car le site a peu d'historique d'indexation._
- **Q19.** Rendre les H1 plus descriptifs ? Par exemple, sur l'accueil : « Coach sportif et triathlon à Grenoble », en gardant la phrase actuelle comme sous-titre. Sur `/description` : « Le programme ». _Recommandation : oui._
- **Q20.** Une version anglaise est-elle utile ? _Recommandation : non, sauf si une clientèle anglophone existe._
- **Q21.** Quelle mesure d'audience ? _Recommandation : Search Console, gratuite et sans cookie ; éventuellement Vercel Web Analytics, également sans cookie._

### Accès

- **Q22.** Qui gère le domaine (DNS) et le projet Vercel ?
- **Q23.** Search Console est-elle déjà configurée ? Si oui, un export du rapport « Pages » permettrait une seconde passe avec des données réelles d'indexation.

## 8. Feuille de route proposée

1. **Technique** (cette branche) : canonical, métadonnées, `robots.txt`, `sitemap.xml`, `llms.txt`, JSON-LD de base, icônes, poids des images.
2. **Après réponses** : JSON-LD `LocalBusiness` avec zone et `sameAs`, page de mentions légales, page « Comment ça marche », FAQ, H1 et URL (Q18, Q19), image de partage réelle.
3. **Dans la durée** : fiche Google Business Profile et avis, contenus réguliers, liens depuis les clubs et partenaires réels (Q7), suivi dans Search Console.
