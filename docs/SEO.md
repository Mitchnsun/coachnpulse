# Audit SEO et visibilité pour les agents IA — coachnpulse.com

- **Date** : 13 octobre 2026 (mis à jour le même jour avec les réponses et les exports Search Console)
- **Périmètre** : site en production https://www.coachnpulse.com (déploiement du 12/10/2026, v5), code de ce dépôt et exports Google Search Console (rapport « Pages » du 9 octobre 2026, rapport « Performance » des 3 derniers mois)
- **Règle suivie** : aucune information inventée. Tout ce qui est ajouté au site provient de textes déjà publiés ou des réponses fournies. Le reste est posé en questions (section 8).

## 1. Synthèse

Techniquement, le site est sain : HTML statique lisible sans JavaScript, HTTPS, langue déclarée, et tous les robots testés y ont accès. Mais il était presque invisible pour les moteurs et les agents IA :

1. **Bug de canonical (présent depuis la v2 en 2020)** : toutes les pages déclaraient la page d'accueil comme URL canonique.
2. **Pas de `robots.txt`, de `sitemap.xml` ni de `llms.txt`** (réponse 404).
3. **Titre et description identiques sur les 4 pages.** Le titre « Coach'n Pulse » ne contient aucun mot recherché (coach, triathlon, Grenoble…).
4. **Aucune donnée structurée (schema.org) ni aucune carte de partage (Open Graph).**
5. **Très peu de texte** : environ 90 mots sur l'accueil, navigation comprise.
6. **Aucune présence externe** : pas de fiche Google Business Profile, pas de réseaux sociaux. Les recherches sur la marque ne renvoient pas le site, qui se confond avec des homonymes (« Coach Pulse »).
7. **Search Console** : 3 pages indexées (`/`, `/prices`, `/coach`) ; `/description` est inconnue de Google ; 63 impressions et 1 clic en 3 mois, presque tous sur l'accueil (section 3).

Cette branche corrige tous les points techniques, renomme les URL, rend les H1 plus descriptifs et redirige les anciennes URL. Les gains les plus importants restent hors code : créer la fiche Google Business Profile, et rédiger du contenu dès que les informations seront disponibles.

## 2. Méthode

- Analyse du site en production avec `curl` : statuts HTTP, redirections, balises `<head>`, titres H1 à H6, attributs `alt`, texte visible sans JavaScript.
- Test d'accès avec les robots Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot et CCBot : tous reçoivent une réponse **200**. Le pare-feu Vercel ne bloque aucun robot.
- Recherches web sur la marque et sur le coach.
- Lecture du code et de l'historique git (Next.js 15, `output: 'export'`, hébergement Vercel ; versions précédentes en HTML en 2017 puis Gatsby).
- Analyse des exports Search Console fournis.

### Points positifs

- Contenu rendu côté serveur : lisible par tous les agents IA, y compris ceux qui n'exécutent pas JavaScript.
- HTTPS avec HSTS, `lang="fr"`, balise viewport, temps de réponse d'environ 0,2 s (CDN Vercel).
- Attributs `alt` présents sur les images de contenu.
- Navigation en liens HTML classiques, dans l'en-tête et le pied de page.

## 3. Search Console

### 3.1 Indexation (rapport « Pages », 9 octobre 2026)

| Indicateur                   | Valeur                                                     |
| ---------------------------- | ---------------------------------------------------------- |
| Pages indexées               | 3                                                          |
| URL non indexées             | 11                                                         |
| Impressions (5 au 9 octobre) | 7, 10, 11, 5, 10 : 43 au total, environ 9 par jour         |
| Sitemap                      | Aucun sitemap valide possible : `sitemap.xml` était en 404 |
| Validations                  | Aucune lancée                                              |

