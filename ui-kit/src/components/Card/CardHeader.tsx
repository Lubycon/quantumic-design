import React, { ReactNode, isValidElement } from 'react';
import classnames from 'classnames';
import Text from '../Text';

interface CardHeaderProps {
  children?: ReactNode;
}
const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className={classnames('lubycon-card__header')}>
      {isValidElement(children) ? children : <Text typography="h6">{children}</Text>}
    </div>
  );
};

export default CardHeader;
