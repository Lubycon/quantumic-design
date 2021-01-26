import React, { forwardRef, Ref } from 'react';
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
const TooltipBody = forwardRef(function TooltipBody(
  { children, arrowDirection }: Props,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={forwardedRef}
      className={classnames(
        'lubycon-tooltip__body',
        `lubycon-tooltip__body--arrow-${arrowDirection}`
      )}
    >
      <Text typography="caption">{children}</Text>
    </div>
  );
});

export default TooltipBody;
