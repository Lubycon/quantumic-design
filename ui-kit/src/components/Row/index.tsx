import React, { HTMLAttributes } from 'react';

export default function Row(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div>{props.children}</div>;
}
