/* ---------------------------------
Blank
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
// import logo from "../../../static/"
import { IGatsbyInjectedContext, ISettings } from "../../types"
import "./Blank.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedContext

export default function Blank({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      html,
      frontmatter: { deck, title, template, order },
    },
  } = node

  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide title="Blank">
      <div className="content">
        <h3 className="slide-title">{title}</h3>
      </div>

      <div className="content">
        {html && (
          <div
            className="injectedContent"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </Slide>
  )
}
