import React, { isValidElement, ReactNode } from 'react';
import classnames from 'classnames';
import Text from '../Text';

interface Props {
  children: ReactNode;
}

const ToastBody = ({ children }: Props) => {
  return (
    <div className={classnames('lubycon-toast--inbox', 'lubycon-shadow--3')}>
      {isValidElement(children) ? children : <Text typography="p2">{children}</Text>}
    </div>
  );
};

export default ToastBody;
