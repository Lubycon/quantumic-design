import { css } from '@emotion/react';
import { ElementType, forwardRef, PropsWithRef, Ref } from 'react';
import { OverridableProps } from '../../types/OverridableProps';
import Flex, { FlexBaseProps } from '../Flex';

interface StackProps extends FlexBaseProps {
  gutter: number;
  selector?: string;
}

type Props<T extends ElementType = 'div'> = OverridableProps<T, StackProps>;
const Stack = <T extends ElementType = 'div'>(
  { direction = 'row', gutter: gutterSpace, selector, ...rest }: Props<T>,
  ref: Ref<any>
) => {
  return (
    <Flex
      ref={ref}
      css={css`
        gap: ${gutterSpace}px;
      `}
      direction={direction}
      {...rest}
    />
  );
};

export default forwardRef(Stack) as PropsWithRef<typeof Stack>;
