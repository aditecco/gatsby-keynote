/* ---------------------------------
Slide
--------------------------------- */

import React, { CSSProperties, ReactElement, ReactNode } from "react"
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator"
import Navigator from "../../components/Navigator/Navigator"
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu"
import { buildSlidePaths, SlidesContext } from "../Layout"
import "./Slide.scss"

interface IOwnProps {
  children: ReactNode
  title: string
  style?: CSSProperties
}

export default function Slide({
  children,
  title,
  style,
}: IOwnProps): ReactElement {
  return (
    <SlidesContext.Consumer>
      {({ slides, location }) => {
        const slidePaths = buildSlidePaths(slides)

        return (
          <div className={"Slide " + title} style={style ? style : {}}>
            <main className="slide-content">{children}</main>

            <Navigator slides={slidePaths} />

            {/* TODO get page from which settings are invoked */}
            <SettingsMenu from={location?.pathname} />

            <ProgressIndicator
              slides={slidePaths}
              location={location?.pathname}
            />
          </div>
        )
      }}
    </SlidesContext.Consumer>
  )
}
