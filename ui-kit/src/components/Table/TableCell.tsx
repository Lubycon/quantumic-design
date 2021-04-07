import React from 'react';
import classnames from 'classnames';
import { TableProps } from './index';
import { useTableHeadContext } from './TableHead';

interface TableCellProps extends TableProps {
  as?: 'th' | 'td';
}

const TableCell = ({ children, align = 'left', as }: TableCellProps) => {
  const { variant } = useTableHeadContext();
  const isHeadCell = variant === 'head' ? 'th' : 'td';
  const Component = as ?? isHeadCell;

  return (
    <Component className={classnames('lubycon-table__cell', `lubycon-table--align-${align}`)}>
      {children}
    </Component>
  );
};

export default TableCell;
