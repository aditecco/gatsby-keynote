import { navigateTo, navigate } from "gatsby"
import React, { useEffect, useState } from "react"

export default function Home({
  data: {
    allFile: { edges: slides },
  },

  location,
}) {
  const [currentPage, setCurrentPage] = useState("/")
  // TODO make dynamic, getting it from the router
  const pages = ["/", "/slides/one", "/slides/two", "/slides/three"]

  useEffect(() => {
    document.body.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowRight": {
          const next =
            pages[pages.findIndex(page => page === location.pathname) + 1]
          navigate(next)
          setCurrentPage(next)
          break
        }

        case "ArrowLeft": {
          const prev =
            pages[pages.findIndex(page => page === location.pathname) - 1]
          navigate(prev)
          setCurrentPage(prev)
          break
        }

        default:
          return
      }
    })
  }, [])

  return (
    <ul>
      {slides.map((slide, i) => (
        <li key={i}>{slide.node.childMarkdownRemark.frontmatter.title}</li>
      ))}
    </ul>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "slides" } }) {
      edges {
        node {
          childMarkdownRemark {
            id
            html
            frontmatter {
              deck
              title
              order
            }
          }
        }
      }
    }
  }
`
