import React from "react"
import { Link } from "gatsby"

import buttonStyles from "./button.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ButtonLink = props => (
  <Link
    activeClassName={buttonStyles.activeNavItem}
    className={buttonStyles.navLink}
    to={props.url}
  >
    <FontAwesomeIcon className={buttonStyles.icon} icon={props.icon} />
    <p className={buttonStyles.text}>{props.text}</p>
  </Link>
)

export default ButtonLink
