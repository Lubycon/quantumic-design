import React, { useState } from 'react';
import { Checkbox, Text } from 'src';

export const Controlled = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Text>Controlled state: {`${state}`}</Text>
      <Checkbox label={'체크박스'} onChange={(e) => setState(e.target.checked)} checked={state} />
    </div>
  );
};

export const Uncontrolled = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Text>Uncontrolled state: {`${state}`}</Text>
      <Checkbox label={'체크박스'} onChange={(e) => setState(e.target.checked)} />
    </div>
  );
};
