import React, { HTMLAttributes } from 'react';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  gutters: boolean;
}

export default function Column({ gutters = false, ...props }: ColumnProps): JSX.Element {
  return <div>{props.children}</div>;
}
