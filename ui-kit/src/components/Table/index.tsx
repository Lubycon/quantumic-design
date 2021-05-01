import React from 'react';
import classnames from 'classnames';
import { TableProps } from './props';

const Table = ({ children, className, ...props }: TableProps<HTMLTableElement>) => {
  return (
    <table className={classnames('lubycon-table', 'lubycon-shadow--2', className)} {...props}>
      {children}
    </table>
  );
};

export default Table;
export { default as TableHead } from './TableHead';
export { default as TableBody } from './TableBody';
export { default as TableRow } from './TableRow';
export { default as TableCell } from './TableCell';
