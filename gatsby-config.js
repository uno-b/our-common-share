module.exports = {
  siteMetadata: {
    title: `Our Common Share`,
    description: `Your description here.`,
    author: `@UnoCloud`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
        display: "swap",
      },
    },
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald`, `Quattrocento`],
        display: "swap",
      },
    },
  ],
}
