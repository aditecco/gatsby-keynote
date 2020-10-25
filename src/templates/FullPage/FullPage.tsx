/* ---------------------------------
FullPage
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
import { IGatsbyInjectedProps } from "../../types"
// import logo from ""
import "./FullPage.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function FullPage({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { deck, title, template, order },
    },
  } = node

  return (
    <Slide title="FullPage">
      <div className="content">
        <header className="slide-header">
          <img src={""} alt="" />
          <h6>{deck}</h6>
        </header>

        <div
          className="slide-title injectedContent"
          dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
        />

        <footer className="slide-footer">
          <span className="slideNumber">{order}</span>
        </footer>
      </div>
    </Slide>
  )
}
