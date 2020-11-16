/* ---------------------------------
Slide
--------------------------------- */

import React, { CSSProperties, ReactElement, ReactNode } from "react"
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator"
import Navigator from "../../components/Navigator/Navigator"
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu"
import { buildSlidePaths, SlidesContext } from "../Layout"
import "./Slide.scss"
import SlideHeader from "../../components/SlideHeader/SlideHeader"

interface IOwnProps {
  children: ReactNode
  title: string
  style?: CSSProperties
  hideHeader?: boolean
  hideNavigator?: boolean
  hideSettings?: boolean
  hideProgress?: boolean
}

export default function Slide({
  children,
  title,
  style,
  hideHeader,
  hideNavigator,
  hideSettings,
  hideProgress,
}: IOwnProps): ReactElement {
  return (
    <SlidesContext.Consumer>
      {({ slides, location }) => {
        const slidePaths = buildSlidePaths(slides)

        return (
          <div className={"Slide " + title} style={style ? style : {}}>
            {/* common persistent UI */}
            {!hideHeader && <SlideHeader />}

            {!hideNavigator && <Navigator slides={slidePaths} />}

            {!hideSettings && <SettingsMenu from={location?.pathname} />}

            {!hideProgress && (
              <ProgressIndicator
                slides={slidePaths}
                location={location?.pathname}
              />
            )}

            {/* actual slide content */}
            <main className="slide-content">{children}</main>
          </div>
        )
      }}
    </SlidesContext.Consumer>
  )
}
