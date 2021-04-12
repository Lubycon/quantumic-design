'use strict';
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Lubycon UI Kit',
    description: 'Lubycon UI Kit 입니다',
    keywords: 'Lubycon, UI Kit',
    siteUrl: 'https://ui-kit.lubycon.io',
    author: 'Lubycon',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
  ],
};
