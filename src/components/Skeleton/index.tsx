import React from 'react';
import { CombineElementProps } from 'src/types/utils';
import { colors } from 'src/constants/colors';
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
  backgroundColor = colors.gray30,
  foregroundColor = colors.gray20,
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
