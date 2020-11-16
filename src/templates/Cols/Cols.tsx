/* ---------------------------------
Cols
--------------------------------- */

import React, { ReactElement } from "react"
import Slide from "../../layouts/Slide/Slide"
import { IGatsbyInjectedProps } from "../../types"
// import logo from ""
import "./Cols.scss"

interface OwnProps {}

type Props = OwnProps & IGatsbyInjectedProps

export default function Cols({
  pageContext: { node },
}: Props): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title, template, order },
    },
  } = node

  return (
    <Slide title="Cols">
      <div className="slide-frame">
        <div className="col-container">
          <div className="content">
            <img src="https://source.unsplash.com/random/200x200" alt="" />
            <h3>Non qui non deserunt</h3>
            <p>
              Non qui non deserunt commodo ea incididunt excepteur consequat
              amet nisi sit id magna officia.
            </p>
          </div>

          <div className="content">
            <img src="https://source.unsplash.com/random/200x200" alt="" />
            <h3>Nisi incididunt ullamco</h3>
            <p>
              Nisi incididunt ullamco est nulla laboris culpa velit incididunt
              magna irure aute ea ipsum.
            </p>
          </div>

          <div className="content">
            <img src="https://source.unsplash.com/random/200x200" alt="" />
            <h3>Consequat laboris qui</h3>
            <p>
              Consequat laboris qui qui exercitation. Do magna excepteur qui
              consectetur ipsum ullamco.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
