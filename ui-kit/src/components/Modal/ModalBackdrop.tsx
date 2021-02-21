import React, { Ref, forwardRef } from 'react';
import classnames from 'classnames';

interface ModalBackdropProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalBackdrop = ({ onClick }: ModalBackdropProps, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={classnames('lubycon-modal', 'lubycon-modal__overlay')}
      aria-hidden={true}
      tabIndex={-1}
      onClick={onClick}
    />
  );
};

export default forwardRef(ModalBackdrop);
