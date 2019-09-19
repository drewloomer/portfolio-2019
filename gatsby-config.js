const tsconfig = require('./tsconfig.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: tsconfig
    },
    `gatsby-plugin-styled-components`
  ],
  siteMetadata: {
    title: 'Drew Loomer'
  }
};
