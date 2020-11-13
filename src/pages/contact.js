import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Contact from "../components/contact"

const ContactPage = () => {
  return (
    <Layout>
      <Head
        title="Contact Me | Phill Aelony Resume"
        description="Here you can email Phill Aelony or download his resume!"
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
