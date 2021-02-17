<p align="center">
  <img width="150" src="https://d2x9jxyr47nlkc.cloudfront.net/logo/symbol-color.svg" alt="Lubycon logo">
</p>

<h1 align="center">Lubycon UI Kit</h1>

<p align="center">
  Lubycon UI Kit은 한국의 고유 문자인 한글을 기반으로 설계된 UI 라이브러리입니다.<br />
  국내 디자이너와 개발자들이 동일한 도메인 언어로 커뮤니케이션하는 것을 지향하며, 이를 위해 FE 라이브러리와 Figma 플러그인을 동시에 제공합니다.<br />
  또한 Lubycon UI Kit을 사용할 때는 타입스크립트 사용을 권장합니다.
</p>

<div align="center">
  
  <!--[![npm latest package](https://img.shields.io/npm/v/@lubycon/ui-kit/latest.svg)](https://www.npmjs.com/package/@lubycon/ui-kit)-->
  
  [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
  [![workflow](https://github.com/Lubycon/lubycon-ui-kit/workflows/Release%20UI%20Kit/badge.svg)](https://github.com/Lubycon/lubycon-ui-kit)
  [![workflow](https://github.com/Lubycon/lubycon-ui-kit/workflows/Publish%20Dev%20Storybook/badge.svg)](https://github.com/Lubycon/lubycon-ui-kit)  
  [![npm alpha package](https://img.shields.io/npm/v/@lubycon/ui-kit/alpha.svg)](https://www.npmjs.com/package/@lubycon/ui-kit)
  [![npm downloads](https://img.shields.io/npm/dm/@lubycon/ui-kit.svg)](https://www.npmjs.com/package/@lubycon/ui-kit)
  
</div>

## Installation

```sh
$ npm install @lubycon/ui-kit
// or
$ yarn add @lubycon/ui-kit
```

## Usage

Lubycon UI Kit 내부의 몇몇 컴포넌트는 컴포넌트 트리와 분리된 상태와 렌더 트리를 가지고 있기 때문에 `LubyconUIKitProvider`을 필요로 합니다.

```jsx
// App.tsx

import React, { PropsWithChildren } from 'react';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';

function App({ children }: PropsWithChildren<{}>) {
  return <LubyconUIKitProvider>{children}</LubyconUIKitProvider>;
}
```

### 선언적 렌더링 vs Hooks

Lubycon UI Kit의 많은 컴포넌트들은 선언적 렌더링을 지원하지만, 간혹 선언적 렌더링만으로 처리하기에는 컴포넌트 렌더 트리가 장황하다고 느껴질 수도 있습니다.

그래서 이런 경우 컴포넌트 렌더 트리에 영향을 받지 않는 몇몇 컴포넌트들에 한해 사용자가 선언적인 방법과 명령적인 방법을 선택해서 사용할 수 있도록 지원하고 있습니다.

#### 선언적 렌더링

```jsx
import React, { useState } from 'react';
import { Toast } from '@lubycon/ui-kit';

function Foo() {
  const [show, setShow] = useState(false);

  return <Toast show={show} message="토스트입니다" />;
}

export default Foo;
```

#### Hooks

```jsx
import React, { useState } from 'react';
import { Toast, Button } from '@lubycon/ui-kit';

function Foo() {
  const { openToast } = useToast();
  const handleClick = () => {
    openToast({
      message: '토스트입니다',
    });
  };

  return <Button onClick={handleClick}>토스트 열기</Button>;
}

export default Foo;
```
