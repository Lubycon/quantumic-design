import React, { ReactNode, isValidElement } from 'react';
import classnames from 'classnames';
import Text from '../Text';
import { CombineElementProps } from 'src/types/utils';

type CardHeaderProps = CombineElementProps<
  'div',
  {
    children?: ReactNode;
  }
>;
const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={classnames('lubycon-card__header', className)} {...props}>
      {isValidElement(children) ? children : <Text typography="h6">{children}</Text>}
    </div>
  );
};

export default CardHeader;
