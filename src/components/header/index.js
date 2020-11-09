import React, { useState, useEffect } from "react"
import headerStyles from "./header.module.scss"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ButtonLink from "../ButtonLink"

const Header = ({ hamburgerColor }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(window.innerWidth > 800)
  }, [])

  return (
    <div>
      <a
        className={headerStyles.openMenuButton}
        onClick={() => setOpen(prev => !prev)}
      >
        <FontAwesomeIcon icon={"hamburger"} style={{ color: hamburgerColor }} />
      </a>

      <header
        className={`${headerStyles.header} ${open && headerStyles.openHeader}`}
      >
        <a
          className={headerStyles.closeMenuButton}
          onClick={() => setOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={"hotdog"} />
        </a>

        <h2 className={headerStyles.title}>
          <span>P</span>
          <span>H</span>
          <br />
          <span>I</span>
          <span>L</span>
          <span>L</span>
        </h2>

        <nav>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                url={"../../#home"}
                text={"Home"}
                icon={"home"}
                setOpen={setOpen}
              />
            </li>

            <li className={headerStyles.navItem}>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                url={"../../#about"}
                text={"About"}
                icon={"user-astronaut"}
                setOpen={setOpen}
              />
            </li>

            <li className={headerStyles.navItem}>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                url={"../../#projects"}
                text={"My Work"}
                icon={"eye"}
                setOpen={setOpen}
              />
            </li>

            <li className={headerStyles.navItem}>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                url={"../../contact"}
                text={"Contact Me!"}
                icon={"envelope-open-text"}
                setOpen={setOpen}
              />
            </li>
          </ul>
        </nav>
        <h3 className={headerStyles.fullName}>
          <span>P</span>
          <span>H</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>•</span>
          <span>A</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>N</span>
          <span>Y</span>
        </h3>
      </header>
    </div>
  )
}

export default Header
