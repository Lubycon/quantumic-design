import React from 'react';
import classnames from 'classnames';
import Text from '../Text';

export type TooltipArrowDirection =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface Props {
  children: string;
  arrowDirection: TooltipArrowDirection;
}
const TooltipBody = ({ children, arrowDirection }: Props) => {
  return (
    <div
      className={classnames(
        'lubycon-tooltip__body',
        `lubycon-tooltip__body--arrow-${arrowDirection}`
      )}
    >
      <Text typography="caption">{children}</Text>
    </div>
  );
};

export default TooltipBody;
