require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title:
      "Phill Aelony | React Developer, JavaScript Lover, Front End Developer",
    author: "Phill Aelony",
    description:
      "Portfolio site (React, Gatsby) from Programmer, composer, guitarist, llama enthusiast, Phill Aelony",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Abel",
            variants: ["400"],
          },
          {
            family: "Roboto",
            variants: ["300", "500", "700"],
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-sass",
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
