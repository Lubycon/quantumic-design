import React from 'react';
import { TableProps } from './index';

const TableRow = ({ children }: TableProps) => {
  return <tr className="lubycon-table__row">{children}</tr>;
};

export default TableRow;
