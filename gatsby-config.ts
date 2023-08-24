import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
   /* Your site config here */
   siteMetadata: {
    title: "Coach'n Pulse",
    description: 'Programme sportif et bilan personalisé adapté à votre niveau et vos objectifs',
    goals: [
      'Santé',
      'Loisir',
      'Renforcement musculaire',
      'Perfectionnement sportif',
      'Perte de poids',
      'Compétition',
      'Tonification corporelle',
      'Challenge',
    ],
    sessions: [
      'Natation',
      'Fitness',
      'Course à pied',
      'Musculation',
      'Vélo',
      'Préparation physique',
      'Triathlon',
      'Multi-activité',
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, '/src/img/'),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['AgencyFB'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
  ],
};

export default config;
