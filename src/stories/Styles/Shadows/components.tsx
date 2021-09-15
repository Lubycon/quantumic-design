import { ReactElement } from 'react';
import Flex from '../../../components/Flex';

export const Box = ({ children, css }: { children: ReactElement; css: any }) => {
  return (
    <Flex
      direction="column"
      css={[
        {
          height: 80,
          borderRadius: 8,
          backgroundColor: '#fcfcfd',
          padding: 34,
        },
        css,
      ]}
    >
      {children}
    </Flex>
  );
};
