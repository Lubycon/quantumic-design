import { CombineElementProps } from '../../types/utils';

type Props = Omit<
  CombineElementProps<
    'div',
    {
      width: number;
      height: number;
      backgroundStyle: string;
    }
  >,
  'role'
>;

const Circle = ({ width, height, backgroundStyle, style, ...rest }: Props) => {
  return (
    <div
      css={{
        display: 'inline-block',
        width: `${width}px`,
        height: `${height}px`,
        background: backgroundStyle,
        borderRadius: '50%',
        ...style,
      }}
      role="img"
      {...rest}
    />
  );
};

export default Circle;
