import React from 'react';
import App from 'src/App';

import 'normalize.css';
import '@lubycon/ui-kit/css/lubycon-ui-kit.min.css';
import 'src/styles/prism-theme.css';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
