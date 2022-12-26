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
          <div className={aboutStyles.bioContent}>
            <p>
              <strong>
                {" "}
                Heya! <span className={aboutStyles.myName}>I'm Phill</span> . I
                am currently open to work...
                <a className={aboutStyles.aboutLink} href="../contact">
                  Holla!
                </a>{" "}
              </strong>{" "}
            </p>
            <p>
              <strong>Decemeber 2022 - </strong> I just finished a great run as
              software engineer at a startup called{" "}
              <strong>MIR Partners</strong>, working on a live music streaming
              platform called <strong>Sessions</strong>. I was working with{" "}
              <strong>Typescript</strong>, <strong>React Native</strong>, and{" "}
              <strong>Mobx State Tree</strong> to build new features to help up
              and coming artists generate more income. I collaborated with the
              backend team to design APIs, and implement a system of leveling,
              leagues, and tiers to gamify the process of growing as an artist.
              I worked with XCode and Android Studio to solve platform specific
              bugs. We were tasked with building a new app from scratch called{" "}
              <strong>Next Music</strong> with a 6 week timeline start to
              finish. My role was to implement a signup/login/password recovery
              system using <strong>React</strong>, <strong>Typescript</strong>,
              <strong>NextJS</strong>, <strong>ChakraUI</strong>, and{" "}
              <strong>MobX</strong>. I also implemented a flow for onboarding
              new artists, which involved writing custom React Hooks and
              leveraging MobX actions/views to keep components clean and simple.
            </p>
            <p>
              Before that I was a{" "}
              <strong>frontend developer at Microsoft</strong>, building and
              maintaining product pages for{" "}
              <a
                target="_blank"
                className={aboutStyles.aboutLink}
                href="https://azure.microsoft.com/en-us/"
              >
                Microsoft Azure
              </a>
              . I had to quickly learn my way around a massive{" "}
              <strong>.NET</strong> application, and work with{" "}
              <strong>C#</strong> and <strong>Razor Views</strong> to make
              business critical updates. My team was responsible for managing
              milestone branches for events such as{" "}
              <strong>Microsoft Build</strong>, and <strong>Ignite</strong>.
              This involved juggling dozens of projects with{" "}
              <strong>Azure DevOps</strong>, building pages from{" "}
              <strong>Figma</strong> wireframes, using <strong>git</strong>{" "}
              tools (e.g. git bisect, git cherry-pick, git rebase) to resolve
              merge conflicts between multiple teams, and making urgent
              hotfixes. I was also responsible for updating the Azure homepage
              every month - a page which has millions of visitors weekly and
              drives Azure's roughly $20 billion dollars in profit per quarter.
            </p>
            <p>
              Side note: I'm a legendary{" "}
              <strong>jazz guitarst and composer</strong>. I have played some of
              the finest venues in the world with{" "}
              <a
                target="_blank"
                href="https://www.thefunkyknuckles.com/"
                className={aboutStyles.aboutLink}
              >
                The Funky Knuckles
              </a>{" "}
              including the Blue Note Tokyo, The North Sea Jazz Club Amsterdamn,
              the Royal Opera House in Muscat, Oman, and The Java Jazz Festival
              in Jakarta. I have an ongoing project -{" "}
              <strong>Music Composer</strong> for the award winning video game{" "}
              <a
                className={aboutStyles.aboutLink}
                target="_blank"
                href="https://store.steampowered.com/app/382310/Eco/"
              >
                ECO
              </a>{" "}
              - by{" "}
              <a
                target="_blank"
                href="https://play.eco/team"
                className={aboutStyles.aboutLink}
              >
                Strange Loop Games
              </a>{" "}
              .
            </p>
          </div>

          <section className={aboutStyles.mySkills}>
            <h2 className={aboutStyles.skillsTitle}>🐐 Mad Skillz 🐐</h2>
            <ul className={aboutStyles.skillsList}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React/ReactNative</li>
              <li>MobX State Tree</li>
              <li>NextJS</li>
              <li>ChakraUI</li>
              <li>HTML & CSS</li>
              <li>NodeJS</li>
              <li>Git/Github</li>
              <li>GatsbyJS</li>
              <li>.NET</li>
              <li>C#</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
