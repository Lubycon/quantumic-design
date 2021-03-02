import React, { ReactNode } from 'react';

interface ModalFooterProps {
  children?: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="lubycon-modal__footer">{children}</div>;
};

export default ModalFooter;
