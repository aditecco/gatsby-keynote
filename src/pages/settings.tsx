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
import Switch from "react-ios-switch"
import BaseButton from "../components/BaseButton/BaseButton"
import InputField from "../components/InputField/InputField"
import { SettingsContext } from "../layouts/Layout"
import Slide from "../layouts/Slide/Slide"
import { ISettings } from "../types"

interface OwnProps {
  location
}

export default function Settings({ location }: OwnProps): ReactElement {
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
          <Link to={location?.state?.from ?? "/"} className="back-button">
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
              <Switch
                checked={!isDisabled}
                className="settings-field-switch"
                name={setting + "-switch"}
                onChange={_ =>
                  setDisabled(settings => ({
                    ...settings,
                    [setting]: !settings[setting],
                  }))
                }
                // https://github.com/clari/react-ios-switch/issues/9
                style={{ transform: "scale(0.8)" }}
                // disabled={}
                // readOnly={}
              />
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
