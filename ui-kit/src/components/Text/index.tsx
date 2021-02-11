import React, { ElementType, Ref, forwardRef } from 'react';
import { DEFAULT_ELEMENT, FontWeights, Typographys } from './types';
import { OverridableProps } from 'types/OverridableProps';
import classnames from 'classnames';

interface TextBaseProps {
  typography?: Typographys;
  fontWeight?: FontWeights;
}
type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, TextBaseProps>;

const Text = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  { typography = 'p1', fontWeight = 'regular', as, className, ...props }: TextProps<T>,
  ref: Ref<any>
) => {
  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;
  return (
    <Component
      ref={ref}
      className={classnames(
        'lubycon-text',
        {
          [`lubycon-typography--${typography}`]: typography != null,
          [`lubycon-text--font-weight--${fontWeight}`]: fontWeight != null,
        },
        className
      )}
      {...props}
    />
  );
};

export default forwardRef(Text) as typeof Text;
