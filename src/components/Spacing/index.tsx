interface Props {
  size: number;
}
export const Spacing = ({ size }: Props) => {
  return (
    <div
      css={{
        width: 0,
        display: 'inline-block',
        height: size,
      }}
    />
  );
};
