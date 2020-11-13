import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects"

export default function ProjectsPage() {
  return (
    <Layout>
      <Head title="Things I have built" />
      <Projects standAlone />
    </Layout>
  )
}
