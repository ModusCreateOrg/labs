module.exports = {
  siteMetadata: {
    title: 'Modus Create Labs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
};
