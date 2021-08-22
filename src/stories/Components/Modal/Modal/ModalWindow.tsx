import { ReactNode } from 'react';
import { CombineElementProps } from '../../../../types/utils';
import { css } from '@emotion/react';
import { colors } from '../../../../constants/colors';

type ModalWindowProps = CombineElementProps<
  'div',
  {
    children: ReactNode;
    size: 'small' | 'medium';
  }
>;

const ModalWindow = ({ children, size, ...props }: ModalWindowProps) => {
  return (
    <div
      css={css`
        background-color: ${colors.gray10};
        border-radius: 4px;
        box-sizing: border-box;
        width: ${size === 'small' ? 280 : 400}px;
        padding: ${size === 'small' ? '16px 20px' : '20px 24px'};
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
