module.exports = {
  siteMetadata: {
    title: "Gatsby MOTHAF#$*ER",
    author: "Lord Phillbert",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
