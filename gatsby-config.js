const tsconfig = require('./tsconfig.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: tsconfig
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        template: require('./scripts/svgr-template'),
        icon: true,
        replaceAttrValues: {
          '#000': 'currentColor'
        },
        prettierConfig: {
          parser: ['typescript']
        },
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-33763914-1'
      }
    }
  ],
  siteMetadata: {
    title: 'Drew Loomer'
  }
};
