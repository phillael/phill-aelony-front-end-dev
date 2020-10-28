import React from "react"
import { Link } from "gatsby"
import cardStyles from "./projectCard.module.scss"

export default function ProjectCard({ title, date, thumbnail, link }) {
  return (
    <div className={cardStyles.card}>
      <Link to={link}>
        <img className={cardStyles.cardImage} src={thumbnail} alt="" />

        <div className={cardStyles.info}>
          <h3 className={cardStyles.projectTitle}>{title}</h3>
          <p className={cardStyles.date}>{date}</p>
        </div>
      </Link>
    </div>
  )
}