| Motif de non-indexation         | URL | Lecture                                                                                                                                                                                                                                                                                                                              | Action                                                                                       |
| ------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Page with redirect              | 7   | **Normal (liste confirmée).** `http://coachnpulse.com/`, `https://coachnpulse.com/`, `http://www.coachnpulse.com/`, et les anciennes URL Gatsby avec barre finale `/coach/` et `/prices/` (avec et sans `www`, explorées pour la dernière fois en août). Le nombre augmentera avec `/prices`, qui redirige désormais vers `/tarifs`. | Aucune                                                                                       |
| Not found (404)                 | 3   | **Confirmé** : les 3 variantes de `/index.html` : `https://coachnpulse.com/index.html`, `http://www.coachnpulse.com/index.html` et `https://www.coachnpulse.com/index.html`, explorées en septembre.                                                                                                                                 | Redirigées vers `/` dans cette branche (`vercel.json`). Après déploiement : « Validate fix » |
| Crawled - currently not indexed | 1   | **`/favicon.ico`** : normal, une icône n'a pas vocation à être indexée comme une page.                                                                                                                                                                                                                                               | Aucune                                                                                       |

**Point notable** : aucune URL n'apparaît en « Alternate page with proper canonical tag ». Si Google avait suivi le canonical erroné, les pages `/coach` et `/prices` apparaîtraient sous ce motif. Google semble donc l'avoir **ignoré**, car les pages étaient trop différentes de l'accueil. L'impact réel du bug est probablement plus faible que craint, mais la correction reste nécessaire. Un canonical faux brouille les signaux envoyés aux moteurs.

L'export ne couvre que 5 jours. Il est trop tôt pour lire une tendance. Il faudra comparer 2 à 4 semaines après le déploiement.

### 3.2 Performance (recherche Web, 3 derniers mois)

| Dimension | Valeur         | Clics | Impressions | CTR    | Position moyenne |
| --------- | -------------- | ----- | ----------- | ------ | ---------------- |
| Total     |                | 1     | 63          | 1,6 %  |                  |
| Page      | `/`            | 1     | 54          | 1,85 % | 5,4              |
| Page      | `/prices`      | 0     | 6           | 0 %    | 71,3             |
| Page      | `/coach`       | 0     | 3           | 0 %    | 52,3             |
| Page      | `/description` | —     | 0           | —      | —                |
| Appareil  | Mobile         | 1     | 44          | 2,27 % | 5,8              |
| Appareil  | Ordinateur     | 0     | 18          | 0 %    | 34,5             |
| Appareil  | Tablette       | 0     | 1           | 0 %    | 3                |
| Pays      | France         | 1     | 59          | 1,69 % | 13,9             |
| Pays      | États-Unis     | 0     | 3           | 0 %    | 16,7             |
| Pays      | Canada         | 0     | 1           | 0 %    | 7                |

Lecture :

- **Visibilité quasi nulle** : 63 impressions et 1 clic en 3 mois. D'après le rapport « Pages », 43 de ces 63 impressions tombent entre le 5 et le 9 octobre.
- **Seul l'accueil apparaît vraiment** : 86 % des impressions, en position moyenne 5,4. `/prices` et `/coach` ne sortent qu'au-delà de la 5e page de résultats (positions 71 et 52), donc invisibles en pratique.
- **Pages indexées** : Google connaît 14 URL. 3 sont indexées, et les 11 autres sont toutes listées dans les motifs de non-indexation (7 redirections, 3 `/index.html`, `/favicon.ico`). Les 3 pages indexées sont donc `/`, `/prices` et `/coach`, les seules à recevoir des impressions. **`/description` n'apparaît nulle part : Google ne l'a vraisemblablement jamais découverte.** Le sitemap et la demande d'indexation de `/programme` y remédieront.
- **Le mobile domine** : 70 % des impressions, en position 5,8 (contre 34,5 sur ordinateur). L'allègement des images (−86 %) profite directement à la majorité des visiteurs.
- **France** : 94 % des impressions.
- **« Search appearance » vide** : aucun résultat enrichi. C'est normal, et cela ne changera pas avec les données structurées ajoutées (`Organization`, `Person`). Elles servent à identifier l'entreprise et le coach, pas à produire un résultat enrichi.
- **Requêtes inconnues** : le fichier des requêtes (`Queries.csv`) n'a pas été transmis. S'il est vide, c'est attendu : Google masque les requêtes trop rares (« requêtes anonymisées »). Sans lui, impossible de savoir si les impressions viennent de recherches sur le nom de la marque ou de recherches génériques.

