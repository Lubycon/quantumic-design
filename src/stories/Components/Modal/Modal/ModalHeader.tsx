import { ReactNode, isValidElement } from 'react';
import Text from '../../../../components/Text';
import { Typographys } from '../../../../utils/typography';
import { CombineElementProps } from '../../../../types/utils';
import { css } from '@emotion/react';
import { colors } from '../../../../constants/colors';

type ModalHeaderProps = CombineElementProps<
  'div',
  {
    size?: 'small' | 'medium';
    children?: ReactNode;
  }
>;

const ModalHeader = ({ size, children, ...props }: ModalHeaderProps) => {
  const typography: Typographys = size === 'small' ? 'subtitle' : 'h6';

  return (
    <header
      css={css`
        color: ${colors.gray100};
        margin-top: 0;
        margin-bottom: 12px;
      `}
      {...props}
    >
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </header>
  );
};

export default ModalHeader;
