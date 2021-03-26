import BasicLayout from 'components/BasicLayout';
import PostSection from 'components/PostSection';
import { logoSrc } from 'constants/resources';
import React from 'react';

const HomePage = () => {
  return (
    <BasicLayout>
      <div css={{ paddingTop: 94, paddingLeft: 50, paddingRight: 30 }}>
        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logoSrc} css={{ width: 320, marginBottom: 94 }} />
        </div>
        <div>
          <PostSection title={<PostSection.Title>Introduction</PostSection.Title>}>
            <PostSection.Contents>
              Lubycon UI Kit은 한국의 고유 문자인 한글을 기반으로 설계된 UI 라이브러리입니다. 국내
              디자이너와 개발자들이 동일한 도메인 언어로 커뮤니케이션하는 것을 지향하며, 이를 위해
              FE 라이브러리와 Figma 플러그인을 동시에 제공합니다.
            </PostSection.Contents>
          </PostSection>
          <PostSection title={<PostSection.Title>Guidelines</PostSection.Title>}>
            <PostSection.Contents>
              Lubycon UI Kit은 한국의 고유 문자인 한글을 기반으로 설계된 UI 라이브러리입니다. 국내
              디자이너와 개발자들이 동일한 도메인 언어로 커뮤니케이션하는 것을 지향하며, 이를 위해
              FE 라이브러리와 Figma 플러그인을 동시에 제공합니다.
            </PostSection.Contents>
          </PostSection>
          <PostSection title={<PostSection.Title>Links</PostSection.Title>}>
            <PostSection.Contents>
              Lubycon UI Kit은 한국의 고유 문자인 한글을 기반으로 설계된 UI 라이브러리입니다. 국내
              디자이너와 개발자들이 동일한 도메인 언어로 커뮤니케이션하는 것을 지향하며, 이를 위해
              FE 라이브러리와 Figma 플러그인을 동시에 제공합니다.
            </PostSection.Contents>
          </PostSection>
        </div>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
