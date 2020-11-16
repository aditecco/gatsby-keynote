/* ---------------------------------
Split
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
// import logo from ""
import { IGatsbyInjectedContext, ISettings } from "../../types"
import "./Split.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function Split({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { deck, title, order },
    },
  } = node

  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide title="Split">
      <div className="content">
        <header className="slide-header">
          <img src={settings?.["main-logo"]} alt="main-logo" />

          <h6>{deck}</h6>
        </header>

        <h3 className="slide-title">{title}</h3>

        {/* TODO remove */}
        <footer className="slide-footer"></footer>
      </div>

      <div
        className="content injectedContent"
        style={{
          background: `linear-gradient(45deg, ${settings?.["accent-primary"]}, ${settings?.["accent-secondary"]})`,
        }}
        dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
      />
    </Slide>
  )
}
