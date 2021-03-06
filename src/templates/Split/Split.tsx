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
        <h3 className="slide-title">{title}</h3>
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
