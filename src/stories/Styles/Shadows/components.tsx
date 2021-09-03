import { ComponentProps } from 'react';
import Flex from '../../../components/Flex';

export const Box = ({ children, ...rest }: ComponentProps<'div'>) => {
  return (
    <Flex
      direction="column"
      style={{
        height: 80,
        borderRadius: 8,
        backgroundColor: '#fcfcfd',
        padding: 34,
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
