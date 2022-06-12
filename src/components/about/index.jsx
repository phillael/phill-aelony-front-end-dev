import React from "react";
import aboutStyles from "./about.module.scss";
import Image from "../img";

export default function About() {
  return (
    <section id="about" className={aboutStyles.about}>
      <div className={aboutStyles.aboutContainer}>
        <figure>
          <Image
            className={aboutStyles.peppers}
            src="https://phillip-aelony.imgix.net/images/PhillMakingHotSauce.png?auto=format"
            alt="Phill Aelony Making a Thai hot sauce from scratch."
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
              Heya! <span className={aboutStyles.myName}>I'm Phill</span> - The
              greatest web developer to ever live in the last 437 years.{" "}
            </strong>{" "}
            Currently a contractor at Microsoft doing front end development on{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://azure.microsoft.com/en-us/"
            >
              Microsoft Azure
            </a>
            . It's fun work that involves building and updating new product
            pages with tech such as JavaScript, C#, HTML, CSS, Git, and ASP.NET
            Core MVC to name a few. In my free time I love to make games, and
            fun/interactive web apps. My experience at Microsoft has been
            amazing and I have learned so much! My contract ends in September
            2022 so I'm starting to search for my next role! You can download my
            resume or get my email from the{" "}
            <a className={aboutStyles.aboutLink} href="../contact">
              contact page
            </a>
            !
          </p>

          <p>
            I started learning programming in 2018 when I was enrolled in a
            course at{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://school.videogameaudio.com/apply/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The School of Video Game Audio
            </a>
            . Working with the Unity game engine required me to learn a bit of
            C# to integrate my music and sounds into a 3d environment in an
            interactive way. I became fascinated with the power of programming
            and was instantly hooked. I completed several bootcamps in full
            stack web development, JavaScript, React, TypeScript and responsive
            web design. I began to build web apps on my own and seek help from
            more experienced developers. With the guidance of my mentors{" "}
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
            I was able to make leaps and bounds in my understanding of web
            development and computer science.
          </p>

          <p>
            Before that I was a full time guitarist, composer, and teacher. I
            have produced several albums of my own original music, and am
            currently composing music for an amazing game called{" "}
            <a
              className={aboutStyles.aboutLink}
              href="https://play.eco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ECO
            </a>
            . As a guitarist I have performed in some of the finest venues
            around the world. Places like The Blue Note Tokyo, the North Sea
            Jazz club in Amsterdam, and the Java Jazz Festival in Jakarta. As a
            musician I developed many skills that make me an excellent
            programmer - problem solving, focus, understanding of how to learn
            and practice something effectively, the ability to improvise and
            learn quickly, entrepreneurship, leadership, marketing, planning,
            logistics, graphic design, performing under pressure, meeting
            deadlines, and most importantly teamwork.
          </p>

          <p>
            When I'm not programming I love to study flamenco guitar, travel,
            cook, exercise, and go on adventures with my dog.
          </p>

          <section className={aboutStyles.mySkills}>
            <h2 className={aboutStyles.skillsTitle}>My Skills</h2>
            <ul className={aboutStyles.skillsList}>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>C#</li>
              <li>Node.js</li>
              <li>Git/Github</li>
              <li>Gatsby.js</li>
              <li>TypeScript</li>
              <li>Azure/AWS</li>
              <li>.NET</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Agile</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
