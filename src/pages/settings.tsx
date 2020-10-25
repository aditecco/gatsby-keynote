/* ---------------------------------
Settings
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { StyleContext } from "../layouts/Layout"
import { ISettings } from "../types"
import { Link } from "gatsby"

interface OwnProps {}

export default function Settings({}: OwnProps): ReactElement {
  const settings: ISettings = useContext(StyleContext)

  const flatSettings = {
    ...settings.colors,
    ...settings.typography,
  }

  return (
    <div>
      hey
      <form action="#" className="settings-form">
        <Link to="/">&larr; Home</Link>

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
