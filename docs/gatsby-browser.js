import React from 'react';
import App from 'src/App';

import 'normalize.css';
import 'src/styles/prism-theme.css';

/** 
 * https://github.com/goblindegook/littlefoot/issues/338
 * Gatsby에서 node_modules 내부에 있는 css를 불러올 때 import문을 제대로 인지 못하는 이슈가 있음
 **/
require('@lubycon/ui-kit/css/lubycon-ui-kit.min.css');

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
