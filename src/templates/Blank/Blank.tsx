/* ---------------------------------
Blank
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
// import logo from "../../../static/"
import { IGatsbyInjectedContext } from "../../types"
import "./Blank.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function Blank({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      html,
      frontmatter: { deck, title, template, order },
    },
  } = node

  return (
    <Slide title="Blank">
      <div className="content">
        <header className="slide-header">
          <img src={""} alt="" />
          <h6>{deck}</h6>
        </header>

        <h3 className="slide-title">{title}</h3>

        <footer className="slide-footer">
          <span className="slideNumber">{order}</span>
        </footer>
      </div>

      {html && (
        <div
          className="injectedContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </Slide>
  )
}
