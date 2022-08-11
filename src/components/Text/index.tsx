import { css } from '@emotion/react';
import { CSSProperties } from '@emotion/react/node_modules/@emotion/serialize';
import { ElementType, Ref, forwardRef } from 'react';
import { OverridableProps } from '../../types/OverridableProps';

export const DEFAULT_ELEMENT = 'p' as const;

interface TextBaseProps {
  display?: CSSProperties['display'];
  lineHeight?: CSSProperties['lineHeight'];
  weight?: CSSProperties['fontWeight'];
  size?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  align?: CSSProperties['textAlign'];
}
type TextProps<T extends ElementType = typeof DEFAULT_ELEMENT> = OverridableProps<T, TextBaseProps>;

const Text = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  { display, lineHeight, weight, size, color, align, as, children, ...props }: TextProps<T>,
  ref: Ref<any>
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      role="text"
      css={css`
        display: ${display};
        font-weight: ${weight};
        line-height: ${lineHeight};
        font-size: ${typeof size === 'string' ? size : `${size}px`};
        color: ${color};
        text-align: ${align};
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default forwardRef(Text) as typeof Text;
