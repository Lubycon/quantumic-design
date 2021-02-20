import React from 'react';
import classnames from 'classnames';

interface OverlayProps {
  visibleClass: string | null;
}

const ModalBackdrop = ({ visibleClass }: OverlayProps) => {
  return (
    <div
      className={classnames('lubycon-modal', 'lubycon-modal__overlay', visibleClass)}
      aria-hidden={true}
      tabIndex={-1}
    />
  );
};

export default ModalBackdrop;
