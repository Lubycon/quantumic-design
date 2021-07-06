import React, { createContext, useContext } from 'react';
import classnames from 'classnames';
import { TableProps } from './props';

const TableHeadContext = createContext({ variant: '' });

const TableHead = ({ children, className, ...props }: TableProps<HTMLTableSectionElement>) => {
  return (
    <TableHeadContext.Provider value={{ variant: 'head' }}>
      <thead className={classnames('lubycon-table__head', className)} {...props}>
        {children}
      </thead>
    </TableHeadContext.Provider>
  );
};

export function useTableHeadContext() {
  return useContext(TableHeadContext);
}

export default TableHead;
