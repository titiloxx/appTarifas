module.exports = {
  siteMetadata: {
    title: `Tarifas Unquehue`,
    description: ``,
    author: `@titiloxx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "app-tarifas",
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TarifasUnque`,
        short_name: `TarifasUnque`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/icon.png`
      },
     },
     
     `gatsby-plugin-offline`,
  ],
}
