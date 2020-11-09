import React, { HTMLAttributes } from 'react';

export default function Button(props: HTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <button className="button" {...props} />;
}
