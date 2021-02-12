import React, { forwardRef, Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
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
      className={classnames('lubycon-radio', `lubycon-radio--display-${display}`, {
        'lubycon-radio--disabled': disabled,
      })}
      style={style}
    >
      <label htmlFor={id} className="lubycon-radio__label">
        <input
          className="lubycon-radio__input"
          ref={ref}
          type="radio"
          disabled={disabled}
          {...props}
          id={id}
        />
        <div className="lubycon-radio__indicator"></div>
        {label ? <Text>{label}</Text> : null}
      </label>
    </span>
  );
};

export default forwardRef(Radio) as typeof Radio;
