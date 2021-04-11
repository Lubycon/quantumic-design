const path = require('path');

async function createPages({ actions, graphql, reporter }) {
  const { createPage } = actions;
  const pageTemplate = path.resolve('src/templates/page.tsx');

  const query = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___order] }, limit: 1000) {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (query.data == null) {
    return;
  }

  const pages = query.data.allMdx.edges;
  pages.forEach(({ node: page }) => {
    createPage({
      path: page.fields.path,
      component: pageTemplate,
    });
  });
}

exports.createPages = createPages;
