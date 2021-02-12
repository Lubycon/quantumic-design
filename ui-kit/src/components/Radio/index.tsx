import React, { forwardRef, Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import clxs from 'classnames';
import { generateID } from 'src/utils/generateID';
import Text from '../Text';

interface RadioBaseProps {
  label?: string;
  display?: 'block' | 'inline';
}
type RadioProps = Omit<CombineElementProps<'input', RadioBaseProps>, 'type'>;

const Radio = (
  { label, display = 'block', style, disabled, ...props }: RadioProps,
  ref: Ref<HTMLInputElement>
) => {
  const id = generateID('radio');

  return (
    <span
      className={clxs('lubycon-radio', `lubycon-radio--display-${display}`, {
        'lubycon-radio--disabled': disabled,
      })}
      style={style}
    >
      <label htmlFor={id} className="lubycon-radio--label">
        <input
          className="lubycon-radio--input"
          ref={ref}
          type="radio"
          disabled={disabled}
          {...props}
          id={id}
        />
        <div className="lubycon-radio--indicator"></div>
        {label ? <Text>{label}</Text> : null}
      </label>
    </span>
  );
};

export default forwardRef(Radio) as typeof Radio;
