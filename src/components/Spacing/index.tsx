interface Props {
  size: number;
}
const Spacing = ({ size }: Props) => {
  return (
    <div
      className="lubycon-spacing"
      css={{
        width: 0,
        display: 'inline-block',
        height: size,
      }}
    />
  );
};

export default Spacing;
