interface Props {
  size: number;
}
const Spacing = ({ size }: Props) => {
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

export default Spacing;
