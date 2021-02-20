import React, { useEffect, useRef } from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import classnames from 'classnames';
import { colors } from 'constants/colors';
import ModalBackdrop from './ModalBackdrop';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  modalIsNested?: boolean;
  title?: string;
  message?: string;
  size?: 'small' | 'medium';
  cancelButton?: boolean;
  cancelButtonText?: string;
  buttonText?: string;
  handleClick?: () => void;
  onClose?: () => void;
}

const Modal = ({
  show = false,
  modalIsNested = false,
  title,
  message,
  size = 'small',
  cancelButton = false,
  cancelButtonText = '취소',
  buttonText = '저장하기',
  handleClick,
  onClose,
  style,
}: ModalProps) => {
  const visibleClass = show ? 'lubycon-modal--visible' : null;

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose?.();
  };
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  const modalWindowRef = useRef<HTMLDivElement>(null);
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalWindowRef.current) onClose?.();
  };

  return (
    <>
      {!modalIsNested && <ModalBackdrop visibleClass={visibleClass} />}
      <div
        ref={modalWindowRef}
        onClick={handleBackdropClick}
        className={classnames('lubycon-modal', visibleClass)}
        tabIndex={-1}
        aria-hidden={true}
      >
        <div
          className={classnames(
            'lubycon-modal__window',
            `lubycon-modal__window--${size}`,
            'lubycon-shadow--3'
          )}
          style={style}
        >
          {title && (
            <h2 className={classnames('lubycon-modal__title', 'lubycon-typography--subtitle')}>
              <Text typography={size === 'small' ? 'subtitle' : 'h6'}>{title}</Text>
            </h2>
          )}
          <div className={classnames('lubycon-modal__message', 'lubycon-typography--p2')}>
            <Text typography={size === 'small' ? 'p2' : 'p1'}>{message}</Text>
          </div>
          <div className="lubycon-modal__buttons">
            {cancelButton && (
              <Button
                size={size}
                style={{ color: colors.gray80, background: 'transparent', marginRight: '4px' }}
                onClick={onClose}
              >
                {cancelButtonText}
              </Button>
            )}
            <Button size={size} onClick={handleClick}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
