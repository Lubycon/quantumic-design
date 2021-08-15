import { forwardRef, Ref } from 'react';
import classnames from 'classnames';
import Text from '../Text';
import { CombineElementProps } from '../../types/utils';

export type TooltipArrowDirection =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type Props = CombineElementProps<
  'div',
  {
    children: string;
    arrowDirection: TooltipArrowDirection;
  }
>;
const TooltipBody = forwardRef(function TooltipBody(
  { children, arrowDirection, className, ...props }: Props,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={forwardedRef}
      className={classnames(
        'lubycon-tooltip__body',
        `lubycon-tooltip__body--arrow-${arrowDirection}`,
        className
      )}
      tabIndex={-1}
      {...props}
    >
      <Text typography="caption">{children}</Text>
    </div>
  );
});

export default TooltipBody;
