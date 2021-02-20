import React, { forwardRef, Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import { generateID } from 'src/utils/generateID';
import Text from '../Text';

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
      className={classnames('lubycon-switch', `lubycon-switch--display-${display}`)}
      style={style}
    >
      <input className="lubycon-switch__input" ref={ref} type="checkbox" {...props} id={id} />
      <span className="lubycon-switch__slider" />
      <span className="lubycon-switch__label">{label ? <Text as="span">{label}</Text> : null}</span>
    </label>
  );
};

export default forwardRef(Switch) as typeof Switch;
