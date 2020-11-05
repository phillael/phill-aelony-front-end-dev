import React, { useState } from "react"
import Video from "./videoCard"
import carouselStyles from "./carousel.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons"

export default function Carousel({ items }) {
  const [currIndex, setCurrIndex] = useState(0)
  const cardSize = 344

  return (
    <section className={carouselStyles.carouselPageContainer}>
      <div className={carouselStyles.arrowContainer}>
        {currIndex > 0 ? (
          <div className={`${carouselStyles.arrow} ${carouselStyles.left}`}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              onClick={() => setCurrIndex(curr => curr - 1)}
            />
          </div>
        ) : null}

        {currIndex < 5 ? (
          <div className={`${carouselStyles.arrow} ${carouselStyles.right}`}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={() => setCurrIndex(curr => curr + 1)}
            />
          </div>
        ) : null}
        <div className={carouselStyles.carousel}>
          <div
            className={carouselStyles.slider}
            style={{
              left: cardSize * -currIndex,
            }}
          >
            {items.map(json => (
              <Video
                key={json.url}
                title={json.title}
                thumbnail={json.thumb}
                url={json.url}
                views={json.views}
                length={json.length}
                date={json.uploadDate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
