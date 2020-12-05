import React, { HTMLAttributes } from 'react';

export default function Container(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div>{props.children}</div>;
}
