module.exports = {
  siteMetadata: {
    title: 'Modus Labs by Modus Create',
    siteUrl: 'https://labs.moduscreate.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
        start_url: '/?utm_source=pwa',
        background_color: '#1B1B1B',
        theme_color: '#DF6F68',
        display: 'standalone',
        icon: 'src/images/modus-black.png',
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `X-Frame-Options: deny`,
            `Strict-Transport-Security: max-age=31536000; includeSubdomains; preload`,
            `Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin`,
            [
              `Content-Security-Policy:`,
              `default-src 'self';`,
              `script-src 'self' data: 'unsafe-inline' cdnjs.cloudflare.com www.googletagmanager.com consent.cookiebot.com www.google-analytics.com consentcdn.cookiebot.com;`,
              `style-src 'self' 'unsafe-inline' fonts.googleapis.com tagmanager.google.com;`,
              `img-src 'self' data: res.cloudinary.com www.google-analytics.com ssl.gstatic.com www.gstatic.com avatars.io;`,
              `font-src fonts.gstatic.com;`,
              `connect-src 'self' fonts.gstatic.com res.cloudinary.com fonts.googleapis.com cdnjs.cloudflare.com consent.cookiebot.com www.google-analytics.com consentcdn.cookiebot.com www.googletagmanager.com avatars.io;`,
              `upgrade-insecure-requests`,
            ].join(' '),
          ],
          '/sw.js': ['Cache-Control: public, max-age=360, must-revalidate'],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-27963224-5',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TSSFT9B',
        includeInDevelopment: false,
      },
    },
  ],
};
