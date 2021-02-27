import React, { ReactNode, isValidElement } from 'react';
import classnames from 'classnames';
import Text from 'components/Text';
import { Typographys } from 'components/Text/types';
import { CombineElementProps } from 'types/utils';

interface BaseProps {
  size?: 'small' | 'medium';
  children?: ReactNode;
}

type ModalContentProps = CombineElementProps<'div', BaseProps>;

const ModalContent = ({ children, size }: ModalContentProps) => {
  const typography: Typographys = size === 'small' ? 'p2' : 'p1';

  return (
    <div className={classnames('lubycon-modal__content')}>
      {isValidElement(children) ? children : <Text typography={typography}>{children}</Text>}
    </div>
  );
};

export default ModalContent;
