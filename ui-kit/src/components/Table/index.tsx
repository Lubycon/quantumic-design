import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface TableProps extends Omit<HTMLAttributes<HTMLTableElement>, 'align' | 'bgcolor'> {
  align?: 'left' | 'center' | 'right';
}

const Table = ({ children }: TableProps) => {
  return <table className={classnames('lubycon-table', 'lubycon-shadow--2')}>{children}</table>;
};

export default Table;
export { default as TableHead } from './TableHead';
export { default as TableBody } from './TableBody';
export { default as TableRow } from './TableRow';
export { default as TableCell } from './TableCell';
