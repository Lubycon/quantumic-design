import React, { ReactNode, isValidElement } from 'react';
import classnames from 'classnames';
import Text from 'components/Text';
import { Typographys } from 'components/Text/types';
import { CombineElementProps } from 'types/utils';

type ModalContentProps = CombineElementProps<
  'div',
  {
    size?: 'small' | 'medium';
    children?: ReactNode;
  }
>;

const ModalContent = ({ children, size, className, ...props }: ModalContentProps) => {
  const typography: Typographys = size === 'small' ? 'p2' : 'p1';

  return (
    <div className={classnames('lubycon-modal__content', className)} {...props}>
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </div>
  );
};

export default ModalContent;
