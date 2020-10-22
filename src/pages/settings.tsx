/* ---------------------------------
Settings
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { InitialStyles, StyleContext } from "../layouts/Layout"

interface IOwnProps {}

export default function Settings(props: IOwnProps): ReactElement {
  const settings: InitialStyles = useContext(StyleContext)

  const flatSettings = {
    ...settings.colors,
    ...settings.typography,
  }

  return (
    <div>
      hey
      {Object.entries(flatSettings).map(([k, v]) => `${k} ${v}`)}
    </div>
  )
}
