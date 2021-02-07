import React, { ReactNode } from 'react';
import Button from 'components/Button';
import classnames from 'classnames';
import { colors } from 'constants/colors';

interface ModalProps {
  open: boolean;
  title?: string;
  size?: 'small' | 'medium';
  buttonText?: string;
  children?: ReactNode;
  cancel?: boolean;
  onClose?: () => void;
  handleClick: () => void;
}

const Modal = ({
  open = false,
  size = 'small',
  children,
  title,
  buttonText = '저장하기',
  cancel = true,
  onClose,
  handleClick,
}: ModalProps) => {
  const visibleClass = open ? 'lubycon-modal__visible' : undefined;

  return (
    <>
      <div
        className={classnames('lubycon-modal', 'lubycon-modal__overlay', visibleClass)}
        aria-hidden={true}
        tabIndex={-1}
      />
      <div className={classnames('lubycon-modal', visibleClass)} tabIndex={-1}>
        <div
          className={classnames(
            'lubycon-modal__content',
            `lubycon-modal__content__${size}`,
            'lubycon-shadow--3'
          )}
        >
          {title && (
            <h2 className={classnames('lubycon-modal__title', 'lubycon-typography--subtitle')}>
              {title}
            </h2>
          )}
          <p className={classnames('lubycon-modal__description', 'lubycon-typography--p2')}>
            {children}
          </p>
          <div className="lubycon-modal__buttons">
            {cancel && (
              <Button
                size={size}
                style={{ color: colors.gray80, background: 'transparent', marginRight: '4px' }}
                onClick={onClose}
              >
                취소
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
