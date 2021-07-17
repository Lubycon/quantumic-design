import React, { useState } from 'react';
import { Selection, Text } from 'src';

export const Preview = () => {
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
