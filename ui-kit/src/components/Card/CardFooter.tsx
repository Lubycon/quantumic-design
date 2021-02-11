import React from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';

interface CardFooterProps {
  children?: ReactNode;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
}
const CardFooter = ({ children, justifyContent = 'flex-start' }: CardFooterProps) => {
  return (
    <div
      className={classnames(
        'lubycon-card__footer',
        `lubycon-card__footer--align-${justifyContent}`
      )}
    >
      {children}
    </div>
  );
};

export default CardFooter;
