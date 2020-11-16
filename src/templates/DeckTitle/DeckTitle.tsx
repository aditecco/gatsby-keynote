/* ---------------------------------
DeckTitle
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
import { IGatsbyInjectedContext, ISettings } from "../../types"
// import logo from ""
import "./DeckTitle.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function DeckTitle({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: { frontmatter },
  } = node

  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide title="DeckTitle">
      <div className="content">
        <header>
          <h4 className="deck-title-author">{frontmatter.author}</h4>
          <h1 className="deck-title-heading">{frontmatter.deck}</h1>
        </header>

        <footer className="deck-title-footer">
          <span className="deck-title-timestamp">{frontmatter.timestamp}</span>

          <small className="deck-title-copyright-info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
            vitae dui. Nulla id libero nec eros pretium facilisis. Donec nulla
            ipsum, elementum vitae, cursus vitae, accumsan sed, ligula.
          </small>
        </footer>
      </div>

      <div className="content"></div>
    </Slide>
  )
}
