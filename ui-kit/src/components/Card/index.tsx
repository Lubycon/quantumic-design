import React, { forwardRef } from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, Props>(function Card({ children }, ref) {
  return (
    <div ref={ref} className={classnames('lubycon-card', 'lubycon-shadow--2')}>
      {children}
    </div>
  );
});

export default Card;
export { default as CardHeader } from './CardHeader';
export { default as CardContent } from './CardContent';
export { default as CardImageContent } from './CardImageContent';
export { default as CardFooter } from './CardFooter';
