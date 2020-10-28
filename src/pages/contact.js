import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <img
        className={contactStyles.llama}
        src="../../images/space_llama.png"
        alt="Llama in space suit eating ice cream cone"
      />
      <div className={contactStyles.contactContainer}>
        <h1 className={contactStyles.title}>Lets build something together</h1>
        <h4 className={contactStyles.message}>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </h4>
        <div className={contactStyles.contactMethods}>
          <a href="mailto:phillael@yahoo.com" className={contactStyles.email}>
            <img src="../../images/email.png" alt="email icon" />
            <h2>Email</h2>
          </a>
          <a
            href="../../images/PhillAelonyResume.pdf"
            className={contactStyles.resume}
          >
            <img src="../../images/resume.png" alt="download resume icon" />
            <h2>Download Resume</h2>
          </a>
        </div>
        <div className={contactStyles.socialLinks}></div>
      </div>
    </Layout>
  )
}

export default ContactPage
