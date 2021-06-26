import React from 'react';

interface Props {
  size: number;
}
const Spacing = ({ size }: Props) => {
  return <div className="lubycon-spacing" style={{ height: size }} />;
};

export default Spacing;
