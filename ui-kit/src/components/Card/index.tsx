import React, { forwardRef } from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';
import { CombineElementProps } from 'src/types/utils';

type Props = CombineElementProps<
  'div',
  {
    children: ReactNode;
  }
>;

const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={classnames('lubycon-card', 'lubycon-shadow--2', className)}
      {...props}
    >
      {children}
    </div>
  );
});

export default Card;
export { default as CardHeader } from './CardHeader';
export { default as CardContent } from './CardContent';
export { default as CardImageContent } from './CardImageContent';
export { default as CardFooter } from './CardFooter';
