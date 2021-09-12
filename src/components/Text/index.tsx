import { CSSProperties } from '@emotion/react/node_modules/@emotion/serialize';
import { ElementType, Ref, forwardRef } from 'react';
import { OverridableProps } from '../../types/OverridableProps';

export const DEFAULT_ELEMENT = 'span' as const;

interface TextBaseProps {
  lineHeight?: CSSProperties['lineHeight'];
  weight?: CSSProperties['fontWeight'];
  size?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  align?: CSSProperties['textAlign'];
}
type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, TextBaseProps>;

const Text = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  { lineHeight, fontWeight, size, color, align, as, children, ...props }: TextProps<T>,
  ref: Ref<any>
) => {
  const target = as ?? DEFAULT_ELEMENT;
  const Component = target;
  return (
    <Component
      ref={ref}
      role="text"
      css={{
        fontWeight,
        lineHeight,
        fontSize: size,
        color,
        textAlign: align,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default forwardRef(Text) as typeof Text;
