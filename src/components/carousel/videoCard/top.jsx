import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faList } from "@fortawesome/free-solid-svg-icons"
import {
  top,
  overlays,
  iconWrapper,
  icon,
  watchLater,
  popOut,
  addToQueue,
  time,
  thumb,
} from "./videoCard.module.scss"

export default function Top({ length, thumbnail }) {
  return (
    <div className={top}>
      <div className={overlays}>
        <div className={iconWrapper}>
          <FontAwesomeIcon className={icon} icon={faClock} />
          <div className={`${popOut} ${watchLater}`}>WATCH LATER</div>
        </div>

        <div className={iconWrapper}>
          <FontAwesomeIcon className={icon} icon={faList} />
          <div className={`${popOut} ${addToQueue}`}>ADD TO QUEUE</div>
        </div>

        <div className={time}>{length}</div>
      </div>
      <img src={thumbnail} alt="video" className={thumb} />
    </div>
  )
}
