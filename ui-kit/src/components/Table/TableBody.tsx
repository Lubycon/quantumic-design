import React from 'react';
import classnames from 'classnames';
import { TableProps } from './index';

const TableBody = ({ children }: TableProps) => {
  return (
    <tbody className={classnames('lubycon-table__body', 'lubycon-font-weight--regular')}>
      {children}
    </tbody>
  );
};

export default TableBody;
