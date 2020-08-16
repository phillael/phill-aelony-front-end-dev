import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Phill Aelony</h1>
      <h4>
        Phill is the greatest guitarist, chef, and programmer alive and he has
        powerful calf muscles.
      </h4>
      <p>
        You want contact me? GO <Link to="/contact">HERE</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
