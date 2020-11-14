/* ---------------------------------
Slide
--------------------------------- */

import React, { CSSProperties, ReactElement, ReactNode, useEffect } from "react"
import Navigator from "../../components/Navigator/Navigator"
import { SlidesContext } from "../Layout"
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
      {slides => (
        <div className={"Slide " + title} style={style ? style : {}}>
          <main className="slide-content">{children}</main>

          <Navigator slides={slides} />
        </div>
      )}
    </SlidesContext.Consumer>
  )
}
