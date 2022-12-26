import React from "react";
import projectsStyles from "./projects.module.scss";
import ProjectCard from "../projectCard";
import data from "../../data/projects.json";

const Projects = ({ standAlone = false }) => {
  const posts = data.projects;
  const title = "Check out my work";

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
            <strong>These projects are OLD!</strong> They are some of the first
            things I made while learning how to code and do not reflect my
            current experience. Actually Alpaca Pong is still pretty awesome
            even though the code is janky. I will be updating these in{" "}
            <strong>January 2023!</strong>
          </p>
        </div>

        <ul className={projectsStyles.posts}>
          {posts.map((post) => {
            return (
              <ProjectCard
                alt={post.alt}
                title={post.title}
                date={post.date}
                thumbnail={post.thumbnail}
                link={post.url}
                description={post.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