## 4. Constats

| #   | Priorité | Constat                                                                                                                 | Statut                                                       |
| --- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | Critique | Canonical de **toutes** les pages = `https://www.coachnpulse.com/` (codé en dur dans le layout depuis 2020)             | ✅ Corrigé                                                   |
| 2   | Haute    | `robots.txt` et `sitemap.xml` absents (404)                                                                             | ✅ Corrigé                                                   |
| 3   | Haute    | Même `<title>` et même meta description sur toutes les pages, sans mot-clé                                              | ✅ Corrigé                                                   |
| 4   | Haute    | Aucune donnée structurée schema.org                                                                                     | ✅ Corrigé (voir A3)                                         |
| 5   | Haute    | Contenu très court : ni déroulement de l'accompagnement, ni public visé, ni FAQ, ni avis                                | ⏸️ En attente d'informations (Q12 à Q17)                     |
| 6   | Haute    | Pas de fiche Google Business Profile, pas de réseaux sociaux : aucune présence externe                                  | ⚙️ À créer (section 6)                                       |
| 7   | Haute    | `/index.html` en 404 sous 3 variantes d'hôte (confirmé par Search Console)                                              | ✅ Redirigé vers `/` (308)                                   |
| 8   | Moyenne  | Pas d'Open Graph ni de carte Twitter/X : aperçu pauvre sur WhatsApp, Facebook, LinkedIn…                                | ✅ Corrigé                                                   |
| 9   | Moyenne  | Photos très lourdes (export statique sans optimisation) : 2,7 Mo d'images sur l'accueil                                 | ✅ Corrigé (−86 %)                                           |
| 10  | Moyenne  | Favicon de 39×39 px : Google demande un carré multiple de 48 px pour l'afficher dans les résultats                      | ✅ Corrigé                                                   |
| 11  | Moyenne  | `coachnpulse.com` redirigeait vers `www` en **307 (temporaire)**                                                        | ✅ Passé en 308 côté Vercel (constaté le 13 octobre au soir) |
| 12  | Moyenne  | H1 peu descriptifs : « Description », et un H1 d'accueil sans « coach », « triathlon » ni lieu                          | ✅ Corrigé                                                   |
| 13  | Moyenne  | URL en anglais (`/prices`) ou peu parlante (`/description`) sur un site francophone                                     | ✅ `/programme` et `/tarifs`, avec redirections 308          |
| 14  | Basse    | Page 404 en anglais (« This page could not be found. ») avec deux balises `<title>`                                     | ✅ Corrigé                                                   |
| 15  | Basse    | Hiérarchie des titres de `/coach` : un H1 suivi directement de H3                                                       | ✅ Corrigé (H2)                                              |
| 16  | Basse    | Pas de mentions légales (obligatoires pour un site professionnel en France, et signal de confiance)                     | ⏸️ Statut connu ; manque SIRET et adresse (Q5)               |
| 17  | Basse    | Les photos de sport semblent venir d'une banque d'images : aucune photo réelle de séance ou d'athlète, sauf le portrait | ❓ Q10                                                       |
| 18  | Info     | Ligne de tarif ambiguë : « Plus de 20 kms autour de l'agglomération grenobloise : 0,50€/km »                            | ❓ Q15                                                       |
| 19  | Info     | Tarifs sans mention TTC ou HT : ambigu pour les visiteurs comme pour les agents IA                                      | ✅ « Tous les tarifs sont indiqués TTC. »                    |
| 20  | Info     | Images publiées mais inutilisées : `Luc.jpg`, `blacklogo.jpg`, `whitelogo.jpg`, `running4.jpg`                          | Non traité (nettoyage optionnel)                             |

## 5. Modifications faites dans cette branche

