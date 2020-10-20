/* ---------------------------------
Slide
--------------------------------- */

import React, { ReactChildren, ReactElement, ReactNode, useEffect } from "react"
// import "./Slide.scss"

interface IOwnProps {
  children: ReactNode
  title: string
}

export default function Slide({ children, title }: IOwnProps): ReactElement {
  useEffect(() => {
    ;(document.querySelector(".Slide") as HTMLDivElement).style.left = "0"
  }, [])

  return (
    <div className={"Slide " + title}>
      <main className="slide-content">{children}</main>
    </div>
  )
}
