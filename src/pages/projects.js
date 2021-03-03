import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects"

export default function ProjectsPage() {
  return (
    <Layout>
      <Head title="Phill Aelony Web Developer Portfolio | See my apps built with Javascript, React, HTML, and CSS. Here You can look through some of my recent projects and see snippets of my code. I will walk you through the process of how I built each app." />
      <Projects standAlone />
    </Layout>
  )
}
