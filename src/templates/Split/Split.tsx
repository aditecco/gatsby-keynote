/* ---------------------------------
Split
--------------------------------- */

import React, { ReactElement, useEffect } from "react"
// import "./Slide.scss"
import { Link } from "gatsby"
import Slide from "../../components/Slide/Slide"

interface IOwnProps {}

interface IGatsbyProps {
  pageContext: {
    node: {
      childMarkdownRemark: {
        id: string
        html: string
        frontmatter: {
          deck: string
          title: string
          order: number
          template: string
        }
      }
    }
  }
}

type TProps = IOwnProps & IGatsbyProps

export default function Split({
  pageContext: { node },
}: TProps): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title, template },
    },
  } = node

  return (
    <Slide title="Split">
      <div className="half">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
        />
      </div>

      <div className="half">
        <div className="content">
          {node.childMarkdownRemark.frontmatter.title}
        </div>
      </div>
    </Slide>
  )
}
