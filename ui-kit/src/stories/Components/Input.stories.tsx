import React, { useState } from 'react';
import { Input, Text, colors } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import Icon from 'src/components/Icon';
import { TextInputType } from 'components/Input';

export default {
  title: 'Components/Input',
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
  return (
    <div>
      <Input label="라벨이에요" />
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
          <Icon name="checkmark-circle" type="filled" color={colors.green50} size={20} />
        )
      }
    />
  );
};

const types: TextInputType[] = ['text', 'email', 'number', 'password', 'search', 'tel', 'url'];
const covertToTitlecase = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1, s.length)}`;
export const Types = () => {
  return (
    <div>
      <Text>
        모바일에서는 인풋의 타입에 따라 다른 키보드가 노출되니, 모바일 환경에서 확인해보시는 것을
        추천합니다.
      </Text>
      <ul>
        {types.map((type) => (
          <li key={type}>
            <Input label={covertToTitlecase(type)} type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const LeftAndRight = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
      <Input label={'Left Area'} left={<Icon name="musical-note" type="filled" />} />
      <Input label={'Right Area'} right={<Icon name="close-circle" type="filled" />} />
      <Input
        label={'Left And Right'}
        left={<Icon name="musical-note" type="filled" />}
        right={<Icon name="close-circle" type="filled" />}
      />
    </div>
  );
};
