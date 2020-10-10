import React from "react"

export default function Home({
  data: {
    allFile: { edges: slides },
  },
}) {
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
