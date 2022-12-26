import React from "react";
import contactStyles from "./contact.module.scss";
import Image from "../img";

export default function Contact() {
  return (
    <div className={contactStyles.contactPage}>
      <Image
        className={contactStyles.llama}
        src="https://phillip-aelony.imgix.net/images/space_llama.png"
        alt="Phill Aelony Photoshop art - Llama in space suit eating ice cream cone."
      />
      <div className={contactStyles.contactContainer}>
        <h1 className={contactStyles.title}>Contact Phill!</h1>
        <h4 className={contactStyles.message}>
          Take a look at my resume and feel free to reach out via telepathy. If
          I don't respond right away, you can try email.
        </h4>
        <div className={contactStyles.contactMethods}>
          <a href="mailto:phillael@yahoo.com" className={contactStyles.email}>
            <img
              className={contactStyles.img}
              src="/images/email.png"
              alt="Contact Phill Aelony via email"
            />
            <h2 className={contactStyles.type}>Email</h2>
          </a>
          <a
            href="/images/phill-aelony-resume.pdf"
            className={contactStyles.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/resume.png?auto=format"
              alt="Download Phill Aelony's resume."
            />
            <h2>Download Resume</h2>
          </a>
        </div>
        <div className={contactStyles.socialLinks}></div>
      </div>
    </div>
  );
}
