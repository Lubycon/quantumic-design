import React, { Ref, forwardRef } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import Text from '../Text';

interface ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
}
type ButtonProps = CombineElementProps<'button', ButtonBaseProps>;

const Button = (
  { size = 'small', disabled, style, onClick, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={classnames('lubycon-button', `lubycon-button__${size}`)}
      disabled={disabled}
      style={style}
      ref={ref}
      onClick={onClick}
    >
      <Text typography={size === 'large' ? 'p1' : 'p2'} fontWeight="bold" {...props}></Text>
    </button>
  );
};

export default forwardRef(Button) as typeof Button;
