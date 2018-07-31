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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Modus Create Labs',
        short_name: 'Modus Labs',
        start_url: '/',
        background_color: '#1B1B1B',
        theme_color: '#DF6F68',
        display: 'minimal-ui',
        icon: 'src/images/modus-black.png',
      },
    },
  ],
};
