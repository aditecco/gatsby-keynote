/* ---------------------------------
SlideHeader
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import { ISettings } from "../../types"
import "./SlideHeader.scss"

interface IOwnProps {}

export default function SlideHeader({}: IOwnProps): ReactElement {
  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Link to="/">
      <header className="SlideHeader">
        <img src={settings?.["main-logo"]} alt="main-logo" />

        <h6>{settings?.["deck-title"]}</h6>
      </header>
    </Link>
  )
}
