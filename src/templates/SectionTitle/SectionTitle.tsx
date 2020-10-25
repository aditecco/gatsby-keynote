/* ---------------------------------
SectionTitle
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
// import logo from ""
import { IFrontmatter, IGatsbyInjectedProps } from "../../types"
import "./SectionTitle.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function SectionTitle({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: { frontmatter },
  } = node

  return (
    <Slide title="SectionTitle">
      <div className="content">
        <header className="slide-header">
          <img src={""} alt="" />
          <h6>{(frontmatter as IFrontmatter).deck}</h6>
        </header>

        <div
          className="slide-title injectedContent"
          dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
        />
      </div>
    </Slide>
  )
}
