import React, { ReactElement, cloneElement, useRef, useCallback, useEffect, Children } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalWindow from './ModalWindow';
import { generateID } from '../../../../utils/index';
import { CombineElementProps } from '../../../../types/utils';
import TransitionMotion from '../../../../components/TransitionMotion';
import { css } from '@emotion/react';

export type ModalProps = CombineElementProps<
  'div',
  {
    show: boolean;
    size?: 'small' | 'medium';
    children: ReactElement | ReactElement[];
    onClose: () => void;
    onCloseTransitionEnd?: () => void;
  }
>;

const Modal = ({
  show,
  size = 'small',
  children,
  onClose,
  onCloseTransitionEnd,
  ...props
}: ModalProps) => {
  const backdropRef = useRef(null);

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (backdropRef.current == null) {
        return;
      } else if (event.target === backdropRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return (
    <div tabIndex={-1} aria-hidden={true}>
      <TransitionMotion
        flag={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        <ModalBackdrop onClick={handleBackdropClick} ref={backdropRef} />
      </TransitionMotion>
      <TransitionMotion
        flag={show}
        css={css`
          position: fixed;
          left: 50%;
          top: 50%;
          z-index: 1001;
        `}
        from={{ transform: 'translate(-50%, 100%)', opacity: 0 }}
        enter={{ transform: 'translate(-50%, -50%)', opacity: 1 }}
        leave={{ transform: 'translate(-50%, 100%)', opacity: 0 }}
        onDestroyed={() => onCloseTransitionEnd?.()}
      >
        <ModalWindow size={size} {...props}>
          {Children.map(children, (child) => {
            return cloneElement(child, {
              key: generateID('lubycon-modal__children'),
              size: size,
            });
          })}
        </ModalWindow>
      </TransitionMotion>
    </div>
  );
};

export default Modal;
export { default as ModalHeader } from './ModalHeader';
export { default as ModalContent } from './ModalContent';
export { default as ModalFooter } from './ModalFooter';
