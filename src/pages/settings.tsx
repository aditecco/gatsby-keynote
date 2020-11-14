/* ---------------------------------
Settings
--------------------------------- */

import { Link } from "gatsby"
import React, {
  ChangeEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react"
import BaseButton from "../components/BaseButton/BaseButton"
import InputField from "../components/InputField/InputField"
import { SettingsContext } from "../layouts/Layout"
import Slide from "../layouts/Slide/Slide"
import { ISettings } from "../types"

interface OwnProps {}

export default function Settings({}: OwnProps): ReactElement {
  const [settings, updateSettings] = useContext(SettingsContext)
  const [disabled, setDisabled] = useState({})

  // handleChange
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value, name },
    } = e

    updateSettings(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault()

    handleDisabled()
  }

  // handleDisabled
  function handleDisabled() {
    Object.keys(settings).map((setting, i) => {
      setDisabled(prevState => ({
        ...prevState,
        [setting]: !!settings[setting],
      }))
    })
  }

  useEffect(() => {
    settings && handleDisabled()
  }, [])

  return (
    <Slide
      title="Settings"
      style={{
        background: `linear-gradient(45deg, ${
          (settings as ISettings)["accent-primary"]
        }, ${(settings as ISettings)["accent-secondary"]})`,
      }}
    >
      <form className="settings-form" onSubmit={handleSubmit}>
        <header className="settings-form-header">
          <Link to="/" className="back-button">
            <i className="material-icons">arrow_back</i>
          </Link>

          <h3 className="page-title">Settings</h3>
        </header>

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
              value={settings[setting]}
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
                  Edit
                </BaseButton>
              )}
            </InputField>
          )
        })}

        <BaseButton
          type="submit"
          disabled={Object.values(disabled).every(disabled => disabled)}
        >
          save
        </BaseButton>
      </form>
    </Slide>
  )
}
