require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.phillcodes.com",
    title:
      "Phill Aelony | React Developer, JavaScript Wizard, Front End Developer",
    author: "Phill Aelony",
    description:
      "Phill Aelony - Front end dev at Microsoft Azure - JavaScript, React, HTML, CSS, C#, .NET",
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
  ],
};
