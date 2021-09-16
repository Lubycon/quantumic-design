import { CombineElementProps } from '../../types/utils';
import { useAnimateGradient } from './useAnimateGradient';
import Rect from './Rect';
import Circle from './Circle';

type Props = Omit<
  CombineElementProps<
    'div',
    {
      type?: 'rect' | 'circle';
      width: number;
      height: number;
      backgroundColor?: string;
      foregroundColor?: string;
    }
  >,
  'role'
>;

const Skeleton = ({
  type = 'rect',
  width,
  height,
  backgroundColor = '#e9ecef',
  foregroundColor = '#f1f3f5',
  ...rest
}: Props) => {
  const gradientStyle = useAnimateGradient({
    foregroundColor,
    backgroundColor,
  });

  if (type === 'rect') {
    return <Rect width={width} height={height} backgroundStyle={gradientStyle} {...rest} />;
  } else {
    return <Circle width={width} height={height} backgroundStyle={gradientStyle} {...rest} />;
  }
};

export default Skeleton;

Skeleton.Circle = Circle;
Skeleton.Rect = Rect;
