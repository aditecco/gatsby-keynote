/* ---------------------------------
Blank
--------------------------------- */

import React, { ReactElement, useEffect } from "react"
// import "./Blank.scss"
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

export default function Blank({
  pageContext: { node },
}: TProps): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title },
    },
  } = node

  return <Slide title="Blank">{title}</Slide>
}
