/* ---------------------------------
Navigator
--------------------------------- */

import { Link } from "gatsby"
import React, { ReactElement, useState } from "react"
import "./Navigator.scss"

interface IOwnProps {
  slides: string[]
}

export default function Navigator({ slides }: IOwnProps): ReactElement {
  const [visible, setVisible] = useState(false)

  function handleClick() {
    setVisible(visible => !visible)
  }

  return (
    <nav className={`Navigator${!visible ? " Navigator--hidden" : ""}`}>
      <div className="navigator-controls">
        <button onClick={handleClick}>
          <i className="material-icons">{visible ? "close" : "layers"}</i>
        </button>
      </div>

      {visible && <span className="separator">&middot;</span>}

      {visible && (
        <ul className="navigator-button-container">
          {slides?.map?.((slide, i) => (
            <li key={i} className="navigator-button-wrapper">
              <Link
                to={slide}
                className="navigator-button-link"
                onMouseOver={_ => console.log("TODO create a tooltip")}
              >
                <button type="button">{String(i)}</button>
              </Link>
            </li>
          )) ?? []}
        </ul>
      )}
    </nav>
  )
}
