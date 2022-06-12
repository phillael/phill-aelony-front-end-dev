import React from "react";
import footerStyles from "./footer.module.scss";
import "../../utils/fontawesome";
import SocialLinks from "../socialLinks";

const Footer = ({ footerBackground }) => {
  const footerStyle = {
    backgroundColor: footerBackground,
  };

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.waves} style={footerStyle}>
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
      <p className={footerStyles.copyright}>Created by Phill Aelony ©2022</p>
    </footer>
  );
};

export default Footer;
