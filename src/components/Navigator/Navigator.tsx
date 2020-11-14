/* ---------------------------------
Navigator
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement } from "react"
import BaseButton from "../../components/BaseButton/BaseButton"
import "./Navigator.scss"

interface IOwnProps {
  slides: string[]
}

export default function Navigator({ slides }: IOwnProps): ReactElement {
  return (
    <nav className="Navigator">
      <div className="navigator-controls">
        <BaseButton className="button--naked">
          <i className="material-icons">close</i>
        </BaseButton>
      </div>

      {slides?.map?.((slide, i) => (
        <Link to={slide} key={i} className="navigator-button-wrapper">
          <BaseButton className="button--naked">{String(i)}</BaseButton>
        </Link>
      ))}
    </nav>
  )
}
