import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `);

  const { defaultTitle, defaultDescription } = data.site.siteMetadata;
  return (
    <Helmet
      title={title || defaultTitle}
      meta={[
        {
          name: "description",
          content: description || defaultDescription,
        },
      ]}
    />
  );
};

export default Head;
