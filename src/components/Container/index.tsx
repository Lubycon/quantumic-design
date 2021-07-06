import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export default function Container({
  children,
  fluid = false,
  className,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      className={classnames(
        'lubycon-container',
        {
          'lubycon-container--fluid': fluid === true,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
