import { forwardRef } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';
import { Text } from 'src';
import useProgress from 'src/hooks/useProgress';

const noop = (value: number) => value;

export type ProgressBarLabelPosition = 'top' | 'bottom' | 'left' | 'right';
type Props = CombineElementProps<
  'div',
  {
    min: number;
    value: number;
    valueMapper?: (value: number) => number;
    max: number;
    showLabel?: boolean;
    labelPosition?: ProgressBarLabelPosition;
    labelFormatter?: (value: number) => string;
  }
>;
const ProgressBar = forwardRef<HTMLDivElement, Props>(function ProgressBar(
  {
    min,
    value,
    valueMapper,
    max,
    className,
    labelFormatter = noop,
    showLabel,
    labelPosition = 'top',
    ...props
  },
  ref
) {
  const layoutDirection = ['top', 'bottom'].includes(labelPosition) ? 'column' : 'row';
  const ratio = useProgress({ min, value, max, valueMapper });

  return (
    <div
      ref={ref}
      className={classnames(
        'lubycon-progress-bar',
        `lubycon-progress-bar--direction-${layoutDirection}`,
        className
      )}
      {...props}
    >
      {showLabel === true ? (
        <Text
          className={classnames(
            'lubycon-progress-bar__label',
            `lubycon-progress-bar__label--position-${labelPosition}`
          )}
          typography="caption"
        >
          {labelFormatter(value)}
        </Text>
      ) : null}
      <div className="lubycon-progress-bar__bar">
        <div className="lubycon-progress-bar__bar__fill" style={{ width: `${ratio}%` }} />
      </div>
    </div>
  );
});

export default ProgressBar;
