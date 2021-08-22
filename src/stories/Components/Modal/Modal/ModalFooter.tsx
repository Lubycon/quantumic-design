import { ReactNode } from 'react';
import { CombineElementProps } from '../../../../types/utils';
import { css } from '@emotion/react';

type ModalFooterProps = CombineElementProps<
  'div',
  {
    children?: ReactNode;
  }
>;

const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
