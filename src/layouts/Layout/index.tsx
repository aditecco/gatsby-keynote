/* ---------------------------------
Layout
--------------------------------- */

import React, { useState } from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import { ISettings } from "../../types"

export const initialSettings: ISettings = {
  "accent-primary": "#f1c40f",
  "accent-secondary": "#e74c3c",
  font: "",
  transition: "",
  "main-logo": "",
  "secondary-logo": "",
}

export const SettingsContext = React.createContext(null)

const Layout = ({ location, children }) => {
  return (
    <SettingsContext.Provider value={useState<ISettings>(initialSettings)}>
      <TransitionProvider
        location={location}
        mode="immediate"
        /*
      location={location}
      mode="immediate"
      enter={{
        opacity: 0,
        transform: "translate3d(0,20vh,0) scale3d(1, 1, 1) rotate(0deg)",
        config: {
          mass: 1,
          tension: 210,
          friction: 20,
          clamp: true
        },
        onRest: () => {
          console.log("Hello, World!");
        }
      }}
      usual={{
        opacity: 1,
        transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)"
      }}
      leave={{
        opacity: 0,
        transform: "translate3d(0vh,0vh,0) scale3d(2, 2, 1) rotate(180deg)",
        config: {
          duration: 1000
        }
      }}
     */
      >
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </SettingsContext.Provider>
  )
}

export default Layout
