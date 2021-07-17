import React from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';

type CardContentProps = CombineElementProps<
  'div',
  {
    children?: ReactNode;
  }
>;
const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={classnames('lubycon-card__content', className)} {...props}>
      {children}
    </div>
  );
};

export default CardContent;