| Fichier                                         | Rôle                                                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                                | Suppression du canonical codé en dur, ajout de `metadataBase` et des données structurées JSON-LD                                                                                                                  |
| `src/data/pages.ts`                             | Chemin, titre et description SEO de chaque page (source unique pour les métadonnées, la navigation, le sitemap et `llms.txt`)                                                                                     |
| `src/utils/seo.ts`                              | Métadonnées par page : `<title>`, description, canonical propre à la page, Open Graph, carte Twitter/X                                                                                                            |
| `src/utils/structured-data.ts`                  | JSON-LD `WebSite`, `Organization` (Coach'n Pulse) et `Person` (Luc Nahon : diplômes, affiliations actuelles au GUC triathlon et à Eklore-ed sport)                                                                |
| `app/robots.ts` → `/robots.txt`                 | Autorise tous les robots et indique le sitemap                                                                                                                                                                    |
| `app/sitemap.ts` → `/sitemap.xml`               | Les 4 pages                                                                                                                                                                                                       |
| `app/llms.txt/route.ts` → `/llms.txt`           | Résumé en texte brut pour les agents IA ([llmstxt.org](https://llmstxt.org)), généré à partir des mêmes données que les pages, donc toujours à jour ; précise « pas de lieu fixe »                                |
| `app/programme/`, `app/tarifs/`                 | Anciennement `app/description/` et `app/prices/` ; menu « Description » renommé « Programme »                                                                                                                     |
| `vercel.json`                                   | Redirections 308 : `/description` → `/programme`, `/prices` et `/prices/` → `/tarifs`, `/index.html` → `/`, et les autres anciennes URL de 2017 (`description.html`, `coach.html`, `prices.html`, `contact.html`) |
| `app/page.tsx`                                  | H1 « Coach sportif et triathlon à Grenoble » ; l'ancienne phrase devient le sous-titre                                                                                                                            |
| `app/programme/page.tsx`                        | H1 « Le programme » (au lieu de « Description »)                                                                                                                                                                  |
| `app/tarifs/page.tsx`, `src/data/prices.ts`     | Mention « Tous les tarifs sont indiqués TTC. », reprise dans `llms.txt`                                                                                                                                           |
| `app/not-found.tsx`                             | Page 404 en français                                                                                                                                                                                              |
| `app/favicon.ico`, `icon.png`, `apple-icon.png` | Icônes 16/32/48 px, 192 px et 180 px (iOS), générées à partir du logo existant                                                                                                                                    |
| `app/coach/page.tsx`                            | « Diplômes » et « Expérience » passent de H3 à H2 (rendu visuel identique) ; leurs données sont déplacées dans `src/data/coach.ts`                                                                                |
| `public/img/*.jpg`                              | Recompression JPEG qualité 80 des 8 photos utilisées : 4,7 Mo → 0,7 Mo, dont 2,7 Mo → 0,4 Mo sur l'accueil                                                                                                        |

### Titres retenus

| Page         | `<title>`                                                  | H1                                    |
| ------------ | ---------------------------------------------------------- | ------------------------------------- |
| `/`          | Coach sportif & triathlon à Grenoble \| Coach'n Pulse      | Coach sportif et triathlon à Grenoble |
| `/programme` | Programme sportif personnalisé \| Coach'n Pulse            | Le programme                          |
| `/coach`     | Luc Nahon, coach diplômé DEJEPS triathlon \| Coach'n Pulse | Luc Nahon                             |
| `/tarifs`    | Tarifs coaching et programme à distance \| Coach'n Pulse   | Tarifs                                |

### Vérifications après déploiement

- Si Vercel crée un déploiement de prévisualisation pour la branche, vérifier dessus que `/description`, `/prices`, `/prices/` et `/index.html` redirigent bien en 308.
- Ouvrir https://www.coachnpulse.com/robots.txt, `/sitemap.xml` et `/llms.txt`.
- Tester l'accueil et `/coach` dans le [test des résultats enrichis](https://search.google.com/test/rich-results) et le [Schema Markup Validator](https://validator.schema.org/).
- Vérifier l'aperçu de partage avec le [Sharing Debugger de Facebook](https://developers.facebook.com/tools/debug/) ou en envoyant le lien sur WhatsApp.

## 6. Actions hors code (à faire de votre côté)

1. ~~**Vercel → Settings → Domains** : passer la redirection `coachnpulse.com` → `www` de 307 à 308.~~ Fait : elle répond désormais en 308.
2. **Search Console, juste après le déploiement** :
   - **Sitemaps** : soumettre `https://www.coachnpulse.com/sitemap.xml`.
   - **URL inspection** : « Request indexing » pour `/`, `/programme`, `/coach` et `/tarifs`.
   - **Pages → Not found (404)** : les 3 URL sont des variantes de `/index.html`, désormais redirigées. Cliquer sur « Validate fix ».
   - **Pages → Crawled - currently not indexed** (`/favicon.ico`) : rien à faire.
   - **Page with redirect** : rien à faire.
3. **Bing Webmaster Tools** : importer la propriété depuis Search Console et soumettre le sitemap. L'index Bing alimente Copilot et DuckDuckGo, et plusieurs assistants IA s'appuient sur des index de recherche tiers.
4. **Créer la fiche Google Business Profile** : c'est le premier levier pour des recherches comme « coach sportif Grenoble » ou « coach triathlon Grenoble ». Sans lieu fixe, il faut indiquer que l'entreprise **se déplace chez ses clients** : l'adresse reste masquée et on définit une zone desservie (agglomération grenobloise, comme sur le site). Utiliser exactement le même nom, téléphone et site web que sur coachnpulse.com. Une fois la fiche créée, transmettre son URL pour l'ajouter aux données structurées (`sameAs`).
5. **Avis Google** : une fois la fiche créée, demander un avis aux clients actuels. C'est le signal local le plus fort et une source citée par les agents IA.
6. **Pare-feu Vercel** : si un blocage des robots IA est proposé, le laisser désactivé.

## 7. Arbitrages pris (et pourquoi)

- **A1 — « Grenoble » dans le titre et le H1 de l'accueil.** Les séances en présentiel ont lieu autour de l'agglomération grenobloise (frais de déplacement au-delà), et le coach entraîne au GUC. La description précise « À distance ou en séances encadrées » pour ne pas exclure la visio.
- **A2 — `robots.txt` ouvert à tous les robots, IA comprises (y compris ceux qui servent à l'entraînement des modèles).** L'objectif est la visibilité, et le contenu est une information commerciale publique. C'est réversible à tout moment.
- **A3 — JSON-LD `Organization` plutôt que `LocalBusiness`, choix définitif.** Il n'y a pas de lieu fixe, or Google exige une adresse pour `LocalBusiness`. La présence locale passera par la fiche Google Business Profile.
- **A4 — Pas de tarifs dans le JSON-LD.** Les prix figurent déjà dans le HTML et dans `llms.txt`, et Google n'affiche pas de résultat enrichi pour ce type de prestation de service.
- **A5 — Nouveaux H1.**
  - Accueil : « Coach sportif et triathlon à Grenoble », avec la phrase d'origine en sous-titre.
  - `/programme` : « Le programme ». Le petit surtitre devient « Encadrement sportif personnalisé » pour éviter la répétition.
- **A6 — `/contact.html` (2017) redirigé vers l'accueil.** Il n'existe plus de page contact : le bloc « Demande d'informations » figure sur toutes les pages.
- **A7 — Recompression JPEG plutôt que passage au WebP/AVIF.** Aucun changement de code, compatibilité totale, −86 % de poids.
- **A8 — `llms.txt`.** C'est une convention émergente, pas un facteur de classement Google. Son coût est quasi nul et il donne aux agents un résumé propre et à jour.
- **A9 — Image de partage = photo d'accueil (`running3.jpg`).** À remplacer par une photo réelle de Luc ou d'une séance si elle existe, idéalement au format 1200×630 (Q10).
- **A10 — Volontairement non ajouté** :
  - `meta keywords` : ignorée par les moteurs ;
  - `lastmod` dans le sitemap : ce serait la date de build, ce qui est trompeur ;
  - avis, horaires, adresse : inexistants ou inconnus.
- **A11 — Réponse « Non » à la question 2** : interprétée comme « ni fiche Google Business Profile, ni réseaux sociaux à relier ». Aucun `sameAs` n'est donc publié pour l'instant.

## 8. Questions

### Réponses reçues

| Question                                   | Réponse                                   | Effet                                           |
| ------------------------------------------ | ----------------------------------------- | ----------------------------------------------- |
| Q1. Zone et lieu fixe                      | Pas de lieu fixe : déplacement ou visio   | A3 confirmé ; précision ajoutée dans `llms.txt` |
| Q2 et Q4. Google Business Profile, réseaux | Non                                       | Création de la fiche recommandée (section 6)    |
| Q7. GUC triathlon et Eklore-ed             | Expériences actuelles                     | Affiliations ajoutées au JSON-LD de Luc Nahon   |
| Q12 à Q14, Q16. Déroulement, public, FAQ   | Pas d'informations pour l'instant         | Aucun contenu rédigé : rien n'est inventé       |
| Q18 et Q19. URL et H1                      | Oui                                       | Fait (sections 5 et 7)                          |
| Q23. Search Console                        | Configurée, export fourni                 | Analyse en section 3.1                          |
| Q5 (en partie). Statut et TVA              | Auto-entrepreneur, prix TTC               | Mention TTC ajoutée (page Tarifs, `llms.txt`)   |
| Q24. Listes d'URL Search Console           | Fournies (redirections, 404, non indexée) | Section 3.1 ; `/description` inconnue de Google |
| Q25. Rapport Performance                   | Fourni, sans le fichier des requêtes      | Analyse en section 3.2                          |

### Questions encore ouvertes

- **Q3.** Le programme à distance et la visio sont-ils proposés partout en France ? À l'étranger ?
- **Q5.** Pour publier les mentions légales (LCEN, article 6), il manque :
  - le numéro SIRET ;
  - l'adresse à publier (domicile ou adresse de domiciliation), exigée pour un entrepreneur individuel même sans lieu d'accueil ;
  - le médiateur de la consommation : un professionnel qui vend des services à des particuliers doit en indiquer un ;
  - en option, le numéro de carte professionnelle d'éducateur sportif (signal de confiance) ;
  - la TVA : si l'activité bénéficie de la franchise en base de TVA (cas fréquent en micro-entreprise), la mention habituelle est « TVA non applicable, art. 293 B du CGI ». Le site affiche « TTC » comme indiqué : faut-il ajouter cette mention ?
- **Q6.** Depuis quand l'activité existe-t-elle ?
- **Q8.** Faut-il préciser les résultats sportifs (Ironman : années, éventuellement temps) ?
- **Q9.** Existe-t-il des avis ou témoignages clients réels, publiables avec l'accord des clients ?
- **Q10.** Les photos de sport viennent-elles d'une banque d'images ? Existe-t-il des photos réelles (Luc en séance, athlètes accompagnés) avec les droits d'utilisation ?
- **Q11.** Une adresse e-mail sur le domaine (par ex. contact@coachnpulse.com) est-elle envisageable ?
- **Q15.** La ligne « Plus de 20 kms autour de l'agglomération grenobloise : 0,50€/km » correspond-elle à des frais de déplacement ? Les tarifs sont-ils à jour en octobre 2026 ?
- **Q12 à Q14, Q16 et Q17 (à demander à Luc)** : déroulement de l'accompagnement, public visé, préparation mentale, questions fréquentes des prospects, possibilité de rédiger du contenu régulier. Ce sont les informations qui manquent le plus au site.
- **Q25.** Le fichier `Queries.csv` de l'export « Performance », s'il n'est pas vide : il montrerait quelles recherches génèrent les impressions actuelles.

## 9. Feuille de route

1. **Fait dans cette branche** : canonical, métadonnées, `robots.txt`, `sitemap.xml`, `llms.txt`, JSON-LD, icônes, poids des images, URL en français, H1, redirections des anciennes URL, mention TTC.
2. **Juste après le déploiement** : actions Search Console et Bing (section 6), création de la fiche Google Business Profile.
3. **Dès que les informations arrivent** : page de mentions légales (SIRET et adresse, Q5), page « Comment ça marche » et FAQ (Q12 à Q16), avis (Q9), photos réelles et image de partage (Q10), `sameAs` vers la fiche Google.
4. **Dans 2 à 4 semaines** : nouvel export Search Console (rapports « Pages » et « Performance ») pour mesurer l'effet des corrections.
