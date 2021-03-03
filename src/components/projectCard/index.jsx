import React from "react"
import { Link } from "gatsby"
import cardStyles from "./projectCard.module.scss"

export default function ProjectCard({
  alt,
  title,
  date,
  thumbnail,
  link,
  description,
}) {
  return (
    <div className={cardStyles.card}>
      <h3 className={cardStyles.projectTitle}>{title}</h3>
      <Link className={cardStyles.projectLink} to={link}>
        <img className={cardStyles.cardImage} src={thumbnail} alt={alt} />
        <div className={cardStyles.info}>
          <p className={cardStyles.description}>{description}</p>
          <p className={cardStyles.date}>{date}</p>
        </div>
      </Link>
    </div>
  )
}
