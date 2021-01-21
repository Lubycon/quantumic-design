import { createContext } from 'react';
import { Tab } from './types';

export interface TabContextProps {
  tabs: Tab[];
  prefixCls: string;
}

export default createContext<TabContextProps>(null);
