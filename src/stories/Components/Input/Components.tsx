import React, { useState } from 'react';
import { Text, Input, Icon, colors } from 'src';

export const Preview = () => {
  const [state, setState] = useState('');
  return (
    <div>
      <Text style={{ marginBottom: 16, display: 'block' }}>입력된 값: {state}</Text>
      <Input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
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
