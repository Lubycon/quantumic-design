import BasicLayout from 'components/BasicLayout';
import PostSection from 'components/PostSection';
import React from 'react';

const GettingStartedPage = () => {
  return (
    <BasicLayout>
      <div css={{ paddingTop: 94, paddingLeft: 50, paddingRight: 30 }}>
        <PostSection title={<PostSection.Title>Installation</PostSection.Title>}>
          <PostSection.Contents>
            Lubycon UI Kit은 아직 알파 버전만 배포된 상태입니다. 따라서 문서 상단의 버전을 확인하고
            latest가 아닌 정확한 버전을 명시하여 설치하시는 것을 추천합니다.
          </PostSection.Contents>
          <pre>
            {`$ npm install @lubycon/ui-kit@v1.1.0-alpha.24
// or
$ yarn add @lubycon/ui-kit@v1.1.0-alpha.24`}
          </pre>
        </PostSection>
        <PostSection title={<PostSection.Title>Usage</PostSection.Title>}>
          <PostSection.Contents>
            Lubycon UI Kit 내부의 몇몇 컴포넌트는 컴포넌트 트리와 분리된 상태와 렌더 트리를 가지고
            있기 때문에 LubyconUIKitProvider을 필요로 합니다.
          </PostSection.Contents>
          <pre>
            {`// App.tsx

import React, { PropsWithChildren } from 'react';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';

function App({ children }: PropsWithChildren<{}>) {
  return <LubyconUIKitProvider>{children}</LubyconUIKitProvider>;
}`}
          </pre>
        </PostSection>
        <PostSection title={<PostSection.Title>선언적 렌더링 vs Hooks</PostSection.Title>}>
          <PostSection.Contents>
            Lubycon UI Kit의 많은 컴포넌트들은 선언적 렌더링을 지원하지만, 간혹 선언적 렌더링만으로
            처리하기에는 컴포넌트 렌더 트리가 장황하다고 느껴질 수도 있습니다.
            <br />
            그래서 이런 경우 컴포넌트 렌더 트리에 영향을 받지 않는 몇몇 컴포넌트들에 한해 사용자가
            선언적인 방법과 명령적인 방법을 선택해서 사용할 수 있도록 지원하고 있습니다.
          </PostSection.Contents>
          <PostSection.Subtitle>선언적 렌더링</PostSection.Subtitle>
          <pre>
            {`import React, { useState } from 'react';
import { Toast } from '@lubycon/ui-kit';

function Foo() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>토스트 열기</Button>
      <Toast show={show} message="토스트입니다" />
    </>
  );
}

export default Foo;`}
          </pre>
          <PostSection.Subtitle>Hooks</PostSection.Subtitle>
          <pre>
            {`import React from 'react';
import { useToast, Button } from '@lubycon/ui-kit';

function Foo() {
  const { openToast } = useToast();

  return (
    <Button onClick={() => {
      openToast({
        message: '토스트입니다',
      });
    }}>
      토스트 열기
    </Button>
  );
}

export default Foo;`}
          </pre>
        </PostSection>
      </div>
    </BasicLayout>
  );
};

export default GettingStartedPage;
