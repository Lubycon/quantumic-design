import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import clxs from 'classnames';
import { generateID } from 'src/utils/generateID';
import { Text } from '..';

interface SwitchBaseProps {
  label?: string;
  display?: 'block' | 'inline';
}
type SwitchProps = Omit<CombineElementProps<'input', SwitchBaseProps>, 'type'>;

const Switch = (
  { label, display = 'block', style, ...props }: SwitchProps,
  ref: Ref<HTMLInputElement>
) => {
  const id = generateID('switch');

  return (
    <label
      role="switch"
      className={clxs('lubycon-switch', `lubycon-switch--display-${display}`)}
      style={style}
    >
      <input className="lubycon-switch--input" ref={ref} type="checkbox" {...props} id={id} />
      <span className="lubycon-switch--slider" />
      {label ? <Text as="span">{label}</Text> : null}
    </label>
  );
};

export default forwardRef(Switch) as typeof Switch;
