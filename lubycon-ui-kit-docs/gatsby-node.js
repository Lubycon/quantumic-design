const { createPages } = require('./gatsby-hooks/createPages');
const { onCreateNode } = require('./gatsby-hooks/onCreateNode');

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
