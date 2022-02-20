export function Box({ color }: { color: string }) {
  return (
    <div
      css={{
        width: 100,
        height: 100,
        backgroundColor: color,
      }}
    />
  );
}
