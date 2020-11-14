/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

/**
 * createPages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const slides = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "slides" } }
        sort: { fields: childMarkdownRemark___frontmatter___order }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              html
              frontmatter {
                author
                deck
                template
                timestamp
                title
                order
              }
            }
          }
        }
      }
    }
  `)

  slides.data.allFile.edges.forEach(({ node }) => {
    const {
      childMarkdownRemark: {
        frontmatter: { template, order },
      },
    } = node

    createPage({
      path: `/slides/${order}`,
      component: path.resolve(
        `./src/templates/${template || "Blank"}/${template || "Blank"}.tsx`
      ),
      context: {
        node,
      },
    })
  })
}
