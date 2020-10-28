import React, { useState } from "react"
import headerStyles from "./header.module.scss"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ButtonLink from "../ButtonLink"

const Header = () => {
  const [open, setOpen] = useState(true)

  return (
    <div>
      <a
        className={headerStyles.openMenuButton}
        onClick={() => setOpen(prev => !prev)}
      >
        <FontAwesomeIcon icon={"hamburger"} />
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
            <li>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                className={headerStyles.navItem}
                url={"../../#home"}
                text={"Home"}
                icon={"home"}
              />
            </li>

            <li>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                className={headerStyles.navItem}
                url={"../../#about"}
                text={"About"}
                icon={"user-astronaut"}
              />
            </li>

            <li>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                className={headerStyles.navItem}
                url={"../../#projects"}
                text={"My Work"}
                icon={"eye"}
              />
            </li>

            <li>
              <ButtonLink
                activeClassName={headerStyles.activeNavItem}
                className={headerStyles.navItem}
                url={"../../contact"}
                text={"Contact Me!"}
                icon={"envelope-open-text"}
              />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
