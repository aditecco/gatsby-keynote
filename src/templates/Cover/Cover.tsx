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

      {withMenu && (
        <nav className="settings-menu">
          <Link to="/settings">Settings</Link>
        </nav>
      )}
    </Slide>
  )
}
