import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faList } from "@fortawesome/free-solid-svg-icons"
import videoStyles from "./videoCard.module.scss"

export default function Top(props) {
  return (
    <div className={videoStyles.top}>
      <div className={videoStyles.overlays}>
        <div className={videoStyles.iconWrapper}>
          <FontAwesomeIcon className={videoStyles.icon} icon={faClock} />
          <div className={`${videoStyles.popOut} ${videoStyles.watchLater}`}>
            WATCH LATER
          </div>
        </div>

        <div className={videoStyles.iconWrapper}>
          <FontAwesomeIcon className={videoStyles.icon} icon={faList} />
          <div className={`${videoStyles.popOut} ${videoStyles.addToQueue}`}>
            ADD TO QUEUE
          </div>
        </div>

        <div className={videoStyles.time}>{props.length}</div>
      </div>
      <img
        src={props.thumbnail}
        alt="video"
        className={videoStyles.thumbnail}
      />
    </div>
  )
}
