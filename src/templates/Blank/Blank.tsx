/* ---------------------------------
Blank
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
import { IGatsbyInjectedProps } from "../../types"
import "./Blank.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function Blank({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title },
    },
  } = node

  return <Slide title="Blank">{title}</Slide>
}
