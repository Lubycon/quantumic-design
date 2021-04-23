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
  pages.forEach(({ node: page }, index) => {
    const previous = index === 0 ? null : pages[index - 1].node;
    const next = index === pages.length - 1 ? null : pages[index + 1].node;

    console.log('prev', previous);
    console.log('next', next);

    createPage({
      path: page.fields.path,
      component: pageTemplate,
      context: {
        previous,
        next,
      },
    });
  });
}

exports.createPages = createPages;
