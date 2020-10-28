import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Head from "../components/head"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <Home />
      <About />
      <Projects />
    </Layout>
  )
}

export default IndexPage
