import { forwardRef } from 'react';
import { CombineElementProps } from '../../../types/utils';
import Text from '../../../components/Text';
import useProgress from '../../../hooks/useProgress';
import { colors } from '../../../constants/colors';

const noop = (value: number) => value;

export type ProgressBarLabelPosition = 'top' | 'bottom' | 'left' | 'right';
const getLabelPositionStyle = (position: ProgressBarLabelPosition) => {
  switch (position) {
    case 'top':
      return {
        marginBottom: 4,
        order: 0,
      };
    case 'bottom':
      return {
        marginTop: 4,
        order: 2,
      };
    case 'right':
      return {
        marginLeft: 12,
        order: 2,
      };
    case 'left':
      return {
        marginRight: 12,
        order: 0,
      };
  }
};
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
      css={{
        display: 'flex',
        flexDirection: layoutDirection,
        alignItems: layoutDirection === 'row' ? 'center' : undefined,
      }}
      ref={ref}
      {...props}
    >
      {showLabel === true ? (
        <Text
          css={{
            textAlign: 'center',
            ...getLabelPositionStyle(labelPosition),
          }}
          typography="caption"
        >
          {labelFormatter(value)}
        </Text>
      ) : null}
      <div
        css={{
          display: 'flex',
          flexGrow: 1,
          order: 1,
          width: '100%',
          backgroundColor: colors.gray30,
          height: 4,
          borderRadius: 100,
          overflow: 'hidden',
        }}
      >
        <div
          css={{
            width: `${ratio}%`,
            transition: 'width 0.3s ease-out',
            backgroundColor: colors.blue50,
          }}
        />
      </div>
    </div>
  );
});

export default ProgressBar;
