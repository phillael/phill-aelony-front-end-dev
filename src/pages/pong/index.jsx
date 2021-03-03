import React, { useEffect } from "react"
import Layout from "../../components/layout"
import projectPageStyles from "../../styles/projectPage.module.scss"
import Head from "../../components/head"
import Prism from "prismjs"
import ProjectNav from "../../components/projectNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import {
  gameFlowSnippet,
  stateSnippet,
  collisionSnippet,
} from "../../utils/snippets/pong-snippets"

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
      <Head
        title="Phill Aelony Projects | Alpaca Pong"
        description="Phill Aelony Portfolio | This is a recreation of Pong built by Phill Aelony using Javascript on an HTML5 canvas. This demonstrates my ability to program game physics and animations. Music and sound design by Phill Aelony."
      />
      <ProjectNav />

      <main className={projectPageStyles.carouselPageContainer}>
        <h1 className={projectPageStyles.projectTitle}>
          Pong Multiverse Alpaca Squadron
        </h1>

        <div className={projectPageStyles.iframeContainer}>
          <iframe
            title="Alpaca Pong"
            className={projectPageStyles.pong}
            src="https://phillael.github.io/Pong-Multiverse-Alpaca-Squadron/"
          ></iframe>
          <a
            href="https://github.com/phillael/Pong-Multiverse-Alpaca-Squadron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${projectPageStyles.pongGithub} ${projectPageStyles.githubLink}`}
              icon={faGithub}
            />
          </a>
          <p className={projectPageStyles.disclaimer}>
            This game isn't formatted for mobile yet! You can play with the
            arrow keys, return key, and spacebar. To view this in a seperate
            window{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://phillael.github.io/Pong-Multiverse-Alpaca-Squadron/"
            >
              <strong>click here</strong>
            </a>
            .
          </p>
        </div>
        <article className={projectPageStyles.projectContent}>
          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <h3>This is Pong in space with an alpaca holding a sword. </h3>
              <p>
                I learned more about programming by building this simple game
                than any other project I have worked on so far. The biggest
                challenges here were animations, managing state, and collision
                detection.
              </p>
              <p>
                The first step was to think about the big picture and what
                functions I would need to make the game move forward. The most
                important thing was having an "animation loop". The loop is a
                recursive function which means it is a function that calls
                itself, causing it to loop until something stops it.
              </p>

              <p>
                Inside of that loop all of the other functions to render and
                update the game get called. The requestAnimationFrame(loop)
                tells the browser to perform an animations and this is where we
                pass in the loop. Within every loop ctx.clearRect is called to
                clear the previously rendered frame from the canvas.
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{gameFlowSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  I wrote this code almost a year ago and I have learned a lot
                  since.{" "}
                </strong>
                The code here very procedural and I plan on cleaning it up and
                using data structures to make it more efficient. However writing
                the code this way really helped me understand the basics of
                managing state.
              </p>
              <p>
                The alpaca animations are made by using a "sprite sheet". The
                sheet is one image that contains all the different animations
                frames of the sprite. Different states such as left, right,
                attack, and idle are at different positions on the sheet. So
                when left=true the drawAlpaca() function will jump to the
                appropriate spot on the sprite sheet.
              </p>

              <p>
                There are keydown/keyup event listeners to manage the state of
                the direction and animations. Again the code is very procedural
                but illustrates my thought process when trying to figure out how
                to make this work.
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{stateSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  Making the ball collide with the player or paddle was one of
                  the biggest challenges here.{" "}
                </strong>
                The first step in the collision function was to check which side
                of the screen the ball is on. That way I could account for the
                different size and shape of the alpaca vs the paddle. The next
                step was to define the outer dimensions of the players, and the
                ball.
              </p>
              <p>
                Once the dimensions are defined, all thats needed is to return a
                boolean depending on if the ball dimensions cross with the
                player dimensions. So if collision(b, p) returns true we can
                call some other functions to make the ball behave appropriately.
              </p>

              <p>
                When the ball hits the ceiling or floor we simply invert the Y
                velocity by setting ball.velocityY = -ball.velocityY. I went to
                the extra trouble of changing the angle of the ball depending on
                which part of the paddle it hits. This is done by defining the
                collidePoint and using some basic trigonometry.
              </p>
            </div>
            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{collisionSnippet}</code>
            </pre>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default CarouselPage
