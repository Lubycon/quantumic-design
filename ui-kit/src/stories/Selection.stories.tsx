import React, { useMemo, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Selection, Text } from 'src';

export default {
  title: 'Lubycon UI Kit/Selection',
} as Meta;

export const Default = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <Selection onChange={(e) => setState(e.target.value)}>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
      </Selection>
      <Text style={{ display: 'block' }}>선택된 값은 {state}입니다.</Text>
    </div>
  );
};

export const Sizes = () => {
  const selections = useMemo(() => {
    return ['small', 'medium', 'large'].map((size) => (
      <li key={size} style={{ marginBottom: 16, listStyle: ' none' }}>
        <Selection placeholder={size} size={size as any}>
          <option>옵션1</option>
          <option>옵션2</option>
          <option>옵션3</option>
        </Selection>
      </li>
    ));
  }, []);
  return <ul>{selections}</ul>;
};

export const Disabled = () => {
  return (
    <div>
      <Selection disabled>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
      </Selection>
    </div>
  );
};

export const Placeholder = () => {
  return (
    <div>
      <Selection placeholder="어느 곳에 사시나요?">
        <option>서울</option>
        <option>경기</option>
        <option>인천</option>
        <option>충남</option>
      </Selection>
    </div>
  );
};
