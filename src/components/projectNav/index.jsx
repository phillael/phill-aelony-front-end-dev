import React from "react"
import projectNavStyles from "./projectNav.module.scss"
import { Link } from "gatsby"

export default function ProjectNav() {
  return (
    <div className={projectNavStyles.sideContainer}>
      <nav className={projectNavStyles.nav}>
        <h3 className={projectNavStyles.title}>
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h3>
        <ul className={projectNavStyles.navList}>
          <li>
            <Link
              activeClassName={projectNavStyles.activeNavItem}
              className={projectNavStyles.navLink}
              to="../../carousel-component"
            >
              React Carousel Component
            </Link>
          </li>
          <li>
            {" "}
            <Link
              activeClassName={projectNavStyles.activeNavItem}
              className={projectNavStyles.navLink}
              to="../../ip-address-tracker"
            >
              IP Address Tracker
            </Link>
          </li>
          <li>
            {" "}
            <Link
              activeClassName={projectNavStyles.activeNavItem}
              className={projectNavStyles.navLink}
              to="../../pong"
            >
              Alpaca Pong
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
