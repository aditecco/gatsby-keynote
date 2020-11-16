/* ---------------------------------
SectionTitle
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
// import logo from ""
import { IFrontmatter, IGatsbyInjectedContext, ISettings } from "../../types"
import "./SectionTitle.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function SectionTitle({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: { frontmatter },
  } = node

  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide title="SectionTitle">
      <div className="content">
        <div
          className="slide-title injectedContent"
          dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
          style={{
            background: `
            linear-gradient(
              to right,
              ${settings?.["accent-primary"]},
              ${settings?.["accent-secondary"]})
          `,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </div>
    </Slide>
  )
}
