import { ElementType, forwardRef, PropsWithRef, Ref } from 'react';
import { OverridableProps } from '../../types/OverridableProps';

import Flex, { FlexBaseProps } from '../Flex';
import { gutter, convertFlexDirectionToGutterDirection } from '../../utils/gutter';

interface StackProps extends FlexBaseProps {
  gutter: number;
  selector?: string;
}

type Props<T extends ElementType = 'div'> = OverridableProps<T, StackProps>;
const Stack = <T extends ElementType = 'div'>(
  { direction = 'row', gutter: gutterSpace, selector, ...rest }: Props<T>,
  ref: Ref<any>
) => {
  const gutterDirection = convertFlexDirectionToGutterDirection(direction);
  return (
    <Flex
      ref={ref}
      css={gutter({ direction: gutterDirection, space: gutterSpace, selector })}
      direction={direction}
      {...rest}
    />
  );
};

export default forwardRef(Stack) as PropsWithRef<typeof Stack>;
