function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { relativePath } = getNode(node.parent);
    const path = `/${relativePath.replace('.mdx', '')}`;

    console.log(`🔗 Page is created! -> ${path}`);

    createNodeField({
      name: 'path',
      node,
      value: path,
    });
  }
}

exports.onCreateNode = onCreateNode;