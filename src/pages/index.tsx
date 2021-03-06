import { unshift } from "core-js/fn/array"
import { graphql } from "gatsby"
import React from "react"
import Cover from "../templates/Cover/Cover"
import { IGatsbyInjectedQueryData } from "../types"

export default function Home({ data }: IGatsbyInjectedQueryData) {
  const {
    allFile: { nodes },
  } = data

  return (
    <Cover
      title={
        nodes?.shift?.()?.childMarkdownRemark?.frontmatter?.deck ?? "Cover"
      }
    />
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "slides" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            deck
          }
        }
      }
    }
  }
`
