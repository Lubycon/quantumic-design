import React, { Ref, forwardRef } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import Text from '../Text';
import { SemanticColor } from 'src/constants/colors';

interface ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
  type?: SemanticColor;
  htmlType?: 'button' | 'submit' | 'reset';
}
type ButtonProps = CombineElementProps<'button', ButtonBaseProps>;

const Button = (
  { size = 'small', disabled, style, type, htmlType, onClick, children, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={classnames(
        'lubycon-button',
        `lubycon-button--${size}`,
        `lubycon-button--type-${type ?? 'default'}`
      )}
      disabled={disabled}
      style={{ ...style }}
      ref={ref}
      onClick={onClick}
      type={htmlType}
      {...props}
    >
      <Text typography={size === 'large' ? 'p1' : 'p2'} fontWeight="bold">
        {children}
      </Text>
    </button>
  );
};

export default forwardRef(Button) as typeof Button;
