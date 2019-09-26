/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

// Add custom url pathname for posts
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    const { dir, name } = path.parse(node.absolutePath)
    createNodeField({
      node,
      name: `slug`,
      value: path.relative(__dirname, path.join(dir, name)),
    })
  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug, '!');
    createPage({
      path: node.fields.slug, // required
      component: path.resolve(`src/templates/document.tsx`),
      context: {}, // additional data can be passed via context
    })
  })
}
