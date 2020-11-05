import React, { useEffect } from "react"
import Layout from "../components/layout"
import projectPageStyles from "./projectPage.module.scss"
import Head from "../components/head"
import Prism from "prismjs"
import ProjectNav from "../components/projectNav"

const code = `{items.map(json => (
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
      <Head title="Alpaca Pong" />
      <ProjectNav />

      <main className={projectPageStyles.carouselPageContainer}>
        <h1 className={projectPageStyles.projectTitle}>
          Pong Multiverse Alpaca Squadron
        </h1>

        <iframe
          title="Alpaca Pong"
          className={projectPageStyles.pong}
          src="https://phillael.github.io/Pong-Multiverse-Alpaca-Squadron/"
        ></iframe>
        <article className={projectPageStyles.projectContent}>
          <section className={projectPageStyles.snippet}>
            <p className={projectPageStyles.description}>
              <strong>
                This is Pong in space, with an alpaca holding a sword.{" "}
              </strong>
              The component breaks down into 4 smaller components and props are
              passed along from a data file to dynamically change the videos.
              The useState hook is used to manage the position of the carousel
              within the slider.
            </p>

            <pre className={projectPageStyles.code}>
              <code className="language-jsx">{code}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <p className={projectPageStyles.description}>
              The arrows are conditionally rendered depending on the current
              index so the user knows if they can scroll left or right.
            </p>

            <pre className={projectPageStyles.code}>
              <code className="language-jsx">{code}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <p className={projectPageStyles.description}>
              The arrows are conditionally rendered depending on the current
              index so the user knows if they can scroll left or right.
            </p>
            <pre className={projectPageStyles.code}>
              <code className="language-jsx">{code}</code>
            </pre>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default CarouselPage
