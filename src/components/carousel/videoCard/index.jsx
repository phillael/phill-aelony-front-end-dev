import React from "react"
import Top from "./top"
import Bottom from "./bottom"
import videoStyles from "./videoCard.module.scss"

export default function Video({ thumbnail, length, title, views, uploadDate }) {
  return (
    <div className={videoStyles.card}>
      <Top thumbnail={thumbnail} length={length} />
      <Bottom
        title={title}
        views={views}
        length={length}
        uploadDate={uploadDate}
      />
    </div>
  )
}
