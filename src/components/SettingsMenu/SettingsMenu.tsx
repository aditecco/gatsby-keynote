/* ---------------------------------
SettingsMenu
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement } from "react"
import "./SettingsMenu.scss"

interface IOwnProps {
  label?: string
  from?: string
}

export default function SettingsMenu({
  label = "Settings",
  from,
}: IOwnProps): ReactElement {
  return (
    <div className="SettingsMenu">
      <Link to="/settings" state={{ from }}>
        <i className="material-icons">settings</i>
        {label}
      </Link>
    </div>
  )
}
