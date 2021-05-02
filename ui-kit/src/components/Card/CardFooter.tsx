import React from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';

type CardFooterProps = CombineElementProps<
  'div',
  {
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
  }
>;
const CardFooter = ({
  children,
  justifyContent = 'flex-start',
  className,
  ...props
}: CardFooterProps) => {
  return (
    <div
      className={classnames(
        'lubycon-card__footer',
        `lubycon-card__footer--align-${justifyContent}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardFooter;
