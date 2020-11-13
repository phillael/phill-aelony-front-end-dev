import React from "react"
import projectsStyles from "./projects.module.scss"
import ProjectCard from "../projectCard"
import data from "../../data/projects.json"

const Projects = ({ standAlone = false }) => {
  const posts = data.projects
  const title = "Check out my work"

  return (
    <section id="projects" className={projectsStyles.projects}>
      <div className={projectsStyles.projectsContainer}>
        <div className={projectsStyles.aboutProjects}>
          {" "}
          {standAlone ? (
            <h1 className={projectsStyles.projectsTitle}>{title}</h1>
          ) : (
            <h2 className={projectsStyles.projectsTitle}>{title}</h2>
          )}
          <p>
            Here you can see some things I've built and take a look at the code.
            Give me a shout if you have any questions or suggestions!
          </p>
        </div>

        <ul className={projectsStyles.posts}>
          {posts.map(post => {
            return (
              <ProjectCard
                title={post.title}
                date={post.date}
                thumbnail={post.thumbnail}
                link={post.url}
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
