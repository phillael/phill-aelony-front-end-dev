import React from "react"
import homeStyles from "./home.module.scss"
import SocialLinks from "../socialLinks"
import ParticleEngineComponent from "../particleEngine"

export default function Home() {
  return (
    <main id="home">
      <ParticleEngineComponent />
      <div className={homeStyles.socialLinks}>
        <SocialLinks color="green" />
      </div>
      <div className={homeStyles.homeContainer}>
        <h1 className={homeStyles.intro}>
          <span className={homeStyles.hiThere}>Hi there,</span>{" "}
          <span className={homeStyles.phill}>I'm Phill</span>
          <span className={homeStyles.period}>.</span> <br />
          <span className={homeStyles.front}>Front</span>{" "}
          <span className={homeStyles.end}>End</span>{" "}
          <span className={homeStyles.developer}>
            Developer<span className={homeStyles.comma}>,</span>
          </span>{" "}
          <br />
          <span className={homeStyles.guitarist}>Guitarist,</span>{" "}
          <span className={homeStyles.composer}>and Composer.</span>
        </h1>
        <img
          className={homeStyles.llamas}
          src="../../images/phill_llamas_transparent.png"
          alt="phill with llamas in Ecuador"
        />
      </div>
    </main>
  )
}
