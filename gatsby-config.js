require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.phillcodes.com",
    title: "Phill Aelony | Frontend Developer | React | Typescript | Node",
    author: "Phill Aelony",
    description:
      "Phill Aelony | Web Developer - Frontend experience at Microsoft and Sessions live. Skilled in React, Typescript, Node, NextJs, MobX, ChakraUI",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
};
