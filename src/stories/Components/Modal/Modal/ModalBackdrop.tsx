import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../../constants/colors';

interface ModalBackdropProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalBackdrop = forwardRef<HTMLDivElement, ModalBackdropProps>(function ModalBackdrop(
  { onClick },
  ref
) {
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${colors.gray100};
        opacity: 0.5;
        z-index: 1000;
      `}
      aria-hidden={true}
      tabIndex={-1}
      onClick={onClick}
    />
  );
});

export default ModalBackdrop;
