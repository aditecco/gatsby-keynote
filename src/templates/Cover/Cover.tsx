/* ---------------------------------
Cover
--------------------------------- */

import React, { ReactElement, useContext } from "react"
import { SettingsContext } from "../../layouts/Layout"
import Slide from "../../layouts/Slide/Slide"
import { ISettings } from "../../types"
import "./Cover.scss"

interface OwnProps {
  title: string
}

export default function Cover({ title }: OwnProps): ReactElement {
  const [settings] = useContext<
    [ISettings, React.Dispatch<React.SetStateAction<ISettings>>]
  >(SettingsContext)

  return (
    <Slide
      title="Cover"
      style={{
        background: `
          linear-gradient(45deg, ${settings["accent-primary"]},
          ${settings["accent-secondary"]})
        `,
      }}
    >
      <img src={settings["main-logo"]} alt="" height="90" />

      {/* <h1
        className="cover-title"
        style={{
          fontFamily: settings.font,
        }}
      >
        {title ?? "Cover"}
      </h1> */}
    </Slide>
  )
}
