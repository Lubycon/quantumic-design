import React, { forwardRef, Ref } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';
import { generateID } from 'utils/index';
import Text from '../Text';

interface CheckboxBaseProps {
  label?: string;
  display?: 'block' | 'inline';
}
type CheckboxProps = Omit<CombineElementProps<'input', CheckboxBaseProps>, 'type'>;

const Checkbox = (
  { label, display = 'block', style, disabled, ...props }: CheckboxProps,
  ref: Ref<HTMLInputElement>
) => {
  const id = generateID('checkbox');

  return (
    <label
      role="checkbox"
      className={classnames('lubycon-checkbox', `lubycon-checkbox--display-${display}`, {
        'lubycon-checkbox--disabled': disabled,
      })}
      style={style}
    >
      <span className="lubycon-checkbox__input">
        <input id={id} name="checkbox" ref={ref} type="checkbox" {...props} disabled={disabled} />
        <span className="lubycon-checkbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="none" stroke="#ffffff" strokeWidth="2" d="M1 4.2 L4.51852 8 L11 1" />
          </svg>
        </span>
      </span>
      {label ? <Text>{label}</Text> : null}
    </label>
  );
};

export default forwardRef(Checkbox) as typeof Checkbox;
