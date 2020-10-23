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
      <form action="#" className="settings-form">
        {Object.entries(flatSettings).map(([k, v]) => {
          v ? (
            <span>{v}</span>
          ) : (
            <fieldset>
              <label htmlFor={k}>{k}</label>
              <input name={k} type="text" placeholder={k} />
            </fieldset>
          )
        })}
      </form>
    </div>
  )
}
