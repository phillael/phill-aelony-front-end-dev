import React from "react"
import aboutStyles from "./about.module.scss"

export default function About() {
  return (
    <section id="about" className={aboutStyles.about}>
      <div className={aboutStyles.aboutContainer}>
        <figure>
          <img
            className={aboutStyles.peppers}
            src="../../images/PhillMakingHotSauce.png"
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
          <h2 className={aboutStyles.aboutTitle}>The Legend of Phill</h2>
          <p>
            Heya! <span className={aboutStyles.myName}>I'm Phill!</span> I'm a
            developer living in Dallas, TX. My strengths are JavaScript, React,
            Node.js, and CSS to name a few.
          </p>
          <p>
            for the last 15 years I have been a guitarist, composer and band
            leader. I have put out many albums of my own original music,
            composed for an award winning video game, and played in some of the
            finest venues around the world. My dream is to make apps and
            software that can help musicians and artist work together and make a
            better living.
          </p>

          <p>
            I began learning progamming in 2018 as I was doing some composing
            and sound design for video games. I became fascinated with the power
            of programming and realized that I wanted to learn more. In 2019 I
            enrolled in a Python course, and it absolutely blew my mind. Once I
            finished that course I became addicted to solving coding
            challenges/puzzles on codewars.com and other similar sites. After a
            couple other fullstack web development bootcamps and over a year of
            studying with some great mentors, I am excited to start working and
            learning more.
          </p>

          <p>
            When I'm not programming I love to study flamenco guitar, travel,
            cook, and go on adventures with my dog!
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
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
