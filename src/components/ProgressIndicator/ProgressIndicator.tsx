/* ---------------------------------
ProgressIndicator
--------------------------------- */

import React, { ReactElement } from "react"
import "./ProgressIndicator.scss"

interface IOwnProps {
  location: string
  slides: string[]
}

export default function ProgressIndicator({
  location,
  slides,
}: IOwnProps): ReactElement {
  // getSlideProgress
  function getSlideProgress(location: string, slides: string[]): string | null {
    const currentPosition = slides.findIndex(
      (slide: string) => slide === location
    )

    if (
      // skips nullish & 0
      !currentPosition ||
      // skips not found
      Math.sign(currentPosition) === -1
    ) {
      return null
    }

    return `${currentPosition} of ${slides.length}`
  }

  return (
    <div className="ProgressIndicator">
      {getSlideProgress(location, slides)}
    </div>
  )
}
