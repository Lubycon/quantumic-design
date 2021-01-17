import React, { Ref, forwardRef } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import { Text } from '..';

interface ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
}
type ButtonProps = Omit<CombineElementProps<'button', ButtonBaseProps>, 'type'>;

const Button = (
  { size = 'small', disabled, style, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={classnames('lubycon-button', `${size}`)}
      disabled={disabled}
      style={style}
      ref={ref}
    >
      <Text typography={size === 'large' ? 'p1' : 'p2'} fontWeight="bold" {...props}></Text>
    </button>
  );
};

export default forwardRef(Button) as typeof Button;
