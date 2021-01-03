import React, { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size: 'fluid' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function Container({ ...props }: ContainerProps): JSX.Element {
  return <div>{props.children}</div>;
}
