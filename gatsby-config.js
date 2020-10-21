/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
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
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['AgencyFB'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-SB4R7ZFPC2',
      },
    },
  ],
};
