import React from 'react';
import { List, ListItem } from 'src';
import { Meta } from '@storybook/react/types-6-0';

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
