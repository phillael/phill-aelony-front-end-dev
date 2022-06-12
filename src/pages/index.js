import React from "react";
import Layout from "../components/layout";
import Home from "../components/home";
import Head from "../components/head";
import About from "../components/about";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <Layout>
      <Head description="Phill Aelony Web Developer Portfolio. Phill Aelony is a web developer living in Dallas, Texas. He is highly skilled in Javascript, React, HTML, and CSS. Here you can contact or hire Phill Aelony to build websites and apps. This page contains react components built from scratch by Phill Aelony." />

      <Home />
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
