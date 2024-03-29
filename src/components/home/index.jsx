import React from "react";
import homeStyles from "./home.module.scss";
import SocialLinks from "../socialLinks";
import ParticleEngineComponent from "../particleEngine";
import Image from "../img";

export default function Home() {
  return (
    <main className={homeStyles.main} id="home">
      <ParticleEngineComponent />
      <div className={homeStyles.socialLinks}>
        <SocialLinks color="green" />
      </div>

      <div className={homeStyles.waves}>
        <svg
          className={homeStyles.svg}
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            className={homeStyles.path}
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          >
            {" "}
          </path>
        </svg>
      </div>

      <div className={homeStyles.homeContainer}>
        <h1 className={homeStyles.intro}>
          <span className={homeStyles.hiThere}>Hi there, </span>
          <span className={homeStyles.phill}>I'm Phill</span>
          <span className={homeStyles.period}>.</span> <br />
          <span className={homeStyles.front}>Frontend</span>{" "}
          <span className={homeStyles.developer}>
            Developer<span className={homeStyles.comma}>,</span>
          </span>{" "}
          <br />
          <span className={homeStyles.guitarist}>Guitarist,</span>{" "}
          <span className={homeStyles.composer}>and Composer.</span>
        </h1>
        <Image
          className={homeStyles.llamas}
          src="https://phillip-aelony.imgix.net/images/phill_llamas_transparent.png?auto=format"
          alt="Phill Aelony with his llama friends on the top of Mt. Teleferico outside of Quito, Ecuador. This photo is from January 2020."
        />
      </div>
    </main>
  );
}
