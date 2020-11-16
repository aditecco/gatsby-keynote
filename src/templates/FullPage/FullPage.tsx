/* ---------------------------------
FullPage
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
import { IGatsbyInjectedContext, ISettings } from "../../types"
// import logo from ""
import "./FullPage.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function FullPage({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { deck, title, template, order },
    },
  } = node

  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide
      title="FullPage"
      style={{
        background: `
      linear-gradient(
        to right,
        ${settings?.["accent-primary"]},
        ${settings?.["accent-secondary"]})
    `,
      }}
    >
      <div className="content">
        <header className="slide-header">
          <img src={settings?.["main-logo"]} alt="main-logo" />

          <h6>{deck}</h6>
        </header>

        <div
          className="slide-title injectedContent"
          dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
        />

        {/* TODO remove */}
        <footer className="slide-footer"></footer>
      </div>
    </Slide>
  )
}
