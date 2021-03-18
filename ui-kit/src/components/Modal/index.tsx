import React, { ReactElement, cloneElement, useRef, useCallback, useEffect } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalWindow from './ModalWindow';
import { generateID } from 'utils/index';
import { animated, useTransition } from 'react-spring';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  size?: 'small' | 'medium';
  children: ReactElement[];
  onOpen?: () => void;
  onClose?: () => void;
}

const Modal = ({ show, size = 'small', children, onOpen, onClose }: ModalProps) => {
  const backdropRef = useRef(null);
  const backdropTransition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const modalTransition = useTransition(show, null, {
    from: { transform: 'translate(-50%, 100%)', opacity: 0 },
    enter: { transform: 'translate(-50%, -50%)', opacity: 1 },
    leave: { transform: 'translate(-50%, 100%)', opacity: 0 },
  });

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (backdropRef.current == null) {
        return;
      } else if (event.target === backdropRef.current) {
        onClose?.();
      }
    },
    [onClose]
  );

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose?.();
    }
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

  return (
    <div className="lubycon-modal" tabIndex={-1} aria-hidden={true}>
      {backdropTransition.map(
        ({ item: show, key, props }) =>
          show && (
            <animated.div key={key} style={props}>
              <ModalBackdrop onClick={handleBackdropClick} ref={backdropRef} />
            </animated.div>
          )
      )}
      {modalTransition.map(
        ({ item: show, key, props }) =>
          show && (
            <animated.div key={key} style={props} className="lubycon-modal__window-wrapper">
              <ModalWindow size={size}>
                {children.map((element) => {
                  return cloneElement(element, {
                    key: generateID('lubycon-modal__children'),
                    size: size,
                  });
                })}
              </ModalWindow>
            </animated.div>
          )
      )}
    </div>
  );
};

export default Modal;
export { default as ModalHeader } from './ModalHeader';
export { default as ModalContent } from './ModalContent';
export { default as ModalFooter } from './ModalFooter';
