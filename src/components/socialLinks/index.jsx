import React from "react"
import socialStyles from "./socialLinks.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function SocialLinks({ color }) {
  const myStyle = {
    color: color,
  }
  return (
    <div className={socialStyles.socialLinks}>
      <a
        className={socialStyles.socialLink}
        href="https://github.com/phillael"
        style={myStyle}
      >
        <FontAwesomeIcon className={socialStyles.socialIcon} icon={faGithub} />
        <p className={socialStyles.linkName}>Github</p>
      </a>
      <a
        className={socialStyles.socialLink}
        href="https://www.phillaelony.com"
        style={myStyle}
      >
        <FontAwesomeIcon className={socialStyles.socialIcon} icon={"guitar"} />
        <p className={socialStyles.linkName}>My Music Page</p>
      </a>
      <a
        className={socialStyles.socialLink}
        href="https://twitter.com/PhillAelony"
        style={myStyle}
      >
        <FontAwesomeIcon className={socialStyles.socialIcon} icon={faTwitter} />
        <p className={socialStyles.linkName}>Twitter</p>
      </a>
    </div>
  )
}
