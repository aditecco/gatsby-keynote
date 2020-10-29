/* ---------------------------------
DeckTitle
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
import { IFrontmatter, IGatsbyInjectedProps } from "../../types"
// import logo from ""
import "./DeckTitle.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function DeckTitle({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: { frontmatter },
  } = node

  return (
    <Slide title="DeckTitle">
      <div className="content">
        <header>
          <h4 className="deck-title-author">
            {(frontmatter as IFrontmatter).author}
          </h4>
          <h1 className="deck-title-heading">
            {(frontmatter as IFrontmatter).title}
          </h1>
        </header>

        <footer className="deck-title-footer">
          <span className="deck-title-timestamp">
            {(frontmatter as IFrontmatter).timestamp}
          </span>

          <small className="deck-title-copyright-info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
            vitae dui. Nulla id libero nec eros pretium facilisis. Donec nulla
            ipsum, elementum vitae, cursus vitae, accumsan sed, ligula.
            Curabitur metus dolor, euismod sed, vehicula nec, vestibulum
            sitLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
            vitae dui. Nulla id libero nec eros pretium facilisis.
          </small>
        </footer>
      </div>

      <div className="content">
        <img src={""} alt="" className="deck-title-logo" />
      </div>
    </Slide>
  )
}
