export const videoSnippet = `{items.map(json => (
    <Video
      key={json.url}
      title={json.title}
      thumbnail={json.thumb}
      url={json.url}
      views={json.views}
      length={json.length}
      date={json.uploadDate}
    />
  ))}`

export const carouselSnippet = `export default function Carousel({ items }) {
  const [currIndex, setCurrIndex] = useState(0)
  const cardSize = 344

  return (
    <section className={carouselStyles.carouselPageContainer}>
      <div className={carouselStyles.arrowContainer}>
        {currIndex > 0 ? (
          <div>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              onClick={() => setCurrIndex(curr => curr - 1)}
            />
          </div>
        ) : null}
        {currIndex < 5 ? (
          <div>
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
        `

export const cssSnippet = `.arrowContainer {
  position: relative;
  width: 1032px;
  margin-top: 75px;
}

.arrow {
  position: absolute;
  top: 25%;
  font-size: 2.2rem;
  z-index: 1;
  color: rgb(207, 207, 207);
  filter: drop-shadow(1px 2px 3px rgb(56, 54, 54));
  cursor: pointer;
}

.arrow:hover {
  color: white;
}

.left {
  left: -20px;
}
.right {
  right: -20px;
}

.carousel {
  position: relative;
  width: 1032px;
  height: 315px;
  box-sizing: border-box;
  overflow: hidden;
}

.slider {
  position: absolute;
  transition: all 250ms;
  display: flex;
}

@media (max-width: 1400px) {
  .carousel,
  .arrowContainer {
    width: 688px;
  }
}

@media (max-width: 900px) {
  .carousel,
  .arrowContainer {
    width: 344px;
  }

  .carouselPageContainer {
    margin: 0 auto;
  }
}`
