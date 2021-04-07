import React, { ReactNode, isValidElement } from 'react';
import Text from 'components/Text';
import { Typographys } from 'components/Text/types';

interface ModalHeaderProps {
  size?: 'small' | 'medium';
  children?: ReactNode;
}

const ModalHeader = ({ size, children }: ModalHeaderProps) => {
  const typography: Typographys = size === 'small' ? 'subtitle' : 'h6';

  return (
    <header className="lubycon-modal__title">
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </header>
  );
};

export default ModalHeader;
