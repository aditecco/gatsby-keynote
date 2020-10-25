/* ---------------------------------
Slide
--------------------------------- */

import React, { CSSProperties, ReactElement, ReactNode, useEffect } from "react"
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
  // useEffect(() => {
  //   ;(document.querySelector(".Slide") as HTMLDivElement).style.left = "0"
  // }, [])

  return (
    <div className={"Slide " + title} style={style ? style : {}}>
      <main className="slide-content">{children}</main>
    </div>
  )
}
