import React from "react"
import projectsStyles from "./projects.module.scss"
import ProjectCard from "../projectCard"
import data from "../../data/projects.json"

const Projects = () => {
  const posts = data.projects

  return (
    <section id="projects" className={projectsStyles.projects}>
      <div className={projectsStyles.projectsContainer}>
        <div className={projectsStyles.aboutProjects}>
          {" "}
          <h2 className={projectsStyles.projectsTitle}>
            What I've been working on
          </h2>
          <p>
            I've found that building things is the best way to learn. So here
            are a few projects that I've made to develop my skills in different
            areas{" "}
          </p>
        </div>

        <ul className={projectsStyles.posts}>
          {posts.map(post => {
            return (
              <ProjectCard
                title={post.title}
                date={post.date}
                thumbnail={post.thumbnail}
                link={`/${post.url}`}
                description={post.description}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
