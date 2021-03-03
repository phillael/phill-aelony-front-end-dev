require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.phillcodes.com",
    title:
      "Phill Aelony | React Developer, JavaScript Wizard, Front End Developer",
    author: "Phill Aelony",
    description:
      "Portfolio site (React, Gatsby) from Programmer, guitarist, composer, llama enthusiast, Phill Aelony",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Abel", "Roboto:300,500,700"],
        },
      },
    },
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-sass",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          `gatsby-remark-responsive-iframe`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
