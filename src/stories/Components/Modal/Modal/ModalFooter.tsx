import { ReactNode } from 'react';
import { CombineElementProps } from '../../../../types/utils';
import classnames from 'classnames';

type ModalFooterProps = CombineElementProps<
  'div',
  {
    children?: ReactNode;
  }
>;

const ModalFooter = ({ children, className, ...props }: ModalFooterProps) => {
  return (
    <div className={classnames('lubycon-modal__footer', className)} {...props}>
      {children}
    </div>
  );
};

export default ModalFooter;
