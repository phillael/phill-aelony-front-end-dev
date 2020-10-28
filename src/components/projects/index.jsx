import React from "react"
import projectsStyles from "./projects.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "../projectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            picture {
              file {
                url
              }
            }
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.edges

  console.log(posts[0].node.picture.file.url)

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
                title={post.node.title}
                date={post.node.publishedDate}
                thumbnail={post.node.picture.file.url}
                link={`/blog/${post.node.slug}`}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
