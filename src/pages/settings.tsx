/* ---------------------------------
Settings
--------------------------------- */

import React, {
  ChangeEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react"
import { initialSettings, SettingsContext } from "../layouts/Layout"
import { ISettings } from "../types"
import { Link } from "gatsby"

interface OwnProps {}

export default function Settings({}: OwnProps): ReactElement {
  const [settings, updateSettings] = useContext(SettingsContext)
  const [formState, setFormState] = useState(initialSettings)
  const [disabled, setDisabled] = useState({})

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

  useEffect(() => {
    settings &&
      Object.keys(settings).map((setting, i) => {
        setDisabled(prevState => ({
          ...prevState,
          [setting]: !!settings[setting],
        }))
      })
  }, [])

  return (
    <div>
      hey
      <form action="#" className="settings-form" onSubmit={handleSubmit}>
        <Link to="/">&larr; Home</Link>

        {Object.keys(settings).map((setting, i) => {
          const isDisabled = disabled[setting]

          return (
            // TODO Object.entries won't compile in TS!

            <fieldset key={setting + i}>
              <label htmlFor={setting}>{setting}</label>
              <input
                name={setting}
                type="text"
                placeholder={isDisabled ? settings[setting] : setting}
                disabled={isDisabled}
                onChange={handleChange}
              />

              {isDisabled && (
                <button
                  type="button"
                  onClick={_ =>
                    setDisabled(settings => ({
                      ...settings,
                      [setting]: false,
                    }))
                  }
                >
                  Enable
                </button>
              )}
            </fieldset>
          )
        })}

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
