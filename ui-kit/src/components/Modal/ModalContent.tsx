import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Text from 'components/Text';

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium';
  children?: ReactNode;
  isCustom?: boolean;
}

const ModalContent = ({ children, isCustom = false, size }: ModalContentProps) => {
  const typography = size === 'small' ? 'p2' : 'p1';

  return (
    <div className={classnames('lubycon-modal__content')}>
      {isCustom ? children : <Text typography={typography}>{children}</Text>}
    </div>
  );
};

export default ModalContent;
