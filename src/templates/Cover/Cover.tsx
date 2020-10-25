/* ---------------------------------
Cover
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement } from "react"
import { IGatsbyInjectedProps } from "../../types"
import Slide from "../../layouts/Slide/Slide"
import "./Cover.scss"

interface OwnProps {
  logo: string
  withMenu?: boolean
}

type Props = OwnProps & IGatsbyInjectedProps

export default function Cover({ logo, withMenu }: Props): ReactElement {
  return (
    <Slide title="Cover">
      <img src={logo} alt="" width="300" />

      {withMenu && (
        <nav className="settings-menu">
          <Link to="/settings">Settings</Link>
        </nav>
      )}
    </Slide>
  )
}
