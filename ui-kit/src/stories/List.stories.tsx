import React from 'react';
import { Button, List, ListItem } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import { ListItemImage } from 'src/components/List';
import Icon from 'src/components/Icon';
import { chevronForward } from 'ionicons/icons';
import { colors } from 'src/constants/colors';

export default {
  title: 'Lubycon UI Kit/List',
} as Meta;

const DummyItem = ({ onClick }: { onClick?: () => void }) => (
  <ListItem
    title="리스트 제목"
    content="여기에 내용이 들어갑니다"
    caption="캡션입니다"
    onClick={onClick}
  />
);
const DummyItemWithoutCaption = () => (
  <ListItem title="리스트 제목" content="여기에 내용이 들어갑니다" />
);
const DummyItemWithoutTitle = () => (
  <ListItem content="여기에 내용이 들어갑니다" caption="캡션입니다" />
);
const noop = () => {};

export const Default = () => {
  return (
    <List>
      <ListItem title="루비콘 UI Kit" content="리스트 컴포넌트" caption="5일전" />
      <DummyItem />
      <DummyItem />
      <DummyItem />
      <DummyItem />
    </List>
  );
};

export const WithoutCaption = () => {
  return (
    <List>
      <ListItem title="루비콘 UI Kit" content="리스트 컴포넌트" />
      <DummyItemWithoutCaption />
      <DummyItemWithoutCaption />
      <DummyItemWithoutCaption />
      <DummyItemWithoutCaption />
    </List>
  );
};

export const WithoutTitle = () => {
  return (
    <List>
      <ListItem content="리스트 컴포넌트" caption="5일전" />
      <DummyItemWithoutTitle />
      <DummyItemWithoutTitle />
      <DummyItemWithoutTitle />
      <DummyItemWithoutTitle />
    </List>
  );
};

export const LeftRight = () => {
  return (
    <List>
      <ListItem
        left={<ListItemImage src="http://cogulmars.cafe24.com/img/04about_img01.png" />}
        title="썸네일 조합형"
        content="UI Kit에서 제공되는 이미지 컴포넌트를 사용한 예시입니다"
      />
      <ListItem
        left={<ListItemImage src="http://cogulmars.cafe24.com/img/04about_img01.png" />}
        title="썸네일 조합형"
        content="UI Kit에서 제공되는 이미지 컴포넌트를 사용한 예시입니다"
        caption="5일전"
      />
      <ListItem
        left={
          <img
            src="http://cogulmars.cafe24.com/img/04about_img01.png"
            style={{ width: 48, borderRadius: 4 }}
          />
        }
        title="썸네일 조합형"
        content="일반 img 태그를 사용한 예시입니다"
        caption="5일전"
      />
      <ListItem
        title="버튼 조합형"
        content="자세히 보려면 클릭하세요"
        right={<Icon icon={chevronForward} type="outline" size={24} color={colors.gray60} />}
        onClick={noop}
      />
      <ListItem
        title="버튼 조합형 자유"
        content="자세히 보려면 클릭하세요"
        right={<Button size="small">보러가기</Button>}
        onClick={noop}
      />
      <ListItem
        left={<ListItemImage src="http://cogulmars.cafe24.com/img/04about_img01.png" />}
        title="썸네일 + 버튼 조합형"
        content="자세히 보려면 클릭하세요"
        right={<Icon icon={chevronForward} type="outline" size={24} color={colors.gray60} />}
        onClick={noop}
      />
    </List>
  );
};

export const Clickable = () => {
  return (
    <List>
      <ListItem title="루비콘 UI Kit" content="리스트 컴포넌트" caption="5일전" onClick={noop} />
      <DummyItem onClick={noop} />
      <DummyItem onClick={noop} />
      <DummyItem onClick={noop} />
      <DummyItem onClick={noop} />
    </List>
  );
};

export const Multiline = () => {
  return (
    <List style={{ maxWidth: 375 }}>
      <ListItem
        title="루비콘 UI Kit"
        content="리스트 컴포넌트의 내용이 두 줄이 넘어가면 말줄임으로 처리됩니다. 루비콘 UI kit 은 오픈소스로 배포되는 한국형 라이브러리입니다"
        caption="5일전"
      />
      <DummyItem />
      <DummyItem />
      <DummyItem />
      <DummyItem />
    </List>
  );
};
