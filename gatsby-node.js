/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * onCreateNode
 */
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   // TODO execute only on /blog posts
//   if (
//     node.internal.type === `MarkdownRemark`
//     // && node.sourceInstanceName === "blog"
//   ) {
//     const slug = createFilePath({ node, getNode, basePath: `content/blog/` })

//     // blog posts will be conventionally named
//     // using this format: DD-MM-YYYY--title
//     const slugParts = slug.split("--")

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slugParts.shift().match(/[\d]{4}/g) + "/" + slugParts.pop(),
//     })
//   }
// }

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
              frontmatter {
                order
                title
              }
            }
          }
        }
      }
    }
  `)

  slides.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/slides/${node.childMarkdownRemark.frontmatter.title}`,
      component: path.resolve(`./src/templates/Slide.tsx`),
      context: {
        node,
      },
    })
  })
}