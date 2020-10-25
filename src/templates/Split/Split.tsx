/* ---------------------------------
Split
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
// import logo from ""
import { IGatsbyInjectedProps } from "../../types"
import "./Split.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function Split({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { deck, title, template, order },
    },
  } = node

  return (
    <Slide title="Split">
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

      <div
        className="content injectedContent"
        dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
      />
    </Slide>
  )
}
