import React from 'react';
import classnames from 'classnames';
import { TableProps } from './props';
import { useTableHeadContext } from './TableHead';
import { Combine } from 'src/types/utils';

type TableCellProps = Combine<
  TableProps<HTMLTableHeaderCellElement | HTMLTableDataCellElement>,
  {
    as?: 'th' | 'td';
  }
>;

const TableCell = ({ children, align = 'left', className, as, ...props }: TableCellProps) => {
  const { variant } = useTableHeadContext();
  const isHeadCell = variant === 'head' ? 'th' : 'td';
  const Component = as ?? isHeadCell;

  return (
    <Component
      className={classnames('lubycon-table__cell', `lubycon-table--align-${align}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default TableCell;
