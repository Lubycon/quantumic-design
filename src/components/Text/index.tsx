import { ElementType, Ref, forwardRef } from 'react';
import { OverridableProps } from '../../types/OverridableProps';
import {
  getFontWeightCss,
  getTypographyCss,
  FontWeights,
  Typographys,
} from '../../utils/typography';

export const DEFAULT_ELEMENT = 'span' as const;

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
      css={{
        ...getFontWeightCss(fontWeight),
        ...getTypographyCss(typography),
      }}
      {...props}
    />
  );
};

export default forwardRef(Text) as typeof Text;
