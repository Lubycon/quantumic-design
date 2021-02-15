import React, { useState } from 'react';
import { Input, Text, colors } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import Icon from 'src/components/Icon';
import { checkmarkCircle } from 'ionicons/icons';

export default {
  title: 'Lubycon UI Kit/Input',
} as Meta;

export const Default = () => {
  const [state, setState] = useState('');
  return (
    <div>
      <Text style={{ marginBottom: 16, display: 'block' }}>입력된 값: {state}</Text>
      <Input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

export const Label = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Text style={{ marginBottom: 16, display: 'block' }}>입력된 값: {value}</Text>
      <Input label="라벨이에요" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export const Placeholder = () => {
  return <Input label="라벨이에요" placeholder="텍스트를 입력하세요" />;
};

export const Disabled = () => {
  return <Input label="라벨이에요" placeholder="텍스트를 입력하세요" disabled={true} />;
};

export const Error = () => {
  const [value, setValue] = useState('');
  const isError = value === '';

  return (
    <Input
      style={{ width: 300 }}
      label="라벨이에요"
      placeholder="텍스트를 입력하세요"
      hasError={isError}
      description={isError ? '빈 문자열은 허용되지 않습니다' : undefined}
      onChange={(e) => setValue(e.target.value)}
      right={
        isError ? null : (
          <Icon icon={checkmarkCircle} type="filled" color={colors.green50} size={20} />
        )
      }
    />
  );
};
