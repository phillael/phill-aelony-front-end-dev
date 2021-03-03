import React from "react"
import socialStyles from "./socialLinks.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function SocialLinks({ color }) {
  const myStyle = {
    color: color,
  }
  return (
    <div className={socialStyles.socialLinks}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={socialStyles.socialLink}
        href="https://github.com/phillael"
        style={myStyle}
      >
        <FontAwesomeIcon className={socialStyles.socialIcon} icon={faGithub} />
        <p className={socialStyles.linkName}>Github</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={socialStyles.socialLink}
        href="https://www.phillaelonymusic.com"
        style={myStyle}
      >
        <FontAwesomeIcon className={socialStyles.socialIcon} icon={"guitar"} />
        <p className={socialStyles.linkName}>My Music Page</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={socialStyles.socialLink}
        href="https://www.linkedin.com/in/phillip-aelony-82a28616a/"
        style={myStyle}
      >
        <FontAwesomeIcon
          className={socialStyles.socialIcon}
          icon={faLinkedin}
        />
        <p className={socialStyles.linkName}>LinkedIn</p>
      </a>
    </div>
  )
}
