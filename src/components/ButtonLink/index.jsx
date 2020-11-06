import React from "react"
import { Link } from "gatsby"

import buttonStyles from "./button.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ButtonLink = ({ icon, text, url, setOpen }) => (
  <Link
    activeClassName={buttonStyles.activeNavItem}
    className={buttonStyles.navLink}
    to={url}
    onClick={() => window.innerWidth < 800 && setOpen(false)}
  >
    <FontAwesomeIcon className={buttonStyles.icon} icon={icon} />
    <p className={buttonStyles.text}>{text}</p>
  </Link>
)

export default ButtonLink
