import { CSSProperties, ElementType, forwardRef, PropsWithRef, Ref } from 'react';
import { OverridableProps } from '../../types/OverridableProps';

export interface FlexBaseProps {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

export const DEFAULT_ELEMENT = 'div' as const;

type Props<T extends ElementType = 'div'> = OverridableProps<T, FlexBaseProps>;
const Flex = <T extends ElementType = 'div'>(
  {
    direction = 'row',
    align = 'flex-start',
    justify = 'flex-start',
    children,
    as,
    ...rest
  }: Props<T>,
  ref: Ref<any>
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      css={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default forwardRef(Flex) as PropsWithRef<typeof Flex>;
