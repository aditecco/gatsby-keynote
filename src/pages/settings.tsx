/* ---------------------------------
Settings
--------------------------------- */

import React, { ChangeEvent, ReactElement, useContext, useState } from "react"
import { initialSettings, SettingsContext } from "../layouts/Layout"
import { ISettings } from "../types"
import { Link } from "gatsby"

interface OwnProps {}

export default function Settings({}: OwnProps): ReactElement {
  const [settings, updateSettings] = useContext(SettingsContext)
  const [formState, setFormState] = useState(initialSettings)

  // const flatSettings = {
  //   ...settings.colors,
  //   ...settings.typography,
  //   ...settings.animation,
  //   ...settings["asset-urls"],
  // }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value, name },
    } = e

    setFormState(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    updateSettings(settings => ({
      ...settings,
      ...formState,
    }))
  }

  return (
    <div>
      hey
      <form action="#" className="settings-form" onSubmit={handleSubmit}>
        <Link to="/">&larr; Home</Link>

        {Object.keys(initialSettings).map((k, i) => (
          // TODO Object.entries won't compile in TS!

          <fieldset key={k + i}>
            <label htmlFor={k}>{k}</label>
            <input
              name={k}
              type="text"
              placeholder={settings[k] ? settings[k] : k}
              disabled={!!settings[k]}
              onChange={handleChange}
            />
          </fieldset>
        ))}

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
