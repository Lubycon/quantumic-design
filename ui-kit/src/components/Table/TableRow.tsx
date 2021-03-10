import React from 'react';
import classnames from 'classnames';
import { TableProps } from './index';

const TableRow = ({ children }: TableProps) => {
  return (
    <tr className={classnames('lubycon-table__row')}>
      {children}
    </tr>
  );
};

export default TableRow;
