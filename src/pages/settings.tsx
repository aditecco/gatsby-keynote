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
import Slide from "../layouts/Slide/Slide"
import InputField from "../components/InputField/InputField"
import BaseButton from "../components/BaseButton/BaseButton"

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

  // handleChange
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value, name },
    } = e

    setFormState(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  // handleSubmit
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
    <Slide title="Settings">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          <i className="material-icons">arrow_back</i>
          Home
        </Link>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>
        <h3 className="page-title">Settings</h3>

        {Object.keys(settings).map((setting, i) => {
          const isDisabled = disabled[setting]

          return (
            // TODO Object.entries won't compile in TS!

            <InputField
              className="settings-field"
              key={setting + i}
              name={setting}
              type="text"
              placeholder={isDisabled ? settings[setting] : setting}
              disabled={isDisabled}
              onChange={handleChange}
              value={formState[setting]}
            >
              {isDisabled && (
                <BaseButton
                  style={{ color: "#27ae60" }}
                  className="button--naked"
                  onClick={_ =>
                    setDisabled(settings => ({
                      ...settings,
                      [setting]: false,
                    }))
                  }
                >
                  Enable
                </BaseButton>
              )}
            </InputField>
          )
        })}

        <BaseButton type="submit">submit</BaseButton>
      </form>
    </Slide>
  )
}
