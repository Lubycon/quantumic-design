import React, { ReactElement, cloneElement, useRef } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalWindow from './ModalWindow';
import classnames from 'classnames';
import { generateID } from 'utils/index';
import { useEffect } from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  size?: 'small' | 'medium';
  children: ReactElement[];
  onOpen?: () => void;
  onClose?: () => void;
}

const Modal = ({ show, size = 'small', children, onClose }: ModalProps) => {
  const backdropRef = useRef(null);
  const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!backdropRef.current) return;
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

  return show ? (
    <div className={classnames('lubycon-modal')} tabIndex={-1} aria-hidden={true}>
      <ModalBackdrop onClick={onBackdropClick} ref={backdropRef} />
      <ModalWindow size={size}>
        {children.map((element) => {
          return cloneElement(element, { key: generateID('lubycon-modal__children'), size: size });
        })}
      </ModalWindow>
    </div>
  ) : null;
};

export default Modal;
export { default as ModalHeader } from './ModalHeader';
export { default as ModalContent } from './ModalContent';
export { default as ModalFooter } from './ModalFooter';
