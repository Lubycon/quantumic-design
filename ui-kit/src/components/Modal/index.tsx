import React, { Children, ReactElement, cloneElement, useRef } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalWindow from './ModalWindow';
import classnames from 'classnames';
import { generateID } from 'utils/index';
import { useEffect } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  size?: 'small' | 'medium';
  children: ReactElement | ReactElement[];
  onOpen?: () => void;
  onClose?: () => void;
}

const Modal = ({ show, size = 'small', children, onOpen, onClose }: ModalProps) => {
  const backdropRef = useRef(null);
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (backdropRef.current == null) return;
    if (event.target === backdropRef.current) onClose?.();
  };

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose?.();
  };
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  useEffect(() => {
    if (show === true) {
      onOpen?.();
    }
  }, [show]);

  return show ? (
    <div className={classnames('lubycon-modal')} tabIndex={-1} aria-hidden={true}>
      <ModalBackdrop onClick={handleBackdropClick} ref={backdropRef} />
      <ModalWindow size={size}>
        {Children.map(children, (child) =>
          cloneElement(child, { size: size, key: generateID('lubycon-modal__children') })
        )}
      </ModalWindow>
    </div>
  ) : null;
};

export default Modal;
export { default as ModalHeader } from './ModalHeader';
export { default as ModalContent } from './ModalContent';
export { default as ModalFooter } from './ModalFooter';
