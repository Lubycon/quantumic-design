import React from 'react';
import App from 'src/App';

import 'modern-normalize';
import '@lubycon/ui-kit/css/lubycon-ui-kit.min.css';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
