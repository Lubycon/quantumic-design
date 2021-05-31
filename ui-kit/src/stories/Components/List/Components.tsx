import React from 'react';
import { ListItem } from 'src';

export const DummyItem = ({ onClick }: { onClick?: () => void }) => (
  <ListItem
    title="리스트 제목"
    content="여기에 내용이 들어갑니다"
    caption="캡션입니다"
    onClick={onClick}
  />
);
export const DummyItemWithoutCaption = () => (
  <ListItem title="리스트 제목" content="여기에 내용이 들어갑니다" />
);
export const DummyItemWithoutTitle = () => (
  <ListItem content="여기에 내용이 들어갑니다" caption="캡션입니다" />
);
export const noop = () => {};
