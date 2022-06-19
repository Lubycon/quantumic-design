interface Props {
  size: number;
}
export const Spacing = ({ size }: Props) => {
  return (
    <div
      css={{
        width: 0,
        display: 'block',
        height: size,
      }}
    />
  );
};
