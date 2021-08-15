import { ReactNode } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from '../../../../types/utils';

type ModalWindowProps = CombineElementProps<
  'div',
  {
    children: ReactNode;
    size: 'small' | 'medium';
  }
>;

const ModalWindow = ({ children, size, className, ...props }: ModalWindowProps) => {
  return (
    <div
      className={classnames('lubycon-modal__window', `lubycon-modal__window--${size}`, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
