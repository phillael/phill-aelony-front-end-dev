import React from "react"
import Header from "../header"
import Footer from "../footer"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import Chatbot from "../chatbot"

export default function Layout(props) {
  const layoutStyle = {
    backgroundColor: props.pageBackground,
  }

  return (
    <div className={layoutStyles.container} style={layoutStyle}>
      <div className={layoutStyles.content}>
        <Header hamburgerColor={props.hamburgerColor} />
        {props.children}
      </div>
      <Chatbot />
      <Footer footerBackground={props.footerBackground} />
    </div>
  )
}
