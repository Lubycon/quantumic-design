import { CSSProperties, ElementType, forwardRef, PropsWithRef, Ref } from 'react';
import { OverridableProps } from 'src/types/OverridableProps';

interface FlexBaseProps {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

type Props<T extends ElementType = 'div'> = OverridableProps<T, FlexBaseProps>;
const Flex = <T extends ElementType = 'div'>(
  { direction = 'row', align = 'flex-start', justify = 'flex-start', children, ...rest }: Props<T>,
  ref: Ref<any>
) => {
  return (
    <div
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
    </div>
  );
};

export default forwardRef(Flex) as PropsWithRef<typeof Flex>;
