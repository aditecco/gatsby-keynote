module.exports = {
  // metadata
  siteMetadata: {
    title: `Gatsby Deck`,
    description: `Create a slide deck with Gatsby!`,
    author: `Alessandro Di Tecco`,
    version: `0.0.0`,
    currentYear: `2020`,
  },

  // plugins
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/Layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: ``, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
