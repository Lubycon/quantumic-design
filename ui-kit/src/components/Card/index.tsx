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
