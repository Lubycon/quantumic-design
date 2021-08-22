import { ReactNode, isValidElement } from 'react';
import Text from '../../../../components/Text';
import { Typographys } from '../../../../utils/typography';
import { CombineElementProps } from '../../../../types/utils';
import { css } from '@emotion/react';
import { colors } from '../../../../constants/colors';

type ModalContentProps = CombineElementProps<
  'div',
  {
    size?: 'small' | 'medium';
    children?: ReactNode;
  }
>;

const ModalContent = ({ children, size, ...props }: ModalContentProps) => {
  const typography: Typographys = size === 'small' ? 'p2' : 'p1';

  return (
    <div
      css={css`
        color: ${colors.gray70};
        margin-bottom: 24px;
        white-space: pre-wrap;
      `}
      {...props}
    >
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </div>
  );
};

export default ModalContent;
