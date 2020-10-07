/* ---------------------------------
Slide
--------------------------------- */

import React, { ReactElement } from "react"
// import "./Slide.scss"
import { Link } from "gatsby"

interface IOwnProps {}

interface IGatsbyProps {
  pageContext: {
    node: {
      childMarkdownRemark: {
        id: string
        html: string
        timeToRead: number
        excerpt: string
        frontmatter: {
          title: string
          subtitle: string
          language: string
          timestamp: string
          author: string
          tags: string[]
        }
      }
    }
  }
}

type TProps = IOwnProps & IGatsbyProps

export default function Slide({
  pageContext: { node },
}: TProps): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title },
    },
  } = node

  return title
}
