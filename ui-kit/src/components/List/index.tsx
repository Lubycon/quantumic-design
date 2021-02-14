import React, { HTMLAttributes, forwardRef } from 'react';
import classnames from 'classnames';

type Props = Omit<HTMLAttributes<HTMLUListElement>, 'role'>;
const List = forwardRef<HTMLUListElement, Props>(function List(
  { children, className, ...props },
  ref
) {
  return (
    <ul ref={ref} className={classnames('lubycon-list', className)} role="list" {...props}>
      {children}
    </ul>
  );
});

export default List;
export { default as ListItem } from './Item';
