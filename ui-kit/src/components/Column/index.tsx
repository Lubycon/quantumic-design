import React, { HTMLAttributes } from 'react';

export default function Column(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div>{props.children}</div>;
}
