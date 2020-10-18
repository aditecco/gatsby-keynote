/* ---------------------------------
Slide
--------------------------------- */

import React, { ReactElement, useEffect } from "react"
// import "./Slide.scss"
import { Link } from "gatsby"

interface IOwnProps {}

interface IGatsbyProps {
  location
  pageContext: {
    node: {
      childMarkdownRemark: {
        id: string
        html: string
        timeToRead: number
        excerpt: string
        frontmatter: {
          title: string
          subtitle: string
          language: string
          timestamp: string
          author: string
          tags: string[]
        }
      }
    }
  }
}

type TProps = IOwnProps & IGatsbyProps

export default function Cover({
  pageContext: { node },
  location,
}: TProps): ReactElement | string {
  const {
    childMarkdownRemark: {
      frontmatter: { title },
    },
  } = node

  const style = {
    position: "fixed",
    width: `100vw`,
    height: `100vh`,
    top: 0,
    left: 1000,
    bottom: 0,
    transition: `transform, .3s ease`,
    backgroundColor: "teal",
    textAlign: "center",
    fontSize: "10rem",
    fontFamily: "Helvetica, sans-serif",
    color: "white",
    fontWeight: 600,
    display: "grid",
    placeContent: "center",
  }

  useEffect(() => {
    document.querySelector(".SlideContainer").style.left = 0
  }, [])

  return (
    <div className="SlideContainer" style={style}>
      {node.childMarkdownRemark.frontmatter.template}
    </div>
  )
}
