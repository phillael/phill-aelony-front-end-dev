import React, { useEffect } from "react"
import Layout from "../../components/layout"
import Carousel from "../../components/carousel"
import projectPageStyles from "../projectPage.module.scss"
import Head from "../../components/head"
import data from "../../data/videos.json"
import Prism from "prismjs"
import ProjectNav from "../../components/projectNav"

import { videoSnippet, carouselSnippet, cssSnippet } from "./snippets"

const CarouselPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout
      pageBackground="#181818"
      footerBackground="#181818"
      hamburgerColor="white"
    >
      <Head title="React Carousel Component" />
      <ProjectNav />

      <main className={projectPageStyles.carouselPageContainer}>
        <h1 className={projectPageStyles.projectTitle}>
          React Carousel Component
        </h1>

        <Carousel className={projectPageStyles.carousel} items={data.videos} />

        <article className={projectPageStyles.projectContent}>
          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <h3>This is my recreation of a YouTube style carousel.</h3>
              <p>
                My goal here was to find an interesting React component that
                everyone is familiar with and see if I could build it myself by
                picking it apart. I learned a ton about structuring components,
                conditional rendering, managing state and CSS by doing this.{" "}
              </p>
              <p>
                The first step in building this was to create individual video
                "card" components. Each card has an image, and several pieces of
                information about the video. I split card component into "top"
                and "bottom" components to keep the code more organized.
              </p>
              <p>
                Then props are passed to the video card from the carousel
                component to dynamically render each card.
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-jsx">{videoSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  The useState hook is used to manage the position of the slider
                  within the carousel div.
                </strong>{" "}
                The arrow buttons have an onClick function to setCurrIndex + or
                - 1 depending on the direction.
              </p>
              <p>
                The arrows are conditionally rendered depending on the state of
                the current index. However when the screen size gets smaller
                there are only one or two videos displayed within the carousel.
                So my next step is to find a way to accomodate the conditional
                rendering of the arrows so that you can still scroll through all
                the videos at a smaller screen size.
              </p>

              <p>
                Inline styling is used to change the position of the slider div
                within the carousel. Each video card has the same width, and the
                slider has position: absolute. So All we need to do is set style
                = left: cardSize * -currIndex.
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-jsx">{carouselSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  The smooth sliding motion of the carousel is all done with
                  CSS.
                </strong>{" "}
                The carousel sits inside of an arrow container so that the
                arrows can sit on top of the carousel and stick out a bit.
              </p>
              <p>
                The outer carousel div is set to overflow: hidden so that the
                slider div can move inside of it. The slider is positioned
                absolute. It moves when the the left property is set by
                multiplying the cardSize * -currIndex. The smooth motion is
                simply a css transition set to 250ms.{" "}
              </p>

              <p>
                The carousel is responsive to screen size and will reduce the
                number of videos displayed as the screen gets smaller. This is
                done by changing the width of the carousel div with media
                queries.{" "}
              </p>
            </div>
            <pre className={projectPageStyles.code}>
              <code className="language-css">{cssSnippet}</code>
            </pre>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default CarouselPage
