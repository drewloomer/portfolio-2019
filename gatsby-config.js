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
    `gatsby-plugin-styled-components`
  ],
  siteMetadata: {
    title: 'Drew Loomer'
  }
};
