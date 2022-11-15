import { css } from '@emotion/react';
import { ElementType, forwardRef, PropsWithRef, Ref } from 'react';
import { OverridableProps } from '../../types/OverridableProps';
import Flex, { FlexBaseProps } from '../Flex';

interface StackProps extends FlexBaseProps {
  gap: number;
}

type Props<T extends ElementType = 'div'> = OverridableProps<T, StackProps>;
const Stack = <T extends ElementType = 'div'>({ gap, ...rest }: Props<T>, ref: Ref<any>) => {
  return (
    <Flex
      ref={ref}
      css={css`
        gap: ${gap}px;
      `}
      {...rest}
    />
  );
};

export default forwardRef(Stack) as PropsWithRef<typeof Stack>;
