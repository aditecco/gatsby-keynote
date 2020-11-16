/* ---------------------------------
Layout
--------------------------------- */

import { graphql, useStaticQuery } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import React, { useState } from "react"
import useArrowKeyNavigator from "../../hooks/useArrowKeyNavigator"
import cssColors from "../../styles/partials/_colors.scss"
import cssTypography from "../../styles/partials/_typography.scss"
import { ISettings } from "../../types"

export const initialSettings: ISettings = {
  "accent-primary": cssColors?.accent01 ?? "#dadada",
  "accent-secondary": cssColors?.accent02 ?? "white",
  font: cssTypography?.font ?? '"Helvetica, Arial", sans-serif',
  transition: "immediate",
  "main-logo": `//logo.clearbit.com/airbnb.com?size=90`,
  "deck-title": "",
}

// Contexts
export const SlidesContext = React.createContext(null)
export const SettingsContext = React.createContext(null)

// process slides for AKN
export function buildSlidePaths(slides) {
  return slides?.map?.((_, i) => (i === 0 ? `/` : `/slides/${i}`)) ?? []
}

// Layout
const Layout = ({ location, children }) => {
  // get the slides
  const {
    allFile: { nodes: slides },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "slides" } }) {
        nodes {
          id
          name
          childMarkdownRemark {
            id
            excerpt
            rawMarkdownBody
            html
            frontmatter {
              title
              deck
              order
              template
              author
              timestamp
            }
          }
        }
      }
    }
  `)

  // init AKN
  const [AKNinit] = useArrowKeyNavigator(buildSlidePaths(slides))
  AKNinit && console?.info("***** AKN is active. *****")

  return (
    <SlidesContext.Provider value={{ slides, location }}>
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
    </SlidesContext.Provider>
  )
}

export default Layout
