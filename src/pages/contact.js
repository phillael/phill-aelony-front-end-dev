import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Contact from "../components/contact"

const ContactPage = () => {
  return (
    <Layout>
      <Head
        title="Contact Me | Phill Aelony Resume"
        description="Phill Aelony Portfolio | Here you can download my resume or send me an email. "
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
