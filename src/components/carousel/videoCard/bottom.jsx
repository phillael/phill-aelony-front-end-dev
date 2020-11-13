import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { bottom, info, stats, menu } from "./videoCard.module.scss"

export default function Bottom({ title, date, views }) {
  return (
    <div className={bottom}>
      <div className={info}>
        <div className={title}>{title}</div>
        <div className={stats}>
          <p>
            {views} · {date}
          </p>
        </div>
      </div>
      <div className={menu}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  )
}
