import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import "../../utils/fontawesome"
import SocialLinks from "../socialLinks"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.waves}>
        <svg
          className={footerStyles.svg}
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            className={footerStyles.path}
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          >
            {" "}
          </path>
        </svg>
      </div>

      <SocialLinks color="white" />
      <p className={footerStyles.copyright}>
        Created by {data.site.siteMetadata.author} ©2020
      </p>
    </footer>
  )
}

export default Footer
