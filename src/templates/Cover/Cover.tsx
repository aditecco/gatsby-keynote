/* ---------------------------------
Cover
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement, useContext } from "react"
import { IGatsbyInjectedProps, ISettings } from "../../types"
import Slide from "../../layouts/Slide/Slide"
import "./Cover.scss"
import { SettingsContext } from "../../layouts/Layout"

interface OwnProps {
  logo: string
  withMenu?: boolean
}

type Props = OwnProps & IGatsbyInjectedProps

export default function Cover({ logo, withMenu }: Props): ReactElement {
  const [settings] = useContext(SettingsContext)

  return (
    <Slide
      title="Cover"
      style={{
        background: `linear-gradient(45deg, ${
          (settings as ISettings)["accent-primary"]
        }, ${(settings as ISettings)["accent-secondary"]})`,
      }}
    >
      <img src={logo} alt="" width="300" />

      <h1
        style={{
          fontFamily: "Helvetica, sans-serif",
          fontSize: 160,
          fontWeight: 300,
          color: "whitesmoke",
        }}
      >
        Cover
      </h1>

      {withMenu && (
        <nav className="settings-menu">
          <Link to="/settings">
            <i className="material-icons">settings</i>
            Settings
          </Link>
        </nav>
      )}
    </Slide>
  )
}
