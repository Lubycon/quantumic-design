import React from 'react';
import classnames from 'classnames';
import { TableProps } from './props';

const TableRow = ({ children, className, ...props }: TableProps<HTMLTableRowElement>) => {
  return (
    <tr className={classnames('lubycon-table__row', className)} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
