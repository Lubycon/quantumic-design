import React, { ElementType, Ref } from 'react';
import { DEFAULT_ELEMENT, FontWeights, Typographys } from './types';
import { forwardRef } from 'react';
import { OverridableProps } from 'types/OverridableProps';
import clxs from 'classnames';

interface TextBaseProps {
  typography?: Typographys;
  fontWeight?: FontWeights;
}
type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, TextBaseProps>;

const Text = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  { typography = 'content', fontWeight = 'regular', as, ...props }: TextProps<T>,
  ref: Ref<T>
) => {
  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;
  return (
    <Component
      ref={ref}
      className={clxs('lubycon-text', {
        [`lubycon-typography--${typography}`]: typography != null,
        [`lubycon-text--font-weight--${fontWeight}`]: fontWeight != null,
      })}
      {...props}
    />
  );
};

export default forwardRef(Text);
