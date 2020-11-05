import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import videoStyles from "./videoCard.module.scss"

export default function Bottom(props) {
  return (
    <div className={videoStyles.bottom}>
      <div className={videoStyles.info}>
        <div className={videoStyles.title}>{props.title}</div>
        <div className={videoStyles.stats}>
          <p>
            {props.views} · {props.date}
          </p>
        </div>
      </div>
      <div className={videoStyles.menu}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  )
}
