import React, { HTMLAttributes } from 'react';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gutters: boolean;
}

type RowColsVal = 1 | 2 | 3 | 4 | 5 | 6;

export default function Row({ gutters = false, ...props }: RowProps): JSX.Element {
  return <div>{props.children}</div>;
}
