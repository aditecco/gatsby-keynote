/* ---------------------------------
Layout
--------------------------------- */

import React, { useState } from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import { ISettings } from "../../types"
import cssColors from "../../styles/partials/_colors.scss"
import cssTypography from "../../styles/partials/_typography.scss"

export const initialSettings: ISettings = {
  "accent-primary": cssColors?.accent01 ?? "#dadada",
  "accent-secondary": cssColors?.accent02 ?? "white",
  font: cssTypography?.font ?? '"Helvetica, Arial", sans-serif',
  transition: "immediate",
  "main-logo": "",
  "secondary-logo": "",
}

export const SettingsContext = React.createContext(null)

const Layout = ({ location, children }) => {
  return (
    <SettingsContext.Provider value={useState<ISettings>(initialSettings)}>
      <SettingsContext.Consumer>
        {settings => (
          <TransitionProvider
            location={location}
            mode={settings?.transition ?? "immediate"}
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
        )}
      </SettingsContext.Consumer>
    </SettingsContext.Provider>
  )
}

export default Layout
