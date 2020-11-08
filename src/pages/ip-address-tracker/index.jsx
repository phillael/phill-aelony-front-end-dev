import React, { useEffect } from "react"
import Layout from "../../components/layout"
import projectPageStyles from "../projectPage.module.scss"
import Head from "../../components/head"
import Prism from "prismjs"
import ProjectNav from "../../components/projectNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { mapSnippet, locationSnippet, fetchSnippet } from "./snippets"

const IpAddressTracker = () => {
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
      <Head title="IP address Tracker" />
      <ProjectNav />

      <main className={projectPageStyles.carouselPageContainer}>
        <h1 className={projectPageStyles.projectTitle}>IP Address tracker</h1>

        <div className={projectPageStyles.iframeContainer}>
          <iframe
            title="IP Address Tracker"
            src="https://phillael.github.io/IP-address-tracker/"
          ></iframe>
          <a
            href="https://github.com/phillael/IP-address-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${projectPageStyles.ipGithub} ${projectPageStyles.githubLink}`}
              icon={faGithub}
            />
          </a>
        </div>

        <article className={projectPageStyles.projectContent}>
          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <h3>
                {" "}
                This is my solution to a design challenge from
                <a
                  href="https://www.frontendmentor.io/challenges"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  frontendmentor.io
                </a>
                .
              </h3>
              <p>
                <strong>
                  You can give it a try by typing in{" "}
                  <a
                    href="https://whatismyipaddress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    your own IP address {""}
                  </a>
                  or a domain name.{" "}
                </strong>
                The goal here was to create this app using only a picture of the
                design as a reference. This app uses the{" "}
                <a
                  href="https://geo.ipify.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IP Geolocation API
                </a>{" "}
                by IPify, and{" "}
                <a
                  href="https://leafletjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeafletJS
                </a>{" "}
                to generate the map. Solving this challenge was a great way to
                practice getting two APIs to work together and get a better
                understanding of JavaScript fecth vs async await.
              </p>
              <p>
                The first step was to design for mobile first and get the
                necesarry HTML and CSS in place. Then get the map to render on
                the page. the initMap function is triggered as soon as the DOM
                content is loaded.
              </p>
              <p>
                There is an event listener on the on the button so that triggers
                the search function, sending the user input to the Geolocation
                API.
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{mapSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  Because JavaScript is a prototype-based language it made sense
                  to build a location prototype.
                </strong>{" "}
                This way I could add methods to it in order to organize the data
                coming in from the GeoLocation API, and plug it into LeafletJS.
              </p>
              <p>
                Location.prototype.fromJson allows us to create a new Location
                from the json data recieved. The locationString method formats
                the location with city, state, and zip as shown on the design
                example.
              </p>

              <p>
                finally the addMarker method does two things. It repositions the
                map by passing the latitude and longitude into map.setView. The
                marker is created and labled by calling
                .bindPopup(this.locationString).
              </p>
            </div>

            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{locationSnippet}</code>
            </pre>
          </section>

          <section className={projectPageStyles.snippet}>
            <div className={projectPageStyles.description}>
              <p>
                <strong>
                  The async search function takes the user input and sends a
                  request to the GeoLocation API.
                </strong>{" "}
                The type of search needs to be specified in the query. To
                determine if the user is looking for a domain name, I created a
                variable called searchType which checks if the first character
                is a NaN (not a number). If it is a number, the searchType will
                be "ipaddress". Otherwise it will be "domain."
              </p>
              <p>
                Because search is an async function it will return a promise.
                This means that function execution pauses as it waits for const
                response, and const json to resolve. A new Location is then
                created with the json data. A marker is placed on the map and
                the displayResults function is called.
              </p>

              <p>
                Since this is a simple app that only uses two APIs it was not
                totally necesary to use async await. The code that is commented
                out uses the fetch method to deal with response, which makes
                more sense to use in this case.
              </p>
            </div>
            <pre className={projectPageStyles.code}>
              <code className="language-javascript">{fetchSnippet}</code>
            </pre>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default IpAddressTracker
