<p align="center">
  <img width="150" src="https://assets.lubycon.io/logo/symbol-color.svg" alt="Lubycon logo">
</p>

<h1 align="center">Quantumic Design</h1>
<p align="center">The simple and strong ui kit to build your own design system.</p>

<div align="center" style="margin-bottom: 8px;">
  <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>
  <a href="https://reactjs.org/" title="React"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/react.svg" alt="React" width="21px" height="21px"></a>
  <a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/html-5.svg" alt="HTML5" width="21px" height="21px"></a>
  <a href="https://rollupjs.org/" title="rollup.js"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/rollup.svg" alt="rollup.js" width="21px" height="21px"></a>
  <a href="https://yarnpkg.com/" title="Yarn"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/yarn.svg" alt="Yarn" width="21px" height="21px"></a>
  <a href="https://www.npmjs.com/" title="NPM"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/npm.svg" alt="NPM" width="21px" height="21px"></a>
</div>

<div align="center">
  
  [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
  [![node version](https://badgen.net/npm/node/quantumic-design)](https://github.com/Lubycon/quantumic-design/blob/master/package.json#L7)
  [![workflow](https://github.com/Lubycon/quantumic-design/workflows/Release%20Library/badge.svg)](https://github.com/Lubycon/quantumic-design)
  [![npm latest package](https://img.shields.io/npm/v/quantumic-design/latest.svg)](https://www.npmjs.com/package/quantumic-design)
  [![npm downloads](https://img.shields.io/npm/dm/quantumic-design.svg)](https://www.npmjs.com/package/quantumic-design)
  
</div>

Quantumic Design is a UI Kit that consists of some tiny components, functions and react hooks. 

Most of components in Quantumic Design is designed that have single responsbility. So you can assemble these quantumic components to make your own design system. Or just use these are.

Please enjoy! ☺️

## With Typescript

As you can see, Quantumic Design is TypeScript based library. Therefore, Quantumic Design provides its own type declarations, so there is no need to install additional packages like `@types/quantumic-design`.

## Quick start

Install Quantumic Design and Emotion. and add Quantumic Design Context to your application.

```bash
$ npm install quantumic-design
// or
$ yarn add quantumic-design
```
```jsx
// App.tsx

import React, { PropsWithChildren } from 'react';
import { QDProvider } from 'quantumic-design';

function App({ children }: PropsWithChildren<{}>) {
  return <QDProvider>{children}</QDProvider>;
}
```

## Docs
Check this [Storybook](https://ui-kit.lubycon.io/?path=/docs/quantumic-design-welcome--page)
