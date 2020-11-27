import React, { ElementType, Ref } from 'react';
import { DEFAULT_ELEMENT, FontWeights, Typographys } from './types';
import { forwardRef } from 'react';
import { OverridableProps } from 'src/types/OverridableProps';

interface TextBaseProps {
  typography?: Typographys;
  fontWeight?: FontWeights;
}
type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, TextBaseProps>;

const Text = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  { typography, fontWeight, as, ...props }: TextProps<T>,
  ref: Ref<HTMLButtonElement>
) => {
  console.log(typography, fontWeight);
  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;
  return <Component ref={ref} {...props} />;
};

export default forwardRef(Text) as typeof Text;
