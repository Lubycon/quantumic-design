import React from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';

interface CardContentProps {
  children?: ReactNode;
}
const CardContent = ({ children }: CardContentProps) => {
  return <div className={classnames('lubycon-card__content')}>{children}</div>;
};

export default CardContent;
