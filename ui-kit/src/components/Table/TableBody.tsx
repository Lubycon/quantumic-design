import React from 'react';
import classnames from 'classnames';
import { TableProps } from './props';

const TableBody = ({ children, className, ...props }: TableProps<HTMLTableSectionElement>) => {
  return (
    <tbody
      className={classnames('lubycon-table__body', 'lubycon-font-weight--regular', className)}
      {...props}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
