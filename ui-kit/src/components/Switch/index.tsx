import React, { forwardRef } from 'react';
import { Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import clxs from 'classnames';
import { generateID } from 'src/utils/generateID';

interface SwitchBaseProps {
  label?: string;
}
type SwitchProps = Omit<CombineElementProps<'input', SwitchBaseProps>, 'type'>;

const Switch = ({ style, ...props }: SwitchProps, ref: Ref<HTMLInputElement>) => {
  const id = generateID('switch');

  return (
    <label role="switch" className={clxs('lubycon-switch')} style={style}>
      <input className="lubycon-switch--input" ref={ref} type="checkbox" {...props} id={id} />
      <span className="lubycon-switch--slider" />
    </label>
  );
};

export default forwardRef(Switch) as typeof Switch;
