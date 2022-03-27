module.exports = {
  siteMetadata: {
    title: `Script Kitties`,
    siteUrl: `https://www.scriptkitties.ca`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Script Kitties`,
        short_name: `Script Kittise`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#f5dbff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
  ],
};
