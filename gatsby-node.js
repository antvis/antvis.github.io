/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const { getSlugAndLang } = require('ptz-i18n');

// Add custom url pathname for posts
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === `File`) {
    createNodeField({
      node,
    });
  } else if (node.internal.type === `MarkdownRemark`) {
    const { slug, langKey } = getSlugAndLang(
      {
        langKeyForNull: 'any',
        langKeyDefault: 'none',
        useLangKeyLayout: false,
        pagesPaths: [__dirname],
        prefixDefault: true,
      },
      node.fileAbsolutePath,
    );
    createNodeField({
      node,
      name: `slug`,
      value: (langKey === 'none' ? `/zh${slug}` : slug).replace(/\/$/, ''),
    });
    createNodeField({
      node,
      name: `langKey`,
      value: langKey,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
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
              langKey
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, langKey } = node.fields;
    createPage({
      path: slug, // required
      component: path.resolve(`src/templates/document.tsx`),
    });
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
