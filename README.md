<p align="center">
  <img width="150" src="https://assets.lubycon.io/logo/symbol-color.svg" alt="Lubycon logo">
</p>

<h1 align="center">Quantumic Design</h1>

<div align="center" style="margin-bottom: 8px;">
  <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>
  <a href="https://reactjs.org/" title="React"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/react.svg" alt="React" width="21px" height="21px"></a>
  <a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/html-5.svg" alt="HTML5" width="21px" height="21px"></a>
  <a href="https://sass-lang.com/" title="Sass"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/sass.svg" alt="Sass" width="21px" height="21px"></a>
  <a href="https://rollupjs.org/" title="rollup.js"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/rollup.svg" alt="rollup.js" width="21px" height="21px"></a>
  <a href="https://yarnpkg.com/" title="Yarn"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/yarn.svg" alt="Yarn" width="21px" height="21px"></a>
  <a href="https://www.npmjs.com/" title="NPM"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/npm.svg" alt="NPM" width="21px" height="21px"></a>
</div>

<div align="center">
  
  [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
  [![node version](https://badgen.net/npm/node/quantumic-design)](https://github.com/Lubycon/lubycon-ui-kit/blob/master/package.json#L7)
  [![workflow](https://github.com/Lubycon/lubycon-ui-kit/workflows/Release%20Library/badge.svg)](https://github.com/Lubycon/lubycon-ui-kit)
  [![workflow](https://github.com/Lubycon/lubycon-ui-kit/workflows/Publish%20Dev%20Storybook/badge.svg)](https://github.com/Lubycon/lubycon-ui-kit)  
  [![npm latest package](https://img.shields.io/npm/v/quantumic-design/latest.svg)](https://www.npmjs.com/package/quantumic-design)
  [![npm downloads](https://img.shields.io/npm/dm/quantumic-design.svg)](https://www.npmjs.com/package/quantumic-design)
  
</div>

## Installation

```bash
$ npm install quantumic-design
// or
$ yarn add quantumic-design
```

## Usage

Quantumic Design 내부의 몇몇 컴포넌트는 컴포넌트 트리와 분리된 상태와 렌더 트리를 가지고 있기 때문에 `LubyconUIKitProvider`을 필요로 합니다.

```jsx
// App.tsx

import React, { PropsWithChildren } from 'react';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';

function App({ children }: PropsWithChildren<{}>) {
  return <LubyconUIKitProvider>{children}</LubyconUIKitProvider>;
}
```
