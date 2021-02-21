import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface ModalWindowProps {
  children: ReactNode;
  size: 'small' | 'medium';
}

const ModalWindow = ({ children, size }: ModalWindowProps) => {
  return (
    <div className={classnames('lubycon-modal__window', `lubycon-modal__window--${size}`)}>
      {children}
    </div>
  );
};

export default ModalWindow;
