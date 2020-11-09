import React from "react"
import aboutStyles from "./about.module.scss"

export default function About() {
  return (
    <section id="about" className={aboutStyles.about}>
      <div className={aboutStyles.aboutContainer}>
        <figure>
          <img
            className={aboutStyles.peppers}
            src="/images/PhillMakingHotSauce.png"
            alt="Phill making hot sauce"
          />
          <figcaption>
            <p>
              I make my own Sri Racha (Thai style hot sauce) by fermenting red
              jalapenos and garlic.
            </p>
          </figcaption>
        </figure>

        <div className={aboutStyles.aboutContent}>
          <h2 className={aboutStyles.aboutTitle}>The Legend of Phill Aelony</h2>
          <p>
            <strong>
              {" "}
              Heya! <span className={aboutStyles.myName}>I'm Phill!</span> I'm a
              developer from Dallas, TX.{" "}
            </strong>{" "}
            I love to build things with JavaScript, React, and CSS to name a
            few. I'm currently available for freelance or long term work.
          </p>
          <p>
            For the last 15 years I have been a guitarist, composer and band
            leader. I have produced several albums of my own original music,
            composed a score for{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://play.eco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              the award winning video game ECO
            </a>
            , and performed in some of the finest venues around the world. As a
            musician I developed many skills that make me an excellent
            programmer - creativity, focus, the ability to improvise and learn
            quickly, entrepreneurship, leadership, marketing, planning,
            logistics, graphic design, performing under pressure, meeting
            deadlines, and most importantly teamwork.
          </p>

          <p>
            I began learning Python in 2018 while studying interactive
            music/sound design at{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://school.videogameaudio.com/apply/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The School of Video Game Audio
            </a>
            . I became fascinated with the power of programming and was
            instantly hooked. After completing several bootcamps for JavaScript,
            React, and responsive web design I began to build things on my own
            and seek help from more experienced developers. With the guidance of
            my mentors{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://devmentor.live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mark at devmentorlive
            </a>
            , and the great{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://ianmarshall.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ian Marshall
            </a>{" "}
            I have been able to make leaps and bounds in my understanding of web
            development and computer science. Along the way I have built a
            network of experienced programmers/friends that I continue to learn
            from.
          </p>

          <p>
            When I'm not programming I love to study flamenco guitar, travel,
            cook, and go on adventures with my dog.
          </p>

          <section className={aboutStyles.mySkills}>
            <h2 className={aboutStyles.skillsTitle}>My Skills</h2>
            <ul className={aboutStyles.skillsList}>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>SASS</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>Gatsby.js</li>
              <li>Python</li>
              <li>AWS Cloud Practitioner</li>
              <li>Adobe Photoshop</li>
              <li>Premiere</li>
              <li>Illustrator</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
