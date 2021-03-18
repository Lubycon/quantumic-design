import React, { createContext } from 'react';
import { useContext } from 'react';
import { TableProps } from './index';

const TableHeadContext = createContext({ variant: '' });

const TableHead = ({ children }: TableProps) => {
  return (
    <TableHeadContext.Provider value={{ variant: 'head' }}>
      <thead className="lubycon-table__head">{children}</thead>
    </TableHeadContext.Provider>
  );
};

export function useTableHeadContext() {
  return useContext(TableHeadContext);
}

export default TableHead;
